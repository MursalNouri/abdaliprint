<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\PhoneNumber;

class PhoneNotification extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    

    //  public function submit(Request $request)
    //  {
    //      $phone = $request->input('phone');
     
    //      // Store the phone number in the database
    //      PhoneNumber::create([
    //          'phone_number' => $phone,
    //      ]);
     
    //      return redirect('/phone-number')->with('success', 'Phone number submitted successfully.');
    //  }

     public function build()
    {
        // return $this->view('view.name');
 
            return $this->subject('New Phone Number Submitted')
                              ->view('emails.phone-notification');

    }
}
