@extends('layouts.app')

@section('head')
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}">
    <!-- Google Font -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
@endsection

@section('top_bar')
    <nav class="navbar navbar-default navbar-static-top" style="background-color: rgb(119, 176, 240)">
        <div class="logo-main-block">
            <div class="container">
                @if ($setting)
                    <a href="{{ url('/') }}" title="{{ $setting->welcome_txt }}">
                        <img src="{{ asset('/images/logo/' . $setting->logo) }}" class="img-responsive"
                            alt="{{ $setting->welcome_txt }}">
                    </a>
                @endif
            </div>
        </div>
        <div class="nav-bar" style="background-color: blue">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="navbar-header">
                            <!-- Branding Image -->
                            @if ($setting)
                                <a title="Quick Quiz Home" class="tt" href="{{ url('/') }}">
                                    <h4 class="heading">{{ $setting->welcome_txt }}</h4>
                                </a>
                            @endif
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="collapse navbar-collapse" id="app-navbar-collapse">
                            <!-- Right Side Of Navbar -->
                            <ul class="nav navbar-nav navbar-right">
                                <!-- Authentication Links -->
                                @guest
                                    <li><a href="{{ route('login') }}" title="Login">Login</a></li>
                                    <li><a href="{{ route('register') }}" title="Register">Register</a></li>
                                @else
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                            aria-expanded="false" aria-haspopup="true" style="background-color: blue">
                                            {{ Auth::user()->name }} <span class="caret"></span>
                                        </a>
                                        <ul class="dropdown-menu">
                                            @if ($auth->role == 'A')
                                                <li><a href="{{ url('/admin') }}" title="Dashboard">Dashboard</a></li>
                                            @elseif ($auth->role == 'S')
                                                <li><a href="{{ url('/admin/my_reports') }}" title="Dashboard">Dashboard</a>
                                                </li>
                                            @endif
                                            <li>
                                                <a href="{{ route('logout') }}"
                                                    onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
                                                    Logout
                                                </a>
                                                <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                                    style="display: none;">
                                                    {{ csrf_field() }}
                                                </form>
                                            </li>
                                        </ul>
                                    </li>
                                @endguest
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
@endsection

@section('content')
    <div class="container">
        @if ($auth)
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="home-main-block">

                        <button title="Print Report" class="print_btn pull-right btn btn-md btn-default">
                            <i class="fa fa-print"></i>
                        </button>

                        
                        <div class="question-block">
                            <h6 class="text-center main-block-heading"
                                style="background-color: rgb(244, 127, 137); color:azure; font-size:4.5rem">
                                {{ $topic->title }} Result</h6>
                            <table class="table table-bordered result-table">
                                <thead>
                                    <tr>
                                        <th>Total Questions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ $count_questions }}</td>

                                        </td>

                                        {{-- it is potins secssion --}}

                                        


                                    </tr>
                                </tbody>
                                

                            </table>
                            <h2 class="text-center text-primary "><b>Thank You!</b></h2>
                        </div>
                    </div>
                </div>
            </div>


        @endif
    </div>
@endsection

@section('scripts')
    <script>
        $(document).ready(function() {
            history.pushState(null, null, document.URL);
            window.addEventListener('popstate', function() {
                history.pushState(null, null, document.URL);
            });
        });
    </script>

    <script>
        $('.print_btn').click(function() {
            window.print();
        });
    </script>
@endsection
