@extends('layouts.admin', [
  'page_header' => 'Top Students Report By Topic Wise',
  'dash' => '',
  'quiz' => '',
  'users' => '',
  'questions' => '',
  'top_re' => 'active',
  'all_re' => '',
  'sett' => ''
])

@section('content')
  <div class="row">
    @if ($topics)
      @foreach ($topics as $key => $topic)
        <div class="col-md-4">
          <div class="quiz-card">
            <h3 class="quiz-name">{{$topic->title}}</h3>
            <p title="{{$topic->description}}">
              {{str_limit($topic->description, 120)}}
            </p>
            <div class="row">
              <div class="col-xs-6 pad-0">
                <ul class="topic-detail">
                  <li>Total Questions <i class="fa fa-long-arrow-right"></i></li>
                  <li>Total Time <i class="fa fa-long-arrow-right"></i></li>
                </ul>
              </div>
              <div class="col-xs-6">
                <ul class="topic-detail right">
                  <li>
                    @php
                        $qu_count = 0;
                    @endphp
                    @foreach($questions as $question)
                      @if($question->topic_id == $topic->id)
                        @php 
                          $qu_count++;
                        @endphp
                      @endif
                    @endforeach
                    {{$qu_count}}
                  </li>
                
                </ul>
              </div>
            </div>
            <a href="{{route('top_report.show', $topic->id)}}" class="btn btn-wave">Show Report</a>
          </div>
        </div>
      @endforeach
    @endif
  </div>
@endsection
