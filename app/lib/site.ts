// Single source of truth for the business facts used in SEO metadata and
// structured data. Every canonical URL, the sitemap, robots.txt, and the
// LocalBusiness JSON-LD derive from `siteUrl`, so an unset/wrong value here
// poisons all of them at once.
//
// NEXT_PUBLIC_APP_URL is kept only as a fallback for older environments that
// still define it (local .env.local sets it to localhost:3000). Nothing reads
// it directly any more — checkout.ts imports `siteUrl` from here — so it can be
// dropped once every environment defines NEXT_PUBLIC_SITE_URL.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_APP_URL ?? 'https://kyrobrosllc.com'
export const siteName = 'Kyro & Bros Party Supply Rentals'
export const sitePhone = '+1-612-200-6350'
export const siteEmail = 'kyrobros34@gmail.com'
export const siteDescription =
  'Tent, table, and chair rentals in Houston, TX — packages from $110 a day, with delivery and optional setup and teardown.'
