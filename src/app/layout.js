import { Geist, Geist_Mono, DynaPuff } from "next/font/google";
import "./globals.css";
import FloatingElements from "./components/FloatingElements";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dynaPuff = DynaPuff({
  variable: "--font-dyna",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Mr.Chai • Best Tea Café in Calgary | Artisan Teas, Cozy Café & Takeout",
  description:
    "Mr.Chai — Calgary's artisan tea café. Discover specialty loose-leaf teas, matcha, chai, bubble tea and handcrafted beverages in a cozy, family-friendly space. Fast takeout, catering & gift boxes. Locally sourced ingredients, free Wi-Fi, and warm service in downtown Calgary. Open daily — visit for brunch, a meeting, or a relaxing tea break.",
  keywords: [
    "Calgary cafe",
    "tea shop Calgary",
    "best tea in Calgary",
    "artisan tea Calgary",
    "matcha Calgary",
    "chai tea Calgary",
    "bubble tea Calgary",
    "loose leaf tea",
    "cozy cafe Calgary",
    "tea house Calgary",
    "tea catering Calgary",
    "takeout tea Calgary",
    "Calgary brunch tea",
    "local tea shop",
  ],
  authors: [
    { name: "Mr.Chai Calgary", url: "https://mrchaicalgary.com" }, // replace with your actual site
  ],
  creator: "Mr.Chai Calgary",
  publisher: "Mr.Chai Calgary",
  // base URL used by open graph canonical generation — replace with your real domain
  metadataBase: new URL("https://mrchaicalgary.com"),
  // Robots for crawlers — allow indexing, with sensible limits
  robots: {
    index: true,
    follow: true,
    nocache: false,
    // Google-specific rules
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Theme color and icons (favicon + apple). Replace paths if needed.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2a27" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  // Open Graph (Facebook, LinkedIn) — strong social card
  openGraph: {
    title: "Mr.Chai • Best Tea Café in Calgary",
    description:
      "Mr.Chai — Calgary's artisan tea café offering handcrafted chai, matcha, loose-leaf teas, and bubble tea. Cozy seating, fast takeout, catering, and locally-sourced ingredients. Visit us for brunch, meetings or a relaxing tea experience.",
    url: "https://mrchaicalgary.com/",
    siteName: "Mr.Chai Calgary",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://mrchaicalgary.com/images/og-tea.jpg",
        width: 1200,
        height: 630,
        alt: "Mr.Chai Calgary • Artisan tea & cozy café",
      },
    ],
  },
  // Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Mr.Chai • Best Tea Café in Calgary",
    description:
      "Artisan teas, handcrafted chai, matcha and bubble tea. Cozy cafe, takeout, catering & gift boxes — located in Calgary. Open daily.",
    images: ["https://mrchaicalgary.com/images/og-tea.jpg"],
    creator: "@mrchaicalgary", // replace with your Twitter/X handle or remove
  },
  // Optional: alternates (language/canonical)
  alternates: {
    canonical: "https://mrchaicalgary.com/",
  },
  // Structured data hint (short)
  // Note: for full rich results you should also add JSON-LD schema in the page body (LocalBusiness, Menu, OpeningHoursSpecification, etc.)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dynaPuff.variable} antialiased relative overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
