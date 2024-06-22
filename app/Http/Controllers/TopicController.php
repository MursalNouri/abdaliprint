<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Topic;
use DataTables;

class TopicController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    // $topics = Topic::all();
    $topics = Topic::paginate(2);

    $topics = \DB::table('topics')->select('id', 'title', 'description');
    if ($request->ajax()) {

      return DataTables::of($topics)
        ->addIndexColumn()
        ->addColumn('title', function ($row) {
          return $row->title;
        })
        ->addColumn('description', function ($row) {
          return $row->description;
        })
        
        

        ->addColumn('action', function ($row) {
          $btn = '<div class="admin-table-action-block">

                    <a href="' . route('topics.edit', $row->id) . '" data-toggle="tooltip" data-original-title="Edit" class="btn btn-primary btn-floating"><i class="fa fa-pencil"></i></a>
                  
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal' . $row->id . '"><i class="fa fa-trash"></i> </button></div>';




          $btn .= '<div id="deleteModal' . $row->id . '" class="delete-modal modal fade" role="dialog">
                  <div class="modal-dialog modal-sm">
                    <!-- Modal content-->
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
                        <form method="POST" action="' . route("topics.destroy", $row->id) . '">
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
        ->rawColumns(['title', 'description', 'action'])
        ->make(true);
    }

    return view('admin.quiz.index', compact('topics'));
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
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {

    $input = $request->all();
    $request->validate([
      'title' => 'required|string',

    ]);

    


    // $input = $request->all();
    // $input['show_ans'] = $request->show_ans;
    //return Topic::create($input);
    try {
      $quiz = Topic::create($input);
      return back()->with('added', 'Topic has been added');
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
  public function show($id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    $topic = Topic::find($id);
    return view('admin.quiz.edit', compact('topic'));
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
    $request->validate([

      'title' => 'required|string',
    ]);

   

    $topic = Topic::findOrFail($id);

    $topic->title = $request->title;
    $topic->description = $request->description;
   

  
    

    try {
      $topic->save();

      return back()->with('updated', 'Topic updated !');
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
    $topic = Topic::find($id);
    try {
      $topic->delete();
      return back()->with('deleted', 'Topic has been deleted');
    } catch (\Exception $e) {
      return back()->with('deleted', $e->getMessage());
    }
  }

}
