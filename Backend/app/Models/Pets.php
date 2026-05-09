<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pets extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'pet_category_id',
        'breed_id',
        'name',
        'slug',
        'sku',
        'age_months',
        'date_of_birth',
        'gender',
        'color',
        'markings',
        'weight_kg',
        'height_cm',
        'size',
        'price',
        'sale_price',
        'cost_price',
        'discount_percentage',
        'stock_quantity',
        'minimum_stock_alert',
        'stock_status',
        'health_status',
        'is_vaccinated',
        'last_vaccination_date',
        'vet_certificate',
        'has_pedigree',
        'pedigree_certificate',
        'care_level',
        'care_instructions',
        'short_description',
        'full_description',
        'featured_image',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'is_active',
        'is_featured',
    ];

    protected $casts = [
        'date_of_birth' => 'date',
        'weight_kg' => 'decimal:2',
        'height_cm' => 'decimal:2',
        'price' => 'decimal:2',
        'sale_price' => 'decimal:2',
        'cost_price' => 'decimal:2',
        'is_vaccinated' => 'boolean',
        'has_pedigree' => 'boolean',
        'is_active' => 'boolean',
        'is_featured' => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo(categories::class);
    }

    public function breed()
    {
        return $this->belongsTo(Breeds::class);
    }
}
