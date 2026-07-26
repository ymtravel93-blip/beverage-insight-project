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
      { id: "21_25", label: "21–25 (Emerging Connoisseur)", image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=600" },
      { id: "26_35", label: "26–35 (Modern Enthusiast)", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600" },
      { id: "36_45", label: "36–45 (Refined Palate)", image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=600" },
      { id: "46_plus", label: "46+ (Classic Collector)", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600" }
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
      { id: "aged_spirits", label: "Aged Spirits (Whisky & Bourbon)", image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=600" },
      { id: "craft_botanicals", label: "Craft Botanicals & Gin", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=600" },
      { id: "spiced_rums", label: "Island & Spiced Rums", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600" },
      { id: "wines_sparkling", label: "Fine Wines & Champagne", image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=600" },
      { id: "craft_beer", label: "Craft Beer & Ales", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=600" },
      { id: "rtd_cocktails", label: "Ready-to-Drink Cocktails", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "q3_flavour_notes",
    section: "SECTION 1 | PROFILE & PALATE",
    category: "PALATE PREFERENCES",
    title: "When choosing a premium drink, which flavour profiles appeal to you?",
    subtitle: "Select up to 3 options.",
    type: "image_grid",
    maxSelect: 3,
    options: [
      { id: "fruity", label: "Fruity (Tropical Fruits, Berries & Orchard Notes)", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=600" },
      { id: "floral", label: "Floral (Elderflower, Citrus Blossom & Botanicals)", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600" },
      { id: "smoky", label: "Smoky (Toasted Oak, Peat & Charred Wood)", image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=600" },
      { id: "earthy", label: "Earthy (Herbal, Sap, Moss & Forest Floor)", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600" },
      { id: "fresh", label: "Fresh (Crisp Citrus Zest, Mint & Fresh Coconut)", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600" },
      { id: "dark", label: "Dark (Malty, Roasted Grain & Deep Molasses)", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=600" },
      { id: "warm_spices", label: "Warm & Spices (Ceylon Cinnamon, Clove & Star Anise)", image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=600" },
      { id: "indulgent_dark", label: "Indulgent Dark (Espresso, Dark Cocoa & Rich Honey)", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600" }
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
      { id: "apothecary", label: "Apothecary & Heavy Heritage Glass", image: "https://images.unsplash.com/photo-1614316710469-6d8011c342cb?auto=format&fit=crop&q=80&w=600" },
      { id: "sleek_geometry", label: "Sleek, Tall & Modern Minimalist", image: "https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?auto=format&fit=crop&q=80&w=600" },
      { id: "textured_craft", label: "Textured & Embossed Craft Glass", image: "https://images.unsplash.com/photo-1616768393663-e380e22ecbfa?auto=format&fit=crop&q=80&w=600" },
      { id: "modern_matte", label: "Modern Opaque / Frosted Dark Glass", image: "https://images.unsplash.com/photo-1595932598380-459f0322c2bb?auto=format&fit=crop&q=80&w=600" }
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
      { id: "forest_green", label: "Deep Forest Green Glass", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600" },
      { id: "warm_amber", label: "Warm Barrel Amber Glass", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=600" },
      { id: "crystal_clear", label: "Ultra-Clear Heavy Crystal Glass", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600" },
      { id: "opaque_black", label: "Matte Black / Velvet Opaque Glass", image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&q=80&w=600" }
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
      { id: "classic_editorial", label: "Classic Editorial & Serif", sampleText: "The Heritage Distillery", fontStyle: "font-serif italic text-base", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600" },
      { id: "bold_minimal", label: "Modern Minimalist Sans-Serif", sampleText: "ELEMENTS / 01", fontStyle: "font-sans uppercase font-light tracking-[0.2em] text-xs", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600" },
      { id: "handcrafted_script", label: "Handcrafted Cursive & Botanical", sampleText: "Artisanal Botanical Sap", fontStyle: "font-serif italic text-lg", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600" },
      { id: "vintage_stamped", label: "Vintage Heritage Display", sampleText: "RESERVE BATCH NO. 4", fontStyle: "font-serif font-black uppercase text-xs text-[#C5A880]", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600" }
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
      { id: "instant_buy", label: "Instant Buy — I love trying unique regional spirits.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600" },
      { id: "curious_bar", label: "Curious — I would try it at a bar first.", image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=600" },
      { id: "skeptical_reviews", label: "Skeptical — I need to read reviews first.", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600" }
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
      { id: "p_1500_2500", label: "₹1,500 – ₹2,500 (Casual Premium)", image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=600" },
      { id: "p_2500_3800", label: "₹2,500 – ₹3,800 (Boutique Craft)", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=600" },
      { id: "p_3800_5500", label: "₹3,800 – ₹5,500 (Luxury Release / Gifting)", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600" }
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
      { id: "speakeasy_bar", label: "Chic Cocktail Lounges & Speakeasies", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600" },
      { id: "home_entertaining", label: "Hosting Friends & Dinner Parties at Home", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=600" },
      { id: "vacation_resort", label: "Beachfront Resorts & Island Getaways", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600" },
      { id: "luxury_gifting", label: "Special Celebrations & Gifting", image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=600" }
    ]
  },

  // SECTION 4 | LAUNCH STRATEGY
  {
    id: "q10_launch_channel",
    section: "SECTION 4 | BRAND LAUNCH STRATEGY",
    category: "LAUNCH DISCOVERY",
    title: "What is the best way for a new premium brand to introduce itself to you?",
    subtitle: "Select up to 2 preferred channels.",
    type: "image_grid",
    maxSelect: 2,
    options: [
      { id: "tasting_popups", label: "Exclusive Tasting Pop-ups at High-End Lounges", image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=600" },
      { id: "online_curators", label: "Reviews & Features from Online Alcohol Curators & Specialists", image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=600" },
      { id: "word_of_mouth", label: "Direct Word-of-Mouth Recommendations & Tastings", image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=600" },
      { id: "craft_festivals", label: "Boutique Craft Spirits Festivals & Exhibitions", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600" },
      { id: "mixologist_endorsements", label: "Mixologist & Bartender Signature Cocktails", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600" },
      { id: "editorial_features", label: "Curated Lifestyle & Spirits Editorial Features", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "q11_purchase_trigger",
    section: "SECTION 4 | BRAND LAUNCH STRATEGY",
    category: "CONVERSION DRIVERS",
    title: "What factor would most strongly influence you to try a new brand?",
    subtitle: "Select up to 2 primary decision factors.",
    type: "image_grid",
    maxSelect: 2,
    options: [
      { id: "authentic_heritage", label: "Authentic Heritage & Natural Ingredients", image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=600" },
      { id: "mixologist_reviews", label: "Mixologist & Expert Sommelier Reviews", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600" },
      { id: "influencer_endorsements", label: "Trusted Creator & Influencer Endorsements", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600" },
      { id: "pr_top_websites", label: "PR Features & Reviews on Top Websites / Publications", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600" },
      { id: "stunning_packaging", label: "Stunning Bottle Packaging & Table Aesthetics", image: "https://images.unsplash.com/photo-1614316710469-6d8011c342cb?auto=format&fit=crop&q=80&w=600" },
      { id: "friend_recommendation", label: "Direct Word-of-Mouth Recommendation", image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=600" }
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
