export const QUESTIONS = [
  {
    id: "q1_frequency",
    category: "LIFESTYLE & OCCASION",
    title: "How often do you consume alcoholic beverages?",
    subtitle: "Select the option that best reflects your general routine.",
    type: "single",
    options: [
      { id: "daily", label: "Daily" },
      { id: "2_3_week", label: "2–3 times a week" },
      { id: "once_week", label: "Once a week" },
      { id: "2_3_month", label: "2–3 times a month" },
      { id: "rarely", label: "Rarely" },
      { id: "never", label: "Never" }
    ]
  },
  {
    id: "q2_types",
    category: "BEVERAGE PREFERENCES",
    title: "What types of alcoholic beverages do you prefer?",
    subtitle: "Select all that apply to your current palate.",
    type: "multiple",
    hasImages: true, // Enables visual card grid
    options: [
      { id: "whisky", label: "Whisky & Bourbon", image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=400" },
      { id: "gin", label: "Craft Gin & Tonics", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&q=80&w=400" },
      { id: "rum", label: "Spiced & Aged Rum", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400" },
      { id: "wine", label: "Fine Wines & Champagne", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=400" },
      { id: "cocktails", label: "Curated Cocktails", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=400" },
      { id: "beer", label: "Craft Beer & Ales", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=400" }
    ]
  },
  {
    id: "q3_influences",
    category: "PURCHASE DRIVERS",
    title: "What influences your choice the most?",
    subtitle: "Ranked by personal importance.",
    type: "single",
    options: [
      { id: "taste", label: "Taste & Flavour Profile" },
      { id: "quality", label: "Ingredient Quality & Origin" },
      { id: "price", label: "Price Point & Value" },
      { id: "brand", label: "Brand Reputation & Heritage" },
      { id: "packaging", label: "Bottle Design & Aesthetics" },
      { id: "recommendations", label: "Bartender / Friend Recommendations" }
    ]
  },
  {
    id: "q4_emerging",
    category: "CATEGORY INNOVATION",
    title: "How do you feel about emerging regional heritage spirit categories?",
    subtitle: "Such as elevated coconut sap distillates or botanical tropical gins.",
    type: "single",
    options: [
      { id: "very_excited", label: "Very excited to explore" },
      { id: "curious", label: "Curious to try under right positioning" },
      { id: "neutral", label: "Neutral" },
      { id: "not_interested", label: "Prefer traditional global spirits" }
    ]
  }
];
