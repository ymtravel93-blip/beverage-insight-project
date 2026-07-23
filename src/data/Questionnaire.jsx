export const QUESTIONS = [
  {
    id: "q1_lifestyle",
    category: "LIFESTYLE & OCCASION",
    title: "How do you typically prefer to unwind or celebrate standard evening occasions?",
    subtitle: "Select the setting that best reflects your regular social habits.",
    type: "single",
    options: [
      { id: "quiet_home", label: "Quiet relaxation at home", detail: "Solo or with immediate family" },
      { id: "intimate_gatherings", label: "Intimate dinner parties", detail: "Small groups, curated food & drinks" },
      { id: "bars_lounges", label: "Cocktail bars & premium lounges", detail: "Exploring mixology and ambient venues" },
      { id: "large_events", label: "High-energy social events", detail: "Clubs, concerts, and festivals" }
    ]
  },
  {
    id: "q2_categories",
    category: "BEVERAGE PREFERENCES",
    title: "Which alcoholic beverage categories do you gravitate toward most frequently?",
    subtitle: "Choose up to two primary preferences.",
    type: "multiple",
    maxSelect: 2,
    options: [
      { id: "craft_spirits", label: "Craft & Heritage Spirits", detail: "Gin, small-batch rum, single malts" },
      { id: "fine_wine", label: "Wines & Champagne", detail: "Still, sparkling, or fortified" },
      { id: "premium_beer", label: "Craft Beers & Ales", detail: "IPAs, stouts, microbrews" },
      { id: "ready_to_drink", label: "Premium RTDs & Hard Seltzers", detail: "Pre-mixed cocktails, canned highballs" },
      { id: "non_alc", label: "Non-Alcoholic / Functional", detail: "Zero-proof spirits, botanical tonics" }
    ]
  },
  {
    id: "q3_flavour_profile",
    category: "PALATE & FLAVOUR",
    title: "When selecting a premium spirit, which taste profiles do you find most compelling?",
    subtitle: "Select all that appeal to your personal palate.",
    type: "multiple",
    options: [
      { id: "botanical_herbal", label: "Botanical & Crisp", detail: "Juniper, citrus zest, floral notes" },
      { id: "warm_spice", label: "Warm Spice & Oak", detail: "Cinnamon, toasted oak, nutmeg, vanilla" },
      { id: "tropical_earthy", label: "Earthy & Naturally Sweet", detail: "Coconut sap, raw honey, tropical stone fruits" },
      { id: "smoky_rich", label: "Smoky & Complex", detail: "Peat, charred wood, deep caramel" }
    ]
  },
  {
    id: "q4_emerging_spirits",
    category: "CATEGORY AWARENESS",
    title: "How familiar are you with indigenous or traditional Asian spirit bases being elevated into premium craft formats?",
    subtitle: "Examples include craft arracks, fermented palm/coconut sap distillates, and regional botanical gins.",
    type: "single",
    options: [
      { id: "regular_consumer", label: "Regularly enjoy them", detail: "Actively seek out heritage and artisanal spirits" },
      { id: "curious_tried", label: "Tried occasionally", detail: "Intrigued by the narrative and distinct taste" },
      { id: "aware_not_tried", label: "Aware but haven't tried", detail: "Open to sampling under the right brand positioning" },
      { id: "unaware", label: "Unfamiliar", detail: "Generally stick to traditional global categories (Whisky, Vodka, Gin)" }
    ]
  },
  {
    id: "q5_price_sensitivity",
    category: "PURCHASE BEHAVIOUR",
    title: "What do you consider an acceptable price point for a 750ml bottle of a premium, home-grown craft spirit?",
    subtitle: "Assuming high-grade ingredients and sustainable packaging.",
    type: "single",
    options: [
      { id: "tier_1", label: "₹1,800 – ₹2,500", detail: "Accessible premium for weekly consumption" },
      { id: "tier_2", label: "₹2,500 – ₹3,800", detail: "Core craft segment for weekend entertaining" },
      { id: "tier_3", label: "₹3,800 – ₹5,500", detail: "Super-premium gifting & special occasions" },
      { id: "tier_4", label: "₹5,500+", detail: "Ultra-rare or luxury collector spirits" }
    ]
  },
  {
    id: "q6_packaging_aesthetics",
    category: "PACKAGING & DESIGN",
    title: "Which packaging characteristics elevate your perception of a spirit brand's credibility?",
    subtitle: "Select up to two key attributes.",
    type: "multiple",
    maxSelect: 2,
    options: [
      { id: "minimal_glass", label: "Heavyweight, custom glass geometry", detail: "Tactile glasswork with clean typography" },
      { id: "sustainable_mats", label: "Eco-conscious & paper-led design", detail: "Unbleached labels, recycled closures, wooden caps" },
      { id: "vibrant_art", label: "Illustrative & storytelling art", detail: "Rich cultural motifs and vivid visual narratives" },
      { id: "classic_apothecary", label: "Amber / Tinted apothecary bottles", detail: "Heritage feel with batch numbers and wax seals" }
    ]
  },
  {
    id: "q7_purchase_channels",
    category: "DISCOVERY & ACCESS",
    title: "Where do you primarily discover new beverage brands?",
    subtitle: "Select your main source of inspiration.",
    type: "single",
    options: [
      { id: "bar_recommendation", label: "Bartender recommendations & cocktail menus" },
      { id: "editorial_media", label: "Lifestyle publications & food/drink journalism" },
      { id: "social_digital", label: "Curated social media & digital creators" },
      { id: "word_of_mouth", label: "Peer recommendations and private gatherings" }
    ]
  },
  {
    id: "q8_demographics",
    category: "DEMOGRAPHIC CONTEXT",
    title: "Which region in India best represents your primary residence?",
    subtitle: "Used strictly for regional trend mapping.",
    type: "single",
    options: [
      { id: "metro_west", label: "Mumbai / Goa / Pune" },
      { id: "metro_south", label: "Bengaluru / Hyderabad / Chennai / Kochi" },
      { id: "metro_north", label: "Delhi NCR / Jaipur / Chandigarh" },
      { id: "metro_east", label: "Kolkata / Eastern Hubs" },
      { id: "other_tier1", label: "Other Urban Centers" }
    ]
  }
];
