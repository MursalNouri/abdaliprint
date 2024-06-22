<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Topic;

use App\Question;

class GetReportController extends Controller
{
    public function allReport(){

      $students = User::where('id', '!=', Auth::id())->get();
    
      $topics = Topic::all();
      $c_questions = Question::count();
      return view('admin.all_reports', compact('students',  'c_questions', 'topics'));

    }

    public function topReport(){

      $students = User::where('id', '!=', Auth::id())->get();
    
      $topics = Topic::all();
      $c_questions = Question::count();
      return view('admin.top_report', compact('students',  'c_questions', 'topics'));

    }

    public function show($id) {
      return view('admin');
    }
}
