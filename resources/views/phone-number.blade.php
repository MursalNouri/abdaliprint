

@extends('layouts.admin', [
    'page_header' => 'Phone Number for paymet',
    'dash' => '',
    'quiz' => '',
    'users' => '',
    'questions' => '',
    'top_re' => '',
    'all_re' => '',
    'sett' => '',
])

<!-- resources/views/some-view.blade.php -->


@section('content')
<div style="margin-left: 20%">
   {{-- {{ message }} --}}
    <form method="POST" action="{{ route('user.send-card') }}">
        @csrf
       
        <div class="col-md-4 col-sm-10" style="background-color: rgb(210, 213, 216); margin:1%; padding:5%">
            <strong>
                @if ($adManagements)
                    @foreach ($adManagements as $adManagement)
                        {{ $adManagement->Topgooglead }}
                    @endforeach
                @endif

            </strong>
        </div>
        <div class="form-group" style="width: 40%">
            <label for="mobile">Your Phone Number:</label>
            <input type="text" name="mobile" id="mobile" class="form-control" required>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-4 col-sm-10" style="background-color: rgb(210, 213, 216); margin:1%; padding:5%">
            <strong>
                @if ($adManagements)
                    @foreach ($adManagements as $adManagement)
                        {{ $adManagement->Topgooglead }}
                    @endforeach
                @endif

            </strong>
        </div>
        <div class="form-group" style="width: 40%">
            <label for="amount">How much Money do you want:</label>
            <input type="tex" name="amount" id="amount" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Send Card</button>
    </form>
    <div class="col-md-1"></div><div class="col-md-1"></div>
        <div class="col-md-4 col-sm-10" style="background-color: rgb(210, 213, 216); margin:1%; padding:5%">
            <strong>
                @if ($adManagements)
                    @foreach ($adManagements as $adManagement)
                        {{ $adManagement->Topgooglead }}
                    @endforeach
                @endif

            </strong>
        </div>
       
   
</div>
@endsection