@extends('layouts.app')

@section('content')
    <h1>{{ $book->title }}</h1>
    <p>Author: {{ $book->author }}</p>
    <p>Category: <a href="{{ route('categories.show', $book->category) }}">{{ $book->category->name }}</a></p>
    <p>{{ $book->description }}</p>
@endsection
