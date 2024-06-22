<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Avatar;
use Yajra\DataTables\Facades\DataTables;
use App\AdManagement;
use App\AdssManagement;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class UsersController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {

    $users = \DB::table('users')->where('role', '!=', 'A')->select('id', 'image', 'name', 'email',  'earned_amount', 'paid_money', 'current_money', 'mobile', 'role', 'city', 'address');

    if ($request->ajax()) {
      return DataTables::of($users)
        ->addIndexColumn()
        ->addColumn('image', function ($row) {
          if ($row->image) {
            $image = '<img src="' . asset('/images/user/' . $row->image) . '" alt="Pic" width="50px" class="img-responsive">';
          } else {
            $image = '<img  src="' . Avatar::create(ucfirst($row->name))->toBase64() . '" alt="Pic" width="50px" class="img-responsive">';
          }
          return $image;
        })
        ->addColumn('name', function ($row) {
          return ucfirst($row->name);
        })
        ->addColumn('email', function ($row) {
          return $row->email;
        })
       
        ->addColumn('mobile', function ($row) {
          return $row->mobile;
        })
        ->addColumn('role', function ($row) {
          return $row->role == 'S' ? 'Student' : $row->role;
        })
        ->addColumn('city', function ($row) {
          return isset($row->city) && $row->city ? $row->city : '-';
        })
        ->addColumn('address', function ($row) {
          return isset($row->address) && $row->address ? $row->address : '-';
        })
        ->addColumn('action', function ($row) {
          $btn = '<div class="admin-table-action-block">

                    <a href="' . route('users.edit', $row->id) . '" data-toggle="tooltip" data-original-title="Edit" class="btn btn-primary btn-floating"><i class="fa fa-pencil"></i></a>
                  
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
                        <form method="POST" action="' . route("users.destroy", $row->id) . '">
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
        ->rawColumns(['image', 'name', 'email', 'mobile', 'role', 'city', 'address', 'action'])
        ->make(true);
    }
    return view('admin.users.index', compact('users'));
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
    $user = new User;

    $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|string|email|max:255|unique:users',
      'mobile' => 'unique:users|min:10',
      'password' => 'required|string|min:6',
    ]);

    $user->name = $request->name;
    $user->email = $request->email;
    $user->mobile = $request->mobile;
    $user->address = $request->address;
    $user->role = $request->role;
    $user->city = $request->city;

    if ($request->password != "") {
      $user->password = bcrypt($request->password);
    }

    if ($file = $request->file('image')) {

      if ($user->image != "") {
        unlink('images/user/' . $user->image);
      }

      $name = time() . $file->getClientOriginalName();

      $file->move('images/user', $name);

      $user->image = $name;
    }
    try {
      $user->save();
      return back()->with('added', 'User has been added !');
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
    $user = User::find($id);
    return view('admin.users.edit', compact('user'));
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
    $user = User::findOrFail($id);

    $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|string|email',
      'mobile' => 'sometimes|nullable|min:10'
    ]);

    $input = $request->all();

    if (Auth::user()->role == 'A') {
      $user->name = $request->name;
      $user->email = $request->email;
      $user->role = $request->role;
      $user->mobile = $request->mobile;
      $user->address = $request->address;
      $user->city = $request->city;

      if ($request->password != "") {
        $user->password = bcrypt($request->password);
      } 

      if ($file = $request->file('image')) {
        if ($user->image != "") {
          unlink('images/user/' . $user->image);
        }

        $name = time() . $file->getClientOriginalName();
        $file->move('images/user', $name);
        $user->image = $name;
      }

      $user->save();
    } else if (Auth::user()->role == 'S') {
      $user->name = $request->name;
      $user->email = $request->email;
      $user->role = $request->role;

      $user->mobile = $request->mobile;
      $user->address = $request->address;
      $user->city = $request->city;

      if ($request->password != "") {
        $user->password = bcrypt($request->password);
      }

      if ($file = $request->file('image')) {
        if ($user->image != "") {
          unlink('images/user/' . $user->image);
        }

        $name = time() . $file->getClientOriginalName();
        $file->move('images/user', $name);
        $user->image = $name;
      }

      $user->save();
    }

    return back()->with('updated', 'Student has been updated');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    $user = User::find($id);

    if ($user->image != '') {
      unlink('images/user/' . $user->image);
    }
    try {
      $user->delete();
      return back()->with('deleted', 'User has been deleted');
    } catch (\Exception $e) {
      return back()->with('deleted', $e->getMessage());
    }
  }
  public function sendCard(Request $request)
  {
    // Retrieve the user's phone number from the request
    $mobile = $request->input('mobile');

    // Validate the phone number (you can add custom validation rules)
    $validatedData = $request->validate([
      'mobile' => 'required|numeric',
    ]);
    $user = User::firstOrNew(['email' => $request->user()->email]);
    $user->mobile = $mobile;
    $user->save();

    // Retrieve the user's phone number and amount from the form submission
    $mobile = $request->input('mobile');
    $amount = $request->input('amount');

    // Perform the logic to send money to the user's phone number
    // (Integrate with your payment or transfer system)
    // Handle any errors or exceptions that may occur during the process

    // Assuming you have a User model with a 'money' attribute
    $user = User::where('mobile', $mobile)->first();
    if ($user) {
      // Deduct the sent amount from the user's total money
      // $user->paid_money = $amount;
      $user->requested_money = $amount;
      //$user->current_money -= $amount;
      $user->save();

      // Additional logic or response as needed
      // For example, you can display a success message to the user
      return redirect()->back()->with('success', 'Your request submited successfully!');
    } else {
      // Handle the case when the user is not found
      return redirect()->back()->with('error', 'User not found!');


      // Perform any additional processing or validation as needed

      // Send the card to the user's phone number
      $this->sendCardToPhoneNumber($mobile);

      // Return a response indicating the card has been sent
    }
  }
  
