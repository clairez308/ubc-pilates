"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-aqua/20"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 text-[#3d98c6] text-shadow-lg text-shadow-skyblue"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to UBC Pilates Club!
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-8 font-medium text-[#3d98c6]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              ~ POP pilates for everyone ~
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                href="/calendar"
                className="relative overflow-hidden group bg-[#3d98c6] text-white font-medium py-3 px-6 rounded-full hover:bg-[#2d7597] transition-colors duration-300"
              >
                <span className="relative z-10">View Schedule</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#3d98c6] to-[#a7d8f0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <Link
                href="/prices"
                className="relative overflow-hidden group bg-white text-[#3d98c6] font-medium py-3 px-6 rounded-full border-2 border-[#3d98c6] hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">Membership Options</span>
                <span className="absolute inset-0 bg-[#3d98c6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/group/pilatesmain.jpg"
                alt="Group Pilates Class"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 bg-[#e0f4ff] rounded-t-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-[#3d98c6]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose UBC Pilates Club?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧘",
                title: "Student-Focused",
                description:
                  "Classes designed to fit into busy student schedules",
                color: "bg-[#e0f4ff]",
              },
              {
                icon: "💵",
                title: "Affordable",
                description: "Budget-friendly classes for active students",
                color: "bg-[#e0f4ff]",
              },
              {
                icon: "👥",
                title: "Community",
                description: "Connect with other pilates enthusiasts",
                color: "bg-[#e0f4ff]",
              },
              {
                icon: "🌍",
                title: "Inclusive",
                description: "Accessible classes for all experience levels",
                color: "bg-[#e0f4ff]",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white border border-[#e0f4ff]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className={`h-20 w-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl ${feature.color}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-[#333333]">
                  {feature.title}
                </h3>
                <p className="text-center text-[#3d98c6]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3d98c6]">
            Our Community
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/group/pilates1.jpg",
              "/group/pilates2.jpg",
              "/group/pilates3.jpg",
              "/group/pilates4.jpg",
              "/group/pilates5.jpg",
              "/group/pilates6.jpg",
            ].map((src, index) => (
              <motion.div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={src}
                  alt={`Pilates class ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#3d98c6]/20 hover:bg-transparent transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        className="max-w-4xl mx-auto bg-[#e0f4ff] text-[#3d98c6] p-12 rounded-2xl text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-shadow-lg text-shadow-lightyellow">
          Ready to Start Your Pilates Journey?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-shadow-md text-shadow-lightyellow">
          Join us for a class and experience the benefits of Pilates for
          yourself!
        </p>
        <Link
          href="/prices"
          className="inline-block bg-lightyellow hover:bg-skyblue text-navy font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg"
        >
            <span className="relative z-10">Get Started Today</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#3d98c6] to-[#a7d8f0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
