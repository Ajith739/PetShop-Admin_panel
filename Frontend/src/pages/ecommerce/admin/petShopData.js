// Centralized Pet Shop Mock Data
// All data is pet-shop specific — no generic e-commerce items

export const petCategories = ['Pet Food', 'Toys', 'Accessories', 'Grooming', 'Healthcare', 'Aquarium', 'Treats', 'Training'];
export const petBrands = ['Royal Canin', 'Pedigree', 'Whiskas', 'Drools', 'KONG', 'Fluval', 'Catit', 'Wahl', 'Flexi', 'PetMate', 'Seresto', 'PetBed Co'];
export const petTypes = ['Dog', 'Cat', 'Fish', 'Bird', 'Reptile', 'Small Animal'];

export const productsData = [
  { id: 1, name: 'Royal Canin Medium Adult Dry Dog Food - 15kg', price: 4299, salePrice: 3899, category: 'Pet Food', brand: 'Royal Canin', tags: ['Dog', 'Food', 'Adult', 'Medium Breed', 'Premium'], stock: 85, sku: 'RC-MDA-15K', weight: '15kg', image: '🐕', status: 'in-stock', petType: 'Dog', starred: false, publishedOn: 'May 1, 10:45 AM' },
  { id: 2, name: 'Whiskas Tuna in Jelly Wet Cat Food - 85g x 12', price: 780, salePrice: null, category: 'Pet Food', brand: 'Whiskas', tags: ['Cat', 'Wet Food', 'Tuna', 'Adult', 'Jelly'], stock: 230, sku: 'WK-TJ-12P', weight: '1.02kg', image: '🐱', status: 'in-stock', petType: 'Cat', starred: true, publishedOn: 'Apr 28, 7:36 PM' },
  { id: 3, name: 'Pedigree Dentastix Large Breed - 28 Pack', price: 899, salePrice: 749, category: 'Treats', brand: 'Pedigree', tags: ['Dog', 'Treats', 'Dental', 'Oral Care', 'Large Breed'], stock: 156, sku: 'PD-DS-28L', weight: '1.08kg', image: '🦴', status: 'in-stock', petType: 'Dog', starred: false, publishedOn: 'Apr 25, 8:16 AM' },
  { id: 4, name: 'KONG Classic Dog Toy - Large Natural Rubber', price: 1250, salePrice: null, category: 'Toys', brand: 'KONG', tags: ['Dog', 'Toy', 'Chew', 'Durable', 'Large'], stock: 64, sku: 'KG-CL-LG', weight: '320g', image: '🧸', status: 'in-stock', petType: 'Dog', starred: false, publishedOn: 'Apr 20, 6:39 PM' },
  { id: 5, name: 'Wahl Professional Pet Grooming Kit - Complete Set', price: 2499, salePrice: 2199, category: 'Grooming', brand: 'Wahl', tags: ['Grooming', 'Clipper', 'Dog', 'Professional', 'Kit'], stock: 28, sku: 'WH-PGK-01', weight: '1.5kg', image: '✂️', status: 'in-stock', petType: 'Dog', starred: false, publishedOn: 'Apr 18, 5:32 PM' },
  { id: 6, name: 'PetMate Deluxe Airline Approved Carrier - Medium', price: 3899, salePrice: null, category: 'Accessories', brand: 'PetMate', tags: ['Carrier', 'Travel', 'Cat', 'Dog', 'Airline'], stock: 15, sku: 'PM-AC-MED', weight: '2.8kg', image: '🧳', status: 'in-stock', petType: 'Dog', starred: false, publishedOn: 'Apr 15, 11:34 PM' },
  { id: 7, name: 'Fluval FX6 Aquarium Canister Filter', price: 18500, salePrice: 16999, category: 'Aquarium', brand: 'Fluval', tags: ['Fish', 'Filter', 'Aquarium', 'Canister', 'Premium'], stock: 8, sku: 'FL-FX6-01', weight: '8.5kg', image: '🐠', status: 'in-stock', petType: 'Fish', starred: false, publishedOn: 'Apr 12, 7:45 AM' },
  { id: 8, name: 'PetBed Orthopedic Memory Foam Dog Bed - XL', price: 3499, salePrice: null, category: 'Accessories', brand: 'PetBed Co', tags: ['Dog', 'Bed', 'Orthopedic', 'Memory Foam', 'Washable'], stock: 42, sku: 'PB-OF-XL', weight: '4.2kg', image: '🛏️', status: 'in-stock', petType: 'Dog', starred: false, publishedOn: 'Apr 10, 12:27 PM' },
  { id: 9, name: 'Flexi Giant Retractable Dog Leash - 26ft', price: 1899, salePrice: 1699, category: 'Accessories', brand: 'Flexi', tags: ['Dog', 'Leash', 'Retractable', 'Large', 'Outdoor'], stock: 0, sku: 'FL-RL-26', weight: '450g', image: '🦮', status: 'out-of-stock', petType: 'Dog', starred: false, publishedOn: 'Apr 8, 9:39 AM' },
  { id: 10, name: 'Catit Vesper Cat Scratching Post with Hammock', price: 5200, salePrice: null, category: 'Accessories', brand: 'Catit', tags: ['Cat', 'Scratching', 'Post', 'Furniture', 'Premium'], stock: 12, sku: 'CT-VSP-01', weight: '6.5kg', image: '🐈', status: 'in-stock', petType: 'Cat', starred: false, publishedOn: 'Apr 5, 3:49 PM' },
  { id: 11, name: 'Seresto Flea & Tick Collar - Large Dogs', price: 2799, salePrice: 2499, category: 'Healthcare', brand: 'Seresto', tags: ['Dog', 'Flea', 'Tick', 'Collar', 'Healthcare'], stock: 3, sku: 'SR-FTC-LG', weight: '85g', image: '💊', status: 'in-stock', petType: 'Dog', starred: false, publishedOn: 'Apr 2, 5:00 PM' },
  { id: 12, name: 'Drools Optimum Performance Adult Dog Food - 20kg', price: 3599, salePrice: 3199, category: 'Pet Food', brand: 'Drools', tags: ['Dog', 'Food', 'Adult', 'Performance', 'Large Pack'], stock: 67, sku: 'DR-OP-20K', weight: '20kg', image: '🐕‍🦺', status: 'on-sale', petType: 'Dog', starred: true, publishedOn: 'Mar 30, 2:15 PM' },
];

