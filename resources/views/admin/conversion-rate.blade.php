@extends('layouts.admin', [
  'page_header' => 'Payment History',
  'dash' => '',
  'quiz' => '',
  'users' => '',
  'questions' => '',
  'top_re' => '',
  'all_re' => '',
  'sett' => '',
  'pay' => 'active'
])

@section('content')
<!-- resources/views/admin/conversion-rate.blade.php -->

<form method="POST" action="{{ route('admin.conversion-rate.update') }}">
    @csrf
    <div class="form-group" style="width: 50%">
        <label for="conversion_rate">Conversion Rate:</label>
        <input type="text"  name="conversion_rate" id="conversion_rate" class="form-control" value="{{ $conversionRate }}" required>
    </div>
    <button type="submit" class="btn btn-primary">Update Conversion Rate</button>
</form>

<div>

</div>
@endsection
