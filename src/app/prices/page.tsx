"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
// import Image from "next/image";

export default function PricesPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-skyblue/10">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl font-bold text-center text-[#224e70] mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Prices
        </motion.h2>
        <motion.p
          className="text-xl text-denim max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Choose the plan that fits your Pilates journey!
        </motion.p>
        <motion.p
          className="text-sm text-gray-500 max-w-3xl mx-auto mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Payment can be made in-person (cash/credit) or through Bounce.
        </motion.p>
        <Link
          href="https://www.bouncelife.com/organizations/66e09dfa67d86b2c13b88831?membership-required=false"
          className="inline-block max-w-xs w-full text-center bg-denim hover:bg-navy text-white font-medium text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors mt-5 mx-auto"
        >
          Go Premium
        </Link>
        <motion.p
          className="text-l font-bold text-navy max-w-3xl mx-auto mt-10"
          initial={{ y: -20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeOut",
          }}
        >
          LIMITED TIME OFFER: use code IMAGINE on bounce - only available on
          Imagine Day
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Per Class Fee */}
          <motion.div
            className="bg-skyblue/10 p-8 rounded-xl border-2 border-denim"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-navy">
              PER CLASS FEE
            </h3>
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-1">Non Member</h4>
                <p className="text-denim">$10 per class</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-1">Regular Member</h4>
                <p className="text-denim">$5 per class</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-1">Premium Member</h4>
                <p className="text-denim">All inclusive</p>
              </div>
            </div>
          </motion.div>

          {/* Membership */}
          <motion.div
            className="bg-skyblue/10 p-8 rounded-xl border-2 border-denim"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-navy">
              MEMBERSHIP
            </h3>
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-1">Regular Year</h4>
                <p className="text-denim">$35 per year</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-1">Regular Term</h4>
                <p className="text-denim">$25 per term</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-1">Regular Year</h4>
                <p className="text-denim">$65 per year</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-1">Regular Term</h4>
                <p className="text-denim">$45 per team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-navy mb-12">
          Extra Info
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* First Class Free */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#a7d8f0]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start mb-4">
              <h3 className="text-xl font-bold text-navy">First Class Free</h3>
            </div>
            <p className="text-gray-700">
              Everyone is welcome to attend their first UBC Pilates class
              absolutely free of charge! The only requirement is to enjoy
              yourself :) (& make sure you snag your ticket on bounce first!)
            </p>
          </motion.div>

          {/* Members Access */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#2d7597]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-start mb-4">
              <h3 className="text-xl font-bold text-navy">Exclusive Access</h3>
            </div>
            <p className="text-gray-700 mb-2">Members enjoy:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckIcon color="text-[#2d7597]" size="small" />
                <span>Early access to events</span>
              </li>
              <li className="flex items-start">
                <CheckIcon color="text-[#2d7597]" size="small" />
                <span>Discounted pricing on workshops</span>
              </li>
              <li className="flex items-start">
                <CheckIcon color="text-[#2d7597]" size="small" />
                <span>Discounted club merch</span>
              </li>
              <li className="flex items-start">
                <CheckIcon color="text-[#2d7597]" size="small" />
                <span>Access to raffles, giveaways, and care packages</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Group Services */}
      <motion.div
        className="bg-[#e0f4ff] p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-navy mb-6">
          Group & Event Services
        </h2>
        <p className="mb-6">
          Discover the benefits of Pilates with our group classes! Our
          instructors offer accessible classes for all levels; you will have fun
          whether you are beginner or advanced.
        </p>

        <div className="space-y-4">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfTVGEi_BoXeMKp7DMAyj3ZDjWN6A0IYtMZXYgo_Yx3ul21fw/viewform"
            className="block bg-white hover:bg-gray-50 p-4 rounded-lg shadow-sm border border-aqua transition-colors"
          >
            <h3 className="font-bold text-denim mb-1">Mat Rental Request</h3>
            <p className="text-sm text-gray-600">
              Fill out our form to reserve mats for your group
            </p>
          </Link>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSf-ioKkSQ4269qy-nPsH4KkDnknirG32nJriGPEur7i2ZP5nw/viewform"
            className="block bg-white hover:bg-gray-50 p-4 rounded-lg shadow-sm border border-aqua transition-colors"
          >
            <h3 className="font-bold text-denim mb-1">Instructor Request</h3>
            <p className="text-sm text-gray-600">
              Book a private instructor for your event
            </p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// Icon components
function CheckIcon({ color = "text-aqua", size = "normal" }) {
  return (
    <svg
      className={`${color} ${
        size === "small" ? "h-4 w-4 mt-0.5 mr-2" : "h-5 w-5 mr-2"
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