export const customersData = [
  { id: 1, name: 'Priya Sharma', email: 'priya.sharma@gmail.com', phone: '+91 98765 43210', avatar: '/assets/img/team/32.webp', city: 'Chennai', petOwnerType: 'Dog Owner', petsOwned: [{ name: 'Bruno', type: 'Golden Retriever' }], totalOrders: 89, totalSpent: 23987, loyaltyTier: 'Gold', lastSeen: '34 min ago', lastOrder: 'May 5, 12:56 PM', joinDate: 'Jan 15, 2024', address: '42 Anna Nagar, Chennai 600040', status: 'active' },
  { id: 2, name: 'Rahul Patel', email: 'rahul.patel@yahoo.com', phone: '+91 87654 32109', avatar: '', city: 'Mumbai', petOwnerType: 'Cat Owner', petsOwned: [{ name: 'Whiskers', type: 'Persian' }], totalOrders: 76, totalSpent: 21567, loyaltyTier: 'Gold', lastSeen: '6 hours ago', lastOrder: 'May 3, 2:28 PM', joinDate: 'Feb 20, 2024', address: '15 Bandra West, Mumbai 400050', status: 'active' },
  { id: 3, name: 'Ananya Krishnan', email: 'ananya.k@hotmail.com', phone: '+91 76543 21098', avatar: '/assets/img/team/35.webp', city: 'Bangalore', petOwnerType: 'Dog Owner', petsOwned: [{ name: 'Max', type: 'Labrador' }, { name: 'Bella', type: 'Beagle' }], totalOrders: 69, totalSpent: 19872, loyaltyTier: 'Silver', lastSeen: '43 min ago', lastOrder: 'May 1, 12:56 PM', joinDate: 'Mar 10, 2024', address: '88 Koramangala, Bangalore 560034', status: 'active' },
  { id: 4, name: 'Vikram Singh', email: 'vikram.s@gmail.com', phone: '+91 65432 10987', avatar: '/assets/img/team/57.webp', city: 'Delhi', petOwnerType: 'Fish Owner', petsOwned: [{ name: 'Nemo', type: 'Clownfish' }], totalOrders: 67, totalSpent: 17996, loyaltyTier: 'Silver', lastSeen: '2 hours ago', lastOrder: 'Apr 28, 4:07 AM', joinDate: 'Jan 5, 2024', address: '23 Vasant Kunj, Delhi 110070', status: 'active' },
  { id: 5, name: 'Sneha Reddy', email: 'sneha.reddy@outlook.com', phone: '+91 54321 09876', avatar: '/assets/img/team/58.webp', city: 'Hyderabad', petOwnerType: 'Dog Owner', petsOwned: [{ name: 'Rocky', type: 'German Shepherd' }], totalOrders: 61, totalSpent: 16785, loyaltyTier: 'Silver', lastSeen: '5 days ago', lastOrder: 'Apr 25, 7:28 PM', joinDate: 'Apr 1, 2024', address: '56 Jubilee Hills, Hyderabad 500033', status: 'active' },
  { id: 6, name: 'Meera Iyer', email: 'meera.iyer@gmail.com', phone: '+91 43210 98765', avatar: '/assets/img/team/59.webp', city: 'Pune', petOwnerType: 'Cat Owner', petsOwned: [{ name: 'Luna', type: 'Siamese' }], totalOrders: 58, totalSpent: 14956, loyaltyTier: 'Bronze', lastSeen: '2 weeks ago', lastOrder: 'Apr 20, 10:16 AM', joinDate: 'May 15, 2024', address: '34 Koregaon Park, Pune 411001', status: 'active' },
  { id: 7, name: 'Arjun Nair', email: 'arjun.nair@gmail.com', phone: '+91 32109 87654', avatar: '', city: 'Kochi', petOwnerType: 'Bird Owner', petsOwned: [{ name: 'Polly', type: 'Indian Ringneck' }], totalOrders: 52, totalSpent: 12509, loyaltyTier: 'Bronze', lastSeen: '4 days ago', lastOrder: 'Apr 15, 5:43 PM', joinDate: 'Jun 20, 2024', address: '78 Marine Drive, Kochi 682031', status: 'active' },
  { id: 8, name: 'Divya Menon', email: 'divya.m@gmail.com', phone: '+91 21098 76543', avatar: '/assets/img/team/31.webp', city: 'Chennai', petOwnerType: 'Dog Owner', petsOwned: [{ name: 'Charlie', type: 'Pomeranian' }], totalOrders: 49, totalSpent: 11003, loyaltyTier: 'Bronze', lastSeen: '6 min ago', lastOrder: 'Apr 12, 2:09 AM', joinDate: 'Jul 10, 2024', address: '12 T Nagar, Chennai 600017', status: 'active' },
  { id: 9, name: 'Karthik Rajan', email: 'karthik.r@live.com', phone: '+91 10987 65432', avatar: '/assets/img/team/33.webp', city: 'Bangalore', petOwnerType: 'Dog Owner', petsOwned: [{ name: 'Buddy', type: 'Indie' }], totalOrders: 44, totalSpent: 7897, loyaltyTier: 'Bronze', lastSeen: '56 min ago', lastOrder: 'Apr 8, 3:22 PM', joinDate: 'Aug 5, 2024', address: '45 Indiranagar, Bangalore 560038', status: 'active' },
  { id: 10, name: 'Lakshmi Pillai', email: 'lakshmi.p@gmail.com', phone: '+91 98712 34567', avatar: '/assets/img/team/34.webp', city: 'Trivandrum', petOwnerType: 'Cat Owner', petsOwned: [{ name: 'Milo', type: 'British Shorthair' }], totalOrders: 37, totalSpent: 7781, loyaltyTier: 'Bronze', lastSeen: 'Yesterday', lastOrder: 'Apr 5, 8:49 AM', joinDate: 'Sep 1, 2024', address: '67 Pattom, Trivandrum 695004', status: 'active' },
  { id: 11, name: 'Arun Kumar', email: 'arun.k@example.com', phone: '+91 87612 34567', avatar: '/assets/img/team/29.webp', city: 'Coimbatore', petOwnerType: 'Dog Owner', petsOwned: [{ name: 'Simba', type: 'Husky' }], totalOrders: 33, totalSpent: 7825, loyaltyTier: 'Bronze', lastSeen: '1 hour ago', lastOrder: 'Apr 1, 8:00 AM', joinDate: 'Oct 15, 2024', address: '89 RS Puram, Coimbatore 641002', status: 'active' },
  { id: 12, name: 'Nisha Gupta', email: 'nisha.g@example.com', phone: '+91 76512 34567', avatar: '/assets/img/team/3.webp', city: 'Jaipur', petOwnerType: 'Reptile Owner', petsOwned: [{ name: 'Scales', type: 'Leopard Gecko' }], totalOrders: 45, totalSpent: 18975, loyaltyTier: 'Silver', lastSeen: '6 hours ago', lastOrder: 'Mar 28, 12:00 PM', joinDate: 'Nov 1, 2024', address: '23 C-Scheme, Jaipur 302001', status: 'inactive' },
];

