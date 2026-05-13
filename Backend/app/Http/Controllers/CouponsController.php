<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use Illuminate\Http\Request;

class CouponsController extends Controller
{
    public function index()
    {
        $coupons = Coupon::latest()->get();

        return response()->json([
            'status' => true,
            'message' => 'Coupons fetched successfully',
            'data' => $coupons,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string|unique:coupons,code',
            'type' => 'required|in:percentage,fixed',
            'amount' => 'required|numeric',
            'min_purchase' => 'nullable|numeric',
            'max_discount' => 'nullable|numeric',
            'usage_limit' => 'nullable|integer',
            'applicable_categories' => 'nullable|array',
            'expires_at' => 'nullable|date',
            'is_active' => 'nullable|boolean',
        ]);

        $coupon = Coupon::create($validated);

        return response()->json([
            'status' => true,
            'message' => 'Coupon created successfully',
            'data' => $coupon,
        ], 201);
    }

    public function show($id)
    {
        $coupon = Coupon::find($id);

        if (!$coupon) {
            return response()->json(['status' => false, 'message' => 'Coupon not found'], 404);
        }

        return response()->json(['status' => true, 'data' => $coupon]);
    }

    public function update(Request $request, $id)
    {
        $coupon = Coupon::find($id);

        if (!$coupon) {
            return response()->json(['status' => false, 'message' => 'Coupon not found'], 404);
        }

        $validated = $request->validate([
            'code' => 'sometimes|string|unique:coupons,code,' . $id,
            'type' => 'sometimes|in:percentage,fixed',
            'amount' => 'sometimes|numeric',
            'min_purchase' => 'nullable|numeric',
            'max_discount' => 'nullable|numeric',
            'usage_limit' => 'nullable|integer',
            'applicable_categories' => 'nullable|array',
            'expires_at' => 'nullable|date',
            'is_active' => 'nullable|boolean',
        ]);

        $coupon->update($validated);

        return response()->json([
            'status' => true,
            'message' => 'Coupon updated successfully',
            'data' => $coupon,
        ]);
    }

    public function destroy($id)
    {
        $coupon = Coupon::find($id);

        if (!$coupon) {
            return response()->json(['status' => false, 'message' => 'Coupon not found'], 404);
        }

        $coupon->delete();

        return response()->json(['status' => true, 'message' => 'Coupon deleted successfully']);
    }
}
