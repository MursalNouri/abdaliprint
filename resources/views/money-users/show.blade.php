@extends('layouts.admin', [
    'page_header' => 'Admin Dashboard',
    'dash' => 'active',
    'quiz' => '',
    'users' => '',
    'questions' => '',
    'top_re' => '',
    'all_re' => '',
    'sett' => '',
])


@section('content')

<h1>Users who received money</h1>
{{-- 
<p>Start Date: {{ $startDate }}</p>
<p>End Date: {{ $endDate }}</p> --}}

@foreach ($users as $user)
    <p> The {{ $user->name }}</p>
    <br>
    <div>
       Current money is {{ $user->current_money }}
    </div>
@endforeach

@endsection







