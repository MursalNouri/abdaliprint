@extends('layouts.admin', [
    'page_header' => 'Book By Book category wise',
    'dash' => '',
    'quiz' => '',
    'users' => '',
    'questions' => 'active',
    'top_re' => '',
    'all_re' => '',
    'sett' => '',
])

@section('content')
    <div class="row">
        @if ($topics)
            @foreach ($topics as $key => $topic)
                <div class="col-md-3 p-3" style="background-color: rgb(221, 234, 243); padding:30px;">
                    <div class="quiz-card card" style="background-color: rgb(49, 128, 247); color:azure;border-top:0">
                        <h3 class="quiz-name card-header">{{ $topic->title }}</h3>
                        <hr class="">

                        <p title="{{ $topic->description }}">
                            {{ str_limit($topic->description, 120) }}
                        </p>
                        <div class="row">
                            <div class="col-xs-4 pad-0">
                                <ul class="topic-detail">
                                    <li>Total Books <i class="fa fa-long-arrow-right"></i></li>
                                    <li>Total Time <i class="fa fa-long-arrow-right"></i></li>
                                </ul>
                            </div>
                            <div class="col-xs-6">
                                <ul class="topic-detail right">
                                    <li>
                                        @php
                                            $qu_count = 0;
                                        @endphp
                                        @foreach ($questions as $question)
                                            @if ($question->topic_id == $topic->id)
                                                @php
                                                    $qu_count++;
                                                @endphp
                                            @endif
                                        @endforeach

                                        {{ $qu_count }}
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                        <a href="{{ route('questions.show', $topic->id) }}" class="btn btn-wave" style="background-color: rgb(0, 255, 115)"><b>Add Book</b></a>
                    </div>
                </div>
            @endforeach
        @endif
    </div>
@endsection
