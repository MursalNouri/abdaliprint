<?php

namespace App\Http\Controllers;

use App\AdManagement;
use App\Topic;

use Illuminate\Http\Request;

class AdManagementController extends Controller
{
    public function index()
    { $existingAds = AdManagement::first();
        $adManagements = AdManagement::all();
        $topics = Topic::all();

        return view('ad-management.index', ['adManagements' => $adManagements, 'existingAds' => $existingAds]);
    }

    public function create()
    {
        $existingAds = AdManagement::first();
    
        return view('ad-management.create', compact('existingAds'));
    }

    // public function store(Request $request)
    // {
    //     // Validate the form data
    //     $validatedData = $request->validate([
    //         'Topgooglead' => 'required',
    //         'Bottomgooglead' => 'required',
    //         'Leftsidegooglead' => 'required',
    //         'Rightsidegooglead' => 'required',
    //     ]);
    
    //     // Update the existing ads or create a new record if it doesn't exist
    //     $adManagement = AdManagement::first();
    //     if ($adManagement) {
    //         $adManagement->update($validatedData);
    //     } else {
    //         AdManagement::create($validatedData);
    //     }
    // return redirect()->back()->with('success', 'Ad Management updated successfully');
    // }


    public function store(Request $request)
    {
           $adManagements = AdManagement::all();

        $adManagements->Topgooglead = $request->input('Topgooglead');
        $adManagements->Bottomgooglead = $request->input('Bottomgooglead');
        $adManagements->Leftsidegooglead = $request->input('Leftsidegooglead');
        $adManagements->Rightsidegooglead = $request->input('Rightsidegooglead');
        $adManagements->save();

        return redirect()->route('ad-management.create');
    }

    public function edit($id)
    {
        $adManagement = AdManagement::findOrFail($id);

        return view('ad-management.edit', compact('adManagement'));
    }

    
    public function updateAd(Request $request)
    {
        $ad = AdManagement::first();

        $TopnewAdValue = $request->input('Topgooglead');
        $BottomnewAdValue = $request->input('Bottomgooglead');
        $LeftsidenewAdValue = $request->input('Leftsidegooglead');
        $RightsidenewAdValue = $request->input('Rightsidegooglead');

        $ad->Topgooglead = $TopnewAdValue;
        $ad->Bottomgooglead = $BottomnewAdValue;
        $ad->Leftsidegooglead = $LeftsidenewAdValue;
        $ad->Rightsidegooglead = $RightsidenewAdValue;
        $ad->save();
        $existingAds = AdManagement::first();
    
        return view('ad-management.index',compact('existingAds'))->with('success', 'Ad updated successfully.');
    }

    // public function update(Request $request, $id)
    // {
    //     $adManagement = AdManagement::findOrFail($id);
    //     $adManagement->Topgooglead = $request->input('Topgooglead');
    //     $adManagement->Bottomgooglead = $request->input('Bottomgooglead');
    //     $adManagement->Leftsidegooglead = $request->input('Leftsidegooglead');
    //     $adManagement->Rightsidegooglead = $request->input('Rightsidegooglead');
    //     $adManagement->save();

    //     return redirect()->route('ad-management.index');
    // }

    public function destroy($id)
    {
        $adManagement = AdManagement::findOrFail($id);
        $adManagement->delete();

        return redirect()->route('ad-management.index');
    }
}