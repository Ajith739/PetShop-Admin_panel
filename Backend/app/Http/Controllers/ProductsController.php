<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductsController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query();

        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }
        if ($request->has('brand')) {
            $query->where('brand', $request->brand);
        }
        if ($request->has('stock_status')) {
            $query->where('stock_status', $request->stock_status);
        }
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('sku', 'like', "%{$search}%")
                  ->orWhere('brand', 'like', "%{$search}%");
            });
        }

        $products = $query->latest()->get();

        return response()->json([
            'status' => true,
            'message' => 'Products fetched successfully',
            'data' => $products,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'sku' => 'required|string|max:255|unique:products,sku',
            'category_id' => 'nullable|integer',
            'brand' => 'nullable|string|max:255',
            'product_type' => 'nullable|in:simple,variable',
            'price' => 'required|numeric',
            'sale_price' => 'nullable|numeric',
            'cost_price' => 'nullable|numeric',
            'stock_quantity' => 'nullable|integer',
            'stock_status' => 'nullable|in:in_stock,out_of_stock,low_stock',
            'minimum_stock_alert' => 'nullable|integer',
            'backorder_allowed' => 'nullable|boolean',
            'weight_kg' => 'nullable|numeric',
            'dimensions' => 'nullable|string',
            'shipping_class' => 'nullable|string',
            'short_description' => 'nullable|string',
            'full_description' => 'nullable|string',
            'images' => 'nullable|array',
            'featured_image' => 'nullable|string',
            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'meta_keywords' => 'nullable|string',
            'is_active' => 'nullable|boolean',
            'is_featured' => 'nullable|boolean',
        ]);

        $validated['slug'] = Str::slug($request->name);

        $product = Product::create($validated);

        return response()->json([
            'status' => true,
            'message' => 'Product created successfully',
            'data' => $product,
        ], 201);
    }

    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['status' => false, 'message' => 'Product not found'], 404);
        }

        return response()->json(['status' => true, 'data' => $product]);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['status' => false, 'message' => 'Product not found'], 404);
        }

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'sku' => 'sometimes|string|max:255|unique:products,sku,' . $id,
            'category_id' => 'nullable|integer',
            'brand' => 'nullable|string|max:255',
            'product_type' => 'nullable|in:simple,variable',
            'price' => 'nullable|numeric',
            'sale_price' => 'nullable|numeric',
            'cost_price' => 'nullable|numeric',
            'stock_quantity' => 'nullable|integer',
            'stock_status' => 'nullable|in:in_stock,out_of_stock,low_stock',
            'minimum_stock_alert' => 'nullable|integer',
            'backorder_allowed' => 'nullable|boolean',
            'weight_kg' => 'nullable|numeric',
            'dimensions' => 'nullable|string',
            'shipping_class' => 'nullable|string',
            'short_description' => 'nullable|string',
            'full_description' => 'nullable|string',
            'images' => 'nullable|array',
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

        $product->update($validated);

        return response()->json([
            'status' => true,
            'message' => 'Product updated successfully',
            'data' => $product,
        ]);
    }

    public function destroy($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['status' => false, 'message' => 'Product not found'], 404);
        }

        $product->delete();

        return response()->json(['status' => true, 'message' => 'Product deleted successfully']);
    }
}
