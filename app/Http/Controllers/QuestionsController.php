<?php

namespace App\Http\Controllers;

use App\Imports\QuestionsImport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use App\Topic;
use App\Question;
use App\User;

use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Facades\Excel;
use Yajra\DataTables\Facades\DataTables;

class QuestionsController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    $topics = Topic::all();
    $questions = Question::all();
    return view('admin.questions.index', compact('questions', 'topics'));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Import a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function importExcelToDB(Request $request)
  {
    $validator = Validator::make(
      [
        'question_file' => $request->question_file,
        'extension' => strtolower($request->question_file->getClientOriginalExtension()),
      ],
      [
        'question_file' => 'required',
        'extension' => 'required|in:xlsx,xls,csv',
      ]
    );

    if ($validator->fails()) {
      return back()->withErrors('deleted', 'Invalid file format Please use xlsx and csv file format !');
    }

    if ($request->hasFile('question_file')) {
      // return $request->file('question_file');
      Excel::import(new QuestionsImport, $request->file('question_file'));
      return back()->with('added', 'Question Imported Successfully');
    }
    return back()->with('deleted', 'Request data does not have any files to import');
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {

    $request->validate([
      'topic_id' => 'required',
      'question' => 'required',  
      'question_img' => 'sometimes|image|mimes:jpg,jpeg,png',  
      'question_video_link' => '',
      'question_audio' => '',
    ]);

    // return $request;

    $input = $request->all();

    if ($file = $request->file('question_img')) {

      $name = 'question_' . time() . $file->getClientOriginalName();
      $file->move('images/questions/', $name);
      $input['question_img'] = $name;
    }


    try {
      Question::create($input);
      return back()->with('added', 'Question has been added');
    } catch (\Exception $e) {
      return back()->with('deleted', $e->getMessage());
    }
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show(Request $request, $id)
{
    $topic = Topic::findOrFail($id);

    // Select the additional columns
    $questions = DB::table('questions')
        ->where('topic_id', $topic->id)
        ->select('id', 'question', 'question_img', 'question_video_link', 'question_audio');

    if ($request->ajax()) {
        return DataTables::of($questions)
            ->addIndexColumn()
            ->addColumn('question', function ($row) {
                return $row->question;
            })
            ->addColumn('question_img', function ($question) {
              return '<img src="' . asset("images/questions/" . $question->question_img) . '" alt="Question Image" width="100">';
          })
          
            ->addColumn('question_video_link', function ($row) {
                return $row->question_video_link ? '<a href="' . $row->question_video_link . '" target="_blank">View Video</a>' : 'No Video';
            })
            ->addColumn('question_audio', function ($row) {
                return $row->question_audio ? '<audio controls><source src="' . asset('storage/' . $row->question_audio) . '" type="audio/mpeg">Your browser does not support the audio element.</audio>' : 'No Audio';
            })
            ->addColumn('action', function ($row) {
                $btn = '<div class="admin-table-action-block">
                        <a href="' . route('questions.edit', $row->id) . '" data-toggle="tooltip" data-original-title="Edit" class="btn btn-primary btn-floating"><i class="fa fa-pencil"></i></a>
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal' . $row->id . '"><i class="fa fa-trash"></i></button></div>';

                $btn .= '<div id="deleteModal' . $row->id . '" class="delete-modal modal fade" role="dialog">
                        <div class="modal-dialog modal-sm">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <div class="delete-icon"></div>
                            </div>
                            <div class="modal-body text-center">
                              <h4 class="modal-heading">Are You Sure ?</h4>
                              <p>Do you really want to delete these records? This process cannot be undone.</p>
                            </div>
                            <div class="modal-footer">
                              <form method="POST" action="' . route("questions.destroy", $row->id) . '">
                                ' . method_field("DELETE") . '
                                ' . csrf_field() . '
                                  <button type="reset" class="btn btn-gray translate-y-3" data-dismiss="modal">No</button>
                                  <button type="submit" class="btn btn-danger">Yes</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>';

                return $btn;
            })
            ->rawColumns(['question', 'question_img', 'question_video_link', 'question_audio', 'action'])
            ->make(true);
    }

    return view('admin.questions.show', compact('topic', 'questions'));
}


  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
      $question = Question::find($id);
      $topic = Topic::where('id', $question->topic_id)->first();
      return view('admin.questions.edit', compact('question', 'topic'));
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
      $question = Question::find($id);
  
      // Validation
      $request->validate([
          'topic_id' => 'required',
          'question' => 'required|string|max:255',
          'question_img' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
          'question_video_link' => 'nullable|string|url',
          'question_audio' => 'nullable|mimes:audio/mpeg,mpga,mp3,wav|max:2048',
      ]);
  
      $input = $request->all();
  
      // Handle question_img upload
      if ($file = $request->file('question_img')) {
          $name = 'question_img_' . time() . '.' . $file->getClientOriginalExtension();
          if ($question->question_img != null) {
              unlink(public_path('images/questions/' . $question->question_img));
          }
          $file->move(public_path('images/questions'), $name);
          $input['question_img'] = $name;
      }
  
      // Handle question_audio upload
      if ($file = $request->file('question_audio')) {
          $name = 'question_audio_' . time() . '.' . $file->getClientOriginalExtension();
          if ($question->question_audio != null) {
              unlink(public_path('audios/questions/' . $question->question_audio));
          }
          $file->move(public_path('audios/questions'), $name);
          $input['question_audio'] = $name;
      }
  
      // Ensure question_video_link is handled correctly
      $input['question_video_link'] = $request->input('question_video_link', $question->question_video_link);
  
      try {
          $question->update($input);
          return back()->with('updated', 'Question has been updated');
      } catch (\Exception $e) {
          return back()->with('deleted', $e->getMessage());
      }
  }
  
  
  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    $question = Question::find($id);

    if ($question->question_img != null) {
      unlink(public_path() . '/images/questions/' . $question->question_img);
    }
    try {
      $question->delete();
      return back()->with('deleted', 'Question has been deleted');
    } catch (\Exception $e) {
      return back()->with('deleted', $e->getMessage());
    }
  }



  
}
