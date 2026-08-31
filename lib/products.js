// Mock kirana store data - categories, banners and products
export const CATEGORIES = [
  { slug: 'dal-pulses',      name: 'Dal, Pulses',        emoji: '🫘', color: 'from-amber-100 to-amber-50' },
  { slug: 'rice-grains',     name: 'Rice & Grains',      emoji: '🍚', color: 'from-yellow-100 to-yellow-50' },
  { slug: 'aata-flours',     name: 'Aata & Flours',      emoji: '🌾', color: 'from-orange-100 to-orange-50' },
  { slug: 'oil-ghee',        name: 'Oil & Ghee',         emoji: '🫙', color: 'from-lime-100 to-lime-50' },
  { slug: 'masala-spices',   name: 'Masala & Spices',    emoji: '🌶️', color: 'from-red-100 to-red-50' },
  { slug: 'dry-fruits',      name: 'Dry Fruits',         emoji: '🥜', color: 'from-rose-100 to-rose-50' },
  { slug: 'tea-coffee',      name: 'Tea & Coffee',       emoji: '☕', color: 'from-stone-100 to-stone-50' },
  { slug: 'snacks',          name: 'Snacks & Namkeen',   emoji: '🍿', color: 'from-yellow-100 to-orange-50' },
  { slug: 'biscuits',        name: 'Biscuits',           emoji: '🍪', color: 'from-amber-100 to-yellow-50' },
  { slug: 'personal-care',   name: 'Personal Care',      emoji: '🧴', color: 'from-pink-100 to-pink-50' },
  { slug: 'household',       name: 'Household',          emoji: '🧽', color: 'from-blue-100 to-blue-50' },
  { slug: 'baby-care',       name: 'Baby Care',          emoji: '🍼', color: 'from-cyan-100 to-cyan-50' },
]

let id = 0
const p = (name, hindi, price, mrp, category, image, unit = '1kg') => ({
  id: `p${++id}`, name, hindi, price, mrp, category, image, unit,
  discount: Math.round(((mrp - price) / mrp) * 100),
})