export const ordersData = [
  { id: '#PS-2453', total: 4648, customer: { avatar: '/assets/img/team/32.webp', name: 'Priya Sharma' }, paymentStatus: { label: 'Paid', type: 'badge-phoenix-success', icon: 'check' }, fulfillmentStatus: { label: 'Delivered', type: 'badge-phoenix-success', icon: 'check' }, deliveryType: 'Standard shipping', date: 'May 5, 12:56 PM', items: [{ name: 'Royal Canin Medium Adult 15kg', qty: 1, price: 3899 }, { name: 'Pedigree Dentastix 28 Pack', qty: 1, price: 749 }] },
  { id: '#PS-2452', total: 7264, customer: { avatar: '', name: 'Rahul Patel' }, paymentStatus: { label: 'Paid', type: 'badge-phoenix-success', icon: 'check' }, fulfillmentStatus: { label: 'Ready to pickup', type: 'badge-phoenix-info', icon: 'info' }, deliveryType: 'Store pickup', date: 'May 3, 2:28 PM', items: [{ name: 'Catit Vesper Scratching Post', qty: 1, price: 5200 }, { name: 'Whiskas Tuna 12 Pack', qty: 2, price: 780 }, { name: 'KONG Classic Large', qty: 1, price: 1250 }] },
  { id: '#PS-2451', total: 2199, customer: { avatar: '/assets/img/team/35.webp', name: 'Ananya Krishnan' }, paymentStatus: { label: 'Pending', type: 'badge-phoenix-warning', icon: 'clock' }, fulfillmentStatus: { label: 'Processing', type: 'badge-phoenix-warning', icon: 'clock' }, deliveryType: 'Express delivery', date: 'May 1, 12:56 PM', items: [{ name: 'Wahl Grooming Kit', qty: 1, price: 2199 }] },
  { id: '#PS-2450', total: 16999, customer: { avatar: '/assets/img/team/57.webp', name: 'Vikram Singh' }, paymentStatus: { label: 'Paid', type: 'badge-phoenix-success', icon: 'check' }, fulfillmentStatus: { label: 'Shipped', type: 'badge-phoenix-info', icon: 'info' }, deliveryType: 'Standard shipping', date: 'Apr 28, 4:07 AM', items: [{ name: 'Fluval FX6 Canister Filter', qty: 1, price: 16999 }] },
  { id: '#PS-2449', total: 9562, customer: { avatar: '/assets/img/team/58.webp', name: 'Sneha Reddy' }, paymentStatus: { label: 'Failed', type: 'badge-phoenix-danger', icon: 'x' }, fulfillmentStatus: { label: 'Cancelled', type: 'badge-phoenix-secondary', icon: 'x' }, deliveryType: 'Express delivery', date: 'Apr 25, 7:28 PM', items: [{ name: 'PetMate Carrier Medium', qty: 1, price: 3899 }, { name: 'PetBed Orthopedic XL', qty: 1, price: 3499 }, { name: 'Wahl Grooming Kit', qty: 1, price: 2199 }] },
  { id: '#PS-2448', total: 4698, customer: { avatar: '/assets/img/team/59.webp', name: 'Meera Iyer' }, paymentStatus: { label: 'Paid', type: 'badge-phoenix-success', icon: 'check' }, fulfillmentStatus: { label: 'Delivered', type: 'badge-phoenix-success', icon: 'check' }, deliveryType: 'Local delivery', date: 'Apr 20, 10:16 AM', items: [{ name: 'Seresto Flea Collar Large', qty: 1, price: 2499 }, { name: 'Wahl Grooming Kit', qty: 1, price: 2199 }] },
  { id: '#PS-2447', total: 953, customer: { avatar: '', name: 'Arjun Nair' }, paymentStatus: { label: 'Pending', type: 'badge-phoenix-warning', icon: 'clock' }, fulfillmentStatus: { label: 'Processing', type: 'badge-phoenix-warning', icon: 'clock' }, deliveryType: 'Cash on delivery', date: 'Apr 15, 5:43 PM', items: [{ name: 'Whiskas Tuna 12 Pack', qty: 1, price: 780 }] },
  { id: '#PS-2446', total: 1699, customer: { avatar: '/assets/img/team/31.webp', name: 'Divya Menon' }, paymentStatus: { label: 'Paid', type: 'badge-phoenix-success', icon: 'check' }, fulfillmentStatus: { label: 'Delivered', type: 'badge-phoenix-success', icon: 'check' }, deliveryType: 'Standard shipping', date: 'Apr 12, 2:09 AM', items: [{ name: 'Flexi Retractable Leash 26ft', qty: 1, price: 1699 }] },
  { id: '#PS-2445', total: 3927, customer: { avatar: '/assets/img/team/33.webp', name: 'Karthik Rajan' }, paymentStatus: { label: 'Paid', type: 'badge-phoenix-success', icon: 'check' }, fulfillmentStatus: { label: 'Shipped', type: 'badge-phoenix-info', icon: 'info' }, deliveryType: 'Cash on delivery', date: 'Apr 8, 3:22 PM', items: [{ name: 'Royal Canin Medium Adult 15kg', qty: 1, price: 3899 }] },
  { id: '#PS-2444', total: 5937, customer: { avatar: '/assets/img/team/34.webp', name: 'Lakshmi Pillai' }, paymentStatus: { label: 'Refunded', type: 'badge-phoenix-secondary', icon: 'x' }, fulfillmentStatus: { label: 'Returned', type: 'badge-phoenix-secondary', icon: 'x' }, deliveryType: 'Store pickup', date: 'Apr 5, 8:49 AM', items: [{ name: 'Catit Vesper Scratching Post', qty: 1, price: 5200 }, { name: 'Whiskas Tuna 12 Pack', qty: 1, price: 780 }] },
  { id: '#PS-2443', total: 1250, customer: { avatar: '/assets/img/team/29.webp', name: 'Arun Kumar' }, paymentStatus: { label: 'Paid', type: 'badge-phoenix-success', icon: 'check' }, fulfillmentStatus: { label: 'Delivered', type: 'badge-phoenix-success', icon: 'check' }, deliveryType: 'Cash on delivery', date: 'Apr 1, 4:35 PM', items: [{ name: 'KONG Classic Large', qty: 1, price: 1250 }] },
  { id: '#PS-2442', total: 6398, customer: { avatar: '/assets/img/team/3.webp', name: 'Nisha Gupta' }, paymentStatus: { label: 'Pending', type: 'badge-phoenix-warning', icon: 'clock' }, fulfillmentStatus: { label: 'Pending', type: 'badge-phoenix-warning', icon: 'clock' }, deliveryType: 'Standard shipping', date: 'Mar 28, 12:00 PM', items: [{ name: 'Drools Performance 20kg', qty: 1, price: 3199 }, { name: 'Drools Performance 20kg', qty: 1, price: 3199 }] },
];

