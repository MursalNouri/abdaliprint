<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConversionRate extends Model
{
    use HasFactory;



// app/Models/ConversionRate.php


    protected $fillable = [
        'conversion_rate',
    ];
}

