// ─── Reports Mock Data ───
export const salesReportData = {
  summary: { totalRevenue: 487650, totalOrders: 156, avgOrderValue: 3126, refunds: 12450 },
  monthly: [
    { month: 'Jan', revenue: 32500, orders: 12 },
    { month: 'Feb', revenue: 41200, orders: 15 },
    { month: 'Mar', revenue: 56800, orders: 21 },
    { month: 'Apr', revenue: 78900, orders: 28 },
    { month: 'May', revenue: 92300, orders: 34 },
  ],
  topProducts: [
    { name: 'Royal Canin Medium Adult 15kg', sold: 45, revenue: 175455 },
    { name: 'Whiskas Tuna 12 Pack', sold: 89, revenue: 69420 },
    { name: 'Drools Performance 20kg', sold: 34, revenue: 108766 },
    { name: 'KONG Classic Large', sold: 28, revenue: 35000 },
    { name: 'Wahl Grooming Kit', sold: 15, revenue: 32985 },
  ],
  byCategory: [
    { category: 'Pet Food', revenue: 245000, percentage: 50.2 },
    { category: 'Accessories', revenue: 89000, percentage: 18.2 },
    { category: 'Toys', revenue: 45000, percentage: 9.2 },
    { category: 'Grooming', revenue: 38000, percentage: 7.8 },
    { category: 'Healthcare', revenue: 35000, percentage: 7.2 },
    { category: 'Aquarium', revenue: 22000, percentage: 4.5 },
    { category: 'Treats', revenue: 13650, percentage: 2.8 },
  ],
};

export const productReportData = {
  topSelling: [
    { name: 'Royal Canin Medium Adult 15kg', category: 'Pet Food', sold: 45, revenue: 175455, stock: 85 },
    { name: 'Whiskas Tuna 12 Pack', category: 'Pet Food', sold: 89, revenue: 69420, stock: 230 },
    { name: 'Drools Performance 20kg', category: 'Pet Food', sold: 34, revenue: 108766, stock: 67 },
    { name: 'KONG Classic Large', category: 'Toys', sold: 28, revenue: 35000, stock: 64 },
    { name: 'Wahl Grooming Kit', category: 'Grooming', sold: 15, revenue: 32985, stock: 28 },
  ],
  lowPerforming: [
    { name: 'PetMate Carrier Medium', category: 'Accessories', sold: 2, revenue: 7798, stock: 15 },
    { name: 'Catit Vesper Post', category: 'Accessories', sold: 3, revenue: 15600, stock: 12 },
  ],
};

export const customerReportData = {
  summary: { totalCustomers: 2450, newThisMonth: 87, returningRate: 68.5, avgLifetimeValue: 15670 },
  topCustomers: [
    { name: 'Priya Sharma', orders: 89, spent: 23987, lastOrder: 'May 5, 2026' },
    { name: 'Rahul Patel', orders: 76, spent: 21567, lastOrder: 'May 3, 2026' },
    { name: 'Nisha Gupta', orders: 45, spent: 18975, lastOrder: 'Mar 28, 2026' },
    { name: 'Ananya Krishnan', orders: 69, spent: 19872, lastOrder: 'May 1, 2026' },
    { name: 'Vikram Singh', orders: 67, spent: 17996, lastOrder: 'Apr 28, 2026' },
  ],
  acquisition: [
    { month: 'Jan', newCustomers: 45, returning: 67 },
    { month: 'Feb', newCustomers: 52, returning: 78 },
    { month: 'Mar', newCustomers: 61, returning: 89 },
    { month: 'Apr', newCustomers: 73, returning: 95 },
    { month: 'May', newCustomers: 87, returning: 102 },
  ],
};

export const inventoryReportData = {
  summary: { totalProducts: 156, totalValue: 2345000, lowStock: 8, outOfStock: 3 },
  turnoverRate: [
    { category: 'Pet Food', rate: 4.2, avgDaysToSell: 8 },
    { category: 'Treats', rate: 3.8, avgDaysToSell: 10 },
    { category: 'Toys', rate: 2.1, avgDaysToSell: 18 },
    { category: 'Grooming', rate: 1.5, avgDaysToSell: 25 },
    { category: 'Accessories', rate: 0.9, avgDaysToSell: 40 },
    { category: 'Healthcare', rate: 1.8, avgDaysToSell: 20 },
    { category: 'Aquarium', rate: 0.6, avgDaysToSell: 55 },
  ],
};

export const taxReportData = {
  summary: { totalCollected: 65890, gst18: 52400, gst12: 8890, exempt: 4600 },
  byMonth: [
    { month: 'Jan', collected: 8500 },
    { month: 'Feb', collected: 10200 },
    { month: 'Mar', collected: 12800 },
    { month: 'Apr', collected: 15600 },
    { month: 'May', collected: 18790 },
  ],
  byCategory: [
    { category: 'Pet Food', taxRate: '18%', taxable: 245000, tax: 44100 },
    { category: 'Accessories', taxRate: '18%', taxable: 89000, tax: 16020 },
    { category: 'Healthcare', taxRate: '12%', taxable: 35000, tax: 4200 },
    { category: 'Pets', taxRate: '0%', taxable: 180000, tax: 0 },
    { category: 'Aquarium', taxRate: '18%', taxable: 22000, tax: 3960 },
  ],
};
