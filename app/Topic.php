<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
  protected $fillable = [
    'title', 'description' ,
  ];

  public function question()
  {
    return $this->hasOne('App\Question');
  }


  public function user()
  {
    return $this->belongsToMany('App\User', 'topic_user')
      ->withPivot('amount', 'transaction_id', 'status')
      ->withTimestamps();
  }

  public function userScores()
  {
    return $this->hasMany(UserScore::class);
  }
}
