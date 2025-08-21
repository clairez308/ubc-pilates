import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
    title: {
      default: "UBC Pilates Club - Student POP Pilates Classes Vancouver",
      template: "%s | UBC Pilates Club"
    },
    description: "Join UBC Pilates Club for affordable POP Pilates classes designed by students, for students. Build strength & flexibility with Vancouver's top student wellness community. All levels welcome!",
    keywords: [
      "UBC Pilates", "UBC Pilates club", "student pilates Vancouver", 
      "POP Pilates UBC", "UBC fitness club", "Vancouver student pilates", 
      "affordable pilates classes", "UBC wellness", "university pilates", 
      "student fitness Vancouver"
    ],
    authors: [{ name: "UBC Pilates Club", url: "https://ubcpilates.club" }],
    creator: "UBC Pilates Club",
    publisher: "UBC Pilates Club",
    metadataBase: new URL('https://ubcpilates.club'),
    alternates: {
      canonical: 'https://ubcpilates.club',
    },
    openGraph: {
      title: 'UBC Pilates Club - Student POP Pilates Classes Vancouver',
      description: 'Join UBC Pilates Club for affordable POP Pilates classes designed by students, for students. Build strength & flexibility with Vancouver\'s top student wellness community.',
      type: 'website',
      locale: 'en_CA',
      url: 'https://ubcpilates.club',
      siteName: 'UBC Pilates Club',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'UBC Pilates Club - Student POP Pilates Classes'
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'UBC Pilates Club - Student POP Pilates Classes Vancouver',
      description: 'Join UBC Pilates Club for affordable POP Pilates classes designed by students, for students.',
      images: ['/og-image.jpg'],
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
      google: 'google-site-verification=IiajsL8gRNNiym3U5Sm2cvt4NaFk7psDhoonndYwsvw', // Add your Google Search Console verification
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
                "Student-focused POP Pilates classes at University of British Columbia",
              url: "https://ubcpilates.club",
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
        {/* Critical font preloading */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;700;900&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com"
          as="connect"
          crossOrigin="anonymous"
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
