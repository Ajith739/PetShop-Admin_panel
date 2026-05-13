<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'sku',
        'category_id',
        'brand',
        'product_type',
        'price',
        'sale_price',
        'cost_price',
        'stock_quantity',
        'stock_status',
        'minimum_stock_alert',
        'backorder_allowed',
        'weight_kg',
        'dimensions',
        'shipping_class',
        'short_description',
        'full_description',
        'images',
        'featured_image',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'is_active',
        'is_featured',
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'sale_price' => 'decimal:2',
        'cost_price' => 'decimal:2',
        'weight_kg' => 'decimal:2',
        'images' => 'array',
        'backorder_allowed' => 'boolean',
        'is_active' => 'boolean',
        'is_featured' => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo(categories::class, 'category_id');
    }
}
