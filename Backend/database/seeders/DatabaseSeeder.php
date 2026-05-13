<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\categories;
use App\Models\Breeds;
use App\Models\Pets;
use App\Models\Product;
use App\Models\Customer;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Coupon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // ─── Admin User ───
        User::create([
            'name' => 'Admin',
            'email' => 'admin@petshop.com',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => Hash::make('password'),
        ]);

        // ─── Categories ───
        $catData = [
            ['name' => 'Dogs', 'slug' => 'dogs', 'description' => 'All dog breeds and puppies', 'image' => '🐕'],
            ['name' => 'Cats', 'slug' => 'cats', 'description' => 'All cat breeds and kittens', 'image' => '🐱'],
            ['name' => 'Fish', 'slug' => 'fish', 'description' => 'Freshwater and saltwater fish', 'image' => '🐠'],
            ['name' => 'Birds', 'slug' => 'birds', 'description' => 'Parrots, canaries, finches', 'image' => '🐦'],
            ['name' => 'Reptiles', 'slug' => 'reptiles', 'description' => 'Lizards, snakes, turtles', 'image' => '🦎'],
            ['name' => 'Small Animals', 'slug' => 'small-animals', 'description' => 'Hamsters, rabbits, guinea pigs', 'image' => '🐹'],
        ];

        $categories = [];
        foreach ($catData as $c) {
            $categories[$c['name']] = categories::create($c);
        }

        // ─── Breeds ───
        $breedsData = [
            'Dogs' => ['Labrador Retriever', 'German Shepherd', 'Golden Retriever', 'Pomeranian', 'Beagle', 'Husky', 'Shih Tzu', 'Rottweiler', 'Pug', 'Doberman'],
            'Cats' => ['Persian', 'Siamese', 'British Shorthair', 'Maine Coon', 'Ragdoll', 'Bengal', 'Russian Blue', 'Sphynx'],
            'Fish' => ['Clownfish', 'Betta', 'Goldfish', 'Guppy', 'Angelfish', 'Tetra', 'Oscar', 'Discus', 'Arowana'],
            'Birds' => ['Indian Ringneck', 'Budgerigar', 'Cockatiel', 'Lovebird', 'Macaw', 'African Grey', 'Canary'],
            'Reptiles' => ['Leopard Gecko', 'Ball Python', 'Bearded Dragon', 'Red-eared Slider', 'Chameleon', 'Corn Snake'],
            'Small Animals' => ['Syrian Hamster', 'Dwarf Hamster', 'Holland Lop Rabbit', 'Guinea Pig', 'Chinchilla', 'Ferret'],
        ];

        $breeds = [];
        foreach ($breedsData as $catName => $breedNames) {
            foreach ($breedNames as $name) {
                $breeds[$name] = Breeds::create([
                    'pet_category_id' => $categories[$catName]->id,
                    'name' => $name,
                    'slug' => Str::slug($name),
                    'description' => "A popular {$catName} breed.",
                ]);
            }
        }

        // ─── Pets ───
        $petsData = [
            ['Bruno', 'Dogs', 'Golden Retriever', 24, 'male', 'Golden', 30, 25, 'large', 35000, 31500, 25000, 'PET-DOG-001', 2, 'excellent', true, 'moderate', true],
            ['Whiskers', 'Cats', 'Persian', 12, 'female', 'White', 4, 20, 'medium', 25000, null, 18000, 'PET-CAT-001', 3, 'good', true, 'high', true],
            ['Nemo', 'Fish', 'Clownfish', 6, 'male', 'Orange/White', 0.02, 5, 'small', 1500, null, 800, 'PET-FISH-001', 25, 'good', false, 'easy', false],
            ['Polly', 'Birds', 'Indian Ringneck', 36, 'male', 'Green', 0.12, 15, 'medium', 12000, 10200, 7000, 'PET-BIRD-001', 4, 'excellent', true, 'moderate', true],
            ['Max', 'Dogs', 'Labrador Retriever', 8, 'male', 'Chocolate', 22, 22, 'large', 28000, null, 20000, 'PET-DOG-002', 1, 'good', false, 'moderate', false],
            ['Luna', 'Cats', 'Siamese', 18, 'female', 'Seal Point', 3.5, 18, 'medium', 22000, 20900, 15000, 'PET-CAT-002', 2, 'excellent', true, 'moderate', true],
            ['Goldie', 'Fish', 'Goldfish', 4, 'unknown', 'Gold', 0.03, 4, 'small', 500, null, 200, 'PET-FISH-002', 50, 'good', false, 'easy', false],
            ['Rocky', 'Dogs', 'German Shepherd', 12, 'male', 'Black & Tan', 28, 24, 'large', 40000, null, 30000, 'PET-DOG-003', 1, 'excellent', true, 'high', true],
            ['Coco', 'Birds', 'Cockatiel', 24, 'female', 'Grey/Yellow', 0.09, 12, 'small', 8000, null, 4500, 'PET-BIRD-002', 6, 'good', true, 'easy', false],
            ['Scales', 'Reptiles', 'Leopard Gecko', 12, 'male', 'Yellow/Spotted', 0.06, 8, 'small', 6000, 5400, 3000, 'PET-REP-001', 3, 'good', false, 'easy', false],
            ['Bella', 'Dogs', 'Beagle', 6, 'female', 'Tricolor', 8, 14, 'medium', 20000, null, 14000, 'PET-DOG-004', 2, 'good', false, 'moderate', false],
            ['Bubbles', 'Fish', 'Betta', 3, 'male', 'Royal Blue', 0.005, 3, 'small', 800, null, 300, 'PET-FISH-003', 15, 'good', false, 'easy', true],
            ['Nibbles', 'Small Animals', 'Syrian Hamster', 4, 'female', 'Golden', 0.13, 5, 'small', 1200, null, 500, 'PET-SA-001', 8, 'good', false, 'easy', false],
            ['Shadow', 'Cats', 'Maine Coon', 36, 'male', 'Silver Tabby', 7, 25, 'large', 45000, null, 32000, 'PET-CAT-003', 1, 'excellent', true, 'moderate', true],
            ['Raja', 'Reptiles', 'Bearded Dragon', 24, 'male', 'Orange/Sand', 0.4, 18, 'medium', 15000, null, 9000, 'PET-REP-002', 2, 'good', false, 'moderate', false],
        ];

        $pets = [];
        foreach ($petsData as $p) {
            $pets[] = Pets::create([
                'name' => $p[0],
                'pet_category_id' => $categories[$p[1]]->id,
                'breed_id' => $breeds[$p[2]]->id,
                'slug' => Str::slug($p[0] . '-' . $p[2]),
                'age_months' => $p[3],
                'date_of_birth' => now()->subMonths($p[3]),
                'gender' => $p[4],
                'color' => $p[5],
                'weight_kg' => $p[6],
                'height_cm' => $p[7],
                'size' => $p[8],
                'price' => $p[9],
                'sale_price' => $p[10],
                'cost_price' => $p[11],
                'discount_percentage' => $p[10] ? round((1 - $p[10] / $p[9]) * 100) : 0,
                'sku' => $p[12],
                'stock_quantity' => $p[13],
                'minimum_stock_alert' => max(1, (int)($p[13] * 0.3)),
                'stock_status' => $p[13] > 3 ? 'in_stock' : ($p[13] > 0 ? 'low_stock' : 'out_of_stock'),
                'health_status' => $p[14],
                'is_vaccinated' => $p[15],
                'last_vaccination_date' => $p[15] ? now()->subMonths(2) : null,
                'care_level' => $p[16],
                'care_instructions' => "Standard care instructions for {$p[2]}.",
                'short_description' => "Beautiful {$p[2]} - {$p[0]}.",
                'full_description' => "{$p[0]} is a healthy {$p[2]} looking for a loving home. Well cared for with all necessary documentation.",
                'is_active' => true,
                'is_featured' => $p[17],
            ]);
        }

        // ─── Products (Supplies & Food) ───
        $productsData = [
            ['Royal Canin Dog Food 12kg', 'Food', 'royal-canin', 4500, null, 3200, 'PRD-FOOD-001', 50, 'Royal Canin'],
            ['Whiskas Cat Food 7kg', 'Food', 'whiskas-cat', 2800, 2520, 1800, 'PRD-FOOD-002', 35, 'Whiskas'],
            ['Pedigree Adult Dog Food 20kg', 'Food', 'pedigree-adult', 3200, null, 2400, 'PRD-FOOD-003', 25, 'Pedigree'],
            ['TetraBits Fish Food 300g', 'Food', 'tetrabits-fish', 650, null, 350, 'PRD-FOOD-004', 80, 'Tetra'],
            ['Kong Classic Dog Toy Large', 'Toys', 'kong-classic-lg', 1200, null, 600, 'PRD-TOY-001', 40, 'Kong'],
            ['Catit Senses Playground', 'Toys', 'catit-senses', 2500, 2250, 1500, 'PRD-TOY-002', 15, 'Catit'],
            ['Bird Swing Wooden Perch', 'Toys', 'bird-swing', 350, null, 150, 'PRD-TOY-003', 60, 'PetZone'],
            ['Premium Leather Dog Collar', 'Accessories', 'leather-collar', 800, null, 400, 'PRD-ACC-001', 100, 'PetZone'],
            ['Cat Litter Tray with Hood', 'Accessories', 'cat-litter-tray', 1500, null, 900, 'PRD-ACC-002', 20, 'Catit'],
            ['Aquarium Filter 1000L/H', 'Accessories', 'aqua-filter', 3500, 3150, 2000, 'PRD-ACC-003', 12, 'Eheim'],
            ['Dog Shampoo Organic 500ml', 'Medicine', 'organic-shampoo', 450, null, 200, 'PRD-MED-001', 55, 'PetNaturals'],
            ['Flea & Tick Drops - Dogs', 'Medicine', 'flea-drops-dog', 1200, null, 700, 'PRD-MED-002', 30, 'Frontline'],
            ['Cat Deworming Tablet Pack', 'Medicine', 'cat-deworm', 350, null, 150, 'PRD-MED-003', 45, 'Drontal'],
            ['Glass Aquarium 3ft with LED', 'Aquariums', 'aquarium-3ft', 8500, 7650, 5000, 'PRD-AQ-001', 8, 'Boyu'],
            ['Hamster Cage Deluxe', 'Cages', 'hamster-cage', 3200, null, 1800, 'PRD-CAGE-001', 10, 'Ferplast'],
            ['Parrot Cage Large Standing', 'Cages', 'parrot-cage-lg', 12000, 10800, 7000, 'PRD-CAGE-002', 5, 'Hagen'],
            ['Reptile Heat Lamp 75W', 'Accessories', 'heat-lamp', 950, null, 450, 'PRD-ACC-004', 25, 'Exo Terra'],
            ['Dog Bed Orthopedic XL', 'Accessories', 'dog-bed-xl', 4500, null, 2500, 'PRD-ACC-005', 18, 'PetZone'],
            ['Automatic Pet Feeder WiFi', 'Accessories', 'auto-feeder', 6500, 5850, 3800, 'PRD-ACC-006', 7, 'PetSafe'],
            ['Cat Scratching Post Tower', 'Accessories', 'cat-tower', 5500, null, 3000, 'PRD-ACC-007', 12, 'Catit'],
        ];

        $products = [];
        foreach ($productsData as $p) {
            $products[] = Product::create([
                'name' => $p[0],
                'slug' => $p[2],
                'sku' => $p[6],
                'category_id' => $categories[array_keys($categories)[0]]->id,
                'brand' => $p[8],
                'product_type' => 'simple',
                'price' => $p[3],
                'sale_price' => $p[4],
                'cost_price' => $p[5],
                'stock_quantity' => $p[7],
                'stock_status' => $p[7] > 10 ? 'in_stock' : ($p[7] > 0 ? 'low_stock' : 'out_of_stock'),
                'minimum_stock_alert' => 5,
                'short_description' => "Premium quality {$p[0]} for your pet.",
                'full_description' => "High quality {$p[0]}. Trusted brand, great for everyday use.",
                'is_active' => true,
                'is_featured' => rand(0, 1) === 1,
            ]);
        }

        // ─── Customers ───
        $customersData = [
            ['Rahul Sharma', 'rahul.sharma@email.com', '+91 98765 43210', '1990-05-15', 'active'],
            ['Priya Menon', 'priya.menon@email.com', '+91 87654 32109', '1988-11-22', 'active'],
            ['Amit Patel', 'amit.patel@email.com', '+91 76543 21098', '1992-03-08', 'active'],
            ['Sneha Reddy', 'sneha.reddy@email.com', '+91 65432 10987', '1995-07-14', 'active'],
            ['Vikram Singh', 'vikram.singh@email.com', '+91 54321 09876', '1985-01-30', 'active'],
            ['Ananya Gupta', 'ananya.gupta@email.com', '+91 43210 98765', '1993-09-18', 'active'],
            ['Rajesh Kumar', 'rajesh.kumar@email.com', '+91 32109 87654', '1987-12-05', 'active'],
            ['Meera Nair', 'meera.nair@email.com', '+91 21098 76543', '1991-06-25', 'inactive'],
            ['Karthik Iyer', 'karthik.iyer@email.com', '+91 10987 65432', '1989-04-11', 'active'],
            ['Divya Choudhary', 'divya.c@email.com', '+91 09876 54321', '1994-08-20', 'active'],
        ];

        $customers = [];
        foreach ($customersData as $c) {
            $customers[] = Customer::create([
                'name' => $c[0],
                'email' => $c[1],
                'phone' => $c[2],
                'date_of_birth' => $c[3],
                'status' => $c[4],
                'billing_address' => [
                    'street' => rand(1, 999) . ' MG Road',
                    'city' => ['Mumbai', 'Chennai', 'Bangalore', 'Delhi', 'Kolkata'][rand(0, 4)],
                    'state' => ['Maharashtra', 'Tamil Nadu', 'Karnataka', 'Delhi', 'West Bengal'][rand(0, 4)],
                    'pincode' => '5' . rand(10000, 99999),
                    'country' => 'India',
                ],
                'shipping_address' => [
                    'street' => rand(1, 999) . ' Anna Salai',
                    'city' => ['Mumbai', 'Chennai', 'Bangalore', 'Delhi', 'Hyderabad'][rand(0, 4)],
                    'state' => ['Maharashtra', 'Tamil Nadu', 'Karnataka', 'Delhi', 'Telangana'][rand(0, 4)],
                    'pincode' => '6' . rand(10000, 99999),
                    'country' => 'India',
                ],
            ]);
        }

        // ─── Orders ───
        $statuses = ['pending_payment', 'payment_confirmed', 'processing', 'packed', 'shipped', 'delivered', 'completed', 'cancelled', 'refunded'];
        $paymentMethods = ['cod', 'stripe', 'paypal', 'bank_transfer'];

        for ($i = 1; $i <= 15; $i++) {
            $customer = $customers[array_rand($customers)];
            $status = $statuses[array_rand($statuses)];
            $isPaid = in_array($status, ['payment_confirmed', 'processing', 'packed', 'shipped', 'delivered', 'completed']);

            // Pick 1-3 random items (pets or products)
            $itemCount = rand(1, 3);
            $orderItems = [];
            $subtotal = 0;

            for ($j = 0; $j < $itemCount; $j++) {
                if (rand(0, 1) && count($pets) > 0) {
                    $pet = $pets[array_rand($pets)];
                    $price = (float) $pet->price;
                    $orderItems[] = [
                        'name' => $pet->name . ' (' . $pet->sku . ')',
                        'price' => $price,
                        'quantity' => 1,
                        'subtotal' => $price,
                        'itemable_type' => 'App\\Models\\Pets',
                        'itemable_id' => $pet->id,
                    ];
                    $subtotal += $price;
                } else {
                    $product = $products[array_rand($products)];
                    $qty = rand(1, 3);
                    $price = (float) ($product->sale_price ?? $product->price);
                    $orderItems[] = [
                        'name' => $product->name,
                        'price' => $price,
                        'quantity' => $qty,
                        'subtotal' => $price * $qty,
                        'itemable_type' => 'App\\Models\\Product',
                        'itemable_id' => $product->id,
                    ];
                    $subtotal += $price * $qty;
                }
            }

            $discount = rand(0, 1) ? round($subtotal * rand(5, 15) / 100, 2) : 0;
            $shipping = rand(0, 1) ? rand(50, 200) : 0;
            $tax = round($subtotal * 0.18, 2); // 18% GST
            $total = $subtotal - $discount + $shipping + $tax;

            $createdAt = now()->subDays(rand(0, 90));
            $order = Order::create([
                'order_number' => sprintf('PS-2026-%05d', $i),
                'customer_id' => $customer->id,
                'status' => $status,
                'payment_method' => $paymentMethods[array_rand($paymentMethods)],
                'payment_status' => $isPaid ? 'paid' : ($status === 'cancelled' ? 'failed' : 'pending'),
                'subtotal' => $subtotal,
                'discount' => $discount,
                'shipping_cost' => $shipping,
                'tax' => $tax,
                'total' => $total,
                'billing_address' => $customer->billing_address,
                'shipping_address' => $customer->shipping_address,
                'customer_notes' => rand(0, 1) ? 'Please handle with care.' : null,
                'admin_notes' => rand(0, 1) ? 'VIP customer - priority processing.' : null,
                'carrier' => in_array($status, ['shipped', 'delivered', 'completed']) ? ['BlueDart', 'DTDC', 'Delhivery'][rand(0, 2)] : null,
                'tracking_number' => in_array($status, ['shipped', 'delivered', 'completed']) ? 'TRK' . rand(100000, 999999) : null,
                'shipped_at' => in_array($status, ['shipped', 'delivered', 'completed']) ? $createdAt->copy()->addDays(rand(1, 3)) : null,
                'delivered_at' => in_array($status, ['delivered', 'completed']) ? $createdAt->copy()->addDays(rand(4, 7)) : null,
                'created_at' => $createdAt,
                'updated_at' => $createdAt,
            ]);

            foreach ($orderItems as $item) {
                $order->items()->create($item);
            }
        }

        // ─── Coupons ───
        $couponsData = [
            ['WELCOME10', 'percentage', 10, 500, 1000, 100, 12, true],
            ['FLAT500', 'fixed', 500, 2000, null, 50, 5, true],
            ['PETLOVE20', 'percentage', 20, 1000, 2000, 200, 30, true],
            ['SUMMER15', 'percentage', 15, 800, 1500, null, 0, true],
            ['EXPIRED50', 'fixed', 50, null, null, 10, 10, false],
        ];

        foreach ($couponsData as $c) {
            Coupon::create([
                'code' => $c[0],
                'type' => $c[1],
                'amount' => $c[2],
                'min_purchase' => $c[3],
                'max_discount' => $c[4],
                'usage_limit' => $c[5],
                'used_count' => $c[6],
                'is_active' => $c[7],
                'expires_at' => $c[7] ? now()->addMonths(3) : now()->subMonth(),
            ]);
        }
    }
}