export const PRODUCTS = [
  // Dal / Pulses
  p('Sabut Desi Moong', 'साफ सुथरा साबुत देसी मूँग', 120, 140, 'dal-pulses', 'https://images.unsplash.com/photo-1601000937960-93e5f28d1d4a?w=500&auto=format'),
  p('Lal Kashmiri Rajma', 'लाल कश्मीरी राजमा', 120, 160, 'dal-pulses', 'https://images.unsplash.com/photo-1612257999691-c0b2b8b3d3f4?w=500&auto=format'),
  p('Mix Daal Panchmel', 'मिक्स दाल पंचमेल', 120, 140, 'dal-pulses', 'https://images.unsplash.com/photo-1596797038530-2c107aa22e6a?w=500&auto=format'),
  p('Desi Tuvar Daal', 'देसी तुवर की दाल', 140, 160, 'dal-pulses', 'https://images.unsplash.com/photo-1615485500704-8e990f9900d1?w=500&auto=format'),
  p('Kaala Chana Desi', 'काला चना देसी', 80, 100, 'dal-pulses', 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format'),
  p('Chana Daal Desi', 'देसी चना दाल', 84, 88, 'dal-pulses', 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=500&auto=format'),
  p('Lal Masoor Daal', 'लाल मसूर दाल', 88, 90, 'dal-pulses', 'https://images.unsplash.com/photo-1583125311255-c4ce6c2d3fa1?w=500&auto=format'),
  p('Safed Kaabuli Chana', 'सफेद काबुली चना', 120, 160, 'dal-pulses', 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=500&auto=format'),

  // Rice & Grains
  p('Basmati Rice Premium', 'बासमती चावल', 180, 220, 'rice-grains', 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format', '5kg'),
  p('Sona Masoori Rice', 'सोना मसूरी चावल', 90, 110, 'rice-grains', 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=500&auto=format', '5kg'),
  p('Poha Swastik', 'स्वस्तिक पोहा', 70, 80, 'rice-grains', 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&auto=format'),
  p('Uttam Sooji', 'उत्तम सुजी', 60, 80, 'rice-grains', 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=500&auto=format'),

  // Aata & Flours
  p('Manu Bhog Aata 10kg', 'मनु भोग चक्की आटा', 380, 475, 'aata-flours', 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=500&auto=format', '10kg'),
  p('Aashirwad Aata 10kg', 'आशीर्वाद आटा', 460, 485, 'aata-flours', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format', '10kg'),
  p('Besan (Gram Flour)', 'बेसन', 90, 110, 'aata-flours', 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&auto=format'),
  p('Maida (Refined Flour)', 'मैदा', 55, 70, 'aata-flours', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format'),

  // Oil & Ghee
  p('Engine Mustard Oil 5L', 'इंजन सरसों तेल', 1050, 1110, 'oil-ghee', 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=500&auto=format', '5L'),
  p('Natural Refined Groundnut Oil 5L', 'रिफाइंड मूंगफली तेल', 1025, 1300, 'oil-ghee', 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format', '5L'),
  p('Desi Ghee 1L', 'देसी घी', 650, 720, 'oil-ghee', 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format', '1L'),
  p('Sunflower Oil 1L', 'सूरजमुखी तेल', 160, 180, 'oil-ghee', 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format', '1L'),

  // Masala & Spices
  p('MDH Chana Masala 100g', 'एम डी एच चना मसाला', 87, 92, 'masala-spices', 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format', '100g'),
  p('MDH Kitchen King 100g', 'किचन किंग मसाला', 95, 100, 'masala-spices', 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=500&auto=format', '100g'),
  p('MDH Pav Bhaji Masala', 'पाव भाजी मसाला', 92, 96, 'masala-spices', 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=500&auto=format', '100g'),
  p('Everest Garam Masala', 'गरम मसाला', 78, 90, 'masala-spices', 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format', '100g'),
  p('Red Chilli Powder', 'लाल मिर्च पाउडर', 65, 80, 'masala-spices', 'https://images.unsplash.com/photo-1583187863543-fac4d5b58c69?w=500&auto=format', '200g'),
  p('Turmeric (Haldi) Powder', 'हल्दी पाउडर', 55, 70, 'masala-spices', 'https://images.unsplash.com/photo-1615485500704-8e990f9900d1?w=500&auto=format', '200g'),

  // Dry Fruits
  p('Kaju (Cashew) Premium', 'काजू प्रीमियम', 780, 900, 'dry-fruits', 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?w=500&auto=format', '500g'),
  p('Badam (Almonds)', 'बादाम', 620, 750, 'dry-fruits', 'https://images.unsplash.com/photo-1508747703725-719777637510?w=500&auto=format', '500g'),
  p('Kishmish (Raisins)', 'किशमिश', 220, 260, 'dry-fruits', 'https://images.unsplash.com/photo-1596273312170-e0e39f4b7bdc?w=500&auto=format', '500g'),
  p('Pista Roasted', 'पिस्ता रोस्टेड', 850, 950, 'dry-fruits', 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format', '500g'),

  // Tea Coffee
  p('JGK Chai 4No. Mahin', 'चाय 4न महीन', 360, 400, 'tea-coffee', 'https://images.unsplash.com/photo-1597318281675-9bfad7f45ec8?w=500&auto=format'),
  p('JGK Chai Daanedar', 'चाय दानेदार', 360, 400, 'tea-coffee', 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format'),
  p('Nescafe Classic 50g', 'नेसकैफे कॉफी', 200, 230, 'tea-coffee', 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format', '50g'),
  p('Tata Tea Premium 500g', 'टाटा टी', 280, 310, 'tea-coffee', 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&auto=format', '500g'),

  // Snacks
  p('Haldiram Bhujia 200g', 'हल्दीराम भुजिया', 55, 65, 'snacks', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format', '200g'),
  p('Lays Classic Salted', 'लेज चिप्स', 20, 25, 'snacks', 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&auto=format', '90g'),
  p('Kurkure Masala Munch', 'कुरकुरे', 20, 25, 'snacks', 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=500&auto=format', '85g'),
  p('Mixture Namkeen', 'मिक्सचर', 120, 150, 'snacks', 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format', '400g'),

  // Biscuits
  p('Parle-G Original', 'पारले-जी बिस्किट', 30, 35, 'biscuits', 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format', '250g'),
  p('Britannia Good Day', 'गुड डे बिस्किट', 40, 50, 'biscuits', 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format', '150g'),
  p('Oreo Chocolate', 'ओरियो', 30, 35, 'biscuits', 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500&auto=format', '120g'),
  p('Marie Gold', 'मैरी गोल्ड', 25, 30, 'biscuits', 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format', '200g'),

  // Personal Care
  p('Clinic Plus Shampoo 6ml x16', 'क्लिनिक प्लस शेम्पू', 13, 16, 'personal-care', 'https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=500&auto=format', '16 pouch'),
  p('Sunsilk Black Shampoo', 'सनसिल्क शेम्पू', 13, 16, 'personal-care', 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format', '16 pouch'),
  p('Vaseline Body Lotion 90ml', 'वेसलीन लोशन', 80, 90, 'personal-care', 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format', '90ml'),
  p('Colgate Toothpaste', 'कोलगेट टूथपेस्ट', 95, 110, 'personal-care', 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format', '150g'),
  p('Lifebuoy Soap Pack of 4', 'लाइफबॉय साबुन', 100, 120, 'personal-care', 'https://images.unsplash.com/photo-1585232004423-244e0e6904e3?w=500&auto=format', '4 x 100g'),

  // Household
  p('NCR Floor Cleaner 5L', 'फ्लोर क्लीनर', 120, 180, 'household', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '5L'),
  p('Dish Wash Liquid 1L', 'बर्तन लिक्विड', 50, 60, 'household', 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&auto=format', '1L'),
  p('Hand Wash Liquid 1L', 'हैंड वाश लिक्विड', 80, 90, 'household', 'https://images.unsplash.com/photo-1584744646014-49c9baaf68e2?w=500&auto=format', '1L'),
  p('Surf Excel Detergent 1kg', 'सर्फ एक्सेल', 130, 150, 'household', 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=500&auto=format', '1kg'),
  p('Vim Bar Pack of 3', 'विम बार', 45, 60, 'household', 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=500&auto=format', '3 pack'),

  // Baby Care
  p('Cerelac Wheat Apple', 'सेरेलैक', 260, 295, 'baby-care', 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&auto=format', '300g'),
  p('Pampers Diapers M', 'पैम्पर्स डायपर', 450, 550, 'baby-care', 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&auto=format', '30 pcs'),
  p('Johnson Baby Powder', 'जॉनसन बेबी पाउडर', 180, 220, 'baby-care', 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&auto=format', '400g'),
]

export const getById = (id) => PRODUCTS.find(p => p.id === id)
export const getByCategory = (slug) => PRODUCTS.filter(p => p.category === slug)
export const getFeatured = () => PRODUCTS.filter(p => p.discount >= 15).slice(0, 12)
export const getBestDeals = () => PRODUCTS.filter(p => p.discount >= 20).slice(0, 6)
