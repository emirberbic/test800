// Simple stripe helper for external ticketing
import { stripeProducts } from '@/src/stripe-config';

/**
 * Returns the URL for the external ticketing provider
 */
export function getExternalTicketUrl(productId: string) {
  try {
    const product = stripeProducts[productId as keyof typeof stripeProducts];
    
    if (!product) {
      throw new Error(`Product ${productId} not found`);
    }
    
    return product.externalUrl || "https://www.eventim-light.com/ch/a/659fbbcd259d127a6583c737?fbclid=IwY2xjawJwWsBleHRuA2FlbQIxMAABHlJkrES8Gu9hUNl6qS9q80580lugbqpwRtYJ534H_zRB20QNu6DhsPi-THzq_aem_6cwgTShRaL_IxY5yXigDmg";
  } catch (error) {
    console.error('Error getting ticket URL:', error);
    throw error;
  }
}

/**
 * Returns order history for the current user
 */
export async function getUserOrders() {
  // Mock data for orders
  return [
    {
      product_name: "Festival Weekend Pass",
      order_status: "completed",
      order_date: "2023-05-15T10:30:00Z",
      amount_total: 14900,
      currency: "CHF",
      payment_status: "paid",
      order_id: "ord_123456789"
    },
    {
      product_name: "VIP Festival Pass",
      order_status: "completed",
      order_date: "2023-06-02T14:45:00Z",
      amount_total: 24900,
      currency: "CHF",
      payment_status: "paid",
      order_id: "ord_987654321"
    }
  ];
}