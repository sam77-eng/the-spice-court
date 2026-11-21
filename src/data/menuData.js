/**
 * THE SPICE COURT — Complete Master Menu Dataset
 * 
 * Categories required:
 * 1. INDIAN STARTERS
 * 2. INDIAN MAIN COURSE
 * 3. BIRYANI AND RICE
 * 4. INDIAN BREADS
 * 5. SOUTH INDIAN
 * 6. CHINESE AND FUSION
 * 7. CAFÉ AND BEVERAGES
 * 8. DESSERTS
 * 
 * Includes 48 authentic, beautifully described dishes with demo INR prices, 
 * dietary tags (isVeg, isGlutenFree, spiceLevel), and high quality culinary imagery.
 */

export const menuCategories = [
  { id: "all", label: "Full Collection" },
  { id: "starters", label: "Indian Starters" },
  { id: "mains", label: "Indian Main Course" },
  { id: "biryani", label: "Biryani & Rice" },
  { id: "breads", label: "Indian Breads" },
  { id: "south-indian", label: "South Indian" },
  { id: "fusion", label: "Chinese & Fusion" },
  { id: "cafe", label: "Café & Beverages" },
  { id: "desserts", label: "Desserts & Sweets" }
];

export const menuItems = [
  // ================= INDIAN STARTERS =================
  {
    id: "st-1",
    name: "Paneer Tikka Royale",
    category: "starters",
    price: 495,
    isVeg: true,
    spiceLevel: "Medium",
    description: "Charcoal-grilled cottage cheese cubes steeped in hand-pounded mustard oil, Kashmiri chilies, and hung curd.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    tags: ["Tandoor", "Chef's Selection"]
  },
  {
    id: "st-2",
    name: "Veg Seekh Kebab Nizami",
    category: "starters",
    price: 445,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Delicate skewers of garden vegetables, raw banana, and roasted gram flour perfumed with royal cardamom.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["Awadhi Heritage"]
  },
  {
    id: "st-3",
    name: "Hara Bhara Kebab",
    category: "starters",
    price: 425,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Crispy pan-seared patties of baby spinach, green peas, and fresh mint centered with toasted cashew slivers.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    tags: ["Crispy", "Classic"]
  },
  {
    id: "st-4",
    name: "Chicken Tikka Angara",
    category: "starters",
    price: 595,
    isVeg: false,
    spiceLevel: "High",
    description: "Tender boneless chicken steeped in smoked cloves, crushed Mathania chillies, and organic ginger-garlic relish.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    tags: ["Smoked Tandoor"]
  },
  {
    id: "st-5",
    name: "Tandoori Chicken Darbari",
    category: "starters",
    price: 685,
    isVeg: false,
    spiceLevel: "Medium",
    description: "Classic bone-in spring chicken marinated overnight in roasted garam masala and slow-roasted over burning charcoals.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    tags: ["Signature Grill"]
  },
  {
    id: "st-6",
    name: "Afghani Malai Soya Chaap",
    category: "starters",
    price: 465,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Succulent soya batons folded in rich cashew velvet, white pepper, and melted artisanal butter.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
    tags: ["Mild & Creamy"]
  },

  // ================= INDIAN MAIN COURSE =================
  {
    id: "mc-1",
    name: "Paneer Butter Masala",
    category: "mains",
    price: 545,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Fresh cottage cheese bathed in an opulent velvety tomato, butter, and sun-dried Kasuri methi silk sauce.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    tags: ["Court Special"]
  },
  {
    id: "mc-2",
    name: "Dal Makhani 24-Hour",
    category: "mains",
    price: 495,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Slow-simmered whole black urad lentils infused with smoked butter, cream, and slow-tempered vine tomatoes.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    tags: ["Heritage Classic"]
  },
  {
    id: "mc-3",
    name: "Kadai Paneer Peshawari",
    category: "mains",
    price: 525,
    isVeg: true,
    spiceLevel: "Medium",
    description: "Tossed bell peppers, red onions, and country cottage cheese simmered in hand-crushed coriander and black pepper sauce.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Wok Tossed"]
  },
  {
    id: "mc-4",
    name: "The Grand Butter Chicken",
    category: "mains",
    price: 645,
    isVeg: false,
    spiceLevel: "Mild",
    description: "Pulled tandoor-smoked chicken breast slow-cooked in a luxurious makhani gravy enriched with cashew cream and honey.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    tags: ["Culinary Crown"]
  },
  {
    id: "mc-5",
    name: "Purani Dilli Chicken Curry",
    category: "mains",
    price: 615,
    isVeg: false,
    spiceLevel: "High",
    description: "Homestyle bone-in chicken slow-cooked with caramelized shallots, whole spices, and rich golden ghee.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    tags: ["Traditional"]
  },
  {
    id: "mc-6",
    name: "Shahi Korma Badami",
    category: "mains",
    price: 565,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Exotic garden florets and paneer in a delicate almond paste, saffron strands, and white poppy seed reduction.",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=800&q=80",
    tags: ["Royal Feast"]
  },

  // ================= BIRYANI AND RICE =================
  {
    id: "by-1",
    name: "Veg Dum Biryani Awadhi",
    category: "biryani",
    price: 495,
    isVeg: true,
    spiceLevel: "Medium",
    description: "Fragrant extra-long aged basmati rice layered with garden vegetables, saffron milk, and sealed under dough crust.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    tags: ["Sealed Dum"]
  },
  {
    id: "by-2",
    name: "Hyderabadi Chicken Dum Biryani",
    category: "biryani",
    price: 645,
    isVeg: false,
    spiceLevel: "High",
    description: "Tender chicken marinated in curd and mint, cooked in 'Kachchi Dum' style alongside aromatic spiced basmati rice.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    tags: ["Hyderabadi Masterpiece"]
  },
  {
    id: "by-3",
    name: "Paneer Tikka Biryani",
    category: "biryani",
    price: 525,
    isVeg: true,
    spiceLevel: "Medium",
    description: "Clay-oven smoked paneer cubes layered with caramelized onions, kewra water, and gilded saffron grains.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    tags: ["House Favorite"]
  },
  {
    id: "by-4",
    name: "Jeera Rice Royale",
    category: "biryani",
    price: 285,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Fluffy aged basmati rice tempered in mountain cow ghee, toasted royal cumin seeds, and fresh coriander.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    tags: ["Ghee Tempered"]
  },
  {
    id: "by-5",
    name: "Kashmiri Navratan Pulao",
    category: "biryani",
    price: 365,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Jeweled fragrant rice tossed with crisp pomegranate jewels, toasted walnuts, cashews, and golden raisins.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    tags: ["Kashmiri Flavours"]
  },

  // ================= INDIAN BREADS =================
  {
    id: "br-1",
    name: "Artisanal Butter Naan",
    category: "breads",
    price: 110,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Soft leavened refined flour bread baked inside hot clay walls and brushed with salted farm butter.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80",
    tags: ["Clay Oven"]
  },
  {
    id: "br-2",
    name: "Roasted Garlic Naan",
    category: "breads",
    price: 135,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Fragrant tandoori naan studded with micro-minced roasted garlic pearls and fine parsley leaves.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80",
    tags: ["Aromatic"]
  },
  {
    id: "br-3",
    name: "Heritage Tandoori Roti",
    category: "breads",
    price: 75,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Traditional whole-wheat flatbread baked on the curved charcoal clay interior with optional melted ghee.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    tags: ["Whole Wheat"]
  },
  {
    id: "br-4",
    name: "Flaky Laccha Paratha",
    category: "breads",
    price: 125,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Multi-layered spiraled whole wheat bread toasted to a crisp bronze crunch with pure desi ghee.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80",
    tags: ["Layered Crisp"]
  },
  {
    id: "br-5",
    name: "Smoked Cheddar Garlic Naan",
    category: "breads",
    price: 175,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Leavened flatbread stuffed with matured aged cheese, toasted garlic, and dried oregano herb dust.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80",
    tags: ["Chef Special"]
  },

  // ================= SOUTH INDIAN =================
  {
    id: "si-1",
    name: "Classic Mysore Masala Dosa",
    category: "south-indian",
    price: 345,
    isVeg: true,
    spiceLevel: "Medium",
    description: "Golden crispy fermented crepe smeared with fiery red garlic chutney and filled with mustard-potato mash.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    tags: ["Crispy Crepe"]
  },
  {
    id: "si-2",
    name: "Steamed Button Idli Platter",
    category: "south-indian",
    price: 265,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Pillowy fermented rice and lentil cakes served with drumstick sambar and fresh coconut-chili relishes.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    tags: ["Light & Wholesome"]
  },
  {
    id: "si-3",
    name: "Ghee Podi Roast Dosa",
    category: "south-indian",
    price: 375,
    isVeg: true,
    spiceLevel: "High",
    description: "Paper-thin wafer dosa crusted with fragrant artisanal gun-powder spice and drenched in smoking hot pure ghee.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    tags: ["Signature Crunch"]
  },
  {
    id: "si-4",
    name: "Crispy Medu Vada (3 pcs)",
    category: "south-indian",
    price: 275,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Golden black-gram fritters with a brittle outer shell and fluffy spiced core with peppercorns and curry leaves.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    tags: ["Golden Crisp"]
  },
  {
    id: "si-5",
    name: "Onion Rava Masala Dosa",
    category: "south-indian",
    price: 365,
    isVeg: true,
    spiceLevel: "Medium",
    description: "Semolina lattice crepe speckled with cumin, green chilies, and sweet red onions, served with tomato chutney.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    tags: ["Lattice Crunch"]
  },

  // ================= CHINESE AND FUSION =================
  {
    id: "cf-1",
    name: "Wok Veg Hakka Noodles",
    category: "fusion",
    price: 385,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Artisanal hand-pulled noodles stir-fried in a searing wok with julienned bell peppers, cabbage, and soy vinegar.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    tags: ["Wok Tossed"]
  },
  {
    id: "cf-2",
    name: "Smoked Chicken Hakka Noodles",
    category: "fusion",
    price: 445,
    isVeg: false,
    spiceLevel: "Medium",
    description: "Tender shredded chicken, scallions, and thin noodles wok-tossed with five-spice seasoning and light sesame.",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80",
    tags: ["High Heat Flame"]
  },
  {
    id: "cf-3",
    name: "Yangzhou Veg Fried Rice",
    category: "fusion",
    price: 365,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Wok-toasted Jasmine rice with fresh sweet corn, spring onions, baby carrots, and fragrant roasted garlic oil.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    tags: ["Fragrant Wok"]
  },
  {
    id: "cf-4",
    name: "Crisp Veg Manchurian Dry",
    category: "fusion",
    price: 395,
    isVeg: true,
    spiceLevel: "Medium",
    description: "Crispy vegetable florets glazed in spicy dark ginger broth, fresh scallions, and crushed red bird's eye chilies.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    tags: ["Street Luxury"]
  },
  {
    id: "cf-5",
    name: "Wok Chilli Paneer Royale",
    category: "fusion",
    price: 435,
    isVeg: true,
    spiceLevel: "High",
    description: "Golden fried cottage cheese batons tossed with crisp shallots, capsicums, and Indo-Chinese fiery garlic gravy.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["Indo-Chinese"]
  },

  // ================= CAFÉ AND BEVERAGES =================
  {
    id: "cfb-1",
    name: "Artisan Cappuccino",
    category: "cafe",
    price: 245,
    isVeg: true,
    spiceLevel: "None",
    description: "Double shot of single-origin Chikmagalur Arabica espresso layered under velvety micro-foam and cocoa dust.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    tags: ["Single Origin"]
  },
  {
    id: "cfb-2",
    name: "Royal Saffron Café Latte",
    category: "cafe",
    price: 295,
    isVeg: true,
    spiceLevel: "None",
    description: "Silky steamed milk and golden espresso infused with pure Kashmiri saffron threads and raw cardamom syrup.",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80",
    tags: ["Signature Brew"]
  },
  {
    id: "cfb-3",
    name: "Velvet Cold Coffee Glacé",
    category: "cafe",
    price: 275,
    isVeg: true,
    spiceLevel: "None",
    description: "Chilled espresso shaken with organic condensed cream, Madagascar vanilla, and crushed glacier ice.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    tags: ["Chilled Indulgence"]
  },
  {
    id: "cfb-4",
    name: "Royal Court Masala Chai",
    category: "cafe",
    price: 195,
    isVeg: true,
    spiceLevel: "Mild",
    description: "Hand-crushed ginger, green cardamom, cinnamon quill, and Assam CTC leaves brewed in whole buffalo milk.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    tags: ["Heritage Brew"]
  },
  {
    id: "cfb-5",
    name: "Sparkling Fresh Lime Soda",
    category: "cafe",
    price: 185,
    isVeg: true,
    spiceLevel: "None",
    description: "Freshly squeezed lime extract, rock salt, mint sprigs, and mineral effervescence served sweet or salted.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    tags: ["Refreshing"]
  },
  {
    id: "cfb-6",
    name: "The Emperor's Pomegranate Elixir",
    category: "cafe",
    price: 325,
    isVeg: true,
    spiceLevel: "None",
    description: "Pressed ruby pomegranates, star anise reduction, sparkling tonic water, and bruised basil leaves.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    tags: ["Signature Mocktail"]
  },
  {
    id: "cfb-7",
    name: "Rose & Lychee Petal Cooler",
    category: "cafe",
    price: 295,
    isVeg: true,
    spiceLevel: "None",
    description: "Fragrant Kannauj organic rose petal syrup, whole lychee fruit, and cracked ice with edible gold shimmer.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80",
    tags: ["Floral Delight"]
  },

  // ================= DESSERTS =================
  {
    id: "ds-1",
    name: "Gulab Jamun Shahi Flambé",
    category: "desserts",
    price: 285,
    isVeg: true,
    spiceLevel: "None",
    description: "Golden khoya spheres infused with green cardamom, soaked in rose syrup and served with warm rabri.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["Court Classic"]
  },
  {
    id: "ds-2",
    name: "Kesari Rasmalai Royale",
    category: "desserts",
    price: 315,
    isVeg: true,
    spiceLevel: "None",
    description: "Delicate chenna discs immersed in chilled saffron milk reduction with slivered Iranian pistachios and almonds.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    tags: ["Silken Sweet"]
  },
  {
    id: "ds-3",
    name: "Belgian Chocolate Silk Brownie",
    category: "desserts",
    price: 345,
    isVeg: true,
    spiceLevel: "None",
    description: "Warm 70% dark chocolate fudge square topped with Madagascar vanilla bean gelato and salted butter caramel.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    tags: ["Café Confection"]
  },
  {
    id: "ds-4",
    name: "Pistachio & Cardamom Cheesecake",
    category: "desserts",
    price: 365,
    isVeg: true,
    spiceLevel: "None",
    description: "Baked New York style cream cheesecake infused with freshly ground green cardamom and roasted pistachio crust.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    tags: ["Fusion Patisserie"]
  },
  {
    id: "ds-5",
    name: "Artisanal Saffron Matka Kulfi",
    category: "desserts",
    price: 295,
    isVeg: true,
    spiceLevel: "None",
    description: "Slow-reduced country milk frozen inside unglazed terracotta pots, perfumed with silver vark and saffron.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
    tags: ["Terracotta Frozen"]
  },
  {
    id: "ds-6",
    name: "Awadhi Shahi Tukda",
    category: "desserts",
    price: 295,
    isVeg: true,
    spiceLevel: "None",
    description: "Ghee-crisped brioche points saturated in cardamom syrup, layered with thick clotted rabri and rose essence.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["Royal Banquet"]
  }
];

