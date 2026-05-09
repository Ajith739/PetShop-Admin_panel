<?php

use Illuminate\Support\Facades\Route;
// Import our AuthController
use App\Http\Controllers\Api\AuthController;
// Import Controllers using array syntax
use App\Http\Controllers\
{
    CategoriesController,
    BreedsController,
    PetsController
};

/*
|--------------------------------------------------------------------------
| PUBLIC ROUTES (No authentication required)
|--------------------------------------------------------------------------
| Anyone can access these routes without a token
| These are used for login and registration
*/

// POST /api/register
// When someone sends a POST request to /api/register,
// Laravel will call the 'register' method in AuthController
Route::post('/register', [AuthController::class, 'register']);

// POST /api/login
// When someone sends a POST request to /api/login,
// Laravel will call the 'login' method in AuthController
Route::post('/login', [AuthController::class, 'login']);

/*
|--------------------------------------------------------------------------
| PROTECTED ROUTES (Authentication required)
|--------------------------------------------------------------------------
| These routes require a valid Sanctum token
| The 'auth:sanctum' middleware checks for the token
| If no valid token is provided, it returns 401 Unauthorized
|
| Route::middleware('auth:sanctum') means:
| "Before running these routes, check if the user is authenticated"
*/
// PROTECTED (ADMIN ONLY)
Route::middleware('auth:sanctum')->group(function () {

    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // CATEGORY ROUTES
    Route::apiResource('categories', categoriesController::class);
    // Breeds
    Route::apiResource('breeds', BreedsController::class);

    // Pets
    Route::apiResource('pets', PetsController::class);
    Route::post('pets/bulk-delete', [PetsController::class, 'bulkDelete']);
    Route::patch('pets/{pet}/stock', [PetsController::class, 'updateStock']);

});
