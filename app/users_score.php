<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class users_score extends Model
{
    
    use HasFactory;

    protected $fillable = [
        'topic_id','user_id','score'
    ];

    public function user()
{
    return $this->belongsTo(User::class);
}

public function topic()
{
    return $this->belongsTo(topic::class);

}

}
