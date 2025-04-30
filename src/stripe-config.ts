// Stripe product configuration
export const stripeProducts = {
  "standard": {
    name: "3-Tage Standard Ticket",
    description: "Voller Festivalzugang für alle drei Tage",
    priceId: "price_1RItnrIzt2VfmkVY4hW0EaMs",
    mode: "payment",
    externalUrl: "https://www.eventim-light.com/ch/a/659fbbcd259d127a6583c737?fbclid=IwY2xjawJwWsBleHRuA2FlbQIxMAABHlJkrES8Gu9hUNl6qS9q80580lugbqpwRtYJ534H_zRB20QNu6DhsPi-THzq_aem_6cwgTShRaL_IxY5yXigDmg"
  },
  // Sunday ticket
  sunday: {
    name: "Tages-Ticket Sonntag",
    description: "Zugang zum Festival nur für Sonntag",
    priceId: "price_1RItnrIzt2VfmkVY4hW0EaMs",
    mode: "payment",
    externalUrl: "https://buy.stripe.com/test_8wMbJ72TP9vs1PyaEE"
  },
  // Saturday ticket
  saturday: {
    name: "Tages-Ticket Samstag",
    description: "Zugang zum Festival nur für Samstag",
    priceId: "price_1RItnrIzt2VfmkVY4hW0EaMs",
    mode: "payment",
    externalUrl: "https://buy.stripe.com/test_8wMbJ72TP9vs1PyaEE"
  },
  // Evening tickets
  evening: {
    name: "Abendkasse Ticket",
    description: "Vor-Ort-Ticketkauf (alle Tage, wenn verfügbar)",
    priceId: "price_1RItnrIzt2VfmkVY4hW0EaMs",
    mode: "payment",
    externalUrl: "https://www.eventim-light.com/ch/a/659fbbcd259d127a6583c737?fbclid=IwY2xjawJwWsBleHRuA2FlbQIxMAABHlJkrES8Gu9hUNl6qS9q80580lugbqpwRtYJ534H_zRB20QNu6DhsPi-THzq_aem_6cwgTShRaL_IxY5yXigDmg"
  }
};

// Helper function to get product by ID
export function getProductById(id: string) {
  return stripeProducts[id as keyof typeof stripeProducts];
}

// Helper function to get all products
export function getAllProducts() {
  return Object.entries(stripeProducts).map(([id, product]) => ({
    id,
    ...product
  }));
}