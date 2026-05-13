<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function index(Request $request)
    {
        $query = Order::with(['customer', 'items']);

        if ($request->has('status') && $request->status) {
            $query->where('status', $request->status);
        }
        if ($request->has('payment_status') && $request->payment_status) {
            $query->where('payment_status', $request->payment_status);
        }
        if ($request->has('customer_id') && $request->customer_id) {
            $query->where('customer_id', $request->customer_id);
        }
        if ($request->has('date_from') && $request->date_from) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }
        if ($request->has('date_to') && $request->date_to) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }
        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('order_number', 'like', "%{$search}%")
                  ->orWhereHas('customer', function ($cq) use ($search) {
                      $cq->where('name', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%");
                  });
            });
        }

        $orders = $query->latest()->get();

        return response()->json([
            'status' => true,
            'message' => 'Orders fetched successfully',
            'data' => $orders,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'customer_id' => 'required|exists:customers,id',
            'payment_method' => 'nullable|in:cod,stripe,paypal,bank_transfer',
            'billing_address' => 'nullable|array',
            'shipping_address' => 'nullable|array',
            'customer_notes' => 'nullable|string',
            'items' => 'required|array|min:1',
            'items.*.name' => 'required|string',
            'items.*.price' => 'required|numeric',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.itemable_type' => 'nullable|string',
            'items.*.itemable_id' => 'nullable|integer',
            'discount' => 'nullable|numeric',
            'shipping_cost' => 'nullable|numeric',
            'tax' => 'nullable|numeric',
        ]);

        // Calculate totals
        $subtotal = collect($validated['items'])->sum(fn($i) => $i['price'] * $i['quantity']);
        $discount = $validated['discount'] ?? 0;
        $shipping = $validated['shipping_cost'] ?? 0;
        $tax = $validated['tax'] ?? 0;
        $total = $subtotal - $discount + $shipping + $tax;

        $order = Order::create([
            'order_number' => Order::generateOrderNumber(),
            'customer_id' => $validated['customer_id'],
            'status' => 'pending_payment',
            'payment_method' => $validated['payment_method'] ?? 'cod',
            'payment_status' => 'pending',
            'subtotal' => $subtotal,
            'discount' => $discount,
            'shipping_cost' => $shipping,
            'tax' => $tax,
            'total' => $total,
            'billing_address' => $validated['billing_address'] ?? null,
            'shipping_address' => $validated['shipping_address'] ?? null,
            'customer_notes' => $validated['customer_notes'] ?? null,
        ]);

        // Create order items
        foreach ($validated['items'] as $item) {
            $order->items()->create([
                'name' => $item['name'],
                'price' => $item['price'],
                'quantity' => $item['quantity'],
                'subtotal' => $item['price'] * $item['quantity'],
                'itemable_type' => $item['itemable_type'] ?? null,
                'itemable_id' => $item['itemable_id'] ?? null,
            ]);
        }

        return response()->json([
            'status' => true,
            'message' => 'Order created successfully',
            'data' => $order->load(['customer', 'items']),
        ], 201);
    }

    public function show($id)
    {
        $order = Order::with(['customer', 'items'])->find($id);

        if (!$order) {
            return response()->json(['status' => false, 'message' => 'Order not found'], 404);
        }

        return response()->json(['status' => true, 'data' => $order]);
    }

    public function update(Request $request, $id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['status' => false, 'message' => 'Order not found'], 404);
        }

        $validated = $request->validate([
            'status' => 'sometimes|in:pending_payment,payment_confirmed,processing,packed,shipped,out_for_delivery,delivered,completed,cancelled,refunded,delivery_failed,exchange_requested,returned',
            'payment_status' => 'sometimes|in:pending,paid,failed,refunded',
            'admin_notes' => 'nullable|string',
            'carrier' => 'nullable|string',
            'tracking_number' => 'nullable|string',
        ]);

        // Auto-set timestamps based on status changes
        if (isset($validated['status'])) {
            if ($validated['status'] === 'shipped' && !$order->shipped_at) {
                $validated['shipped_at'] = now();
            }
            if ($validated['status'] === 'delivered' && !$order->delivered_at) {
                $validated['delivered_at'] = now();
            }
        }

        $order->update($validated);

        return response()->json([
            'status' => true,
            'message' => 'Order updated successfully',
            'data' => $order->load(['customer', 'items']),
        ]);
    }

    /**
     * Update just the order status (convenience endpoint)
     */
    public function updateStatus(Request $request, $id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['status' => false, 'message' => 'Order not found'], 404);
        }

        $validated = $request->validate([
            'status' => 'required|in:pending_payment,payment_confirmed,processing,packed,shipped,out_for_delivery,delivered,completed,cancelled,refunded,delivery_failed,exchange_requested,returned',
        ]);

        $updates = ['status' => $validated['status']];

        if ($validated['status'] === 'shipped') {
            $updates['shipped_at'] = now();
        }
        if ($validated['status'] === 'delivered') {
            $updates['delivered_at'] = now();
        }
        if (in_array($validated['status'], ['payment_confirmed', 'processing', 'packed', 'shipped', 'delivered', 'completed'])) {
            $updates['payment_status'] = 'paid';
        }

        $order->update($updates);

        return response()->json([
            'status' => true,
            'message' => 'Order status updated',
            'data' => $order->fresh()->load(['customer', 'items']),
        ]);
    }

    public function destroy($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['status' => false, 'message' => 'Order not found'], 404);
        }

        $order->delete();

        return response()->json(['status' => true, 'message' => 'Order deleted successfully']);
    }
}
