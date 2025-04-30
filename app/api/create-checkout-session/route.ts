import { NextResponse } from 'next/server';
import { stripeProducts } from '@/src/stripe-config';

export async function POST(request: Request) {
  try {
    const { productId, quantity = 1 } = await request.json();

    if (!productId) {
      return NextResponse.json(
        { message: 'Product ID is required' },
        { status: 400 }
      );
    }

    // Get product info from our config
    const product = stripeProducts[productId as keyof typeof stripeProducts];
    
    if (!product) {
      return NextResponse.json(
        { message: 'Invalid product ID' },
        { status: 400 }
      );
    }

    // Return the external URL
    return NextResponse.json({ 
      url: product.externalUrl || "https://www.eventim-light.com/ch/a/659fbbcd259d127a6583c737?fbclid=IwY2xjawJwWsBleHRuA2FlbQIxMAABHlJkrES8Gu9hUNl6qS9q80580lugbqpwRtYJ534H_zRB20QNu6DhsPi-THzq_aem_6cwgTShRaL_IxY5yXigDmg"
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { message: 'Error creating checkout session', error: (error as Error).message },
      { status: 500 }
    );
  }
}