import type { Metadata } from "next";
import { DM_Serif_Display, Montserrat } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
    title: {
      default: "UBC Pilates Club",
      template: "%s | UBC Pilates Club"
    },
    description: "POP Pilates classes designed for students, by students. All levels welcome!",
    keywords: [
      "UBC Pilates", "UBC Pilates club", "student pilates Vancouver", 
      "POP Pilates UBC", "UBC fitness club", "Vancouver student pilates", 
      "affordable pilates classes", "UBC wellness", "university pilates", 
      "student fitness Vancouver"
    ],
    authors: [{ name: "UBC Pilates Club", url: "https://ubcpilatesclub.vercel.app" }],
    creator: "UBC Pilates Club",
    publisher: "UBC Pilates Club",
    metadataBase: new URL('https://ubcpilatesclub.vercel.app'),
    alternates: {
      canonical: 'https://ubcpilatesclub.vercel.app',
    },
    openGraph: {
      title: 'UBC Pilates Club',
      description: 'POP Pilates classes designed for students, by students. All levels welcome!',
      type: 'website',
      locale: 'en_CA',
      url: 'https://ubcpilatesclub.vercel.app',
      siteName: 'UBC Pilates Club',
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: 'UBC Pilates Club'
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'UBC Pilates Club',
      description: 'POP Pilates classes designed for students, by students. All levels welcome!',
      images: ['/logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'google-site-verification=IiajsL8gRNNiym3U5Sm2cvt4NaFk7psDhoonndYwsvw',
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "SportsClub"],
              name: "UBC Pilates Club",
              description:
                "POP Pilates classes designed for students, by students. All levels welcome!",
              url: "https://ubcpilatesclub.vercel.app",
              email: "ubcpilatesclub@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "University of British Columbia",
                addressLocality: "Vancouver",
                addressRegion: "BC",
                postalCode: "V6T 1Z1",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "49.2606",
                longitude: "-123.2460",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/ubcpilatesclub",
                "https://www.facebook.com/ubcpilatesclub",
                "https://www.tiktok.com/@ubcpilatesclub",
              ],
              areaServed: {
                "@type": "Place",
                name: "Vancouver, BC, Canada",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Pilates Classes",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "POP Pilates Classes",
                      description:
                        "Student-focused Pilates classes for all levels",
                    },
                  },
                ],
              },
            }),
          }}
        />
        {/* Third-party performance optimization */}
        <link rel="preconnect" href="https://widgets.sociablekit.com" />
        <link rel="preconnect" href="https://images.sociablekit.com" />
        <link rel="preconnect" href="https://data.accentapi.com" />

        {/* Remove FontAwesome if not needed, or optimize loading */}
        <link
          rel="preload"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${dmSerifDisplay.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
