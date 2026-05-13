<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    public function index(Request $request)
    {
        $query = Customer::query();

        if ($request->has('status') && $request->status) {
            $query->where('status', $request->status);
        }
        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%");
            });
        }

        $customers = $query->latest()->get()->map(function ($customer) {
            $customer->total_orders = $customer->total_orders;
            $customer->total_spent = $customer->total_spent;
            return $customer;
        });

        return response()->json([
            'status' => true,
            'message' => 'Customers fetched successfully',
            'data' => $customers,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:customers,email',
            'phone' => 'nullable|string|max:20',
            'date_of_birth' => 'nullable|date',
            'avatar' => 'nullable|string',
            'billing_address' => 'nullable|array',
            'shipping_address' => 'nullable|array',
            'status' => 'nullable|in:active,inactive,banned',
            'notes' => 'nullable|string',
        ]);

        $customer = Customer::create($validated);

        return response()->json([
            'status' => true,
            'message' => 'Customer created successfully',
            'data' => $customer,
        ], 201);
    }

    public function show($id)
    {
        $customer = Customer::with('orders.items')->find($id);

        if (!$customer) {
            return response()->json(['status' => false, 'message' => 'Customer not found'], 404);
        }

        $customer->total_orders = $customer->total_orders;
        $customer->total_spent = $customer->total_spent;

        return response()->json(['status' => true, 'data' => $customer]);
    }

    public function update(Request $request, $id)
    {
        $customer = Customer::find($id);

        if (!$customer) {
            return response()->json(['status' => false, 'message' => 'Customer not found'], 404);
        }

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:customers,email,' . $id,
            'phone' => 'nullable|string|max:20',
            'date_of_birth' => 'nullable|date',
            'avatar' => 'nullable|string',
            'billing_address' => 'nullable|array',
            'shipping_address' => 'nullable|array',
            'status' => 'nullable|in:active,inactive,banned',
            'notes' => 'nullable|string',
        ]);

        $customer->update($validated);

        return response()->json([
            'status' => true,
            'message' => 'Customer updated successfully',
            'data' => $customer,
        ]);
    }

    public function destroy($id)
    {
        $customer = Customer::find($id);

        if (!$customer) {
            return response()->json(['status' => false, 'message' => 'Customer not found'], 404);
        }

        $customer->delete();

        return response()->json(['status' => true, 'message' => 'Customer deleted successfully']);
    }
}
