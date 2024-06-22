<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Topic;

use App\Question;
use App\User;
use App\AdManagement;


class WinnerUsersController extends Controller
{
    // public function index(){
   
       
        
    
    //     // Add your logic for the new page here
        
    //     return view('WinnerUsers');
    // }

    public function index()
    {
      if (Auth::check()) {
        $students = User::where('id', '=', Auth::id())->get();
        $topics = Topic::all();
        $questions = Question::all();
       
      $adManagements = AdManagement::all();

  
  
        $sump = 0;
        $correct = 0;
     
    }
  }
}
