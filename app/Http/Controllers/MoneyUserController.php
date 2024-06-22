<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Carbon\Carbon;

class MoneyUserController extends Controller
{ 
    public function showAllUsersWithMoney()
    {
        $users = User::whereNotNull('requested_money')
            ->orderBy('created_at', 'desc')
            ->get();
    
        return view('money-users.index', compact('users'));
    }

    public function showAllUsersIn24WithMoney()
    {
        $twentyFourHoursAgo = Carbon::now('2023-8-26')->subDay('2023-8-27');
    
        $users = User::where('requested_money', '>', $twentyFourHoursAgo)
                    ->whereNotNull('requested_money')
                    ->get();
    
            return view('money-users.show', compact('users'));
    }

    }
