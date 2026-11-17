import "./globals.css";
import { site } from "@/lib/site";

export const metadata = {
  title: "Shajbari Rentals | Bridal Lehenga, Sherwani & Jewellery on Rent in Ghatshila",
  description:
    "Shajbari Rentals, Ghatshila – wedding, pre-wedding shoot, engagement & anniversary rentals: bridal lehengas, groom sherwanis, wedding sarees, reception gowns, bridal jewellery sets, kundan sets, maang tikka, kalire, sehra & pagdi. Call or WhatsApp 9608775136.",
  keywords: [
    "lehenga on rent Ghatshila",
    "sherwani on rent Ghatshila",
    "bridal jewellery rent",
    "pre wedding shoot dress rent",
    "wedding dress rental Jharkhand",
    "Shajbari Rentals",
  ],
  openGraph: {
    title: "Shajbari Rentals – Wedding Wear & Jewellery on Rent, Ghatshila",
    description: "Look royal on your big day. Bridal & groom outfits and jewellery on rent in Ghatshila.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💍</text></svg>",
  },
};

export const viewport = { themeColor: "#6b0f2a" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: site.name,
  description: "Wedding, pre-wedding and anniversary wear and jewellery on rent in Ghatshila.",
  telephone: "+91-9608775136",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kashida, Near Women's College Road",
    addressLocality: "Ghatshila",
    addressRegion: "Jharkhand",
    addressCountry: "IN",
  },
  founder: { "@type": "Person", name: site.owner },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Great+Vibes&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
