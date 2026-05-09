<?php

namespace App\Http\Controllers;

use App\Models\Breeds;
use Illuminate\Http\Request;

class BreedsController extends Controller
{
    /**
     * Display all breeds.
     */
    public function index()
    {
        $breeds = Breeds::latest()->get();

        return response()->json([
            'status' => true,
            'data' => $breeds
        ], 200);
    }

    /**
     * Store new breed.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            '*.pet_category_id' => 'required|integer',
            '*.name' => 'required|string|max:255',
            '*.slug' => 'required|string|max:255',
            '*.description' => 'nullable|string',
        ]);

        $createdBreeds = [];

        foreach ($validated as $breedData) {
            $createdBreeds[] = Breeds::create($breedData);
        }

        return response()->json([
            'status' => true,
            'message' => 'Breeds created successfully',
            'data' => $createdBreeds
        ], 201);
    }

    /**
     * Show single breed.
     */
    public function show($id)
    {
        $breed = Breeds::find($id);

        if (!$breed) {
            return response()->json([
                'status' => false,
                'message' => 'Breed not found',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => $breed
        ], 200);
    }

    /**
     * Update breed.
     */
    public function update(Request $request, $id)
    {
        $breed = Breeds::find($id);

        if (!$breed) {
            return response()->json([
                'status' => false,
                'message' => 'Breed not found',
            ], 404);
        }

        $validated = $request->validate([
            'pet_category_id' => 'sometimes|integer',
            'name' => 'sometimes|string|max:255',
            'slug' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
        ]);

        $breed->update($validated);

        return response()->json([
            'status' => true,
            'message' => 'Breed updated successfully',
            'data' => $breed
        ], 200);
    }

    /**
     * Delete breed.
     */
    public function destroy($id)
    {
        $breed = Breeds::find($id);

        if (!$breed) {
            return response()->json([
                'status' => false,
                'message' => 'Breed not found',
            ], 404);
        }

        $breed->delete();

        return response()->json([
            'status' => true,
            'message' => 'Breed deleted successfully',
        ], 200);
    }
}