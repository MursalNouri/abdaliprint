<?php
namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'author', 'description','image', 'category_id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
