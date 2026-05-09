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
        // Breeds
        Schema::create('breeds', function (Blueprint $table) {
            $table->id();
            $table->integer('pet_category_id');
            $table->string('name'); // Golden Retriever, Persian Cat, Goldfish, etc.
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('breeds');
    }
};
