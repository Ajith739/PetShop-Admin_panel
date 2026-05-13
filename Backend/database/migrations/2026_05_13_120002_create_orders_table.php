<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();
            $table->unsignedBigInteger('customer_id');

            // Status tracking
            $table->enum('status', [
                'pending_payment',
                'payment_confirmed',
                'processing',
                'packed',
                'shipped',
                'out_for_delivery',
                'delivered',
                'completed',
                'cancelled',
                'refunded',
                'delivery_failed',
                'exchange_requested',
                'returned',
            ])->default('pending_payment');

            // Payment
            $table->enum('payment_method', ['cod', 'stripe', 'paypal', 'bank_transfer'])->default('cod');
            $table->enum('payment_status', ['pending', 'paid', 'failed', 'refunded'])->default('pending');

            // Totals
            $table->decimal('subtotal', 10, 2)->default(0);
            $table->decimal('discount', 10, 2)->default(0);
            $table->decimal('shipping_cost', 10, 2)->default(0);
            $table->decimal('tax', 10, 2)->default(0);
            $table->decimal('total', 10, 2)->default(0);

            // Addresses
            $table->json('billing_address')->nullable();
            $table->json('shipping_address')->nullable();

            // Notes
            $table->text('customer_notes')->nullable();
            $table->text('admin_notes')->nullable();

            // Shipping info
            $table->string('carrier')->nullable();
            $table->string('tracking_number')->nullable();
            $table->timestamp('shipped_at')->nullable();
            $table->timestamp('delivered_at')->nullable();

            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
