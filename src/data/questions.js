export const QUESTIONS = [
  // SECTION 1 | PROFILE & PALATE
  {
    id: "q1_age_group",
    section: "SECTION 1 | PROFILE & PALATE",
    category: "DEMOGRAPHICS",
    title: "Which age group best describes your stage of life?",
    subtitle: "Select the stage that applies to you.",
    type: "image_grid",
    maxSelect: 1,
    options: [
      { id: "21_25", label: "21–25 (Emerging Connoisseur)", image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "26_35", label: "26–35 (Modern Enthusiast)", image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "36_45", label: "36–45 (Refined Palate)", image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "46_plus", label: "46+ (Classic Collector)", image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ]
  },
  {
    id: "q2_beverage_categories",
    section: "SECTION 1 | PROFILE & PALATE",
    category: "PREFERENCES",
    title: "Which beverage categories do you gravitate toward most?",
    subtitle: "Select up to 3 options.",
    type: "image_grid",
    maxSelect: 3,
    options: [
      { id: "aged_spirits", label: "Aged Spirits (Whisky & Bourbon)", image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "craft_botanicals", label: "Craft Botanicals & Gin", image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "spiced_rums", label: "Island & Spiced Rums", image: "https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "wines_sparkling", label: "Fine Wines & Champagne", image: "https://images.pexels.com/photos/290316/pexels-photo-290316.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "craft_beer", label: "Craft Beer & Ales", image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "rtd_cocktails", label: "Ready-to-Drink Cocktails", image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ]
  },
  {
    id: "q3_flavour_notes",
    section: "SECTION 1 | PROFILE & PALATE",
    category: "PALATE",
    title: "When choosing a premium drink, which flavour profiles appeal to you?",
    subtitle: "Select up to 3 options.",
    type: "image_grid",
    maxSelect: 3,
    options: [
      { id: "tropical_citrus", label: "Tropical & Citrus (Coconut Sap, Lime)", image: "https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "warm_spiced", label: "Warm & Spiced (Ceylon Cinnamon, Clove)", image: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "earthy_botanical", label: "Earthy Botanicals (Juniper, Wild Herbs)", image: "https://images.pexels.com/photos/1304542/pexels-photo-1304542.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "honey_vanilla", label: "Honeyed & Toasted (Natural Honey, Vanilla)", image: "https://images.pexels.com/photos/33260/honey-sweet-syrup-organic.jpg?auto=compress&cs=tinysrgb&w=600" },
      { id: "smoky_wood", label: "Smoky & Woody (Toasted Oak, Charred Wood)", image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "espresso_cocoa", label: "Indulgent Dark (Espresso, Dark Cocoa)", image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ]
  },

  // SECTION 2 | PACKAGING & AESTHETICS
  {
    id: "q4_bottle_silhouette",
    section: "SECTION 2 | PACKAGING & AESTHETICS",
    category: "BOTTLE STUDY",
    title: "Which bottle design draws your eye first on a shelf?",
    subtitle: "Select based on visual silhouette.",
    type: "image_grid",
    maxSelect: 1,
    options: [
      { id: "apothecary", label: "Apothecary & Heritage Heavy Glass", image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "sleek_geometry", label: "Sleek, Tall & Minimalist", image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "textured_craft", label: "Textured & Embossed Craft Glass", image: "https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "modern_matte", label: "Modern Opaque / Frosted Finish", image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ]
  },
  {
    id: "q5_glass_finish",
    section: "SECTION 2 | PACKAGING & AESTHETICS",
    category: "BOTTLE STUDY",
    title: "Which glass tone feels most premium for a craft spirit?",
    subtitle: "Select your preferred visual aesthetic.",
    type: "image_grid",
    maxSelect: 1,
    options: [
      { id: "forest_green", label: "Deep Forest Green Glass", image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "warm_amber", label: "Warm Barrel Amber Glass", image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "crystal_clear", label: "Ultra-Clear Heavy Crystal", image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "opaque_black", label: "Opaque Dark / Velvet Finish", image: "https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ]
  },
  {
    id: "q6_label_style",
    section: "SECTION 2 | PACKAGING & AESTHETICS",
    category: "BRAND AESTHETICS",
    title: "Which label typography & branding style resonates with you?",
    subtitle: "Select the typography style you prefer.",
    type: "image_grid",
    maxSelect: 1,
    options: [
      { 
        id: "classic_editorial", 
        label: "Classic Editorial & Serif", 
        fontStyle: "font-serif italic tracking-wide text-lg",
        sampleText: "The Heritage Distillery",
        image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600" 
      },
      { 
        id: "bold_minimal", 
        label: "Modern Minimalist Sans-Serif", 
        fontStyle: "font-sans uppercase font-light tracking-[0.25em] text-xs",
        sampleText: "ELEMENTS / 01",
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=600" 
      },
      { 
        id: "handcrafted_script", 
        label: "Handcrafted Cursive & Botanical", 
        fontStyle: "font-serif italic font-normal text-xl tracking-wider",
        sampleText: "Artisanal Botanical Sap",
        image: "https://images.pexels.com/photos/1304542/pexels-photo-1304542.jpeg?auto=compress&cs=tinysrgb&w=600" 
      },
      { 
        id: "vintage_stamped", 
        label: "Vintage Heritage Display", 
        fontStyle: "font-serif font-black uppercase tracking-widest text-sm text-[#B38B59]",
        sampleText: "RESERVE BATCH NO. 4",
        image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600" 
      }
    ]
  },

  // SECTION 3 | EXPLORATION & VALUE
  {
    id: "q7_innovation_mindset",
    section: "SECTION 3 | EXPLORATION & VALUE",
    category: "CATEGORY PERCEPTION",
    title: "If you saw a new premium Coconut Spirit or Botanical Rum, how would you react?",
    subtitle: "Select the reaction that matches your mindset.",
    type: "image_grid",
    maxSelect: 1,
    options: [
      { id: "instant_buy", label: "Instant Buy — I love trying unique regional spirits.", image: "https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "curious_bar", label: "Curious — I would try it at a bar first.", image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "skeptical_reviews", label: "Skeptical — I need to read reviews first.", image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ]
  },
  {
    id: "q8_price_threshold",
    section: "SECTION 3 | EXPLORATION & VALUE",
    category: "PRICE SENSITIVITY",
    title: "What price range do you consider standard for a premium 750ml craft bottle?",
    subtitle: "Select your usual willingness-to-pay tier.",
    type: "image_grid",
    maxSelect: 1,
    options: [
      { id: "p_1500_2500", label: "₹1,500 – ₹2,500 (Casual Premium)", image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "p_2500_3800", label: "₹2,500 – ₹3,800 (Boutique Craft)", image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "p_3800_5500", label: "₹3,800 – ₹5,500 (Luxury Release / Gifting)", image: "https://images.pexels.com/photos/290316/pexels-photo-290316.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ]
  },
  {
    id: "q9_drinking_occasion",
    section: "SECTION 3 | EXPLORATION & VALUE",
    category: "OCCASION",
    title: "When are you most likely to enjoy a high-end craft spirit?",
    subtitle: "Select your primary setting.",
    type: "image_grid",
    maxSelect: 2,
    options: [
      { id: "speakeasy_bar", label: "Chic Cocktail Lounges & Speakeasies", image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "home_entertaining", label: "Hosting Friends & Dinner Parties at Home", image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "vacation_resort", label: "Beachfront Resorts & Island Getaways", image: "https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "luxury_gifting", label: "Special Celebrations & Gifting", image: "https://images.pexels.com/photos/290316/pexels-photo-290316.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ]
  },

  // SECTION 4 | LAUNCH STRATEGY
  {
    id: "q10_launch_channel",
    section: "SECTION 4 | BRAND LAUNCH STRATEGY",
    category: "DISCOVERY CHANNELS",
    title: "What is the best way for a new premium brand to introduce itself to you?",
    subtitle: "Select up to 2 preferred channels.",
    type: "image_grid",
    maxSelect: 2,
    options: [
      { id: "tasting_popups", label: "Exclusive Tasting Pop-ups at High-End Bars", image: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "craft_festivals", label: "Boutique Craft Spirits Festivals", image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "mixologist_recommend", label: "Mixologist & Bartender Endorsements", image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "editorial_media", label: "Curated Lifestyle & Editorial Features", image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ]
  },
  {
    id: "q11_purchase_trigger",
    section: "SECTION 4 | BRAND LAUNCH STRATEGY",
    category: "CONVERSION DRIVERS",
    title: "What factor would most strongly influence you to try a new brand?",
    subtitle: "Select your primary decision factor.",
    type: "image_grid",
    maxSelect: 1,
    options: [
      { id: "authentic_heritage", label: "Authentic Heritage & Natural Ingredients", image: "https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "taste_awards", label: "Unique Tasting Notes & Mixologist Reviews", image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "stunning_packaging", label: "Stunning Bottle Packaging & Table Aesthetics", image: "https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: "friend_recommendation", label: "Direct Word-of-Mouth Recommendation", image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600" }
    ]
  },

  // FINAL OPEN QUESTION
  {
    id: "q12_ultimate_standard",
    section: "FINAL INSIGHT",
    category: "OPEN OPINION",
    title: "Complete this sentence:",
    subtitle: '"A great premium beverage should always..."',
    type: "text_long"
  }
];
