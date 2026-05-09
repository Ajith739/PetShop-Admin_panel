// ─── Marketing Mock Data ───
export const couponsData = [
  { id: 1, code: 'PETLOVE20', type: 'Percentage', amount: 20, minPurchase: 2000, maxDiscount: 1000, usageLimit: 100, usedCount: 47, expiry: 'Jun 30, 2026', applicableTo: 'All Products', status: 'Active' },
  { id: 2, code: 'FIRSTPET', type: 'Fixed', amount: 500, minPurchase: 3000, maxDiscount: 500, usageLimit: 50, usedCount: 23, expiry: 'Jul 15, 2026', applicableTo: 'Pet Food', status: 'Active' },
  { id: 3, code: 'FISH10', type: 'Percentage', amount: 10, minPurchase: 500, maxDiscount: 2000, usageLimit: 200, usedCount: 89, expiry: 'May 31, 2026', applicableTo: 'Fish & Aquarium', status: 'Active' },
  { id: 4, code: 'SUMMER25', type: 'Percentage', amount: 25, minPurchase: 5000, maxDiscount: 2500, usageLimit: 30, usedCount: 30, expiry: 'May 1, 2026', applicableTo: 'All Products', status: 'Expired' },
  { id: 5, code: 'DOGDAY', type: 'Fixed', amount: 300, minPurchase: 1500, maxDiscount: 300, usageLimit: 75, usedCount: 12, expiry: 'Aug 26, 2026', applicableTo: 'Dogs', status: 'Active' },
  { id: 6, code: 'NEWUSER', type: 'Percentage', amount: 15, minPurchase: 1000, maxDiscount: 750, usageLimit: 500, usedCount: 234, expiry: 'Dec 31, 2026', applicableTo: 'All Products', status: 'Active' },
];

export const emailCampaigns = [
  { id: 1, name: 'Summer Pet Care Tips', subject: '☀️ Keep Your Pets Cool This Summer!', recipients: 2450, sentDate: 'May 1, 2026', openRate: 34.2, clickRate: 12.8, status: 'Sent' },
  { id: 2, name: 'New Arrivals - May 2026', subject: '🐾 Check Out Our New Pet Friends!', recipients: 2450, sentDate: 'May 5, 2026', openRate: 41.5, clickRate: 18.3, status: 'Sent' },
  { id: 3, name: 'Flash Sale Weekend', subject: '⚡ 30% OFF All Pet Accessories!', recipients: 3200, sentDate: null, openRate: 0, clickRate: 0, status: 'Scheduled' },
  { id: 4, name: 'Vaccination Reminder', subject: '💉 Time for Your Pet\'s Vaccination', recipients: 890, sentDate: 'Apr 28, 2026', openRate: 52.1, clickRate: 8.4, status: 'Sent' },
  { id: 5, name: 'Loyalty Rewards Update', subject: '🌟 You\'ve Earned New Rewards!', recipients: 1560, sentDate: null, openRate: 0, clickRate: 0, status: 'Draft' },
];

export const bannersData = [
  { id: 1, title: 'Summer Sale - Up to 30% Off', image: '🏖️', linkUrl: '/products', position: 'Homepage Hero', startDate: 'May 1, 2026', endDate: 'Jun 30, 2026', status: 'Active' },
  { id: 2, title: 'New Fish Collection', image: '🐠', linkUrl: '/pets?category=fish', position: 'Homepage Secondary', startDate: 'May 5, 2026', endDate: 'May 31, 2026', status: 'Active' },
  { id: 3, title: 'Adopt a Pet Today', image: '🐕', linkUrl: '/pets', position: 'Sidebar', startDate: 'Apr 1, 2026', endDate: 'Dec 31, 2026', status: 'Active' },
  { id: 4, title: 'Valentine\'s Day Special', image: '❤️', linkUrl: '/products?sale', position: 'Homepage Hero', startDate: 'Feb 1, 2026', endDate: 'Feb 14, 2026', status: 'Expired' },
  { id: 5, title: 'Monsoon Pet Care', image: '🌧️', linkUrl: '/content/pet-care', position: 'Homepage Hero', startDate: 'Jun 1, 2026', endDate: 'Sep 30, 2026', status: 'Scheduled' },
];

export const pushNotifications = [
  { id: 1, title: 'Flash Sale Alert!', message: 'Get 25% off on all pet food today only!', targetAudience: 'All Users', sentDate: 'May 7, 2026', deliveryRate: 89.5, status: 'Sent' },
  { id: 2, title: 'New Puppies Available!', message: 'Check out our adorable new puppies.', targetAudience: 'Dog Owners', sentDate: 'May 5, 2026', deliveryRate: 92.1, status: 'Sent' },
  { id: 3, title: 'Order Shipped', message: 'Your order #PS-2453 has been shipped!', targetAudience: 'Specific User', sentDate: 'May 4, 2026', deliveryRate: 100, status: 'Sent' },
  { id: 4, title: 'Weekend Sale Preview', message: 'Get ready for massive discounts this weekend!', targetAudience: 'All Users', sentDate: null, deliveryRate: 0, status: 'Scheduled' },
  { id: 5, title: 'Vaccination Reminder', message: 'Your pet\'s vaccination is due next week.', targetAudience: 'Pet Adopters', sentDate: 'May 1, 2026', deliveryRate: 95.3, status: 'Sent' },
];
