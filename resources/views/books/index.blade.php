@extends('layouts.app')

@section('content')
    <h1>Books</h1>
    <a href="{{ route('books.create') }}">Add New Book</a>
    <ul>
        @foreach ($books as $book)
            <li><a href="{{ route('books.show', $book) }}">{{ $book->title }}</a> ({{ $book->category->name }})</li>
        @endforeach
    </ul>
@endsection
