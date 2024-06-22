@extends('layouts.admin', [
    'page_header' => 'Students Report By Topic Wise',
    'dash' => '',
    'quiz' => '',
    'users' => '',
    'questions' => '',
    'top_re' => '',
    'all_re' => 'active',
    'sett' => '',
])

@section('content')
    <div class="row ">
        @if ($topics)
            @foreach ($topics as $topic)
                <div class="col-md-4">
                    <div class="quiz-card " style="background-color: royalblue;">
                        <h3 class="quiz-name">{{ $topic->title }}</h3>
                        <p title="{{ $topic->description }}">
                            {{ str_limit($topic->description, 120) }}
                        </p>
                        <div class="row">
                            <div class="col-xs-6 pad-0">
                                <ul class="topic-detail">

                                    <li>Total Questions <i class="fa fa-long-arrow-right"></i></li>
                                    <li>Time <i class="fa fa-long-arrow-right"></i></li>
                                    <li><i class="fa fa-long-arrow-right"></i></li>


                                </ul>
                            </div>
                            <div class="col-xs-6">
                                <ul class="topic-detail right">

                                  
                                  



                                </ul>
                            </div>
                        </div>

                      

                    </div>
                </div>
            @endforeach
        @endif

    </div>

@endsection
