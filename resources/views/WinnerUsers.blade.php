@extends('layouts.admin', [
    'page_header' => '',
    'dash' => '',
    'quiz' => '',
    'users' => '',
    'questions' => '',
    'top_re' => '',
    'all_re' => '',
    'sett' => '',
])



@section('content')
    <div class="col-md-12 border-rounded" style="background-color: rgb(227, 233, 237); margin-bottom:8%">
        @if ($topics)
            @php
                $userTotalPoints = 0;
            @endphp

            @foreach ($topics as $topic)
                @php
                    $topicPoints = 0;
                @endphp

                <div class="col-md-3 col-sm-12 border-circle " style="background-color: rgb(231, 243, 244);">


                    <div class="row">

                        <div class="col-xs-4">
                            @php
                                $sumpoint = 0;
                                $data = 0;
                                $correct = 0;
                                $user_point = 0;
                                $store = 0;
                            @endphp

                            @foreach ($students as $student)
                                @foreach ($answers as $answer)
                                    @foreach ($questions as $question)
                                        @if (
                                            $question->topic_id == $topic->id &&
                                                $answer->user_id == $student->id &&
                                                $answer->topic_id == $topic->id &&
                                                $answer->answer == $answer->user_answer &&
                                                $answer->question_id == $question->id)
                                            @php
                                                $data = $question->point;
                                                $sumpoint = $sumpoint + $data;
                                                // $question->user_point = $data;
                                                // $store=$question->user_point;
                                                
                                                $topicPoints += $question->point;
                                                $question->users_point = $data;
                                                $correct++;
                                                
                                                
                                            @endphp

                                            {{-- {{ $store }} --}}
                                        @endif
                                    @endforeach
                                @endforeach
                            @endforeach
                            @php
                                $userTotalPoints += $topicPoints;
                            @endphp
                            {{-- {{ $topicPoints }} --}}

                            <h3>{{ $topic->title }}</h3>
                            <p class="text-success fw-bold"><b>
                                    Point: <span style="background-color: rgb(65, 225, 161); color:red;">
                                        {{ $topicPoints }}</span> </b></p>
                        </div>
                    </div>
                </div>
            @endforeach
        @endif

        
        <div class="col-md-12 col-sm-10 ">
            <div class="col-md-12" style="margin-bottom: 5%">
                <div class="text-danger" style="background-color: rgb(7, 14, 51); color: rgb(150, 245, 197); padding: 7%; font-size:2rem">
                    <b>
                        {{-- {{ $userTotalPoints }}Total Points --}}
                        <strong class="col-md-3"> Requested_money->{{ $student->requested_money }} <br> </strong>
                         <strong class="col-md-3">Paid_money->{{ $student->paid_money }} <br></strong>
                         <strong class="col-md-3">Current_money->{{ $student->current_money }}<br></strong>
                        <div class="col-md-3 col-sm-12">
                            @php
                                $points = $userTotalPoints; // Your points value
                                
                                // Retrieve the conversion rate from the configuration table
                                $conversionRate = \App\ConversionRate::latest()->value('conversion_rate');
                                
                                $usd = $points / $conversionRate; // Convert points to USD based on the conversion rate
                                
                                $money = $usd; // moneyt the amount as a string
                            @endphp

                            Earned_money->{{ $money . ' AF' }}
                        </div>

                        @php
                            $student->user_point = $userTotalPoints;
                            $student->earned_amount = $money;
                            $student->current_money = $money;
                            $student->save();
                        @endphp
                    </b>
                   
                </div>
            </div>
        </div>


    </div>
    <div class="row">
        <div class="col-md-9 col-sm-10 " style="background-color: rgb(210, 213, 216); margin:3%; padding:7%">
            
                <strong>
                    @if ($adManagements)
                        @foreach ($adManagements as $adManagement)
                            {{ $adManagement->Topgooglead }}
                        @endforeach
                    @endif
        
                </strong>
              
        </div>
    </div>

    <div class="row">

        <div class="col-md-6 col-sm-9" ">
            <div class="card-header ">
                <div class="col-md-10 col-sm-8  " style=" padding:5%">
                    <div class="card ">
                        <div class="card-header ">
                            <img src="{{ asset('images/user/new-credit-card1.webp') }}" alt="Card Image"
                                class="card-img-top" style="height: 50vh; width:100ch">
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    @if ($money >= 20)
                                        <a href="{{ route('phone_number_page') }}" class="btn btn-success">Request
                                            Cardet</a>
                                    @else
                                        <span class="btn btn-success disabled">Request Cardet</span>
                                        <p>You need to have at least <span class="text-danger">50 AF</span> points to
                                            Request
                                            Cardet
                                        </p>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </b>
            </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-4 col-sm-9" style="background-color: rgb(210, 213, 216); margin:1%; padding:5%">
            <strong>
                @if ($adManagements)
                    @foreach ($adManagements as $adManagement)
                        {{ $adManagement->Topgooglead }}
                    @endforeach
                @endif

            </strong>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 col-sm-10" >
            <div class="card-header ">

                <div class="col-md-12  " style=" padding:5%">
                    <div class="card  p-4">
                        <div class="card-header ">
                            <img src="{{ asset('images/user/money2.avif') }}" alt="Card Image" class="card-img-top"
                                style="height: 50vh; width:100ch">
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    @if ($money >= 500)
                                        <a href="{{ route('phone_number_page') }}" class="btn btn-primary">Request Money</a>
                                    @else
                                        <span class="btn btn-primary disabled">Request Money</span>
                                        <p>You need to have at least <span class="text-danger">500 AF</span>to Request Money
                                        </p>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </b>
            </div>
        </div>

        <div class="col-md-1"></div>
        <div class="col-md-4 col-sm-10" style="background-color: rgb(210, 213, 216); margin:1%; padding:5%">
            <strong>
                @if ($adManagements)
                    @foreach ($adManagements as $adManagement)
                        {{ $adManagement->Topgooglead }}
                    @endforeach
                @endif

            </strong>
        </div>
    </div>

@endsection
