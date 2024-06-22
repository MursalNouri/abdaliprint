<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
  use Notifiable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name', 'email', 'earned_amount', 'paid_money','current_money', 'password', 'mobile', 'mobile_2', 'school', 'address', 'city', 'percent_10', 'percent_11', 'role'
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
    'password', 'remember_token',
  ];

  public function userScores()
  {
    return $this->hasMany(UserScore::class);
  }
  

  public function topic()
  {
    return $this->belongsToMany('App\Topic', 'topic_user')
      ->withPivot('amount', 'transaction_id', 'status')
      ->withTimestamps();
  }

  public function scores()
  {
    return $this->hasMany(userscore::class);
  }

  public function is_admin()
  {
    if (Auth::check()) {
      if (Auth::user()->role == 'A') {
        return true;
      }
      return false;
    }
    return false;
  }

  public function is_adder()
  {
    if (Auth::check()) {
      if (Auth::user()->role == 'Adder' || 'A') {
        return true;
      }
      return false;
    }
    return false;
  }

 

}
