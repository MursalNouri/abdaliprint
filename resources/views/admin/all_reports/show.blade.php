@extends('layouts.admin', [
    'page_header' => "Top Students / {$topic->title}",
    'dash' => '',
    'quiz' => '',
    'users' => '',
    'questions' => '',
    'top_re' => '',
    'all_re' => 'active',
    'sett' => '',
])

@section('content')
    <div class="content-block box">
        <div class="box-body table-responsive">
            <table id="topTable" class="table table-striped">
                <thead class="bg-primary">
                    <tr>
                        <th>#</th>
                        <th>Student Name</th>
                        <th>Mobile </th>
                        <th>Topic</th>
                        <th>Marks you Got</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>
        </div>
    </div>
@endsection
