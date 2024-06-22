@extends('layouts.admin', [
    'page_header' => 'Your result in diffirent categories ',
    'dash' => '',
    'quiz' => '',
    'users' => '',
    'questions' => '',
    'top_re' => '',
    'all_re' => '',
    'sett' => '',
])

@section('content')

    <a href="{{ route('WinnerUsers') }}" class="btn btn-success" style="margin: 2%">Your Total Point</a>
 <div class="row">
    <div class="col-md-8" style="margin-bottom: 10%">

        @if ($topics)
            @php
                $userTotalPoints = 0;
            @endphp

            @foreach ($topics as $topic)
                @php
                    $topicPoints = 0;
                @endphp

                <div class="col-md-6" style="background-color: rgb(197, 229, 249);">

                    <div class="quiz-card" style="background-color: royalblue; color:azure; ">
                        <h3 class="quiz-name">{{ $topic->title }}</h3>
                        <p title="{{ $topic->description }}">
                            {{ str_limit($topic->description, 120) }}
                        </p>
                        <hr>
                        <div class="row">
                            <div class="col-xs-6 pad-0">
                                <ul class="topic-detail">

                                    <li>Total Questions <i class="fa fa-long-arrow-right"></i></li>
                                    <li>Time <i class="fa fa-long-arrow-right"></i></li>
                                    <li><i class="fa fa-long-arrow-right"></i></li>
                                   
                                    <li>Corrects<i class="fa fa-long-arrow-right"></i></li>

                                </ul>
                            </div>
                            <div class="col-xs-6">
                                <ul class="topic-detail right">

                                  
                                  

                                </ul>
                            </div>
                        </div>

                        @if ($topic->show_ans == 1)
                            <a href="{{ route('my_report_show', $topic->id) }}" class="btn btn-wave">Show Report</a>
                        @endif

                    </div>
                </div>

            @endforeach
        @endif

    </div>
    <div class="col-md-3 border border-success p-2 mb-2 border-opacity-75" style="margin-bottom: 10%; height:300px; background-color:rgba(206, 209, 209, 0.825)">
        <strong>
            @if ($adManagements)
                @foreach ($adManagements as $adManagement)
                    {{ $adManagement->Topgooglead }}
                @endforeach
            @endif

        </strong>
    </div>
    <div class="col-md-3 border border-success p-2 mb-2 border-opacity-75" style="margin-bottom: 10%; height:300px; background-color:rgba(206, 209, 209, 0.825)">
        <strong>
            @if ($adManagements)
                @foreach ($adManagements as $adManagement)
                    {{ $adManagement->Leftsidegooglead }}
                @endforeach
            @endif

        </strong>
    </div>

 </div>
 <div class="col-md-4 border border-success p-2 mb-2 border-opacity-75" style="margin-bottom: 10%; height:300px; background-color:rgba(206, 209, 209, 0.825)">
    <strong>
        @if ($adManagements)
            @foreach ($adManagements as $adManagement)
                {{ $adManagement->Leftsidegooglead }}
            @endforeach
        @endif

    </strong>
</div>
<div class="col-md-3 border border-success p-2 mb-2 border-opacity-75" style="margin-bottom: 10%; height:300px; background-color:rgba(240, 246, 249, 0.825)">
   
</div>
<div class="col-md-4 border border-success p-2 mb-2 border-opacity-75" style="margin-bottom: 10%; height:300px; background-color:rgba(216, 216, 216, 0.825)">
    <strong>
        @if ($adManagements)
            @foreach ($adManagements as $adManagement)
                {{ $adManagement->Leftsidegooglead }}
            @endforeach
        @endif

    </strong>
</div>
   
   

@endsection
