<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('sku')->unique();

            // Classification
            $table->unsignedBigInteger('category_id')->nullable();
            $table->string('brand')->nullable();
            $table->enum('product_type', ['simple', 'variable'])->default('simple');

            // Pricing
            $table->decimal('price', 10, 2);
            $table->decimal('sale_price', 10, 2)->nullable();
            $table->decimal('cost_price', 10, 2)->nullable();

            // Inventory
            $table->integer('stock_quantity')->default(0);
            $table->enum('stock_status', ['in_stock', 'out_of_stock', 'low_stock'])->default('in_stock');
            $table->integer('minimum_stock_alert')->default(5);
            $table->boolean('backorder_allowed')->default(false);

            // Shipping
            $table->decimal('weight_kg', 8, 2)->nullable();
            $table->string('dimensions')->nullable();
            $table->string('shipping_class')->nullable();

            // Content
            $table->text('short_description')->nullable();
            $table->longText('full_description')->nullable();
            $table->json('images')->nullable();
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

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
