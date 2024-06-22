@extends('layouts.admin', [
    'page_header' => 'Book',
    'dash' => '',
    'quiz' => '',
    'users' => '',
    'questions' => 'active',
    'top_re' => '',
    'all_re' => '',
    'sett' => '',
])




@section('content')
<div class="container">
    <h2>Edit Book</h2>

    <form action="{{ route('questions.update', $question->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <div class="form-group">
            <label for="question">Book</label>
            <input type="text" name="question" class="form-control" value="{{ old('question', $question->question) }}" required>
        </div>

        <div class="form-group">
            <label for="question_img">Book Image</label>
            @if($question->question_img)
                <div>
                    <img src="{{ asset('images/questions/' . $question->question_img) }}" alt="Question Image" style="width:100px; height:auto;">
                </div>
            @endif
            <input type="file" name="question_img" class="form-control">
        </div>

        <div class="form-group">
            <label for="question_video_link">Book Video Link</label>
            <input type="text" name="question_video_link" class="form-control" value="{{ old('question_video_link', $question->question_video_link) }}">
        </div>

        <div class="form-group">
            <label for="question_audio">Book Audio</label>
            @if($question->question_audio)
                <div>
                    <audio controls>
                        <source src="{{ asset('audios/questions/' . $question->question_audio) }}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            @endif
            <input type="file" name="question_audio" class="form-control">
        </div>

        <div class="form-group">
            <label for="topic">Topic</label>
            <input type="text" name="topic" class="form-control" value="{{ $topic->name }}" disabled>
        </div>

        <button type="submit" class="btn btn-primary">Update</button>
    </form>
</div>
@endsection
