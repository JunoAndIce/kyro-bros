import Stripe from 'stripe'

// Server-only — never import this in client components.
// For test: uses sk_test_ key (your account).
// For production: swap STRIPE_SECRET_KEY in the hosting dashboard for the client's sk_live_ key.
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
