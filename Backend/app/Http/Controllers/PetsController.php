<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Pets;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PetsController extends Controller
{
    /**
     * Display all pets
     */
    public function index()
    {
        $pets = Pets::with(['category', 'breed'])->latest()->get();

        return response()->json([
            'status' => true,
            'message' => 'Pets fetched successfully',
            'data' => $pets
        ], 200);
    }

    /**
     * Store new pet
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'pet_category_id' => 'required|integer',
            'breed_id' => 'required|integer',
            'name' => 'required|string|max:255',
            'sku' => 'required|string|max:255|unique:pets,sku',

            'age_months' => 'nullable|integer',
            'date_of_birth' => 'nullable|date',
            'gender' => 'nullable|in:male,female,unknown',
            'color' => 'nullable|string|max:255',
            'markings' => 'nullable|string',

            'weight_kg' => 'nullable|numeric',
            'height_cm' => 'nullable|numeric',
            'size' => 'nullable|in:small,medium,large',

            'price' => 'required|numeric',
            'sale_price' => 'nullable|numeric',
            'cost_price' => 'nullable|numeric',
            'discount_percentage' => 'nullable|integer',

            'stock_quantity' => 'nullable|integer',
            'minimum_stock_alert' => 'nullable|integer',
            'stock_status' => 'nullable|in:in_stock,out_of_stock,low_stock',

            'health_status' => 'nullable|in:excellent,good,fair,needs_attention',
            'is_vaccinated' => 'nullable|boolean',
            'last_vaccination_date' => 'nullable|date',
            'vet_certificate' => 'nullable|string',

            'has_pedigree' => 'nullable|boolean',
            'pedigree_certificate' => 'nullable|string',

            'care_level' => 'nullable|in:easy,moderate,high',
            'care_instructions' => 'nullable|string',

            'short_description' => 'nullable|string',
            'full_description' => 'nullable|string',
            'featured_image' => 'nullable|string',

            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'meta_keywords' => 'nullable|string',

            'is_active' => 'nullable|boolean',
            'is_featured' => 'nullable|boolean',
        ]);

        $validated['slug'] = Str::slug($request->name);

        $pet = Pets::create($validated);

        return response()->json([
            'status' => true,
            'message' => 'Pet created successfully',
            'data' => $pet
        ], 201);
    }

    /**
     * Show single pet
     */
    public function show($id)
    {
        $pet = Pets::with(['category', 'breed'])->find($id);

        if (!$pet) {
            return response()->json([
                'status' => false,
                'message' => 'Pet not found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => $pet
        ], 200);
    }

    /**
     * Update pet
     */
    public function update(Request $request, $id)
    {
        $pet = Pets::find($id);

        if (!$pet) {
            return response()->json([
                'status' => false,
                'message' => 'Pet not found'
            ], 404);
        }

        $validated = $request->validate([
            'pet_category_id' => 'sometimes|integer',
            'breed_id' => 'sometimes|integer',
            'name' => 'sometimes|string|max:255',
            'sku' => 'sometimes|string|max:255|unique:pets,sku,' . $id,

            'age_months' => 'nullable|integer',
            'date_of_birth' => 'nullable|date',
            'gender' => 'nullable|in:male,female,unknown',
            'color' => 'nullable|string|max:255',
            'markings' => 'nullable|string',

            'weight_kg' => 'nullable|numeric',
            'height_cm' => 'nullable|numeric',
            'size' => 'nullable|in:small,medium,large',

            'price' => 'nullable|numeric',
            'sale_price' => 'nullable|numeric',
            'cost_price' => 'nullable|numeric',
            'discount_percentage' => 'nullable|integer',

            'stock_quantity' => 'nullable|integer',
            'minimum_stock_alert' => 'nullable|integer',
            'stock_status' => 'nullable|in:in_stock,out_of_stock,low_stock',

            'health_status' => 'nullable|in:excellent,good,fair,needs_attention',
            'is_vaccinated' => 'nullable|boolean',
            'last_vaccination_date' => 'nullable|date',
            'vet_certificate' => 'nullable|string',

            'has_pedigree' => 'nullable|boolean',
            'pedigree_certificate' => 'nullable|string',

            'care_level' => 'nullable|in:easy,moderate,high',
            'care_instructions' => 'nullable|string',

            'short_description' => 'nullable|string',
            'full_description' => 'nullable|string',
            'featured_image' => 'nullable|string',

            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'meta_keywords' => 'nullable|string',

            'is_active' => 'nullable|boolean',
            'is_featured' => 'nullable|boolean',
        ]);

        if ($request->has('name')) {
            $validated['slug'] = Str::slug($request->name);
        }

        $pet->update($validated);

        return response()->json([
            'status' => true,
            'message' => 'Pet updated successfully',
            'data' => $pet
        ], 200);
    }

    /**
     * Delete pet
     */
    public function destroy($id)
    {
        $pet = Pets::find($id);

        if (!$pet) {
            return response()->json([
                'status' => false,
                'message' => 'Pet not found'
            ], 404);
        }

        $pet->delete();

        return response()->json([
            'status' => true,
            'message' => 'Pet deleted successfully'
        ], 200);
    }

    /**
     * Bulk delete pets
     */
    public function bulkDelete(Request $request)
    {
        $validated = $request->validate([
            'ids' => 'required|array',
            'ids.*' => 'integer',
        ]);

        $count = Pets::whereIn('id', $validated['ids'])->delete();

        return response()->json([
            'status' => true,
            'message' => "{$count} pets deleted successfully",
        ]);
    }

    /**
     * Update stock for a specific pet
     */
    public function updateStock(Request $request, $id)
    {
        $pet = Pets::find($id);

        if (!$pet) {
            return response()->json(['status' => false, 'message' => 'Pet not found'], 404);
        }

        $validated = $request->validate([
            'stock_quantity' => 'required|integer|min:0',
            'stock_status' => 'nullable|in:in_stock,out_of_stock,low_stock',
        ]);

        if (!isset($validated['stock_status'])) {
            $validated['stock_status'] = $validated['stock_quantity'] > $pet->minimum_stock_alert
                ? 'in_stock'
                : ($validated['stock_quantity'] > 0 ? 'low_stock' : 'out_of_stock');
        }

        $pet->update($validated);

        return response()->json([
            'status' => true,
            'message' => 'Stock updated successfully',
            'data' => $pet,
        ]);
    }
}