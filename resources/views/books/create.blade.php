@extends('layouts.app')

@section('content')
    <h1>Add New Book</h1>

    <form action="{{ route('books.store') }}" method="POST">
        @csrf

        <div>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required>
        </div>

        <div>
            <label for="author">Author:</label>
            <input type="text" id="author" name="author" required>
        </div>

        <div>
            <label for="category_id">Category:</label>
            <select id="category_id" name="category_id" required>
                @foreach ($categories as $category)
                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                @endforeach
            </select>
        </div>

        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description"></textarea>
        </div>

        <button type="submit">Add Book</button>
    </form>
@endsection
