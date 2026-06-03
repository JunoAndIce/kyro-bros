import dotenv from "dotenv";
dotenv.config({ path: ".env" });
dotenv.config({ path: ".env.local", override: true });
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function main() {
  const { data, error } = await resend.emails.send({
    from: "Kyro Bros <onboarding@resend.dev>",
    to: "ekwere.edi@gmail.com",
    subject: "Test Email — Kyro Bros",
    html: `
      <h2>Hey, this is a test!</h2>
      <p>If you're reading this, Resend is wired up correctly for Kyro Bros.</p>
      <p>— The Kyro Bros Team</p>
    `,
  });

  if (error) {
    console.error("Failed:", error);
  } else {
    console.log("Sent! Email ID:", data?.id);
  }
}

main();
