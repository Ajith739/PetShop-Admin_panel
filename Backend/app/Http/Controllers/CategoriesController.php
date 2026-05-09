<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\categories;

class categoriesController extends Controller
{
    // GET /api/categories
    public function index()
    {
        return response()->json(categories::all());
    }

    // POST /api/categories (admin)
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:categories,name',
            'slug' => 'required|unique:categories,slug',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        $category = categories::create($validated);

        return response()->json([
            'message' => 'Category created',
            'data' => $category
        ], 201);
    }
    // PUT /api/categories/{id}
    public function update(Request $request, $id)
    {
        $category =categories::find(id)
    }

}
