import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import "bulma/css/bulma.min.css";
import ThemeProvider from "@/app/components/themes/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteUrl, siteName, sitePhone, siteEmail, siteDescription } from "@/app/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

/**
 * Social share image, used for both og:image and twitter:image.
 *
 * Relative on purpose — metadataBase resolves it to the absolute URL both specs
 * require. Setting it in config overrides the generated opengraph-image.tsx,
 * which would otherwise supply both tags.
 */
const SHARE_IMAGE = "/Kwesi-Business-Cards-Final.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Kyro & Bros",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    // Overrides the generated opengraph-image.tsx. Most preview surfaces
    // (iMessage, Slack, Discord, Facebook, LinkedIn, WhatsApp) read og:image
    // rather than twitter:image, so the branded card has to be set here too or
    // they keep showing the generated text card.
    images: [
      {
        url: SHARE_IMAGE,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // The twitter-image file convention couldn't be used here — it accepts
    // jpg/png/gif but not webp, so a twitter-image.webp would be ignored.
    images: [
      {
        url: SHARE_IMAGE,
        alt: siteName,
      },
    ],
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  telephone: sitePhone,
  email: siteEmail,
  image: `${siteUrl}/KYROANDBROS.webp`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Houston",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${interTight.variable}`}
    >
      <head>
        {/* Set the saved/system theme on <html> before paint so the last-used theme is
            applied on refresh with no flash of the wrong colors. Lives in <head> so it
            runs before any body content is parsed. Mirrored into React by ThemeProvider
            via useSyncExternalStore. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* docs recommend a native <script> for JSON-LD (it's data, not executable code) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
