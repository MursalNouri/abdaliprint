@extends('layouts.app')

@section('content')
    <h1>{{ $category->name }}</h1>
    <ul>
        @foreach ($books as $book)
            <li><a href="{{ route('books.show', $book) }}">{{ $book->title }}</a></li>
        @endforeach
    </ul>
@endsection
