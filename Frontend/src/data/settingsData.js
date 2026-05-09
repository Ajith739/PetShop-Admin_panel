// ─── Settings Mock Data ───
export const generalSettings = {
  siteName: 'PetShop', tagline: 'Your One-Stop Pet Destination',
  contactEmail: 'support@petshop.in', contactPhone: '+91 44 2345 6789',
  address: '42 Anna Nagar, Chennai 600040, Tamil Nadu, India',
  currency: 'INR (₹)', timezone: 'Asia/Kolkata (IST)', logo: '/assets/img/icons/logo.png',
};

export const paymentGateways = [
  { id: 1, name: 'Razorpay', icon: '💳', enabled: true, mode: 'Live', keyId: 'rzp_live_xxxx****', description: 'UPI, cards, net banking' },
  { id: 2, name: 'Stripe', icon: '💳', enabled: false, mode: 'Test', keyId: 'pk_test_xxxx****', description: 'International cards' },
  { id: 3, name: 'PayPal', icon: '💰', enabled: false, mode: 'Sandbox', keyId: 'sb-xxxx****', description: 'PayPal checkout' },
  { id: 4, name: 'Cash on Delivery', icon: '💵', enabled: true, mode: 'N/A', keyId: 'N/A', description: 'Pay on arrival' },
];

export const shippingMethods = [
  { id: 1, name: 'Standard Shipping', rate: 99, freeAbove: 2000, regions: 'All India', estimatedDays: '3-5 days', status: 'Active' },
  { id: 2, name: 'Express Delivery', rate: 249, freeAbove: 5000, regions: 'Metro Cities', estimatedDays: '1-2 days', status: 'Active' },
  { id: 3, name: 'Local Pickup', rate: 0, freeAbove: 0, regions: 'Chennai Only', estimatedDays: 'Same Day', status: 'Active' },
  { id: 4, name: 'Free Shipping', rate: 0, freeAbove: 0, regions: 'All India', estimatedDays: '5-7 days', status: 'Active' },
  { id: 5, name: 'Pet Express (Live Animals)', rate: 499, freeAbove: 50000, regions: 'Selected Cities', estimatedDays: '1-3 days', status: 'Active' },
];

export const taxSettings = [
  { id: 1, name: 'GST - Pet Food', rate: 18, type: 'Inclusive', category: 'Pet Food' },
  { id: 2, name: 'GST - Accessories', rate: 18, type: 'Inclusive', category: 'Accessories' },
  { id: 3, name: 'GST - Healthcare', rate: 12, type: 'Inclusive', category: 'Healthcare' },
  { id: 4, name: 'GST - Live Animals', rate: 0, type: 'Exempt', category: 'Pets' },
  { id: 5, name: 'GST - Aquarium Equipment', rate: 18, type: 'Inclusive', category: 'Aquarium' },
];

export const emailTemplates = [
  { id: 1, name: 'Order Confirmation', subject: 'Order #{order_id} Confirmed!', trigger: 'Order Placed', status: 'Active', lastEdited: 'Apr 15, 2026' },
  { id: 2, name: 'Shipping Notification', subject: 'Order #{order_id} Shipped!', trigger: 'Order Shipped', status: 'Active', lastEdited: 'Apr 15, 2026' },
  { id: 3, name: 'Delivery Confirmation', subject: 'Order #{order_id} Delivered!', trigger: 'Order Delivered', status: 'Active', lastEdited: 'Apr 10, 2026' },
  { id: 4, name: 'Password Reset', subject: 'Reset Your Password', trigger: 'Password Reset', status: 'Active', lastEdited: 'Mar 20, 2026' },
  { id: 5, name: 'Welcome Email', subject: 'Welcome to PetShop! 🐾', trigger: 'New Registration', status: 'Active', lastEdited: 'Mar 15, 2026' },
  { id: 6, name: 'Review Request', subject: 'How was your experience?', trigger: '24h After Delivery', status: 'Active', lastEdited: 'Apr 5, 2026' },
  { id: 7, name: 'Low Stock Alert', subject: '⚠️ Low Stock: {product}', trigger: 'Stock Below Threshold', status: 'Active', lastEdited: 'Apr 1, 2026' },
  { id: 8, name: 'Refund Processed', subject: 'Refund for #{order_id}', trigger: 'Refund Approved', status: 'Active', lastEdited: 'Apr 10, 2026' },
];

