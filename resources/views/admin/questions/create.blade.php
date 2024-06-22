@extends('layouts.app')

@section('content')
<div class="container">
    <h1>Add New Book</h1>
    <form action="{{ route('questions.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="form-group">
            <label for="topic_id">Topic</label>
            <select name="topic_id" id="topic_id" class="form-control">
                @foreach($topics as $topic)
                    <option value="{{ $topic->id }}">{{ $topic->name }}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group">
            <label for="question">Book</label>
            <textarea name="question" id="question" class="form-control"></textarea>
        </div>
        <div class="form-group">
            <label for="question_img">Book Image</label>
            <input type="file" name="question_img" id="question_img" class="form-control">
        </div>
        <div class="form-group">
            <label for="question_video_link">Book Video Link</label>
            <input type="url" name="question_video_link" id="question_video_link" class="form-control">
        </div>
        <div class="form-group">
            <label for="question_audio">Book Audio</label>
            <input type="file" name="question_audio" id="question_audio" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Add Book</button>
    </form>
</div>
@endsection
