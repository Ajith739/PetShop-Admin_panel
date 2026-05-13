<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\{
    CategoriesController,
    BreedsController,
    PetsController,
    ProductsController,
    OrdersController,
    CustomersController,
    CouponsController,
    DashboardController
};

/*
|--------------------------------------------------------------------------
| PUBLIC ROUTES (No authentication required)
|--------------------------------------------------------------------------
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

/*
|--------------------------------------------------------------------------
| PROTECTED ROUTES (Authentication required)
|--------------------------------------------------------------------------
*/
Route::middleware('auth:sanctum')->group(function () {

    // Auth
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // Dashboard
    Route::get('/dashboard/stats', [DashboardController::class, 'stats']);

    // Categories
    Route::apiResource('categories', CategoriesController::class);

    // Breeds
    Route::apiResource('breeds', BreedsController::class);

    // Pets
    Route::apiResource('pets', PetsController::class);
    Route::post('pets/bulk-delete', [PetsController::class, 'bulkDelete']);
    Route::patch('pets/{pet}/stock', [PetsController::class, 'updateStock']);

    // Products
    Route::apiResource('products', ProductsController::class);

    // Orders
    Route::apiResource('orders', OrdersController::class);
    Route::patch('orders/{order}/status', [OrdersController::class, 'updateStatus']);

    // Customers
    Route::apiResource('customers', CustomersController::class);

    // Coupons
    Route::apiResource('coupons', CouponsController::class);
});
