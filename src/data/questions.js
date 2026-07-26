export const QUESTIONS = [
  // SECTION 1 | PROFILE & PALATE
  {
    id: "q1_demographics",
    section: "SECTION 1 | PROFILE & PALATE",
    category: "DEMOGRAPHICS",
    title: "Where are you based and what age group do you belong to?",
    subtitle: "Select your primary location and age group.",
    type: "dual_select",
    options: {
      cities: ["Mumbai", "Bengaluru", "Delhi NCR", "Goa", "Pune", "Hyderabad", "Chennai", "Kolkata", "Other Tier 1/2 City", "International"],
      ages: ["21–25", "26–35", "36–45", "46–55", "55+"]
    }
  },
  {
    id: "q2_beverage_categories",
    section: "SECTION 1 | PROFILE & PALATE",
    category: "PREFERENCES",
    title: "Which beverage categories do you gravitate toward most?",
    subtitle: "Select up to 3 options.",
    type: "standard_multi",
    maxSelect: 3,
    options: [
      { id: "aged_spirits", label: "Aged Spirits (Whisky, Bourbon & Aged Rum)" },
      { id: "craft_botanicals", label: "Craft Botanicals & Gin" },
      { id: "spiced_rums", label: "Island & Spiced Rums" },
      { id: "wines_sparkling", label: "Fine Wines & Champagne" },
      { id: "craft_beer", label: "Craft Beer & Artisanal Ales" },
      { id: "rtd_cocktails", label: "Ready-to-Drink Cocktails & Premium Spritzes" }
    ]
  },
  {
    id: "q3_flavour_notes",
    section: "SECTION 1 | PROFILE & PALATE",
    category: "PALATE PREFERENCES",
    title: "When choosing a premium drink, which flavour profiles appeal to you?",
    subtitle: "Select up to 3 options.",
    type: "standard_multi",
    maxSelect: 3,
    options: [
      { id: "fruity", label: "Fruity (Tropical Fruits, Berries & Orchard Notes)" },
      { id: "floral", label: "Floral (Elderflower, Citrus Blossom & Botanicals)" },
      { id: "smoky", label: "Smoky (Toasted Oak, Peat & Charred Wood)" },
      { id: "earthy", label: "Earthy (Herbal, Sap, Moss & Forest Floor)" },
      { id: "fresh", label: "Fresh (Crisp Citrus Zest, Mint & Fresh Coconut Sap)" },
      { id: "dark", label: "Dark (Malty, Roasted Grain & Deep Molasses)" },
      { id: "warm_spices", label: "Warm & Spices (Ceylon Cinnamon, Clove & Star Anise)" },
      { id: "indulgent_dark", label: "Indulgent Dark (Espresso, Dark Cocoa & Rich Honey)" }
    ]
  },

  // SECTION 2 | PACKAGING & AESTHETICS
  {
    id: "q4_bottle_silhouette",
    section: "SECTION 2 | PACKAGING & AESTHETICS",
    category: "BOTTLE STUDY",
    title: "Which bottle silhouette draws your eye first on a shelf?",
    subtitle: "Select your preferred glass structure.",
    type: "standard_single",
    options: [
      { id: "apothecary", label: "Apothecary & Heavy Heritage Glass (Classic, Sturdy, Cork Stopper)" },
      { id: "sleek_geometry", label: "Sleek & Minimalist (Tall, Clean Edges, Modern Geometry)" },
      { id: "textured_craft", label: "Textured Craft Glass (Embossed Details, Tactile Ribbing)" },
      { id: "modern_matte", label: "Opaque & Matte (Frosted Dark Glass, Contemporary Finish)" }
    ]
  },
  {
    id: "q5_glass_finish",
    section: "SECTION 2 | PACKAGING & AESTHETICS",
    category: "BOTTLE STUDY",
    title: "Which glass tone feels most premium for a craft spirit?",
    subtitle: "Select your preferred visual tone.",
    type: "standard_single",
    options: [
      { id: "forest_green", label: "Deep Forest Green Glass (Organic, Botanical, Heritage)" },
      { id: "warm_amber", label: "Warm Barrel Amber Glass (Rich Aging, Traditional Craft)" },
      { id: "crystal_clear", label: "Ultra-Clear Heavy Crystal Glass (Purity, Clarity, Premium Liquid)" },
      { id: "opaque_black", label: "Opaque Black / Velvet Matte Glass (Luxury, Mystery, Modern)" }
    ]
  },
  {
    id: "q6_label_style",
    section: "SECTION 2 | PACKAGING & AESTHETICS",
    category: "BRAND AESTHETICS",
    title: "Which label typography and style resonates most with you?",
    subtitle: "Preview how each typeface feels on a physical bottle label.",
    type: "font_preview_single",
    options: [
      { 
        id: "classic_editorial", 
        label: "Classic Editorial & Serif", 
        description: "Timeless, refined, and publication-grade elegance.",
        sampleText: "The Heritage Botanical Distillery",
        fontClass: "font-serif italic text-lg sm:text-xl text-[#EFECE6] tracking-wide"
      },
      { 
        id: "bold_minimal", 
        label: "Modern Minimalist Sans-Serif", 
        description: "Clean, ultra-modern, and architectural geometry.",
        sampleText: "ELEMENTS / SAP & BOTANICALS",
        fontClass: "font-sans uppercase font-extralight tracking-[0.3em] text-xs sm:text-sm text-[#EFECE6]"
      },
      { 
        id: "handcrafted_script", 
        label: "Handcrafted Artisanal Script", 
        description: "Expressive, organic, and crafted with personality.",
        sampleText: "Artisanal Ceylon Craft Reserve",
        fontClass: "font-serif italic font-bold tracking-wider text-xl sm:text-2xl text-[#B38B59]"
      },
      { 
        id: "vintage_stamped", 
        label: "Heritage Reserve Display", 
        description: "Tactile, bold, and reminiscent of historic spirit casks.",
        sampleText: "EST. 2026 — BATCH NO. 01 — 750ML",
        fontClass: "font-serif font-black uppercase text-xs sm:text-sm tracking-[0.25em] text-[#B38B59] border-b border-t border-[#B38B59]/40 py-1 inline-block"
      }
    ]
  },

  // SECTION 3 | EXPLORATION & VALUE
  {
    id: "q7_adventurous_scale",
    section: "SECTION 3 | EXPLORATION & VALUE",
    category: "EXPLORATION",
    title: "How eager are you to try entirely new or regional craft spirit categories?",
    subtitle: "Such as elevated coconut sap spirits or botanical tropical rums.",
    type: "scale",
    min: 1,
    max: 5,
    minLabel: "1 - I stick exclusively to global classics",
    maxLabel: "5 - I am always hunting for unique craft releases"
  },
  {
    id: "q8_innovation_mindset",
    section: "SECTION 3 | EXPLORATION & VALUE",
    category: "CATEGORY PERCEPTION",
    title: "If you saw a new premium Coconut Spirit or Botanical Rum, how would you react?",
    subtitle: "Select the option that best matches your mindset.",
    type: "standard_single",
    options: [
      { id: "instant_buy", label: "Instant Buy — I love discovering unique regional craft spirits." },
      { id: "curious_bar", label: "Curious — I would order it at a cocktail lounge first before buying a bottle." },
      { id: "skeptical_reviews", label: "Skeptical — I would need to read reviews or recommendations first." },
      { id: "not_interested", label: "Not Interested — I prefer established traditional categories." }
    ]
  },
  {
    id: "q9_price_threshold",
    section: "SECTION 3 | EXPLORATION & VALUE",
    category: "PRICE SENSITIVITY",
    title: "What price range do you consider standard for a premium 750ml craft bottle?",
    subtitle: "Select your usual willingness-to-pay threshold.",
    type: "standard_single",
    options: [
      { id: "p_1500_2500", label: "₹1,500 – ₹2,500 (Casual Premium)" },
      { id: "p_2500_3800", label: "₹2,500 – ₹3,800 (Boutique Craft)" },
      { id: "p_3800_5500", label: "₹3,800 – ₹5,500 (Luxury Release / Gifting)" },
      { id: "p_5500_plus", label: "₹5,500+ (Ultra-Luxury / Collector)" }
    ]
  },

  // SECTION 4 | LAUNCH STRATEGY
  {
    id: "q10_launch_channel",
    section: "SECTION 4 | BRAND LAUNCH STRATEGY",
    category: "LAUNCH DISCOVERY",
    title: "What is the best way for a new premium brand to introduce itself to you?",
    subtitle: "Select up to 2 preferred channels.",
    type: "standard_multi",
    maxSelect: 2,
    options: [
      { id: "tasting_popups", label: "Exclusive Tasting Pop-ups & Takeovers at High-End Lounges" },
      { id: "online_curators", label: "Reviews & Features from Online Alcohol Curators & Specialists" },
      { id: "word_of_mouth", label: "Direct Word-of-Mouth Recommendations & Private Tastings" },
      { id: "craft_festivals", label: "Boutique Craft Spirits Festivals & Exhibitions" },
      { id: "mixologist_endorsements", label: "Mixologist & Bartender Signature Cocktails" },
      { id: "editorial_features", label: "Curated Lifestyle & Spirits Editorial Features" }
    ]
  },
  {
    id: "q11_purchase_trigger",
    section: "SECTION 4 | BRAND LAUNCH STRATEGY",
    category: "CONVERSION DRIVERS",
    title: "What factor would most strongly influence you to try a new brand?",
    subtitle: "Select up to 2 primary decision drivers.",
    type: "standard_multi",
    maxSelect: 2,
    options: [
      { id: "authentic_heritage", label: "An authentic story & natural ingredient heritage" },
      { id: "mixologist_reviews", label: "Mixologist & expert sommelier tasting reviews" },
      { id: "influencer_endorsements", label: "Trusted creator & specialist endorsements" },
      { id: "pr_top_websites", label: "PR features on top lifestyle & beverage publications" },
      { id: "stunning_packaging", label: "Exceptional bottle packaging & table aesthetics" },
      { id: "friend_recommendation", label: "Direct recommendation from a trusted friend" }
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
