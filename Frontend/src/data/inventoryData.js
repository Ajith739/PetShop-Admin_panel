// ─── Inventory Mock Data ───
export const stockOverview = [
  { id: 1, name: 'Royal Canin Medium Adult 15kg', type: 'Product', sku: 'RC-MDA-15K', currentStock: 85, reserved: 5, available: 80, minStock: 10, status: 'in-stock' },
  { id: 2, name: 'Whiskas Tuna Jelly 12 Pack', type: 'Product', sku: 'WK-TJ-12P', currentStock: 230, reserved: 12, available: 218, minStock: 20, status: 'in-stock' },
  { id: 3, name: 'KONG Classic Large', type: 'Product', sku: 'KG-CL-LG', currentStock: 64, reserved: 3, available: 61, minStock: 10, status: 'in-stock' },
  { id: 4, name: 'Flexi Retractable Leash 26ft', type: 'Product', sku: 'FL-RL-26', currentStock: 0, reserved: 0, available: 0, minStock: 5, status: 'out-of-stock' },
  { id: 5, name: 'Seresto Flea Collar Large', type: 'Product', sku: 'SR-FTC-LG', currentStock: 3, reserved: 1, available: 2, minStock: 5, status: 'low-stock' },
  { id: 6, name: 'Bruno (Golden Retriever)', type: 'Pet', sku: 'PET-DOG-001', currentStock: 2, reserved: 0, available: 2, minStock: 1, status: 'in-stock' },
  { id: 7, name: 'Whiskers (Persian Cat)', type: 'Pet', sku: 'PET-CAT-001', currentStock: 3, reserved: 1, available: 2, minStock: 1, status: 'in-stock' },
  { id: 8, name: 'Nemo (Clownfish)', type: 'Pet', sku: 'PET-FISH-001', currentStock: 25, reserved: 3, available: 22, minStock: 5, status: 'in-stock' },
  { id: 9, name: 'Fluval FX6 Filter', type: 'Product', sku: 'FL-FX6-01', currentStock: 8, reserved: 0, available: 8, minStock: 3, status: 'in-stock' },
  { id: 10, name: 'Wahl Grooming Kit', type: 'Product', sku: 'WH-PGK-01', currentStock: 2, reserved: 1, available: 1, minStock: 5, status: 'low-stock' },
  { id: 11, name: 'PetBed Orthopedic XL', type: 'Product', sku: 'PB-OF-XL', currentStock: 0, reserved: 0, available: 0, minStock: 5, status: 'out-of-stock' },
  { id: 12, name: 'Drools Performance 20kg', type: 'Product', sku: 'DR-OP-20K', currentStock: 67, reserved: 8, available: 59, minStock: 10, status: 'in-stock' },
];

export const stockAlerts = stockOverview.filter(s => s.status === 'low-stock' || s.status === 'out-of-stock');

export const stockHistory = [
  { id: 1, date: 'May 8, 2026 10:30 AM', product: 'Royal Canin Medium Adult 15kg', sku: 'RC-MDA-15K', action: 'Sold', change: -2, newBalance: 85, user: 'Admin' },
  { id: 2, date: 'May 7, 2026 3:15 PM', product: 'Whiskas Tuna 12 Pack', sku: 'WK-TJ-12P', action: 'Added', change: +50, newBalance: 230, user: 'Admin' },
  { id: 3, date: 'May 7, 2026 11:00 AM', product: 'KONG Classic Large', sku: 'KG-CL-LG', action: 'Sold', change: -1, newBalance: 64, user: 'Admin' },
  { id: 4, date: 'May 6, 2026 9:00 AM', product: 'Flexi Leash 26ft', sku: 'FL-RL-26', action: 'Sold', change: -1, newBalance: 0, user: 'Staff' },
  { id: 5, date: 'May 5, 2026 2:00 PM', product: 'Seresto Flea Collar', sku: 'SR-FTC-LG', action: 'Returned', change: +1, newBalance: 3, user: 'Admin' },
  { id: 6, date: 'May 4, 2026 4:30 PM', product: 'Bruno (Golden Retriever)', sku: 'PET-DOG-001', action: 'Adjusted', change: 0, newBalance: 2, user: 'Admin' },
  { id: 7, date: 'May 3, 2026 10:00 AM', product: 'Drools Performance 20kg', sku: 'DR-OP-20K', action: 'Added', change: +30, newBalance: 67, user: 'Admin' },
  { id: 8, date: 'May 2, 2026 1:45 PM', product: 'PetBed Orthopedic XL', sku: 'PB-OF-XL', action: 'Sold', change: -1, newBalance: 0, user: 'Staff' },
  { id: 9, date: 'May 1, 2026 5:00 PM', product: 'Wahl Grooming Kit', sku: 'WH-PGK-01', action: 'Sold', change: -1, newBalance: 2, user: 'Admin' },
  { id: 10, date: 'Apr 30, 2026 11:30 AM', product: 'Fluval FX6 Filter', sku: 'FL-FX6-01', action: 'Added', change: +5, newBalance: 8, user: 'Admin' },
];

