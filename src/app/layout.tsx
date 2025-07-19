import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UBC Pilates Club",
    template: "%s | UBC Pilates Club"
  },
  description: "Join UBC Pilates Club for affordable, student-focused POP Pilates classes. Build strength, flexibility, and connect with UBC's wellness community. All experience levels welcome!",
  keywords: ["UBC Pilates", "UBC Pilates club", "student pilates classes", "POP Pilates", "UBC fitness", "Vancouver pilates", "affordable pilates", "student wellness"],
  authors: [{ name: "UBC Pilates Club" }],
  creator: "UBC Pilates Club",
  publisher: "UBC Pilates Club",
  metadataBase: new URL('https://ubcpilates.club'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'UBC Pilates Club',
    description: 'Join UBC Pilates Club for affordable, student-focused POP Pilates classes. Build strength, flexibility, and connect with UBC\'s wellness community.',
    type: 'website',
    locale: 'en_CA',
    url: '/',
    siteName: 'UBC Pilates Club',
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
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'SportsClub'],
              name: 'UBC Pilates Club',
              description: 'Student-focused POP Pilates classes at University of British Columbia',
              url: 'https://ubcpilates.club',
              email: 'ubcpilatesclub@gmail.com', 
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'University of British Columbia',
                addressLocality: 'Vancouver',
                addressRegion: 'BC',
                postalCode: 'V6T 1Z1',
                addressCountry: 'CA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '49.2606',
                longitude: '-123.2460',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '20:00',
                },
              ],
              sameAs: [
                'https://www.instagram.com/ubcpilatesclub', 
                'https://www.facebook.com/ubcpilatesclub', 
                'https://www.tiktok.com/@ubcpilatesclub', 
              ],
              areaServed: {
                '@type': 'Place',
                name: 'Vancouver, BC, Canada',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Pilates Classes',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'POP Pilates Classes',
                      description: 'Student-focused Pilates classes for all levels',
                    },
                  },
                ],
              },
            }),
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://widgets.sociablekit.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
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