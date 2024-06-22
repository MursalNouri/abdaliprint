<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Topic;
use App\Question;
use PDF;

class AllReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {    
        $students = User::where('id', '=', Auth::id())->get();
        $topics = Topic::all();
        $questions = Question::all();
       

        return view('admin.all_reports.index', compact('topics', 'questions','students'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function pdfreport($id,$userid)
    {   
        $topic = Topic::findOrFail($id);
        $user  = User::findOrFail($userid);
        return $pdf = PDF::loadView('admin.all_reports.report', compact('topic','user'));
        return $pdf->download("$user->name's report.pdf");
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $topic = Topic::findOrFail($id);
        $students = User::where('id', '!=', Auth::id())->get();
        $c_que = Question::where('topic_id', $id)->count();
        $topics = Topic::All();
        // $question = Question::where('topic_id', $topic->id)->get();
        // $students = User::where('id', '=', Auth::id())->get();
        $questions = Question::all();


        $filtStudents = collect();
       

        $filtStudents = $filtStudents->unique();
        $filtStudents = $filtStudents->flatten();

        return view('admin.all_reports.show', compact('filtStudents',  'c_que', 'topic','topics','students','questions'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($topicid,$userid)
    {   
         $topicid.$userid;
         try{
        
             return back()->with('deleted','Response Reset Successfully !');
         }catch(\Exception $e){
            return back()->with('deleted',$e->getMessage());
         }
         
    }
}
