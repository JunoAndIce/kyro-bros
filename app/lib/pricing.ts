/**
 * Single source of truth for every rate on the site.
 *
 * Prices used to live inline in nine components, which meant a single change
 * had nine chances to be missed and publish a page that contradicted another.
 * Everything customer-facing now derives from the numbers below — change one
 * here and the packages page, both heroes, the home page, the services tabs,
 * the FAQ, and the page metadata all move together.
 *
 * Store numbers, never formatted strings. `usd()` and `usdExact()` are the only
 * places money becomes text, so "$110" and "$110.00" can never drift apart.
 */

/** Whole dollars drop the cents: 110 → "$110", 2.5 → "$2.50". For prose. */
export function usd(amount: number): string {
  return Number.isInteger(amount) ? `$${amount}` : `$${amount.toFixed(2)}`
}

/** Always two decimals: 110 → "$110.00". For rate tables. */
export function usdExact(amount: number): string {
  return `$${amount.toFixed(2)}`
}

/* ---------------------------------------------------------------- inventory */

/** Our entire stock. `count` doubles as the booking cap for each item. */
export const INVENTORY = {
  tent30: { label: "30'×30' tent", count: 1, price: 550, unit: 'per rental', note: 'Sidewalls included' },
  tent10: { label: "10'×10' pop-up tent", count: 3, price: 75, unit: 'per rental', note: 'Sidewalls included' },
  table: { label: 'Banquet table', count: 6, price: 12, unit: 'each', note: '6 ft / 8 ft standard' },
  chair: { label: 'Folding chair', count: 60, price: 2.5, unit: 'each', note: 'Poly folding chair' },
} as const

export const ALA_CARTE = [INVENTORY.tent30, INVENTORY.tent10, INVENTORY.table, INVENTORY.chair]

/* ----------------------------------------------------------------- packages */

export type Pkg = {
  code: string
  title: string
  desc: string
  includes: string[]
  /** Seated guests; equals the chair count in the package. */
  capacity: number
  /** Base rate for a 1-day (24-hour) rental. Scales by DURATIONS. */
  price: number
  badge?: string
  featured?: boolean
}

/**
 * Deliberately priced below the client's rate card (B was $325, C was $135) so
 * every package undercuts the same items bought a la carte. Margins are thin —
 * B saves $11 and C saves $2 — so re-check against ALA_CARTE before moving any
 * per-item price above.
 */
export const PACKAGES: Pkg[] = [
  {
    code: 'Package C',
    title: 'Essential Pop-Up',
    desc: 'Sized for small gatherings, cake and buffet stations, or a single vendor booth.',
    includes: ["1× 10'×10' pop-up tent", '1× banquet table', '10× folding chairs'],
    capacity: 10,
    price: 110,
  },
  {
    code: 'Package B',
    title: 'Mid-Size Shade & Seating',
    desc: 'Built for medium backyard parties and graduation events.',
    includes: ["2× 10'×10' pop-up tents", '3× banquet tables', '30× folding chairs'],
    capacity: 30,
    price: 250,
  },
  {
    code: 'Package A',
    title: 'The Main Event',
    desc: 'Our big tent with every table and chair we own — for weddings, large family reunions, and corporate gatherings.',
    includes: ["1× 30'×30' frame tent", '6× banquet tables', '60× folding chairs'],
    capacity: 60,
    price: 750,
    badge: 'Largest Package',
    featured: true,
  },
]

/** Cheapest package — drives the "from $X" copy on the banner and metadata. */
export const STARTING_PRICE = Math.min(...PACKAGES.map(p => p.price))

/* ---------------------------------------------------------------- durations */

export const DURATIONS = [
  { label: '1 day (standard event)', rate: 1.0, note: 'Base rate' },
  { label: 'Weekend — Friday delivery to Monday pickup', rate: 1.5, note: 'Best value for weekend events' },
  { label: '3–4 days', rate: 2.0, note: 'Mid-week or multi-day event' },
  { label: 'Full week (7 days)', rate: 2.5, note: 'Extended event rate' },
]

/** "1.5×" — multipliers always render with one decimal. */
export const multiplier = (rate: number) => `${rate.toFixed(1)}×`

export const WEEKEND_MULTIPLIER = DURATIONS[1].rate

/* --------------------------------------------------------------------- fees */

export const FEES = {
  /** Flat, applied to every booking. */
  agency: 75,
  /** Share of the rental subtotal, after the duration multiplier. */
  damageWaiverRate: 0.08,
  /** Counted before the agency fee and delivery. Matches the cheapest package. */
  minimumOrder: 110,
} as const

/** "8%" */
export const damageWaiverPct = `${Math.round(FEES.damageWaiverRate * 100)}%`

/* ----------------------------------------------------------------- delivery */

export const DELIVERY = {
  zone1: { label: 'Zone 1 — 0 to 15 miles', price: 75 },
  zone2: { label: 'Zone 2 — 16 to 30 miles', price: 125 },
  zone3: { label: 'Zone 3 — over 30 miles', price: 125, perExtraMile: 2.5, afterMiles: 30 },
} as const

export const DELIVERY_FROM = DELIVERY.zone1.price

/* -------------------------------------------------------- setup and add-ons */

/** Default is stacked drop-off, included in the delivery fee. */
export const SETUP = { chair: 1, table: 3 } as const

export const ADD_ONS = {
  lighting10: 60,
  lighting30: 150,
  anchorPerLeg: 20,
} as const

export const SURCHARGES = {
  longCarry: 50,
  afterHours: 150,
  exactWindow: 75,
} as const
