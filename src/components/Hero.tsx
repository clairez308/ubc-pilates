"use client";

import { motion } from "framer-motion";
// import React, {useEffect, useState} from "react";
import Link from "next/link";
import Stack from "./Stack";
import CardSwap, { Card } from "./CardSwap";
// import RollingGallery from "./RollingGallery";

const retreatImages = [
  { id: 1, img: "/retreat/retreat1.jpeg" },
  { id: 2, img: "/retreat/retreat2.jpeg" },
  { id: 3, img: "/retreat/retreat3.jpeg" },
  { id: 4, img: "/retreat/retreat4.jpeg" },
  { id: 5, img: "/retreat/retreat5.jpeg" },
];

const Hero = () => {
  return (
    <>
      <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 overflow-hidden">
        {/* Main Hero Section */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-16 pb-12">
              {/* Hero Content */}
              <div className="text-center mb-16">
                <div className="flex justify-center items-start gap-8 mb-8 flex-wrap">
                  {/* Left photo frame - ADD YOUR PHOTO HERE */}
                  <motion.div
                    initial={{ opacity: 0, x: -50, rotate: -8 }}
                    animate={{ opacity: 1, x: 0, rotate: -6 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block"
                  >
                    <div className="bg-white p-4 rounded-2xl shadow-xl transform -rotate-6 border-4 border-cyan-200">
                      <div className="w-48 h-48 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src="/group/content5.jpg"
                          alt="Pilates class"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Main Heading and Subheading */}
                  <div className="flex-1 max-w-2xl">
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
                  {/* Right photo frame - ADD YOUR PHOTO HERE */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 8 }}
                    animate={{ opacity: 1, x: 0, rotate: 6 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block"
                  >
                    <div className="bg-white p-4 rounded-2xl shadow-xl transform rotate-6 border-4 border-cyan-200">
                      <div className="w-48 h-48 bg-gradient-to-br from-pink-200 to-purple-300 rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src="/group/content4.jpg"
                          alt="Pilates class"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section - Split Layout */}
        <section
          className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#e0f4ff] via-[#d2f0ff] to-[#e0f4ff] dark:from-[#0b1623] dark:via-[#0f2235] dark:to-[#0b1623] overflow-hidden transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
        text-[#0a2a43] dark:text-cyan-100 mb-3 sm:mb-4">
                Why UBC Students Love Pilates
              </h2>
              <p className="text-lg text-cyan-800 max-w-2xl mx-auto">
                ~ Discover what makes our classes special ~
              </p>
            </motion.div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Retreat Photos + Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center lg:text-left"
              >
                <div className="mb-8">
                  <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={true}
                    cardDimensions={{ width: 300, height: 300 }}
                    cardsData={retreatImages}
                  />
                </div>
                <p className="text-cyan-700 text-lg max-w-md leading-relaxed">
                  Swipe through memories from our Exec Retreat!
                </p>
              </motion.div>
              {/* Right: CardSwap Animated Cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="relative  flex justify-center items-center">
                  <CardSwap
                    width={350}
                    height={220}
                    cardDistance={50}
                    verticalDistance={60}
                    delay={2500}
                    pauseOnHover={true}
                    skewAmount={4}
                    easing="elastic"
                  >
                    <Card className="bg-white border-2 border-cyan-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="p-6 h-full flex flex-col items-center justify-center">
                        <div className="text-5xl mb-4">🧘</div>
                        <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                          Student-Focused Classes
                        </h3>
                        <p className="text-center text-cyan-600">
                          Pilates classes designed to fit your busy student
                          schedule.
                        </p>
                      </div>
                    </Card>

                    <Card className="bg-white border-2 border-pink-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="p-6 h-full flex flex-col items-center justify-center">
                        <div className="text-5xl mb-4">💵</div>
                        <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                          Affordable Memberships
                        </h3>
                        <p className="text-center text-cyan-600">
                          Stay active without breaking your student budget.
                        </p>
                      </div>
                    </Card>

                    <Card className="bg-white border-2 border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="p-6 h-full flex flex-col items-center justify-center">
                        <div className="text-5xl mb-4">👥</div>
                        <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                          Supportive Community
                        </h3>
                        <p className="text-center text-cyan-600">
                          Connect, stretch, and grow with other UBC students.
                        </p>
                      </div>
                    </Card>

                    <Card className="bg-white border-2 border-teal-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="p-6 h-full flex flex-col items-center justify-center">
                        <div className="text-5xl mb-4">🌍</div>
                        <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                          Inclusive for Everyone
                        </h3>
                        <p className="text-center text-cyan-600">
                          Classes accessible for all experience levels at UBC.
                        </p>
                      </div>
                    </Card>
                  </CardSwap> 
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rolling Gallery Section */}
        {/* <section className="relative py-20 bg-gradient-to-br from-[#f0fcff] to-[#d9f7ff] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-3xl sm:text-4xl font-extrabold text-[#0a2a43] mb-12"
            >
              UBC Pilates Community in Action
            </motion.h2>

            <div className="flex justify-center items-center overflow-hidden">
              <RollingGallery autoplay={true} pauseOnHover={true} />
            </div>
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Start Your Pilates Journey?
            </h2>
            <p className="text-xl md:text-1xl text-cyan-100 mb-10 max-w-2xl mx-auto leading-relaxed">
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