export const refundsData = [
  { id: 'RF-1001', orderId: '#PS-2444', customer: 'Lakshmi Pillai', amount: 5200, reason: 'Product damaged during delivery', status: 'Approved', date: 'Apr 8, 2:30 PM', items: 'Catit Vesper Scratching Post' },
  { id: 'RF-1002', orderId: '#PS-2449', customer: 'Sneha Reddy', amount: 3899, reason: 'Wrong size ordered', status: 'Processing', date: 'Apr 28, 10:00 AM', items: 'PetMate Carrier Medium' },
  { id: 'RF-1003', orderId: '#PS-2449', customer: 'Sneha Reddy', amount: 3499, reason: 'Pet didn\'t like the product', status: 'Pending', date: 'Apr 29, 3:15 PM', items: 'PetBed Orthopedic XL' },
  { id: 'RF-1004', orderId: '#PS-2451', customer: 'Ananya Krishnan', amount: 2199, reason: 'Product not as described', status: 'Rejected', date: 'May 3, 9:00 AM', items: 'Wahl Grooming Kit' },
  { id: 'RF-1005', orderId: '#PS-2447', customer: 'Arjun Nair', amount: 780, reason: 'Expired product received', status: 'Approved', date: 'Apr 18, 11:30 AM', items: 'Whiskas Tuna 12 Pack' },
  { id: 'RF-1006', orderId: '#PS-2442', customer: 'Nisha Gupta', amount: 3199, reason: 'Allergic reaction in pet', status: 'Pending', date: 'Apr 2, 4:45 PM', items: 'Drools Performance 20kg' },
];

