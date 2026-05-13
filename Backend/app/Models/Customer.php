<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'date_of_birth',
        'avatar',
        'billing_address',
        'shipping_address',
        'status',
        'notes',
    ];

    protected $casts = [
        'date_of_birth' => 'date',
        'billing_address' => 'array',
        'shipping_address' => 'array',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    /**
     * Computed: total number of orders
     */
    public function getTotalOrdersAttribute()
    {
        return $this->orders()->count();
    }

    /**
     * Computed: total amount spent
     */
    public function getTotalSpentAttribute()
    {
        return $this->orders()->where('payment_status', 'paid')->sum('total');
    }
}
