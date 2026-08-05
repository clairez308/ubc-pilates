"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import Button from "./ui/Button";

const Footer = () => {
  const socialLinks = {
    tiktok: {
      url: "https://www.tiktok.com/@ubcpilatesclub",
      label: "TikTok",
    },
    insta: {
      url: "https://www.instagram.com/ubcpilatesclub",
      label: "Instagram",
    },
    facebook: {
      url: "https://www.facebook.com/ubcpilatesclub",
      label: "Facebook",
    },
    youtube: {
      url: "https://www.youtube.com/channel/UCUu2kA1LHuHkwjaYiEq6NzA",
      label: "YouTube",
    },
    linkedin: {
      url: "https://www.linkedin.com/company/ams-pilates-club-at-ubc/?fbclid=IwAR0IDxNpmCAypn1e-174WHoNaCSXx0zk6TRLCFXgijGNBqoXn4meI1bYdk0",
      label: "LinkedIn",
    },
  };

  return (
    <footer className="relative bg-aqua text-ink border-t-2 border-ink">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border-2 border-ink">
                  <Image
                    src="/logo.png"
                    alt="Pilates Club Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-ink tracking-tight">
                    UBC Pilates Club
                  </h3>
                  <p className="text-ink/60 text-sm">
                    POP Pilates for students
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-ink/80">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-ink" aria-hidden="true" />
                  <span>ubcpilatesclub@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-ink mt-0.5" aria-hidden="true" />
                  <div>
                    <p>6138 Student Union Blvd</p>
                    <p>Vancouver, BC V6T 1Z1, Canada</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
              <h4 className="text-lg font-bold text-ink mb-4">
                Subscribe to our Newsletter!
              </h4>
              <p className="text-ink/60 mb-4">
                Get the latest news about our classes and events!!
              </p>
              <Button
                href="https://forms.gle/B1tJAyRZMk7cyghg7"
                variant="accent"
                ariaLabel="Sign up for the UBC Pilates Club newsletter via Google Form (opens in new tab)"
              >
                Sign Up via Google Form
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-ink/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {Object.entries(socialLinks).map(([platform, { url, label }]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`UBC Pilates Club on ${label} (opens in new tab)`}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-lightyellow/40 transition-colors duration-200 border-2 border-ink group"
                >
                  <Image
                    src={`/${platform}.avif`}
                    alt=""
                    aria-hidden="true"
                    width={22}
                    height={22}
                  />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-ink/60 text-sm text-center lg:text-right">
              <p>
                © {new Date().getFullYear()} UBC Pilates Club. All rights
                reserved.
              </p>
              <p className="mt-1">
                Made with ❤️ by the UBC Pilates Club team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