export const notificationSettings = [
  { event: 'New Order', email: true, sms: true, push: true, admin: true },
  { event: 'Order Cancelled', email: true, sms: false, push: true, admin: true },
  { event: 'Low Stock Alert', email: true, sms: false, push: false, admin: true },
  { event: 'New Registration', email: false, sms: false, push: false, admin: true },
  { event: 'New Review', email: false, sms: false, push: true, admin: true },
  { event: 'Refund Requested', email: true, sms: true, push: true, admin: true },
  { event: 'Payment Failed', email: true, sms: true, push: true, admin: true },
  { event: 'Delivery Completed', email: true, sms: true, push: true, admin: false },
];

export const roles = [
  { id: 1, name: 'Super Admin', users: 1, permissions: { dashboard:true, pets:true, products:true, orders:true, customers:true, inventory:true, reports:true, marketing:true, content:true, settings:true } },
  { id: 2, name: 'Manager', users: 2, permissions: { dashboard:true, pets:true, products:true, orders:true, customers:true, inventory:true, reports:true, marketing:true, content:true, settings:false } },
  { id: 3, name: 'Staff', users: 5, permissions: { dashboard:true, pets:true, products:true, orders:true, customers:false, inventory:true, reports:false, marketing:false, content:false, settings:false } },
  { id: 4, name: 'Content Editor', users: 2, permissions: { dashboard:true, pets:false, products:false, orders:false, customers:false, inventory:false, reports:false, marketing:true, content:true, settings:false } },
];

export const systemLogs = [
  { id: 1, timestamp: 'May 8, 2026 10:30 AM', user: 'Admin', action: 'Updated product price', ip: '192.168.1.100', details: 'Royal Canin: ₹4,299 → ₹3,899' },
  { id: 2, timestamp: 'May 8, 2026 9:15 AM', user: 'Admin', action: 'Added new pet', ip: '192.168.1.100', details: 'Added "Raja" (Bearded Dragon)' },
  { id: 3, timestamp: 'May 7, 2026 4:30 PM', user: 'Staff', action: 'Updated order status', ip: '192.168.1.105', details: '#PS-2453: Processing → Shipped' },
  { id: 4, timestamp: 'May 7, 2026 2:00 PM', user: 'Admin', action: 'Created coupon', ip: '192.168.1.100', details: 'PETLOVE20 - 20% off' },
  { id: 5, timestamp: 'May 7, 2026 11:45 AM', user: 'Manager', action: 'Approved refund', ip: '192.168.1.102', details: 'RF-1001: ₹5,200' },
  { id: 6, timestamp: 'May 6, 2026 3:20 PM', user: 'Admin', action: 'User login', ip: '192.168.1.100', details: 'Successful login' },
  { id: 7, timestamp: 'May 6, 2026 10:00 AM', user: 'System', action: 'Backup completed', ip: 'N/A', details: 'Daily backup successful' },
  { id: 8, timestamp: 'May 5, 2026 5:15 PM', user: 'Admin', action: 'Updated shipping', ip: '192.168.1.100', details: 'Express: ₹199 → ₹249' },
  { id: 9, timestamp: 'May 5, 2026 1:30 PM', user: 'Staff', action: 'Stock adjustment', ip: '192.168.1.105', details: 'Whiskas +50 units' },
  { id: 10, timestamp: 'May 4, 2026 11:00 AM', user: 'Admin', action: 'Published blog', ip: '192.168.1.100', details: 'Top 10 Dog Breeds' },
];
