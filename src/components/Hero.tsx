"use client";

import { motion } from "framer-motion";
import React, {useEffect} from "react";
import Link from "next/link";
import Head from "next/head";

const Hero = () => {
  useEffect(() => {
    // Load Instagram widget script after component mounts
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/instagram-feed/widget.js";
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector(
        'script[src="https://widgets.sociablekit.com/instagram-feed/widget.js"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>UBC Pilates Club</title>
        <meta
          name="description"
          content="Join UBC Pilates Club for affordable, student-focused POP Pilates classes. Build strength, flexibility, and connect with UBC's wellness community. All experience levels welcome!"
        />
        <meta
          name="keywords"
          content="UBC Pilates, UBC Pilates club, student pilates classes, POP Pilates, UBC fitness, Vancouver pilates, affordable pilates, student wellness"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ubcpilates.club" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="UBC Pilates Club" />
        <meta
          property="og:description"
          content="Join UBC Pilates Club for affordable, student-focused POP Pilates classes. Build strength, flexibility, and connect with UBC's wellness community."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ubcpilates.club" />
        <meta
          property="og:image"
          content="https://ubcpilates.club/og-image.jpg"
        />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "UBC Pilates Club",
            description: "Student-focused POP Pilates classes at UBC",
            url: "https://ubcpilates.club",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Vancouver",
              addressRegion: "BC",
              addressCountry: "CA",
            },
            sameAs: [
              "https://www.instagram.com/ubcpilatesclub/",
              "https://www.facebook.com/ubcpilatesclub",
              "https://www.tiktok.com/@ubcpilatesclub",
              "https://www.linkedin.com/company/ams-pilates-club-at-ubc/?fbclid=IwAR0IDxNpmCAypn1e-174WHoNaCSXx0zk6TRLCFXgijGNBqoXn4meI1bYdk0",
              "https://www.youtube.com/channel/UCUu2kA1LHuHkwjaYiEq6NzA",
            ],
          })}
        </script>
      </Head>

      <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden min-h-screen">
        {/* Main Hero Section */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-20 pb-16">
              {/* Hero Content */}
              <div className="text-center mb-16">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r text-[#4EC1DA] leading-tight drop-shadow-lg">
                  UBC
                  <br />
                  Pilates Club
                </h1>
                <h2 className="text-xl md:text-2xl text-navy max-w-2xl mx-auto mb-8">
                  POP Pilates classes designed for students, by students
                </h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                  <Link
                    href="/calendar"
                    aria-label="View UBC Pilates class schedule"
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#a1f3ed] to-[#3880c8] text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 min-w-48"
                    >
                      View Classes
                    </motion.button>
                  </Link>
                  <Link
                    href="/prices"
                    aria-label="View UBC Pilates membership pricing"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-navy font-bold py-4 px-8 rounded-full text-lg border-2 border-cyan-500 hover:bg-cyan-50 transition-all duration-300 min-w-48"
                    >
                      Membership Options
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="relative py-20 bg-[#e0f4ff] rounded-t-3xl shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">
                Why UBC Students Choose Our Classes
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Building UBC&#39;s strongest wellness community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🧘",
                  title: "Student-Focused Classes",
                  description:
                    "Pilates classes designed to fit into busy student schedules",
                  color: "bg-[#e0f4ff]",
                },
                {
                  icon: "💵",
                  title: "Affordable Rates",
                  description: "Budget-friendly classes for active students",
                  color: "bg-[#e0f4ff]",
                },
                {
                  icon: "👥",
                  title: "UBC Community",
                  description:
                    "Connect with other pilates enthusiasts and build friendships",
                  color: "bg-[#e0f4ff]",
                },
                {
                  icon: "🌍",
                  title: "Inclusive Environment",
                  description:
                    "Accessible pilates classes for all experience levels at UBC",
                  color: "bg-[#e0f4ff]",
                },
              ].map((feature, index) => (
                <motion.article
                  key={index}
                  className="p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white border border-[#e0f4ff]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div
                    className={`h-20 w-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl ${feature.color}`}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 text-[#333333]">
                    {feature.title}
                  </h3>
                  <p className="text-center text-[#3d98c6]">
                    {feature.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-4xl md:text-5xl font-black text-navy mb-4">
              UBC Pilates Community in Action
            </h2>
            <div className="sk-instagram-feed" data-embed-id="25572573"></div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-skyblue via-denim to-skyblue"></div>
          <div className="absolute inset-0 bg-black/10"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Start Your Pilates Journey?
            </h2>
            <p className="text-xl md:text-2xl text-cyan-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join UBC Pilates Club for a class and experience the benefits of
              pilates with fellow students!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/prices"
                aria-label="Sign up for UBC Pilates Club membership"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-cyan-600 font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 min-w-48"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Hero;
