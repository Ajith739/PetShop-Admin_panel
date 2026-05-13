<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'order_number',
        'customer_id',
        'status',
        'payment_method',
        'payment_status',
        'subtotal',
        'discount',
        'shipping_cost',
        'tax',
        'total',
        'billing_address',
        'shipping_address',
        'customer_notes',
        'admin_notes',
        'carrier',
        'tracking_number',
        'shipped_at',
        'delivered_at',
    ];

    protected $casts = [
        'subtotal' => 'decimal:2',
        'discount' => 'decimal:2',
        'shipping_cost' => 'decimal:2',
        'tax' => 'decimal:2',
        'total' => 'decimal:2',
        'billing_address' => 'array',
        'shipping_address' => 'array',
        'shipped_at' => 'datetime',
        'delivered_at' => 'datetime',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }

    /**
     * Generate a unique order number
     */
    public static function generateOrderNumber(): string
    {
        $year = date('Y');
        $lastOrder = self::whereYear('created_at', $year)->orderByDesc('id')->first();
        $nextNum = $lastOrder ? ((int) substr($lastOrder->order_number, -5)) + 1 : 1;
        return sprintf('PS-%s-%05d', $year, $nextNum);
    }

    /**
     * Scope: filter by status
     */
    public function scopeStatus($query, $status)
    {
        return $query->where('status', $status);
    }
}
