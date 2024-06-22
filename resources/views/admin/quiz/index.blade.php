@extends('layouts.admin', [
    'page_header' => 'quiz',
    'dash' => '',
    'quiz' => 'active',
    'users' => '',
    'questions' => '',
    'top_re' => '',
    'all_re' => '',
    'sett' => '',
])

@section('content')
   
    <!-- Create Modal -->
    <div id="createModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Add Category</h4>
                </div>
                {!! Form::open(['method' => 'POST', 'action' => 'TopicController@store']) !!}
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group{{ $errors->has('title') ? ' has-error' : '' }}">
                                {!! Form::label('title', 'Category Title') !!}
                                <span class="required">*</span>
                                {!! Form::text('title', null, [
                                    'class' => 'form-control',
                                    'placeholder' => 'Please Enter Category Title',
                                    'required' => 'required',
                                ]) !!}
                                <small class="text-danger">{{ $errors->first('title') }}</small>
                            </div>

                            

                            <label for="married_status">Category Price:</label>
                            {{-- <select name="married_status" id="ms" class="form-control">
                  <option value="no">Free</option>
                  <option value="yes">Paid</option>
                </select> --}}

                            <input type="checkbox" class="Categoryfp toggle-input" name="Category_price" id="toggle">
                            <label for="toggle"></label>

                          
                            <br>






                    

                        </div>
                        <div class="col-md-6">
                            <div class="form-group{{ $errors->has('description') ? ' has-error' : '' }}">
                                {!! Form::label('description', 'Description') !!}
                                {!! Form::textarea('description', null, [
                                    'class' => 'form-control',
                                    'placeholder' => 'Please Enter Category Description',
                                    'rows' => '8',
                                ]) !!}
                                <small class="text-danger">{{ $errors->first('description') }}</small>
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
    <div class="box">
        <div class="box-body table-responsive">
            <table id="topicsTable" class="table table-hover table-striped">
                <thead class="bg-primary">
                    <tr>
                        <th>#</th>
                        <th>Category Title</th>
                        <th>Description</th>
                       
                        <th>Actions</th>
                    </tr>
                </thead>
                @if (isset($topics))
                    <tbody>

                    </tbody>
                @endif
            </table>
        </div>
    </div>
   
    <div class="margin-bottom">
        <button type="button" class="btn btn-wave" style="background-color: rgb(81, 182, 240)" data-toggle="modal" data-target="#createModal">Add Category</button>
    </div>
@endsection
@section('scripts')
    <script type="text/javascript">
        $(function() {
            $('#fb_check').change(function() {
                $('#fb').val(+$(this).prop('checked'))
            })
        })



        $(document).ready(function() {

            $('.Categoryfp').change(function() {

                if ($('.Categoryfp').is(':checked')) {
                    $('#doabox').show('fast');
                } else {
                    $('#doabox').hide('fast');
                }


            });

        });



        $('#priceCheck').change(function() {
            alert('hi');
        });

        function showprice(id) {
            if ($('#toggle2' + id).is(':checked')) {
                $('#doabox2' + id).show('fast');
            } else {

                $('#doabox2' + id).hide('fast');
            }
        }


        $(function() {

            var table = $('#topicsTable').DataTable({
                processing: true,
                serverSide: true,
                responsive: true,
                autoWidth: false,
                scrollCollapse: true,


                ajax: "{{ route('topics.index') }}",
                columns: [

                    {
                        data: 'DT_RowIndex',
                        name: 'DT_RowIndex',
                        orderable: false,
                        searchable: false
                    },
                    {
                        data: 'title',
                        name: 'title'
                    },
                    {
                        data: 'description',
                        name: 'description'
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