export const suppliers = [
  { id: 1, name: 'Royal Canin India Pvt Ltd', contact: 'Arjun Mehta', email: 'supply@royalcanin.in', phone: '+91 44 2345 6789', address: 'Ambattur Industrial Estate, Chennai', productsSupplied: 'Pet Food', status: 'active' },
  { id: 2, name: 'Mars Petcare India', contact: 'Sunita Rao', email: 'orders@marspet.in', phone: '+91 80 6543 2100', address: 'Whitefield, Bangalore', productsSupplied: 'Whiskas, Pedigree, Treats', status: 'active' },
  { id: 3, name: 'Drools Pet Foods', contact: 'Rajesh Gupta', email: 'wholesale@drools.in', phone: '+91 11 4567 8900', address: 'Okhla Industrial Area, Delhi', productsSupplied: 'Pet Food', status: 'active' },
  { id: 4, name: 'AquaWorld Exports', contact: 'Faisal Khan', email: 'faisal@aquaworld.in', phone: '+91 22 3456 7890', address: 'Kurla, Mumbai', productsSupplied: 'Fish, Aquarium Equipment', status: 'active' },
  { id: 5, name: 'PetMate Trading Co', contact: 'Lisa Fernandes', email: 'lisa@petmate.in', phone: '+91 832 234 5678', address: 'Panaji, Goa', productsSupplied: 'Carriers, Accessories, Beds', status: 'active' },
  { id: 6, name: 'VetSupply Direct', contact: 'Dr. Nandini', email: 'orders@vetsupply.in', phone: '+91 44 5678 1234', address: 'T Nagar, Chennai', productsSupplied: 'Healthcare, Medicine', status: 'inactive' },
];

export const purchaseOrders = [
  { id: 'PO-2026-001', supplier: 'Royal Canin India Pvt Ltd', date: 'May 1, 2026', items: 5, total: 125000, status: 'Received', receivedDate: 'May 5, 2026' },
  { id: 'PO-2026-002', supplier: 'Mars Petcare India', date: 'May 3, 2026', items: 8, total: 87500, status: 'Sent', receivedDate: null },
  { id: 'PO-2026-003', supplier: 'Drools Pet Foods', date: 'May 5, 2026', items: 3, total: 45000, status: 'Received', receivedDate: 'May 7, 2026' },
  { id: 'PO-2026-004', supplier: 'AquaWorld Exports', date: 'May 6, 2026', items: 12, total: 230000, status: 'Draft', receivedDate: null },
  { id: 'PO-2026-005', supplier: 'PetMate Trading Co', date: 'May 7, 2026', items: 6, total: 65000, status: 'Sent', receivedDate: null },
  { id: 'PO-2026-006', supplier: 'VetSupply Direct', date: 'May 8, 2026', items: 4, total: 32000, status: 'Draft', receivedDate: null },
];
