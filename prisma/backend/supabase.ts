import { createClient } from "@supabase/supabase-js";

// Server-side client — uses service role key, bypasses Row Level Security.
// Never expose this to the browser.
export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
