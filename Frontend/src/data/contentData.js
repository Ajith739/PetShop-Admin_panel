// ─── Content Management Mock Data ───
export const pagesData = [
  { id: 1, title: 'About Us', slug: 'about-us', content: 'Welcome to PetShop, your one-stop destination for pets and pet supplies...', status: 'Published', lastUpdated: 'Apr 15, 2026', author: 'Admin' },
  { id: 2, title: 'Contact Us', slug: 'contact-us', content: 'Get in touch with us at support@petshop.in...', status: 'Published', lastUpdated: 'Apr 10, 2026', author: 'Admin' },
  { id: 3, title: 'Terms & Conditions', slug: 'terms', content: 'These terms and conditions govern your use of PetShop...', status: 'Published', lastUpdated: 'Mar 20, 2026', author: 'Admin' },
  { id: 4, title: 'Privacy Policy', slug: 'privacy-policy', content: 'We respect your privacy. This policy describes how we collect...', status: 'Published', lastUpdated: 'Mar 20, 2026', author: 'Admin' },
  { id: 5, title: 'Shipping Policy', slug: 'shipping-policy', content: 'We ship across India. Standard delivery takes 3-5 business days...', status: 'Published', lastUpdated: 'Apr 1, 2026', author: 'Admin' },
  { id: 6, title: 'Return Policy', slug: 'return-policy', content: 'Products can be returned within 7 days. Live pets are non-returnable...', status: 'Draft', lastUpdated: 'May 2, 2026', author: 'Admin' },
];

export const blogPosts = [
  { id: 1, title: 'Top 10 Dog Breeds for First-Time Owners', category: 'Dogs', author: 'Dr. Priya Menon', publishedDate: 'May 5, 2026', status: 'Published', views: 1245 },
  { id: 2, title: 'Setting Up Your First Aquarium', category: 'Fish', author: 'Vikram Singh', publishedDate: 'May 3, 2026', status: 'Published', views: 890 },
  { id: 3, title: 'Cat Nutrition Guide 2026', category: 'Cats', author: 'Dr. Priya Menon', publishedDate: 'Apr 28, 2026', status: 'Published', views: 756 },
  { id: 4, title: 'Understanding Your Bird\'s Body Language', category: 'Birds', author: 'Arjun Nair', publishedDate: 'Apr 20, 2026', status: 'Published', views: 534 },
  { id: 5, title: 'Monsoon Pet Care Essentials', category: 'General', author: 'Admin', publishedDate: null, status: 'Draft', views: 0 },
  { id: 6, title: 'How to Travel With Your Pet', category: 'General', author: 'Sneha Reddy', publishedDate: 'Apr 10, 2026', status: 'Published', views: 2100 },
];

export const petCareGuides = [
  { id: 1, title: 'Complete Puppy Care Guide', petType: 'Dogs', category: 'Care', author: 'Dr. Ramesh Kumar', publishedDate: 'Apr 15, 2026', status: 'Published' },
  { id: 2, title: 'Kitten Feeding Schedule', petType: 'Cats', category: 'Nutrition', author: 'Dr. Priya Menon', publishedDate: 'Apr 10, 2026', status: 'Published' },
  { id: 3, title: 'Freshwater Fish Tank Maintenance', petType: 'Fish', category: 'Maintenance', author: 'Vikram Singh', publishedDate: 'Mar 25, 2026', status: 'Published' },
  { id: 4, title: 'Bird Cage Setup Guide', petType: 'Birds', category: 'Housing', author: 'Arjun Nair', publishedDate: 'Mar 15, 2026', status: 'Published' },
  { id: 5, title: 'Reptile Heating & Lighting', petType: 'Reptiles', category: 'Care', author: 'Dr. Anand Rao', publishedDate: null, status: 'Draft' },
  { id: 6, title: 'Hamster Habitat Essentials', petType: 'Small Animals', category: 'Housing', author: 'Admin', publishedDate: 'Apr 5, 2026', status: 'Published' },
];

export const faqsData = [
  { id: 1, question: 'Do you deliver live pets?', answer: 'Yes, we deliver live pets across India with special carriers and express shipping.', category: 'Shipping', sortOrder: 1, status: 'Published' },
  { id: 2, question: 'What is your return policy for pets?', answer: 'Live pets are non-returnable except in case of health issues within 48 hours of delivery.', category: 'Returns', sortOrder: 2, status: 'Published' },
  { id: 3, question: 'Do pets come with health certificates?', answer: 'Yes, all pets come with a health certificate and vaccination records.', category: 'Pets', sortOrder: 3, status: 'Published' },
  { id: 4, question: 'What payment methods do you accept?', answer: 'We accept UPI, credit/debit cards, net banking, and cash on delivery.', category: 'Payment', sortOrder: 4, status: 'Published' },
  { id: 5, question: 'How long does delivery take?', answer: 'Standard delivery: 3-5 days. Express: 1-2 days. Pet delivery: 1-3 days (express only).', category: 'Shipping', sortOrder: 5, status: 'Published' },
  { id: 6, question: 'Do you offer pet grooming services?', answer: 'Currently we only sell grooming products. Grooming services coming soon!', category: 'Services', sortOrder: 6, status: 'Draft' },
];

export const testimonialsData = [
  { id: 1, customerName: 'Priya Sharma', rating: 5, text: 'Bruno has been the best addition to our family! The team was so helpful.', date: 'May 1, 2026', featured: true, status: 'Approved' },
  { id: 2, customerName: 'Rahul Patel', rating: 4, text: 'Great selection of cat food. Fast delivery and well-packed.', date: 'Apr 28, 2026', featured: true, status: 'Approved' },
  { id: 3, customerName: 'Ananya Krishnan', rating: 5, text: 'Amazing experience! Both my dogs love the products from PetShop.', date: 'Apr 20, 2026', featured: false, status: 'Approved' },
  { id: 4, customerName: 'Vikram Singh', rating: 5, text: 'The aquarium equipment quality is top-notch. Highly recommend!', date: 'Apr 15, 2026', featured: true, status: 'Approved' },
  { id: 5, customerName: 'Meera Iyer', rating: 3, text: 'Products are good but delivery was delayed by 2 days.', date: 'Apr 10, 2026', featured: false, status: 'Pending' },
  { id: 6, customerName: 'Karthik Rajan', rating: 5, text: 'Adopted Buddy from here. Best decision ever!', date: 'Apr 5, 2026', featured: false, status: 'Approved' },
];
