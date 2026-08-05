// Single source of truth for the business facts used in SEO metadata and
// structured data. Every canonical URL, the sitemap, robots.txt, and the
// LocalBusiness JSON-LD derive from `siteUrl`, so an unset/wrong value here
// poisons all of them at once.
//
// NEXT_PUBLIC_APP_URL is kept only as a fallback for older environments that
// still define it (local .env.local sets it to localhost:3000). Nothing reads
// it directly any more — checkout.ts imports `siteUrl` from here — so it can be
// dropped once every environment defines NEXT_PUBLIC_SITE_URL.
const FALLBACK_ORIGIN = 'https://kyrobrosllc.com'

/**
 * Resolve the public origin without ever throwing.
 *
 * layout.tsx feeds this straight into `metadataBase: new URL(siteUrl)`, which
 * is evaluated during `next build` — so a malformed value fails the entire
 * build instead of degrading at runtime. That is precisely what broke the
 * Preview deployments: NEXT_PUBLIC_SITE_URL is set on Production only, Preview
 * fell through to NEXT_PUBLIC_APP_URL, and that value carried no scheme.
 *
 * Both vars are read as literal `process.env.X` expressions so Next can still
 * inline them at build time; indexing process.env dynamically would defeat it.
 */
function resolveOrigin(): string {
  // `??` alone is wrong here: an env var set to "" is a string, so it would win
  // the coalesce and mask the next candidate. Treat blank as absent instead.
  const raw = [process.env.NEXT_PUBLIC_SITE_URL]
    .map(value => value?.trim())
    .find(value => value)

  if (!raw) return FALLBACK_ORIGIN

  // Vercel-style hostnames ("kyro-bros-abc123.vercel.app") have no scheme and
  // `new URL()` rejects them outright.
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`

  try {
    // `.origin` also normalises away a trailing slash or stray path, so callers
    // can keep writing `${siteUrl}/services` without doubling the separator.
    return new URL(withScheme).origin
  } catch {
    return FALLBACK_ORIGIN
  }
}

export const siteUrl = resolveOrigin()
export const siteName = 'Kyro & Bros Party Supply Rentals'
export const sitePhone = '+1-612-200-6350'
export const siteEmail = 'kyrobros34@gmail.com'
export const siteDescription =
  'Tent, table, and chair rentals in Houston, TX — packages from $110 a day, with delivery and optional setup and teardown.'
