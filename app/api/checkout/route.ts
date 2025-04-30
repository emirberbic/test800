import { NextRequest, NextResponse } from 'next/server';
import { stripeProducts } from '@/src/stripe-config';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { selectedTicket, quantity = 1 } = body;
    
    // Validate input
    if (!selectedTicket) {
      return NextResponse.json({ error: 'Selected ticket is required' }, { status: 400 });
    }

    // Map ticket type to a Stripe price ID using our config
    const product = stripeProducts[selectedTicket as keyof typeof stripeProducts];
    
    if (!product) {
      return NextResponse.json({ error: 'Invalid ticket type' }, { status: 400 });
    }

    // Return the external URL
    return NextResponse.json({ 
      url: product.externalUrl || "https://www.eventim-light.com/ch/a/659fbbcd259d127a6583c737?fbclid=IwY2xjawJwWsBleHRuA2FlbQIxMAABHlJkrES8Gu9hUNl6qS9q80580lugbqpwRtYJ534H_zRB20QNu6DhsPi-THzq_aem_6cwgTShRaL_IxY5yXigDmg"
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'An error occurred while creating checkout session' },
      { status: 500 }
    );
  }
}