<?php
namespace App\Http\Controllers;

use Twilio\Rest\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\AdManagement;
use App\Mail\PhoneNotification; // Assuming you have created a Mailable class


class PhonenumberController extends Controller
{
    public function index()
    {
        $phone = 'Phone';
     $adManagements = AdManagement::all();

        return view('phone-number', compact('phone','adManagements'));
    }


public function submit(Request $request)
{
    // Retrieve the phone number
    $phone = $request->input('phone');

    // Send the phone number to the admin via email using the PhoneNotification Mailable
    $adminEmail = 'MursalNouriDeve@gmail.com';

    Mail::to($adminEmail)->send(new PhoneNotification($phone));

    return redirect('/phone-number')->with('success', 'Phone number submitted successfully.');
}
}