public function updateMoney($id)
{
    $user = User::findOrFail($id);
    // $user->current_money -= $user->requested_money;
    $user->current_money = $user->earned_amount-$user->paid_money;
    $user->paid_money += $user->requested_money;
    $user->current_money = $user->earned_amount-$user->paid_money;

    $user->requested_money = 0;
    $user->save();

    return redirect()->back()->with('success', 'Money updated successfully.');
}





    public function indexx()
    {
        $ads = AdssManagement::all();
        return view('ads.index', compact('ads'));
    }

    public function addColumn(Request $request)
    {
        $columnName = $request->input('column_name');
        $columnValue = $request->input('column_value');

        $ads = new AdssManagement();
        $ads->column_name = $columnName;
        $ads->column_value = $columnValue;
        $ads->save();

        return redirect()->back()->with('success', 'New column added successfully!');
    }

    public function editColumn(Request $request, $id)
    {
        $columnValue = $request->input('column_value');

        $ads = AdssManagement::findOrFail($id);
        $ads->column_value = $columnValue;
        $ads->save();

        return redirect()->back()->with('success', 'Column updated successfully!');
    }

    public function deleteColumn($id)
    {
        $ads = AdssManagement::findOrFail($id);
        $ads->delete();

        return redirect()->back()->with('success', 'Column deleted successfully!');
    }



    // ...
    
    public function createTable(Request $request)
{
    $tableName = $request->input('table_name');
    $columnNames = $request->input('column_names');
    $columnValues = $request->input('column_values');

    // Ensure a valid table name is provided
    if (empty($tableName)) {
        return redirect()->back()->with('error', 'Invalid table name provided.');
    }

    // Create the table dynamically
    Schema::create($tableName, function (Blueprint $table) use ($columnNames) {
        $table->increments('id');
        if (!is_array($columnNames) && !is_iterable($columnNames)) {
          return redirect()->back()->with('error', 'Invalid column names provided.');
      }
      if (empty($columnNames)) {
        return redirect()->back()->with('error', 'empty');
       
    }
    else{
        foreach ($columnNames as $columnName) {
            $table->string($columnName)->nullable();
        }}
    });

    // Insert the values into the newly created table
    $newModel = new AdManagement();
    $newModel->setTable($tableName);

    foreach ($columnValues as $index => $columnValue) {
        $columnName = $columnNames[$index];
        $newModel->$columnName = $columnValue;
    }

    $newModel->save();

    return redirect()->back()->with('success', 'Table created successfully.');
}}

