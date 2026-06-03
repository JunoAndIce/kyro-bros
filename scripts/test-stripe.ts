import dotenv from "dotenv";
dotenv.config({ path: ".env" });
dotenv.config({ path: ".env.local", override: true });

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/backend/generated/client";
import Stripe from "stripe";

const pool    = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma  = new PrismaClient({ adapter });
const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY!);

async function main() {
  // 1. Create a test booking in the DB
  const booking = await prisma.booking.create({
    data: {
      firstName:    "Test",
      lastName:     "Customer",
      email:        "ekwere.edi@gmail.com",
      eventDate:    new Date("2026-07-04"),
      eventAddress: "123 Party Lane, Houston TX",
      guestCount:   50,
      totalPrice:   500,
      status:       "PENDING",
    },
  });
  console.log("✓ Created test booking:", booking.id);

  // 2. Create a Stripe checkout session for a 30% deposit
  const deposit = Math.round(booking.totalPrice * 0.3);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: deposit * 100,
          product_data: {
            name: `Deposit — Kyro Bros Event (${new Date(booking.eventDate).toLocaleDateString()})`,
            description: `30% deposit for event at ${booking.eventAddress}`,
          },
        },
      },
    ],
    metadata:    { bookingId: booking.id },
    success_url: "http://localhost:3000/booking/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url:  "http://localhost:3000/booking/cancelled",
  });

  console.log("\n✓ Stripe checkout session created");
  console.log(`  Deposit amount: $${deposit}`);
  console.log(`  Booking ID:     ${booking.id}`);
  console.log("\n👉 Open this URL and pay with card 4242 4242 4242 4242:");
  console.log(`\n   ${session.url}\n`);
  console.log("After payment, check your Stripe CLI terminal for the webhook event.");
  console.log(`Then verify in Supabase: booking ${booking.id} should be CONFIRMED with depositPaid = true.\n`);

  await prisma.$disconnect();
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
