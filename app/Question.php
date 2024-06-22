<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
      'topic_id',
      'question',
      'code_snippet',
      'question_img',
      'question_video_link',
      'question_audio'
    ];


    public function topic() {
      return $this->belongsTo('App\Topic');
    }
}
