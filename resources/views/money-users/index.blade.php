<!-- resources/views/money-users/index.blade.php -->
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
<!-- resources/views/money-users/index.blade.php -->


@section('content')
    <div class="container">
        <h1>Users who have received money</h1>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Amount Received</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($users as $user)
                    <tr>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->paid_money }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <a href="{{ route('money-paid-users.show') }}" class="btn btn-success">Paid Users in 24 past hours</a>

@endsection