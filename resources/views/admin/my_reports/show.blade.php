@extends('layouts.admin', [
  'page_header' => "My Report / {$topic->title}",
  'dash' => '',
  'users' => '',
  'questions' => '',
  'answers' => '',
  'top_re' => '',
  'all_re' => '',
  'sett' => ''
])

@section('content')
  <div class="content-block box">
    <div class="box-body table-responsive">
      <table id="example1" class="table table-striped table-hover">
        <thead class="info">
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Correct Answer</th>
            <th>My Answer</th>
            <th>Answer Explanation</th>
            
          </tr>
        </thead>
       
      </table>
    </div>
  </div>
@endsection
