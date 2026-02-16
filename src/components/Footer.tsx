"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// Modern Footer Component
const Footer = () => {
  const socialLinks = {
    tiktok: "https://www.tiktok.com/@ubcpilatesclub",
    insta: "https://www.instagram.com/ubcpilatesclub",
    facebook: "https://www.facebook.com/ubcpilatesclub",
    youtube: "https://www.youtube.com/channel/UCUu2kA1LHuHkwjaYiEq6NzA",
    linkedin:
      "https://www.linkedin.com/company/ams-pilates-club-at-ubc/?fbclid=IwAR0IDxNpmCAypn1e-174WHoNaCSXx0zk6TRLCFXgijGNBqoXn4meI1bYdk0",
  };

  return (
    <footer className="relative bg-gradient-to-br from-blue-100 via-sky-100 to-blue-200 text-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-200 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
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
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Pilates Club Logo"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-600">
                      UBC Pilates Club
                    </h3>
                    <p className="text-slate-600 text-sm">
                      POP Pilates for students
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">📧</span>
                    <span>ubcpilatesclub@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">📍</span>
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
            >
              <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
                <h4 className="text-lg font-bold text-slate-600 mb-4">
                  Subscribe to our Newsletter!
                </h4>
                <p className="text-slate-500 mb-4">
                  Get the latest news about our classes and events!!
                </p>
                <a
                  href="https://forms.gle/B1tJAyRZMk7cyghg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Sign Up via Google Form
                </a>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
                
              <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
                <h4 className="text-lg font-bold text-white mb-4">
                  Stay Updated
                </h4>
                <p className="text-slate-300 mb-4">
                  Get the latest news about our classes and events!!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-200 bg-blue-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {Object.entries(socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-sm hover:bg-white transition-all duration-300 border border-blue-300`}
                  >
                    <Image
                      src={`/${platform}.avif`}
                      alt={platform}
                      width={30}
                      height={30}
                    />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-slate-500 text-sm text-center lg:text-right">
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
      </div>
    </footer>
  );
};
export default Footer;

// export default function Footer() {
//   const socialLinks = {
//     tiktok: "https://www.tiktok.com/@ubcpilatesclub",
//     insta: "https://www.instagram.com/ubcpilatesclub",
//     facebook: "https://www.facebook.com/ubcpilatesclub",
//     youtube: "https://www.youtube.com/channel/UCUu2kA1LHuHkwjaYiEq6NzA",
//     linkedin: "https://www.linkedin.com/company/ams-pilates-club-at-ubc/?fbclid=IwAR0IDxNpmCAypn1e-174WHoNaCSXx0zk6TRLCFXgijGNBqoXn4meI1bYdk0",
//   };

//   return (
//     <footer className="bg-[#B3DDF2] text-center py-8 text-sm text-navy">
//       <div className="flex justify-center gap-4 mb-4">
//         {Object.entries(socialLinks).map(([platform, url]) => (
//           <a
//             key={platform}
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               src={`/${platform}.avif`}
//               alt={platform}
//               width={30}
//               height={30}
//             />
//           </a>
//         ))}
//       </div>
//       <div className="space-y-1">
//         <p>ubcpilatesclub@gmail.com</p>
//         <p>6138 Student Union Blvd</p>
//         <p>Vancouver, V6T 1Z1</p>
//         <p>Canada</p>
//       </div>
//       <div className="mt-5 pt-8 border-t border-navy text-center text-navy">
//         <p>
//           © {new Date().getFullYear()} UBC Pilates Club. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }
