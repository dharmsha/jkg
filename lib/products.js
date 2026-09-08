// products.js - Complete Mega Mall Store (20+ Categories)

export const CATEGORIES = [
  // 🍎 FOOD & GROCERIES
  { slug: 'dal-pulses',      name: 'Dal & Pulses',       emoji: '🫘', color: 'from-amber-100 to-amber-50' },
  { slug: 'rice-grains',     name: 'Rice & Grains',      emoji: '🍚', color: 'from-yellow-100 to-yellow-50' },
  { slug: 'aata-flours',     name: 'Aata & Flours',      emoji: '🌾', color: 'from-orange-100 to-orange-50' },
  { slug: 'oil-ghee',        name: 'Oil & Ghee',         emoji: '🫙', color: 'from-lime-100 to-lime-50' },
  { slug: 'masala-spices',   name: 'Masala & Spices',    emoji: '🌶️', color: 'from-red-100 to-red-50' },
  { slug: 'dry-fruits',      name: 'Dry Fruits',         emoji: '🥜', color: 'from-rose-100 to-rose-50' },
  { slug: 'tea-coffee',      name: 'Tea & Coffee',       emoji: '☕', color: 'from-stone-100 to-stone-50' },
  { slug: 'snacks',          name: 'Snacks & Namkeen',   emoji: '🍿', color: 'from-yellow-100 to-orange-50' },
  { slug: 'biscuits',        name: 'Biscuits',           emoji: '🍪', color: 'from-amber-100 to-yellow-50' },
  { slug: 'beverages',       name: 'Beverages & Drinks', emoji: '🥤', color: 'from-cyan-100 to-cyan-50' },
  
  // 🥬 FRESH FOODS
  { slug: 'vegetables',      name: 'Fresh Vegetables',   emoji: '🥬', color: 'from-green-100 to-green-50' },
  { slug: 'fruits',          name: 'Fresh Fruits',       emoji: '🍎', color: 'from-red-100 to-red-50' },
  { slug: 'dairy',           name: 'Dairy & Eggs',       emoji: '🥛', color: 'from-sky-100 to-sky-50' },
  
  // 🧴 BEAUTY & PERSONAL CARE
  { slug: 'cosmetics',       name: 'Cosmetics & Makeup', emoji: '💄', color: 'from-pink-100 to-pink-50' },
  { slug: 'skin-care',       name: 'Skin Care',          emoji: '🧴', color: 'from-rose-100 to-rose-50' },
  { slug: 'hair-care',       name: 'Hair Care',          emoji: '💇', color: 'from-purple-100 to-purple-50' },
  { slug: 'fragrances',      name: 'Fragrances & Deos',  emoji: '🌸', color: 'from-violet-100 to-violet-50' },
  { slug: 'personal-care',   name: 'Personal Care',      emoji: '🧼', color: 'from-blue-100 to-blue-50' },
  
  // 👕 CLOTHING & FASHION
  { slug: 'mens-clothing',   name: "Men's Clothing",     emoji: '👔', color: 'from-slate-100 to-slate-50' },
  { slug: 'womens-clothing', name: "Women's Clothing",   emoji: '👗', color: 'from-fuchsia-100 to-fuchsia-50' },
  { slug: 'kids-clothing',   name: "Kids' Clothing",     emoji: '🧸', color: 'from-cyan-100 to-cyan-50' },
  { slug: 'footwear',        name: 'Footwear',           emoji: '👟', color: 'from-stone-100 to-stone-50' },
  { slug: 'accessories',     name: 'Accessories',        emoji: '👜', color: 'from-amber-100 to-amber-50' },
  
  // 🏠 HOME & LIVING
  { slug: 'home-decor',      name: 'Home Decor',         emoji: '🖼️', color: 'from-teal-100 to-teal-50' },
  { slug: 'kitchenware',     name: 'Kitchenware',        emoji: '🍳', color: 'from-orange-100 to-orange-50' },
  { slug: 'bedding-linen',   name: 'Bedding & Linen',    emoji: '🛏️', color: 'from-indigo-100 to-indigo-50' },
  
  // 📱 ELECTRONICS
  { slug: 'electronics',     name: 'Electronics',        emoji: '📱', color: 'from-zinc-100 to-zinc-50' },
  { slug: 'mobile-accessories', name: 'Mobile Accessories', emoji: '📱', color: 'from-slate-100 to-slate-50' },
  
  // 🧹 HOME CARE
  { slug: 'cleaning',        name: 'Cleaning Supplies',  emoji: '🧹', color: 'from-blue-100 to-blue-50' },
  { slug: 'laundry',         name: 'Laundry Care',       emoji: '🧺', color: 'from-indigo-100 to-indigo-50' },
  { slug: 'household',       name: 'Household',          emoji: '🧽', color: 'from-cyan-100 to-cyan-50' },
  
  // 🏥 HEALTH & BABY
  { slug: 'health',          name: 'Health & Wellness',  emoji: '💊', color: 'from-emerald-100 to-emerald-50' },
  { slug: 'baby-care',       name: 'Baby Care',          emoji: '🍼', color: 'from-pink-100 to-pink-50' },
  
  // 🎁 OTHER
  { slug: 'gifts-toys',      name: 'Gifts & Toys',       emoji: '🎁', color: 'from-red-100 to-red-50' },
  { slug: 'stationery',      name: 'Stationery',         emoji: '✏️', color: 'from-yellow-100 to-yellow-50' },
]

let id = 0
const p = (name, hindi, price, mrp, category, image, unit = '1 Unit') => ({
  id: `p${++id}`, 
  name, 
  hindi, 
  price, 
  mrp, 
  category, 
  image, 
  unit,
  discount: Math.round(((mrp - price) / mrp) * 100),
})

export const PRODUCTS = [
  // ============================================
  // 🫘 DAL & PULSES - 8 Products
  // ============================================
  p('Sabut Desi Moong', 'साबुत देसी मूँग', 120, 140, 'dal-pulses', 'https://images.unsplash.com/photo-1601000937960-93e5f28d1d4a?w=500&auto=format'),
  p('Lal Kashmiri Rajma', 'लाल कश्मीरी राजमा', 120, 160, 'dal-pulses', 'https://images.unsplash.com/photo-1612257999691-c0b2b8b3d3f4?w=500&auto=format'),
  p('Mix Daal Panchmel', 'मिक्स दाल पंचमेल', 120, 140, 'dal-pulses', 'https://images.unsplash.com/photo-1596797038530-2c107aa22e6a?w=500&auto=format'),
  p('Desi Tuvar Daal', 'देसी तुवर दाल', 140, 160, 'dal-pulses', 'https://images.unsplash.com/photo-1615485500704-8e990f9900d1?w=500&auto=format'),
  p('Kaala Chana Desi', 'काला चना देसी', 80, 100, 'dal-pulses', 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format'),
  p('Chana Daal Desi', 'देसी चना दाल', 84, 88, 'dal-pulses', 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=500&auto=format'),
  p('Lal Masoor Daal', 'लाल मसूर दाल', 88, 90, 'dal-pulses', 'https://images.unsplash.com/photo-1583125311255-c4ce6c2d3fa1?w=500&auto=format'),
  p('Safed Kaabuli Chana', 'सफेद काबुली चना', 120, 160, 'dal-pulses', 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=500&auto=format'),

  // ============================================
  // 🍚 RICE & GRAINS - 8 Products
  // ============================================
  p('Basmati Rice Premium', 'बासमती चावल', 180, 220, 'rice-grains', 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format', '5kg'),
  p('Sona Masoori Rice', 'सोना मसूरी चावल', 90, 110, 'rice-grains', 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=500&auto=format', '5kg'),
  p('Poha Swastik', 'स्वस्तिक पोहा', 70, 80, 'rice-grains', 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format'),
  p('Uttam Sooji', 'उत्तम सुजी', 60, 80, 'rice-grains', 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=500&auto=format'),
  p('Moti Chawal', 'मोती चावल', 75, 90, 'rice-grains', 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&auto=format', '5kg'),
  p('Brown Rice', 'ब्राउन राइस', 95, 120, 'rice-grains', 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=500&auto=format', '5kg'),
  p('Jowar (Sorghum)', 'ज्वार', 60, 75, 'rice-grains', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format', '500g'),
  p('Bajra (Pearl Millet)', 'बाजरा', 55, 65, 'rice-grains', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format', '500g'),

  // ============================================
  // 🌾 AATA & FLOURS - 6 Products
  // ============================================
  p('Manu Bhog Aata 10kg', 'मनु भोग चक्की आटा', 380, 475, 'aata-flours', 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=500&auto=format', '10kg'),
  p('Aashirwad Aata 10kg', 'आशीर्वाद आटा', 460, 485, 'aata-flours', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format', '10kg'),
  p('Besan (Gram Flour)', 'बेसन', 90, 110, 'aata-flours', 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&auto=format'),
  p('Maida (Refined Flour)', 'मैदा', 55, 70, 'aata-flours', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format'),
  p('Ragi Flour', 'रागी का आटा', 80, 95, 'aata-flours', 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=500&auto=format'),
  p('Bajra Flour', 'बाजरे का आटा', 60, 75, 'aata-flours', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format'),

  // ============================================
  // 🫙 OIL & GHEE - 6 Products
  // ============================================
  p('Engine Mustard Oil 5L', 'इंजन सरसों तेल', 1050, 1110, 'oil-ghee', 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=500&auto=format', '5L'),
  p('Groundnut Oil 5L', 'मूंगफली तेल', 1025, 1300, 'oil-ghee', 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format', '5L'),
  p('Desi Ghee 1L', 'देसी घी', 650, 720, 'oil-ghee', 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format', '1L'),
  p('Sunflower Oil 1L', 'सूरजमुखी तेल', 160, 180, 'oil-ghee', 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format', '1L'),
  p('Soybean Oil 1L', 'सोयाबीन तेल', 140, 160, 'oil-ghee', 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format', '1L'),
  p('Olive Oil 1L', 'ऑलिव ऑयल', 450, 500, 'oil-ghee', 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format', '1L'),

  // ============================================
  // 🌶️ MASALA & SPICES - 8 Products
  // ============================================
  p('MDH Chana Masala 100g', 'एमडीएच चना मसाला', 87, 92, 'masala-spices', 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format', '100g'),
  p('MDH Kitchen King 100g', 'किचन किंग मसाला', 95, 100, 'masala-spices', 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=500&auto=format', '100g'),
  p('MDH Pav Bhaji Masala', 'पाव भाजी मसाला', 92, 96, 'masala-spices', 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=500&auto=format', '100g'),
  p('Everest Garam Masala', 'गरम मसाला', 78, 90, 'masala-spices', 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format', '100g'),
  p('Red Chilli Powder', 'लाल मिर्च पाउडर', 65, 80, 'masala-spices', 'https://images.unsplash.com/photo-1583187863543-fac4d5b58c69?w=500&auto=format', '200g'),
  p('Turmeric (Haldi) Powder', 'हल्दी पाउडर', 55, 70, 'masala-spices', 'https://images.unsplash.com/photo-1615485500704-8e990f9900d1?w=500&auto=format', '200g'),
  p('Cumin Seeds (Jeera)', 'जीरा', 70, 85, 'masala-spices', 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format', '200g'),
  p('Coriander Powder', 'धनिया पाउडर', 45, 55, 'masala-spices', 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format', '200g'),

  // ============================================
  // 🥜 DRY FRUITS - 6 Products
  // ============================================
  p('Kaju (Cashew) Premium', 'काजू प्रीमियम', 780, 900, 'dry-fruits', 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=500&auto=format', '500g'),
  p('Badam (Almonds)', 'बादाम', 620, 750, 'dry-fruits', 'https://images.unsplash.com/photo-1508747703725-719777637510?w=500&auto=format', '500g'),
  p('Kishmish (Raisins)', 'किशमिश', 220, 260, 'dry-fruits', 'https://images.unsplash.com/photo-1596273312170-e0e39f4b7bdc?w=500&auto=format', '500g'),
  p('Pista Roasted', 'पिस्ता रोस्टेड', 850, 950, 'dry-fruits', 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format', '500g'),
  p('Walnuts (Akhrot)', 'अखरोट', 550, 650, 'dry-fruits', 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=500&auto=format', '500g'),
  p('Dates (Khajoor)', 'खजूर', 180, 210, 'dry-fruits', 'https://images.unsplash.com/photo-1596273312170-e0e39f4b7bdc?w=500&auto=format', '500g'),

  // ============================================
  // ☕ TEA & COFFEE - 6 Products
  // ============================================
  p('JGK Chai 4No. Mahin', 'जीकेजी चाय 4न महीन', 360, 400, 'tea-coffee', 'https://images.unsplash.com/photo-1597318281675-9bfad7f45ec8?w=500&auto=format'),
  p('JGK Chai Daanedar', 'जीकेजी चाय दानेदार', 360, 400, 'tea-coffee', 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format'),
  p('Nescafe Classic 50g', 'नेसकैफे कॉफी', 200, 230, 'tea-coffee', 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format', '50g'),
  p('Tata Tea Premium 500g', 'टाटा टी प्रीमियम', 280, 310, 'tea-coffee', 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&auto=format', '500g'),
  p('Red Label Tea 500g', 'रेड लेबल चाय', 250, 280, 'tea-coffee', 'https://images.unsplash.com/photo-1597318281675-9bfad7f45ec8?w=500&auto=format', '500g'),
  p('Bru Coffee 50g', 'ब्रू कॉफी', 180, 210, 'tea-coffee', 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format', '50g'),

  // ============================================
  // 🍿 SNACKS - 6 Products
  // ============================================
  p('Haldiram Bhujia 200g', 'हल्दीराम भुजिया', 55, 65, 'snacks', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format', '200g'),
  p('Lays Classic Salted', 'लेज चिप्स', 20, 25, 'snacks', 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&auto=format', '90g'),
  p('Kurkure Masala Munch', 'कुरकुरे मसाला', 20, 25, 'snacks', 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&auto=format', '85g'),
  p('Mixture Namkeen', 'मिक्सचर नमकीन', 120, 150, 'snacks', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format', '400g'),
  p('Cheese Balls', 'चीज बॉल्स', 30, 40, 'snacks', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format', '100g'),
  p('Aloo Bhujia', 'आलू भुजिया', 45, 55, 'snacks', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format', '150g'),

  // ============================================
  // 🍪 BISCUITS - 6 Products
  // ============================================
  p('Parle-G Original', 'पारले-जी बिस्किट', 30, 35, 'biscuits', 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format', '250g'),
  p('Britannia Good Day', 'गुड डे बिस्किट', 40, 50, 'biscuits', 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format', '150g'),
  p('Oreo Chocolate', 'ओरियो चॉकलेट', 30, 35, 'biscuits', 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500&auto=format', '120g'),
  p('Marie Gold', 'मैरी गोल्ड', 25, 30, 'biscuits', 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format', '200g'),
  p('Britannia Bourbon', 'बोरबॉन बिस्किट', 35, 40, 'biscuits', 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format', '150g'),
  p('Hide & Seek Biscuits', 'हाइड एंड सीक', 40, 45, 'biscuits', 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500&auto=format', '150g'),

  // ============================================
  // 👕 MEN'S CLOTHING - 8 Products (NEW)
  // ============================================
  p("Men's Cotton Shirt", 'मेन्स कॉटन शर्ट', 499, 699, 'mens-clothing', 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format', '1 Piece'),
  p("Men's Jeans", 'मेन्स जींस', 599, 899, 'mens-clothing', 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format', '1 Piece'),
  p("Men's T-Shirt", 'मेन्स टी-शर्ट', 299, 499, 'mens-clothing', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format', '1 Piece'),
  p("Men's Kurta", 'मेन्स कुर्ता', 449, 649, 'mens-clothing', 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=500&auto=format', '1 Piece'),
  p("Men's Blazer", 'मेन्स ब्लेज़र', 999, 1499, 'mens-clothing', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format', '1 Piece'),
  p("Men's Track Pant", 'मेन्स ट्रैक पैंट', 399, 599, 'mens-clothing', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format', '1 Piece'),
  p("Men's Pyjama", 'मेन्स पायजामा', 299, 449, 'mens-clothing', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p("Men's Sherwani", 'मेन्स शेरवानी', 1499, 1999, 'mens-clothing', 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=500&auto=format', '1 Piece'),

  // ============================================
  // 👗 WOMEN'S CLOTHING - 8 Products (NEW)
  // ============================================
  p("Women's Kurta", 'विमेंस कुर्ता', 399, 599, 'womens-clothing', 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format', '1 Piece'),
  p("Women's Lehenga", 'विमेंस लहेंगा', 899, 1299, 'womens-clothing', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p("Women's Saree", 'विमेंस साड़ी', 499, 799, 'womens-clothing', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p("Women's Top", 'विमेंस टॉप', 299, 449, 'womens-clothing', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p("Women's Leggings", 'विमेंस लेगिंग्स', 299, 449, 'womens-clothing', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p("Women's Night Suit", 'विमेंस नाइट सूट', 399, 599, 'womens-clothing', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p("Women's Dupatta", 'विमेंस दुपट्टा', 199, 299, 'womens-clothing', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p("Women's Anarkali Suit", 'विमेंस अनारकली', 799, 1099, 'womens-clothing', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),

  // ============================================
  // 👟 FOOTWEAR - 8 Products (NEW)
  // ============================================
  p("Men's Sports Shoes", 'मेन्स स्पोर्ट्स शूज', 799, 1199, 'footwear', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format', '1 Pair'),
  p("Women's Sports Shoes", 'विमेंस स्पोर्ट्स शूज', 799, 1199, 'footwear', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format', '1 Pair'),
  p("Men's Casual Sandals", 'मेन्स कैजुअल सैंडल', 499, 699, 'footwear', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Pair'),
  p("Women's Flats", 'विमेंस फ्लैट्स', 499, 699, 'footwear', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Pair'),
  p("Men's Formal Shoes", 'मेन्स फॉर्मल शूज', 899, 1299, 'footwear', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Pair'),
  p("Women's Heels", 'विमेंस हील्स', 599, 899, 'footwear', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Pair'),
  p("Kids' Slippers", 'किड्स स्लिपर्स', 199, 299, 'footwear', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Pair'),
  p("Men's Loafers", 'मेन्स लोफर्स', 699, 999, 'footwear', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Pair'),

  // ============================================
  // 💄 COSMETICS & MAKEUP - 8 Products (NEW)
  // ============================================
  p('Lakme Kajal', 'लक्मे काजल', 85, 95, 'cosmetics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '2.5g'),
  p('Maybelline Mascara', 'मेबेलिन मस्कारा', 280, 320, 'cosmetics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '6.5ml'),
  p('Lakme Lipstick', 'लक्मे लिपस्टिक', 150, 170, 'cosmetics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '4.5g'),
  p('NYX Foundation', 'एनवायएक्स फाउंडेशन', 380, 420, 'cosmetics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '30ml'),
  p('Lakme Compact Powder', 'लक्मे कॉम्पैक्ट', 120, 140, 'cosmetics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '10g'),
  p('Lakme Eyeliner', 'लक्मे आईलाइनर', 130, 150, 'cosmetics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '2ml'),
  p('Faces Nail Polish', 'फेसेस नेल पॉलिश', 120, 140, 'cosmetics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '8ml'),
  p('Maybelline Concealer', 'मेबेलिन कंसीलर', 220, 250, 'cosmetics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '6.8ml'),

  // ============================================
  // 🧴 SKIN CARE - 8 Products (NEW)
  // ============================================
  p('NIVEA Soft Moisturizer', 'नीविया सॉफ्ट मॉइश्चराइज़र', 165, 180, 'skin-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '100ml'),
  p('Himalaya Aloe Vera Gel', 'हिमालया एलोवेरा जेल', 85, 90, 'skin-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '100ml'),
  p('Ponds Face Wash', 'पोंड्स फेसवॉश', 80, 90, 'skin-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '100ml'),
  p('Lakme Face Wash', 'लक्मे फेसवॉश', 100, 110, 'skin-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '100ml'),
  p('NIVEA Body Lotion', 'नीविया बॉडी लोशन', 300, 320, 'skin-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '400ml'),
  p('Garnier Vitamin C Serum', 'गार्नियर विटामिन सी सीरम', 280, 299, 'skin-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '15ml'),
  p('Dabur Rose Water', 'डाबर गुलाबारी', 71, 80, 'skin-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '250ml'),
  p('Himalaya Sunscreen', 'हिमालया सनस्क्रीन', 150, 170, 'skin-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '50g'),

  // ============================================
  // 💇 HAIR CARE - 8 Products (NEW)
  // ============================================
  p('Head & Shoulders Shampoo', 'हेड एंड शोल्डर्स शैंपू', 220, 250, 'hair-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '340ml'),
  p('Dove Shampoo', 'डव शैंपू', 230, 260, 'hair-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '340ml'),
  p('Pantene Shampoo', 'पैंटीन शैंपू', 210, 240, 'hair-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '340ml'),
  p('Loreal Shampoo', 'लोरियल शैंपू', 240, 270, 'hair-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '340ml'),
  p('Dove Conditioner', 'डव कंडीशनर', 180, 200, 'hair-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '200ml'),
  p('Loreal Hair Serum', 'लोरियल हेयर सीरम', 280, 310, 'hair-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '100ml'),
  p('Kesh King Oil', 'केश किंग तेल', 94, 99, 'hair-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '50ml'),
  p('Indulekha Oil', 'इंदुलेखा तेल', 230, 234, 'hair-care', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '50ml'),

  // ============================================
  // 📱 ELECTRONICS - 8 Products (NEW)
  // ============================================
  p('Smart LED TV 32 inch', 'स्मार्ट टीवी', 12999, 15999, 'electronics', 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format', '1 Unit'),
  p('Electric Kettle 1.5L', 'इलेक्ट्रिक केटल', 999, 1299, 'electronics', 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&auto=format', '1 Unit'),
  p('Mixer Grinder', 'मिक्सर ग्राइंडर', 1499, 1999, 'electronics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Unit'),
  p('Room Heater', 'रूम हीटर', 2999, 3999, 'electronics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Unit'),
  p('Water Purifier RO+UV', 'वॉटर प्यूरीफायर', 4999, 6999, 'electronics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Unit'),
  p('Air Cooler 45L', 'एयर कूलर', 6999, 8999, 'electronics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Unit'),
  p('Induction Cooktop', 'इंडक्शन कुकटॉप', 1999, 2499, 'electronics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Unit'),
  p('Hair Dryer', 'हेयर ड्रायर', 899, 1199, 'electronics', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Unit'),

  // ============================================
  // 🥬 FRESH VEGETABLES - 8 Products (NEW)
  // ============================================
  p('Fresh Tomatoes', 'ताजे टमाटर', 40, 50, 'vegetables', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&auto=format', '1kg'),
  p('Fresh Onions', 'ताजे प्याज', 30, 40, 'vegetables', 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=500&auto=format', '1kg'),
  p('Fresh Potatoes', 'ताजे आलू', 25, 35, 'vegetables', 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format', '1kg'),
  p('Fresh Spinach', 'ताजी पालक', 20, 30, 'vegetables', 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format', '500g'),
  p('Fresh Cauliflower', 'ताजा फूलगोभी', 35, 45, 'vegetables', 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=500&auto=format', '500g'),
  p('Fresh Cabbage', 'ताजी पत्तागोभी', 25, 35, 'vegetables', 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=500&auto=format', '500g'),
  p('Fresh Capsicum', 'ताजी शिमला मिर्च', 50, 60, 'vegetables', 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=500&auto=format', '500g'),
  p('Fresh Carrots', 'ताजी गाजर', 30, 40, 'vegetables', 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=500&auto=format', '500g'),

  // ============================================
  // 🍎 FRESH FRUITS - 8 Products (NEW)
  // ============================================
  p('Fresh Apples', 'ताजे सेब', 120, 140, 'fruits', 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format', '1kg'),
  p('Fresh Bananas', 'ताजे केले', 50, 60, 'fruits', 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format', '1 dozen'),
  p('Fresh Oranges', 'ताजे संतरे', 80, 100, 'fruits', 'https://images.unsplash.com/photo-1580052614034-c55d20ebee5b?w=500&auto=format', '1kg'),
  p('Fresh Mangoes', 'ताजे आम', 150, 180, 'fruits', 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format', '1kg'),
  p('Fresh Grapes', 'ताजे अंगूर', 100, 120, 'fruits', 'https://images.unsplash.com/photo-1596363505723-19437f2d4f5c?w=500&auto=format', '500g'),
  p('Fresh Pomegranate', 'ताजा अनार', 90, 110, 'fruits', 'https://images.unsplash.com/photo-1580052614034-c55d20ebee5b?w=500&auto=format', '500g'),
  p('Fresh Watermelon', 'ताजा तरबूज', 40, 50, 'fruits', 'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=500&auto=format', '1kg'),
  p('Fresh Papaya', 'ताजा पपीता', 60, 75, 'fruits', 'https://images.unsplash.com/photo-1580052614034-c55d20ebee5b?w=500&auto=format', '1kg'),

  // ============================================
  // 🏠 HOME DECOR - 8 Products (NEW)
  // ============================================
  p('Wall Painting', 'वॉल पेंटिंग', 999, 1499, 'home-decor', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p('Flower Vase', 'फ्लावर वेस', 499, 699, 'home-decor', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p('Decorative Lamp', 'डेकोरेटिव लैंप', 399, 599, 'home-decor', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p('Pillow Covers Set of 4', 'पिलो कवर सेट', 399, 599, 'home-decor', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '4 Pcs'),
  p('Wall Clock', 'वॉल क्लॉक', 499, 699, 'home-decor', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p('Photo Frame Set of 3', 'फोटो फ्रेम सेट', 399, 499, 'home-decor', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '3 Pcs'),
  p('Candle Stand Set of 2', 'कैंडल स्टैंड सेट', 299, 399, 'home-decor', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '2 Pcs'),
  p('Artificial Plant', 'आर्टिफिशियल प्लांट', 299, 449, 'home-decor', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),

  // ============================================
  // 🍳 KITCHENWARE - 8 Products (NEW)
  // ============================================
  p('Prestige Cooker 5L', 'प्रेस्टीज कुकर', 699, 999, 'kitchenware', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p('Prestige Kadai 28cm', 'प्रेस्टीज कड़ाही', 499, 699, 'kitchenware', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p('Prestige Tawa 30cm', 'प्रेस्टीज तवा', 399, 599, 'kitchenware', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p('Steel Utensils Set 5 Pcs', 'स्टील बर्तन सेट', 999, 1499, 'kitchenware', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '5 Pcs'),
  p('Glass Tumblers 6 Pcs', 'ग्लास टम्बलर सेट', 299, 399, 'kitchenware', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '6 Pcs'),
  p('Storage Container 5L', 'स्टोरेज कंटेनर', 399, 499, 'kitchenware', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
  p('Steel Bowl Set 5 Pcs', 'स्टील बॉल सेट', 299, 399, 'kitchenware', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '5 Pcs'),
  p('Non-stick Pan 28cm', 'नॉन-स्टिक पैन', 599, 799, 'kitchenware', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1 Piece'),
]

export const getById = (id) => PRODUCTS.find(p => p.id === id)
export const getByCategory = (slug) => {
  if (slug === 'all') return PRODUCTS
  return PRODUCTS.filter(p => p.category === slug)
}
export const getFeatured = () => PRODUCTS.filter(p => p.discount >= 15).slice(0, 12)
export const getBestDeals = () => PRODUCTS.filter(p => p.discount >= 20).slice(0, 10)
export const getCategoryName = (slug) => {
  const cat = CATEGORIES.find(c => c.slug === slug)
  return cat ? cat.name : slug
}
export const getCategoryEmoji = (slug) => {
  const cat = CATEGORIES.find(c => c.slug === slug)
  return cat ? cat.emoji : '📦'
}