@extends('layouts.admin', [
    'page_header' => 'Ad Management',
    'dash' => '',
    'quiz' => '',
    'users' => '',
    'questions' => '',
    'top_re' => '',
    'all_re' => '',
    'sett' => '',
])

@section('content')
   <div class="col-md-8">
    <form action="{{ route('update.ad') }}" method="POST">
        @csrf

        <div class="form-group">
            <label for="Topgooglead">Top Google Ad</label>
            <textarea name="Topgooglead" id="Topgooglead" class="form-control" rows="4">{{ $existingAds->Topgooglead }}</textarea>
        </div>
        <div class="form-group">
            <label for="Bottomgooglead">Bottom google ad</label>
            <textarea name="Bottomgooglead" id="Bottomgooglead" class="form-control" rows="4">{{ $existingAds->Bottomgooglead }}</textarea>
        </div>
        <div class="form-group">
            <label for="Leftsidegooglead">Leftside google ad google ad</label>
            <textarea name="Leftsidegooglead" id="Leftsidegooglead" class="form-control" rows="4">{{ $existingAds->Leftsidegooglead }}</textarea>
        </div>

        <div class="form-group">
            <label for="Rightsidegooglead">Right side  google ad</label>
            <textarea name="Rightsidegooglead" id="Rightsidegooglead" class="form-control" rows="4">{{ $existingAds->Rightsidegooglead }}</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
    </form>

   </div>

@endsection