export const signatureSpecials = [
  {
    id: "spec-1",
    name: "The Royal Awadhi Dum Biryani",
    tagline: "Slow-Cooked Sealed Clay Pot Perfection",
    category: "Signature Heritage Main",
    price: 745,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
    description: "An authentic tribute to the historic courts of Lucknow. Premium basmati rice infused with whole mace, wild cardamom, and saffron milk is gently steamed under an organic whole-wheat dough seal for eight hours over dying embers.",
    story: "In our culinary philosophy, Biryani is not merely a dish; it is a ceremonial composition. Each grain of rice absorbs the essence of caramelized shallots, garden herbs, and hand-ground royal spices without losing its individual texture.",
    pairing: "Pairs exquisitely with our Royal Pomegranate Elixir and Garlic Butter Naan.",
    highlights: ["8-Hour Slow Embers", "Kashmiri Mongra Saffron", "Dough-Sealed Deg"]
  },
  {
    id: "spec-2",
    name: "Smoked Angara Tandoori Platter",
    tagline: "Fire, Smoke & Himalayan Spices",
    category: "Chef's Signature Starters",
    price: 895,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80",
    description: "A theatrical presentation of skewered delicacies smoked over fragrant applewood and charcoal in our bespoke clay ovens. Basted in cold-pressed mustard oil, Greek hung curd, and stone-ground Rajasthani chillies.",
    story: "Our tandoor is fired continuously at precise temperatures, searing the exterior to seal in natural juices while imparting a delicate charred sweetness that modern ovens cannot emulate.",
    pairing: "Pairs with Mint-Coriander Chutney and Iced Hibiscus Rose Infusion.",
    highlights: ["Applewood Smoked", "Stone-Ground Marinade", "Tableside Charcoal Service"]
  },
  {
    id: "spec-3",
    name: "Royal Dal Court 24-Hour",
    tagline: "The Crown of Indian Slow Cooking",
    category: "Heritage Main Course",
    price: 525,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    description: "Whole black urad lentils and red kidney beans simmered continuously for twenty-four hours over gentle charcoal embers. Blended with fresh tomato reduction, white mountain butter, and sun-dried fenugreek.",
    story: "Patience is our secret ingredient. The protracted cooking process breaks down the legumes into an impossibly silky, naturally sweet cream that coats the palate with timeless warmth.",
    pairing: "Perfect with hot Flaky Laccha Paratha or Jeera Rice Royale.",
    highlights: ["24-Hour Simmer", "Churned Mountain Butter", "Sun-Dried Fenugreek"]
  },
  {
    id: "spec-4",
    name: "Saffron Pistachio Cloud Cheesecake",
    tagline: "Contemporary French-Indian Confectionery",
    category: "Artisanal Café Patisserie",
    price: 395,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80",
    description: "A delicate hybrid of Parisian patisserie technique and royal Indian aromatic botanicals. Creamy mascarpone infused with saffron nectar resting upon a spiced butter-biscuit and roasted pistachio crust.",
    story: "Developed in our café atelier, this dessert bridges the centuries between the grand sweets of Indian imperial banquets and modern European luxury café culture.",
    pairing: "Accompanied by our Single-Origin Chikmagalur Pour-Over Coffee.",
    highlights: ["Iranian Green Pistachio", "Mascarpone Silk", "Rose Gold Garnish"]
  }
];
