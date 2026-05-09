<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Breeds extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'pet_category_id',
        'name',
        'slug',
        'description',
    ];
}