@extends('layouts.admin', [
    'page_header' => "Books / {$topic->title} ",
    'dash' => '',
    'quiz' => '',
    'users' => '',
    'questions' => 'active',
    'top_re' => '',
    'all_re' => '',
    'sett' => '',
])

@section('content')
    <!-- Buttons -->
    <div class="margin-bottom">
        <!-- Add Question -->
        <button type="button" class="btn btn-wave" data-toggle="modal" data-target="#createModal" style="border-color: rgb(0, 166, 255)0, 119, 255)">
            {{ __('Add Book') }}
        </button>

        <!-- Import Question -->
        <button type="button" class="btn btn-wave" data-toggle="modal" data-target="#importQuestions">
            {{ __('Import Books') }}
        </button>

        <!-- Back Button -->
        <a href="{{ route('questions.index') }}" class="btn btn-wave pull-right">
            <i class="fa fa-arrow-left"></i>
            {{ __('Back') }}
        </a>
    </div>

    <!-- Add Question Modal -->
    <div id="createModal" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title" style="border-color: rgb(0, 166, 255)0, 119, 255)">Add Book</h4>
                </div>
                {!! Form::open(['method' => 'POST', 'action' => 'QuestionsController@store', 'files' => true]) !!}
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4">
                            {!! Form::hidden('topic_id', $topic->id) !!}
                            <div class="form-group{{ $errors->has('question') ? ' has-error' : '' }}">
                                {!! Form::label('question', 'Book') !!}
                                <span class="required">*</span>
                                {!! Form::textarea('question', null, [
                                    'class' => 'form-control',
                                    'placeholder' => 'Please Enter Book',
                                    'rows' => '8',
                                    'required' => 'required',
                                ]) !!}
                                <small class="text-danger">{{ $errors->first('question') }}</small>
                            </div>
                           
                            
                        </div>
                       
                        <div class="col-md-4">
                            <div class="form-group{{ $errors->has('code_snippet') ? ' has-error' : '' }}">
                                {!! Form::label('code_snippet', 'Code Snippets') !!}
                                {!! Form::textarea('code_snippet', null, [
                                    'class' => 'form-control',
                                    'placeholder' => 'Please Enter Code Snippets',
                                    'rows' => '5',
                                ]) !!}
                                <small class="text-danger">{{ $errors->first('code_snippet') }}</small>
                            </div>
                            
                        </div>
                        <div class="col-md-12">
                            <div class="extras-block">
                                <h4 class="extras-heading">Video And Image For Book</h4>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div
                                            class="form-group{{ $errors->has('question_video_link') ? ' has-error' : '' }}">
                                            {!! Form::label('question_video_link', 'Add Video To Book') !!}
                                            {!! Form::text('question_video_link', null, [
                                                'class' => 'form-control',
                                                'placeholder' => 'https://myvideolink.com/embed/..',
                                            ]) !!}
                                            <small class="text-danger">{{ $errors->first('question_video_link') }}</small>
                                            <p class="help">YouTube And Vimeo Video Support (Only Embed Code Link)</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group{{ $errors->has('question_img') ? ' has-error' : '' }}">
                                            {!! Form::label('question_img', 'Add Image To Book') !!}
                                            {!! Form::file('question_img') !!}
                                            <small class="text-danger">{{ $errors->first('question_img') }}</small>
                                            <p class="help">Please Choose Only .JPG, .JPEG and .PNG</p>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="question_audio">Add Audio Explanation:</label>
                                        <div class="form-group{{ $errors->has('question_audio') ? ' has-error' : '' }}">
                                            <input type="text" class="form-control" value="" name="question_audio"
                                                placeholder="http://">
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="btn-group pull-right">
                        {!! Form::reset('Reset', ['class' => 'btn btn-default']) !!}
                        {!! Form::submit('Add', ['class' => 'btn btn-wave']) !!}
                    </div>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>
    <!-- Add Question Modal End -->

    <!-- Import Questions Modal -->
    <div id="importQuestions" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Import Books (Excel File With Exact Header of DataBase Field)</h4>
                </div>

                <!-- Modal to import question -->
                {!! Form::open(['method' => 'POST', 'action' => 'QuestionsController@importExcelToDB', 'files' => true]) !!}
                <div class="modal-body">
                    {!! Form::hidden('topic_id', $topic->id) !!}
                    <div class="form-group{{ $errors->has('question_file') ? ' has-error' : '' }}">
                        {!! Form::label('question_file', 'Import Book Via Excel File', ['class' => 'col-sm-3 control-label']) !!}
                        <span class="required">*</span>
                        <div class="col-sm-9">
                            {!! Form::file('question_file', ['required' => 'required']) !!}
                            <p class="help-block">Only Excel File (.CSV and .XLS)</p>
                            <small class="text-danger">{{ $errors->first('question_file') }}</small>
                        </div>
                    </div>
                </div>

                <!-- Instructions for excel sheet -->
                <div class="box box-danger">
                    <div class="box-body">
                        <p><b>{{ __('Follow the instructions carefully before importing the file') }}.</b></p>
                        <p>{{ __('The columns of the file should be in the following order.') }}</p>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>{{ __('No') }}</th>
                                    <th>{{ __('Column Name') }}</th>
                                    <th>{{ __('Description') }}</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><b>{{ __('topic_id') }}</b> <span class="text-danger">*</span></td>
                                    <td>{{ __('Enter the topic_id:') }} {{ $topic->id }} {{ __('(Required)') }}</td>


                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td><b>{{ __('question') }}</b> <span class="text-danger">*</span> </td>
                                    <td>{{ __('Enter Book') }} {{ __('(Required)') }}</td>
                                </tr>
                              

                               

                              

                                <tr>
                                    <td>8</td>
                                    <td><b>{{ __('code_snippet') }}</b></td>
                                    <td>{{ __('Enter code snippet if any') }} {{ __('(Optional can be left empty)') }}
                                    </td>
                                </tr>

                              

                                <tr>
                                    <td>10</td>
                                    <td><b>{{ __('question_video_link') }}</b></td>
                                    <td>{{ __('Attach Book video link') }} {{ __('(Optional can be left empty)') }}
                                    </td>
                                </tr>

                                <tr>
                                    <td>10</td>
                                    <td><b>{{ __('question_audio') }}</b></td>
                                    <td>{{ __('Attach Book audio link') }} {{ __('(Optional can be left empty)') }}
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- Instructions end -->

                <!-- Reset and Import button -->
                <div class="modal-footer">
                    <div class="btn-group pull-right">
                        {!! Form::reset('Reset', ['class' => 'btn btn-default']) !!}
                        {!! Form::submit('Import', ['class' => 'btn btn-wave']) !!}
                    </div>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
    </div>

    <!-- Index Table -->
    <div class="box">
        <div class="box-body table-responsive">
            <table id="questionsTable" class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Books</th>
                        <th>Book-Img</th>
                        <th>Book_video_link</th>
                       <th>Book_audio</th>
                       <th>Actions</th>
                    </tr>
                </thead>
                @if ($questions)
                    <tbody>

                    </tbody>
                @endif
            </table>
        </div>
    </div>


    
@endsection

@section('scripts')
    <script>
        $(function() {

            var table = $('#questionsTable').DataTable({
                processing: true,
                serverSide: true,
                responsive: true,
                autoWidth: false,
                scrollCollapse: true,


                ajax: "{{ route('questions.show', $topic->id) }}",
                columns: [

                    {
                        data: 'DT_RowIndex',
                        name: 'DT_RowIndex',
                        orderable: false,
                        searchable: false
                    },
                    {
                        data: 'question',
                        name: 'question'
                    },
                    {
                        data: 'question_img',
                        name: 'question_img'
                    },
                    {
                        data: 'question_video_link',
                        name: 'question_video_link'
                    },
                    {
                        data: 'question_audio',
                        name: 'question_audio'
                    },

                   
                    {
                        data: 'action',
                        name: 'action',
                        searchable: false
                    }

                ],
                dom: 'lBfrtip',
                buttons: [
                    'csv', 'excel', 'pdf', 'print'
                ],
                order: [
                    [0, 'desc']
                ]
            });

        });
    </script>
@endsection
