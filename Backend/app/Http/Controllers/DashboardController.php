<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Pets;
use App\Models\Product;
use App\Models\Customer;
use App\Models\categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function stats()
    {
        // --- Revenue ---
        $revenueToday = Order::whereDate('created_at', today())->where('payment_status', 'paid')->sum('total');
        $revenueWeek = Order::whereBetween('created_at', [now()->startOfWeek(), now()->endOfWeek()])->where('payment_status', 'paid')->sum('total');
        $revenueMonth = Order::whereMonth('created_at', now()->month)->whereYear('created_at', now()->year)->where('payment_status', 'paid')->sum('total');
        $revenueYear = Order::whereYear('created_at', now()->year)->where('payment_status', 'paid')->sum('total');

        // --- Order status counts ---
        $ordersByStatus = Order::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->pluck('count', 'status');

        $totalOrders = Order::count();

        // --- Top selling pets (by order item count) ---
        $topPets = DB::table('order_items')
            ->where('itemable_type', 'App\\Models\\Pets')
            ->select('name', DB::raw('SUM(quantity) as total_sold'), DB::raw('SUM(subtotal) as revenue'))
            ->groupBy('name')
            ->orderByDesc('total_sold')
            ->limit(5)
            ->get();

        // --- Low stock alerts ---
        $lowStockPets = Pets::where('stock_quantity', '<=', DB::raw('minimum_stock_alert'))
            ->where('stock_quantity', '>', 0)
            ->select('id', 'name', 'sku', 'stock_quantity', 'minimum_stock_alert')
            ->limit(10)
            ->get();

        $lowStockProducts = Product::where('stock_quantity', '<=', DB::raw('minimum_stock_alert'))
            ->where('stock_quantity', '>', 0)
            ->select('id', 'name', 'sku', 'stock_quantity', 'minimum_stock_alert')
            ->limit(10)
            ->get();

        // --- Recent orders ---
        $recentOrders = Order::with('customer')
            ->latest()
            ->limit(10)
            ->get()
            ->map(fn($o) => [
                'id' => $o->id,
                'order_number' => $o->order_number,
                'customer' => $o->customer->name ?? 'Unknown',
                'total' => $o->total,
                'status' => $o->status,
                'payment_status' => $o->payment_status,
                'date' => $o->created_at->format('M d, Y'),
            ]);

        // --- Customer analytics ---
        $totalCustomers = Customer::count();
        $newCustomersThisMonth = Customer::whereMonth('created_at', now()->month)->whereYear('created_at', now()->year)->count();
        $returningCustomers = Customer::has('orders', '>=', 2)->count();

        // --- Summary counts ---
        $totalPets = Pets::count();
        $totalProducts = Product::count();
        $totalCategories = categories::count();

        // --- Monthly revenue for chart (last 6 months) ---
        $monthlyRevenue = [];
        for ($i = 5; $i >= 0; $i--) {
            $date = now()->subMonths($i);
            $monthlyRevenue[] = [
                'month' => $date->format('M Y'),
                'revenue' => (float) Order::whereMonth('created_at', $date->month)
                    ->whereYear('created_at', $date->year)
                    ->where('payment_status', 'paid')
                    ->sum('total'),
            ];
        }

        return response()->json([
            'status' => true,
            'data' => [
                'revenue' => [
                    'today' => (float) $revenueToday,
                    'week' => (float) $revenueWeek,
                    'month' => (float) $revenueMonth,
                    'year' => (float) $revenueYear,
                ],
                'orders' => [
                    'total' => $totalOrders,
                    'by_status' => $ordersByStatus,
                ],
                'top_selling_pets' => $topPets,
                'low_stock_alerts' => [
                    'pets' => $lowStockPets,
                    'products' => $lowStockProducts,
                ],
                'recent_orders' => $recentOrders,
                'customers' => [
                    'total' => $totalCustomers,
                    'new_this_month' => $newCustomersThisMonth,
                    'returning' => $returningCustomers,
                ],
                'summary' => [
                    'total_pets' => $totalPets,
                    'total_products' => $totalProducts,
                    'total_categories' => $totalCategories,
                ],
                'monthly_revenue' => $monthlyRevenue,
            ],
        ]);
    }
}
