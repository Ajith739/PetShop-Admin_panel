<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    protected $fillable = [
        'code',
        'type',
        'amount',
        'min_purchase',
        'max_discount',
        'usage_limit',
        'used_count',
        'applicable_categories',
        'expires_at',
        'is_active',
    ];

    protected $casts = [
        'amount' => 'decimal:2',
        'min_purchase' => 'decimal:2',
        'max_discount' => 'decimal:2',
        'applicable_categories' => 'array',
        'expires_at' => 'datetime',
        'is_active' => 'boolean',
    ];

    /**
     * Check if the coupon is still valid
     */
    public function isValid(): bool
    {
        if (!$this->is_active) return false;
        if ($this->expires_at && $this->expires_at->isPast()) return false;
        if ($this->usage_limit && $this->used_count >= $this->usage_limit) return false;
        return true;
    }
}
