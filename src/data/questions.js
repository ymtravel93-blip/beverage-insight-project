export const QUESTIONS = [
  // SECTION 1 | ABOUT YOU
  {
    id: "q1_city",
    section: "SECTION 1 | ABOUT YOU",
    category: "DEMOGRAPHICS",
    title: "Which city do you currently live in?",
    subtitle: "Select your primary location.",
    type: "dropdown",
    options: [
      { id: "mumbai", label: "Mumbai" },
      { id: "bengaluru", label: "Bengaluru" },
      { id: "delhi_ncr", label: "Delhi NCR" },
      { id: "goa", label: "Goa" },
      { id: "pune", label: "Pune" },
      { id: "hyderabad", label: "Hyderabad" },
      { id: "chennai", label: "Chennai" },
      { id: "kolkata", label: "Kolkata" },
      { id: "other_tier1", label: "Other City in India" },
      { id: "international", label: "International / Outside India" }
    ]
  },
  {
    id: "q2_age",
    section: "SECTION 1 | ABOUT YOU",
    category: "DEMOGRAPHICS",
    title: "Which age group do you belong to?",
    subtitle: "Used strictly for demographic mapping.",
    type: "single",
    options: [
      { id: "21_25", label: "21–25" },
      { id: "26_35", label: "26–35" },
      { id: "36_45", label: "36–45" },
      { id: "46_55", label: "46–55" },
      { id: "55_plus", label: "55+" }
    ]
  },
  {
    id: "q3_occupation",
    section: "SECTION 1 | ABOUT YOU",
    category: "DEMOGRAPHICS",
    title: "Which best describes you?",
    subtitle: "Select your primary current status.",
    type: "single",
    options: [
      { id: "student", label: "Student" },
      { id: "working_prof", label: "Working Professional" },
      { id: "business_owner", label: "Business Owner" },
      { id: "self_employed", label: "Self-employed" },
      { id: "homemaker", label: "Homemaker" },
      { id: "retired", label: "Retired" }
    ]
  },
  {
    id: "q4_lifestyle_statement",
    section: "SECTION 1 | ABOUT YOU",
    category: "LIFESTYLE",
    title: "Which statement sounds most like you?",
    subtitle: "Choose the statement that best fits your mindset.",
    type: "single",
    options: [
      { id: "discovering", label: "I enjoy discovering new experiences." },
      { id: "stick_known", label: "I usually stick to what I know." },
      { id: "entertain_home", label: "I enjoy entertaining at home." },
      { id: "restaurants_bars", label: "I love trying new restaurants and bars." }
    ]
  },

  // SECTION 2 | YOUR BEVERAGE PREFERENCES
  {
    id: "q5_enjoyed_beverages",
    section: "SECTION 2 | YOUR BEVERAGE PREFERENCES",
    category: "BEVERAGE PREFERENCES",
    title: "Which beverages do you enjoy?",
    subtitle: "Choose up to 3 options.",
    type: "multiple",
    maxSelect: 3,
    options: [
      { id: "whisky", label: "Whisky" },
      { id: "rum", label: "Rum" },
      { id: "gin", label: "Gin" },
      { id: "vodka", label: "Vodka" },
      { id: "brandy", label: "Brandy" },
      { id: "wine", label: "Wine" },
      { id: "beer", label: "Beer" },
      { id: "cocktails", label: "Cocktails" },
      { id: "rtd", label: "Ready-to-Drink beverages" },
      { id: "other", label: "Other" }
    ]
  },
  {
    id: "q6_favourite_single",
    section: "SECTION 2 | YOUR BEVERAGE PREFERENCES",
    category: "BEVERAGE PREFERENCES",
    title: "If you could choose only ONE beverage, which would it be?",
    subtitle: "Select your primary benchmark choice.",
    type: "single",
    options: [
      { id: "whisky", label: "Whisky" },
      { id: "rum", label: "Rum" },
      { id: "gin", label: "Gin" },
      { id: "vodka", label: "Vodka" },
      { id: "brandy", label: "Brandy" },
      { id: "wine", label: "Wine" },
      { id: "beer", label: "Beer" },
      { id: "cocktails", label: "Cocktails" },
      { id: "rtd", label: "Ready-to-Drink beverages" },
      { id: "other", label: "Other" }
    ]
  },
  {
    id: "q7_discovery_channels",
    section: "SECTION 2 | YOUR BEVERAGE PREFERENCES",
    category: "DISCOVERY",
    title: "Where do you usually discover new beverages?",
    subtitle: "Select your main source of inspiration.",
    type: "single",
    options: [
      { id: "friends_family", label: "Friends & Family" },
      { id: "restaurants", label: "Restaurants" },
      { id: "bars", label: "Bars" },
      { id: "retail_stores", label: "Retail Stores" },
      { id: "social_media", label: "Instagram / Social Media" },
      { id: "travel", label: "Travel" },
      { id: "events_festivals", label: "Events & Festivals" }
    ]
  },
  {
    id: "q8_purchase_driver",
    section: "SECTION 2 | YOUR BEVERAGE PREFERENCES",
    category: "PURCHASE DRIVERS",
    title: "What influences your purchase the most?",
    subtitle: "Select your top deciding factor.",
    type: "single",
    options: [
      { id: "taste", label: "Taste" },
      { id: "brand", label: "Brand" },
      { id: "price", label: "Price" },
      { id: "packaging", label: "Packaging" },
      { id: "recommendation", label: "Recommendation" },
      { id: "story", label: "Story behind the product" }
    ]
  },

  // SECTION 3 | FLAVOUR DISCOVERY
  {
    id: "q9_appealing_flavours",
    section: "SECTION 3 | FLAVOUR DISCOVERY",
    category: "PALATE PREFERENCES",
    title: "Which flavours naturally appeal to you?",
    subtitle: "Choose up to 3 options.",
    type: "multiple",
    maxSelect: 3,
    options: [
      { id: "tropical_fruits", label: "Tropical Fruits" },
      { id: "citrus", label: "Citrus" },
      { id: "coconut", label: "Coconut" },
      { id: "honey", label: "Honey" },
      { id: "vanilla", label: "Vanilla" },
      { id: "coffee", label: "Coffee" },
      { id: "chocolate", label: "Chocolate" },
      { id: "oak", label: "Oak" },
      { id: "smoky", label: "Smoky" },
      { id: "floral", label: "Floral" },
      { id: "herbal", label: "Herbal" },
      { id: "spiced", label: "Spiced" }
    ]
  },
  {
    id: "q10_flavour_style",
    section: "SECTION 3 | FLAVOUR DISCOVERY",
    category: "PALATE PREFERENCES",
    title: "Which style do you usually prefer?",
    subtitle: "Select your preferred profile structure.",
    type: "single",
    options: [
      { id: "smooth_easy", label: "Smooth & Easy" },
      { id: "rich_bold", label: "Rich & Bold" },
      { id: "light_fresh", label: "Light & Fresh" },
      { id: "complex_layered", label: "Complex & Layered" }
    ]
  },
  {
    id: "q11_adventurous_scale",
    section: "SECTION 3 | FLAVOUR DISCOVERY",
    category: "EXPLORATION",
    title: "How adventurous are you when trying something new?",
    subtitle: "On a scale of 1 (Never) to 5 (Always).",
    type: "scale",
    min: 1,
    max: 5,
    minLabel: "1 - Never",
    maxLabel: "5 - Always"
  },

  // SECTION 4 | DISCOVERY
  {
    id: "q12_heard_spirits",
    section: "SECTION 4 | DISCOVERY",
    category: "CATEGORY AWARENESS",
    title: "Which of these have you heard of?",
    subtitle: "Select all that apply.",
    type: "multiple",
    options: [
      { id: "arrack", label: "Arrack" },
      { id: "mezcal", label: "Mezcal" },
      { id: "soju", label: "Soju" },
      { id: "pisco", label: "Pisco" },
      { id: "baijiu", label: "Baijiu" },
      { id: "coconut_spirit", label: "Coconut Spirit" },
      { id: "none", label: "None of these" }
    ]
  },
  {
    id: "q13_coconut_spirit_association",
    section: "SECTION 4 | DISCOVERY",
    category: "PERCEPTION",
    title: "When you hear the words 'Coconut Spirit', what comes to mind?",
    subtitle: "Short answer (flavours, memories, regions, or expectations).",
    type: "text_short"
  },
  {
    id: "q14_curious_to_try",
    section: "SECTION 4 | DISCOVERY",
    category: "CATEGORY INNOVATION",
    title: "Which TWO would you be curious to try?",
    subtitle: "Select exactly 2 options.",
    type: "multiple",
    maxSelect: 2,
    options: [
      { id: "small_batch_rum", label: "Small Batch Rum" },
      { id: "botanical_gin", label: "Botanical Gin" },
      { id: "coffee_liqueur", label: "Coffee Liqueur" },
      { id: "coconut_spirit", label: "Coconut Spirit" },
      { id: "tropical_rum", label: "Tropical Rum" },
      { id: "cinnamon_spirit", label: "Cinnamon Spirit" },
      { id: "rtd_cocktails", label: "Ready-to-Drink Cocktails" },
      { id: "premium_vodka", label: "Premium Vodka" }
    ]
  },

  // SECTION 5 | PACKAGING
  {
    id: "q15_bottle_attention",
    section: "SECTION 5 | PACKAGING",
    category: "BOTTLE STUDY",
    title: "Which bottle catches your attention first?",
    subtitle: "Select based on immediate visual impact.",
    type: "image_select",
    options: [
      { id: "bottle_a", label: "Apothecary Amber", image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=400" },
      { id: "bottle_b", label: "Minimalist Geometry", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=400" },
      { id: "bottle_c", label: "Craft Embossed Glass", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400" },
      { id: "bottle_d", label: "Artisanal Label & Seal", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: "q16_bottle_premium",
    section: "SECTION 5 | PACKAGING",
    category: "BOTTLE STUDY",
    title: "Which bottle looks the most premium?",
    subtitle: "Select the option that conveys highest craft quality.",
    type: "image_select",
    options: [
      { id: "bottle_a", label: "Apothecary Amber", image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=400" },
      { id: "bottle_b", label: "Minimalist Geometry", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=400" },
      { id: "bottle_c", label: "Craft Embossed Glass", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400" },
      { id: "bottle_d", label: "Artisanal Label & Seal", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: "q17_bottle_gifting",
    section: "SECTION 5 | PACKAGING",
    category: "BOTTLE STUDY",
    title: "Which bottle would you most likely buy as a gift?",
    subtitle: "Select the bottle you would present to someone else.",
    type: "image_select",
    options: [
      { id: "bottle_a", label: "Apothecary Amber", image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=400" },
      { id: "bottle_b", label: "Minimalist Geometry", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=400" },
      { id: "bottle_c", label: "Craft Embossed Glass", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400" },
      { id: "bottle_d", label: "Artisanal Label & Seal", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=400" }
    ]
  },

  // SECTION 6 | VALUE
  {
    id: "q18_price_range",
    section: "SECTION 6 | VALUE",
    category: "PRICE SENSITIVITY",
    title: "What price range would you usually consider for a premium 750 ml bottle?",
    subtitle: "Select your standard price threshold.",
    type: "single",
    options: [
      { id: "under_1000", label: "Under ₹1,000" },
      { id: "1000_2000", label: "₹1,000–2,000" },
      { id: "2000_3000", label: "₹2,000–3,000" },
      { id: "3000_5000", label: "₹3,000–5,000" },
      { id: "5000_plus", label: "₹5,000+" }
    ]
  },
  {
    id: "q19_encouragement_factors",
    section: "SECTION 6 | VALUE",
    category: "BRAND ADOPTION",
    title: "What would encourage you to try a completely new beverage brand?",
    subtitle: "Choose up to 3 options.",
    type: "multiple",
    maxSelect: 3,
    options: [
      { id: "free_tasting", label: "Free tasting" },
      { id: "friend_recommendation", label: "Friend's recommendation" },
      { id: "attractive_packaging", label: "Attractive packaging" },
      { id: "interesting_flavour", label: "Interesting flavour" },
      { id: "positive_reviews", label: "Positive reviews" },
      { id: "good_value", label: "Good value for money" },
      { id: "authentic_story", label: "Authentic story" }
    ]
  },

  // FINAL QUESTION
  {
    id: "q20_final_completion",
    section: "FINAL QUESTION",
    category: "OPEN INSIGHT",
    title: "Complete this sentence:",
    subtitle: '"A great premium beverage should always..."',
    type: "text_long"
  }
];
