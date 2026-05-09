<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pets', function (Blueprint $table) {
            $table->id();
            $table->integer('pet_category_id');
            $table->integer('breed_id');
            $table->string('name');
            $table->string('slug');
            $table->string('sku');

            // Basic Details
            $table->integer('age_months')->nullable();
            $table->date('date_of_birth')->nullable();
            $table->enum('gender', ['male', 'female', 'unknown'])->default('unknown');
            $table->string('color')->nullable();
            $table->text('markings')->nullable();

            // Physical
            $table->decimal('weight_kg', 5, 2)->nullable();
            $table->decimal('height_cm', 5, 2)->nullable();
            $table->enum('size', ['small', 'medium', 'large'])->nullable();

            // Pricing
            $table->decimal('price', 10, 2);
            $table->decimal('sale_price', 10, 2)->nullable();
            $table->decimal('cost_price', 10, 2)->nullable();
            $table->integer('discount_percentage')->default(0);

            // Inventory
            $table->integer('stock_quantity')->default(0);
            $table->integer('minimum_stock_alert')->default(5);
            $table->enum('stock_status', ['in_stock', 'out_of_stock', 'low_stock'])->default('in_stock');

            // Health
            $table->enum('health_status', ['excellent', 'good', 'fair', 'needs_attention'])->default('good');
            $table->boolean('is_vaccinated')->default(false);
            $table->date('last_vaccination_date')->nullable();
            $table->string('vet_certificate')->nullable();

            // Pedigree
            $table->boolean('has_pedigree')->default(false);
            $table->string('pedigree_certificate')->nullable();

            // Care
            $table->enum('care_level', ['easy', 'moderate', 'high'])->default('moderate');
            $table->text('care_instructions')->nullable();

            // Content
            $table->text('short_description')->nullable();
            $table->longText('full_description')->nullable();
            $table->string('featured_image')->nullable();

            // SEO
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('meta_keywords')->nullable();

            // Status
            $table->boolean('is_active')->default(true);
            $table->boolean('is_featured')->default(false);

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pets');
    }
};
