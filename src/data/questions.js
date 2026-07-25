export const QUESTIONS = [
  // SECTION 1 | PROFILE & PALATE
  {
    id: "q1_age_group",
    section: "SECTION 1 | PROFILE & PALATE",
    category: "DEMOGRAPHICS",
    title: "Which age group best describes your stage of life?",
    subtitle: "Select the group that applies to you.",
    type: "image_grid",
    maxSelect: 1,
    options: [
      { id: "21_25", label: "21–25 (Emerging Connoisseur)", image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=500" },
      { id: "26_35", label: "26–35 (Modern Enthusiast)", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=500" },
      { id: "36_45", label: "36–45 (Refined Palate)", image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=500" },
      { id: "46_plus", label: "46+ (Classic Collector)", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=500" }
    ]
  },
  {
    id: "q2_beverage_categories",
    section: "SECTION 1 | PROFILE & PALATE",
    category: "PREFERENCES",
    title: "Which beverage categories do you gravitate toward most?",
    subtitle: "Choose up to 3 options.",
    type: "image_grid",
    maxSelect: 3,
    options: [
      { id: "aged_spirits", label: "Aged Spirits (Whisky & Bourbon)", image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=500" },
      { id: "craft_botanicals", label: "Craft Botanicals & Gin", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=500" },
      { id: "spiced_rums", label: "Island & Spiced Rums", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=500" },
      { id: "wines_sparkling", label: "Fine Wines & Champagne", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=500" },
      { id: "craft_beer", label: "Craft Beer & Ales", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=500" },
      { id: "rtd_cocktails", label: "Ready-to-Drink Cocktails", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=500" }
    ]
  },
  {
    id: "q3_flavour_notes",
    section: "SECTION 1 | PROFILE & PALATE",
    category: "PALATE",
    title: "When choosing a premium drink, which flavour profiles appeal to you?",
    subtitle: "Select up to 2 options.",
    type: "image_grid",
    maxSelect: 2,
    options: [
      { id: "tropical_fresh", label: "Tropical & Fresh (Coconut, Citrus)", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=500" },
      { id: "warm_spiced", label: "Warm & Spiced (Cinnamon, Oak)", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=500" },
      { id: "rich_indulgent", label: "Rich & Indulgent (Coffee, Honey)", image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=500" },
      { id: "earthy_botanical", label: "Earthy & Botanical (Herbal, Flora)", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=500" }
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
      { id: "apothecary", label: "Apothecary & Heritage", image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=500" },
      { id: "sleek_geometry", label: "Sleek & Minimalist", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=500" },
      { id: "textured_craft", label: "Textured & Embossed Craft", image: "https://images.unsplash.com/photo-1616768393663-e380e22ecbfa?auto=format&fit=crop&q=80&w=500" },
      { id: "modern_matte", label: "Modern Opaque / Matte", image: "https://images.unsplash.com/photo-1595932598380-459f0322c2bb?auto=format&fit=crop&q=80&w=500" }
    ]
  },
  {
    id: "q5_glass_colour",
    section: "SECTION 2 | PACKAGING & AESTHETICS",
    category: "BOTTLE STUDY",
    title: "Which glass finish feels most premium for a high-end spirit?",
    subtitle: "Select your preferred aesthetic finish.",
    type: "image_grid",
    maxSelect: 1,
    options: [
      { id: "forest_green", label: "Deep Forest Green Glass", image: "https://images.unsplash.com/photo-1614316710469-6d8011c342cb?auto=format&fit=crop&q=80&w=500" },
      { id: "warm_amber", label: "Warm Amber Glass", image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=500" },
      { id: "crystal_clear", label: "Ultra-Clear Crystal Glass", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=500" },
      { id: "frosted_dark", label: "Frosted / Opaque Dark Glass", image: "https://images.unsplash.com/photo-1595932598380-459f0322c2bb?auto=format&fit=crop&q=80&w=500" }
    ]
  },

  // SECTION 3 | EXPLORATION & VALUE
  {
    id: "q6_innovation_reaction",
    section: "SECTION 3 | EXPLORATION & VALUE",
    category: "CATEGORY PERCEPTION",
    title: "If you saw a new premium Coconut Spirit or Botanical Rum, how would you react?",
    subtitle: "Select the option that matches your mindset.",
    type: "image_grid",
    maxSelect: 1,
    options: [
      { id: "instant_buy", label: "Instant buy — I love unique regional spirits.", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=500" },
      { id: "curious_bar", label: "Curious — I would try it at a bar first.", image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=500" },
      { id: "skeptical_reviews", label: "Skeptical — I need reviews first.", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=500" }
    ]
  },
  {
    id: "q7_price_threshold",
    section: "SECTION 3 | EXPLORATION & VALUE",
    category: "PRICE SENSITIVITY",
    title: "What price threshold do you consider standard for a 750ml craft bottle?",
    subtitle: "Select your usual willingness-to-pay range.",
    type: "image_grid",
    maxSelect: 1,
    options: [
      { id: "p_1500_2500", label: "₹1,500 – ₹2,500 (Casual Premium)", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=500" },
      { id: "p_2500_3800", label: "₹2,500 – ₹3,800 (Boutique Craft)", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=500" },
      { id: "p_3800_5500", label: "₹3,800 – ₹5,500 (Luxury Gifting)", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=500" }
    ]
  },

  // SECTION 4 | LAUNCH STRATEGY
  {
    id: "q8_launch_channel",
    section: "SECTION 4 | BRAND LAUNCH STRATEGY",
    category: "DISCOVERY CHANNELS",
    title: "What is the best way for a new premium brand to introduce itself to you?",
    subtitle: "Select up to 2 channels.",
    type: "image_grid",
    maxSelect: 2,
    options: [
      { id: "tasting_popups", label: "Tasting Pop-ups at High-End Bars", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=500" },
      { id: "craft_festivals", label: "Exclusive Launch at Craft Festivals", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=500" },
      { id: "mixologist_word", label: "Mixologist & Bartender Endorsement", image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=500" },
      { id: "editorial_social", label: "Curated Editorial Features", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=500" }
    ]
  },

  // FINAL QUESTION
  {
    id: "q9_ultimate_standard",
    section: "FINAL INSIGHT",
    category: "OPEN OPINION",
    title: "Complete this sentence:",
    subtitle: '"A great premium beverage should always..."',
    type: "text_long"
  }
];
