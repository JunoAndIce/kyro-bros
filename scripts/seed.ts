import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/backend/generated/client";

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const product = await prisma.product.create({
    data: {
      name: "Folding Table (6ft)",
      description: "Sturdy 6-foot folding table, perfect for banquets — seats up to 8 guests",
      price: 15.00,
      category: "Tables",
      available: true,
    },
  });

  console.log("Created product:", product);
  await prisma.$disconnect();
  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
