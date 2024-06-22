@extends('layouts.auth')

@section('head')


<link href="{{ asset('css/app.css') }}" rel="stylesheet">

window.Laravel = <?php echo json_encode([
  'csrfToken' => csrf_token(),
]); ?>
</script>
@endsection

@section('content')

<div class="container  ">
  <div class="login-page " style="background-color: rgb(198, 239, 247);">

    <div class="logo">
      @if ($setting)
      <a href="{{url('/')}}" title="{{$setting->welcome_txt}}">
      <a href="{{ url('/') }}" title="{{ $setting->welcome_txt }}">
        <img src="{{ asset('/images/logo/' . $setting->logo) }}" class="img-responsive login-logo rounded-circle"
        alt="{{ $setting->welcome_txt }}" style="max-width: 100px;">
      </a> </a>
    @endif
    </div>

    <h3 class="user-register-heading text-center">Register</h3>
    <form class="form login-form" method="POST" action="{{ route('register') }}">
      {{ csrf_field() }}

      <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
        {!! Form::label('name', 'Name') !!}
        {!! Form::text('name', null, ['class' => 'form-control', 'required' => 'required', 'placeholder' => 'Enter your name']) !!}
        <small class="text-danger">{{ $errors->first('name') }}</small>
      </div>

      <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
        {!! Form::label('email', 'Email address') !!}
        {!! Form::email('email', null, ['class' => 'form-control', 'placeholder' => 'eg: foo@bar.com']) !!}
        <small class="text-danger">{{ $errors->first('email') }}</small>
      </div>

      <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
        {!! Form::label('password', 'Password') !!}
        {!! Form::password('password', ['class' => 'form-control', 'required' => 'required', 'placeholder' => 'Enter Password']) !!}
        <small class="text-danger" style="color: red; background-color: #FFF;">{{ $errors->first('password') }}</small>
      </div>

      <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
        {!! Form::label('password_confirmation', 'Confirm Password') !!}
        {!! Form::password('password_confirmation', ['class' => 'form-control', 'required' => 'required', 'placeholder' => 'Confirm Password']) !!}
        <small class="text-danger">{{ $errors->first('password_confirmation') }}</small>
      </div>

      <div class="mr-t-20">
        <button type="submit" class="btn  btn-wave" style="background-color: #379bd9">Create Account</button>
        <a href="{{url('/login')}}" class="text-center btn-block" title="Already Have Account">Already Have Account
          ?</a>
      </div>
    </form>
  </div>
</div>
@endsection