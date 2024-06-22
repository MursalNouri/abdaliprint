<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Topic;
use App\Question;
use App\User;
use App\AdManagement;


class MyReportsController extends Controller
{
  public function index()
  {
    if (Auth::check()) {
      $students = User::where('id', '=', Auth::id())->get();
      $topics = Topic::all();
      $questions = Question::all();
      $adManagements = AdManagement::all();


      $sump = 0;
      $correct = 0;
      foreach ($topics as $topic) {
        foreach ($students as $student) {
          
            foreach ($questions as $question) {
            
          }
        }
      }
    } else {
      return redirect('/');
    }
  }

  public function show($id)
  {

    if (Auth::check()) {

      $auth = Auth::user();
      $topic = Topic::findOrFail($id);
      $total_marks = Question::where('topic_id', $topic->id)->get()->count();
      $adManagement = AdManagement::findOrFail($id);


      return view('admin.my_reports.show', compact('topic', 'total_marks','adManagement'));
    } else {
      return redirect('/');
    }
  }


}