// Helper: format currency as ₹
export function formatCurrency(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// Helper: get badge class for status
export function getStatusBadgeClass(status) {
  const map = {
    'Paid': 'badge-phoenix-success',
    'Complete': 'badge-phoenix-success',
    'Delivered': 'badge-phoenix-success',
    'Approved': 'badge-phoenix-success',
    'Pending': 'badge-phoenix-warning',
    'Processing': 'badge-phoenix-warning',
    'Shipped': 'badge-phoenix-info',
    'Ready to pickup': 'badge-phoenix-info',
    'Failed': 'badge-phoenix-danger',
    'Rejected': 'badge-phoenix-danger',
    'Cancelled': 'badge-phoenix-secondary',
    'Refunded': 'badge-phoenix-secondary',
    'Returned': 'badge-phoenix-secondary',
  };
  return map[status] || 'badge-phoenix-secondary';
}

// Helper: get feather icon for status
export function getStatusIcon(status) {
  const map = {
    'Paid': 'check', 'Complete': 'check', 'Delivered': 'check', 'Approved': 'check',
    'Pending': 'clock', 'Processing': 'clock',
    'Shipped': 'info', 'Ready to pickup': 'info',
    'Failed': 'x', 'Rejected': 'x', 'Cancelled': 'x', 'Refunded': 'x', 'Returned': 'x',
  };
  return map[status] || 'x';
}
