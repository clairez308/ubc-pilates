"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

const partners = [
  {
    id: 1,
    name: "Get Thrifty",
    logo: "/sponsors/get thrifty.avif",
    description: "UBC's on campus thrift and consignment store",
    featured: true,
    link: "https://getthrifty.ca/",
  },
  {
    id: 2,
    name: "CVC",
    logo: "/sponsors/cvc.avif",
    description:
      "One of the biggest and most dynamic social clubs on campus, helping you make the most of your university experience.",
    featured: true,
    link: "https://www.instagram.com/ubc.cvc/?hl=en",
  },
  {
    id: 3,
    name: "Chinese Students' Association (CSA)",
    logo: "/sponsors/csa.avif",
    description: "First and longest-standing Chinese student club at UBC",
    featured: true,
    link: "https://www.instagram.com/ubccsa/",
  },
  {
    id: 4,
    name: "Teadot",
    logo: "/sponsors/teadot.avif",
    description:
      "Providing people with delicious and healthy beverages that are made with love.",
    featured: true,
    link: "https://www.teadotdrinks.com/",
  },
  {
    id: 5,
    name: "Steve's Poke Bar",
    logo: "/sponsors/stevespoke.jpg",
    description: "Authentic Hawaiian poké",
    featured: true,
    link: "https://www.stevespokebar.ca/",
  },
  {
    id: 6,
    name: "Redbull",
    logo: "/sponsors/redbull.png",
    description:
      "Gives you wiiiings!",
    featured: true,
    link: "https://www.redbull.com/ca-en",
  },
  {
    id: 7,
    name: "Guru Energy Drink",
    logo: "/sponsors/guru.avif",
    featured: false,
    link: "https://guruenergy.com/?srsltid=AfmBOopElla5RRVmfI8-1kZ0wbXbmgDYzRJ6id7e7wClaZ-k0BDX9VAl",
  },
  {
    id: 8,
    name: "Gold's Gym",
    logo: "/sponsors/goldgym.avif",
    featured: false,
    link: "https://join.goldsgymbc.ca/?gclid=Cj0KCQjw6KunBhDxARIsAKFUGs9cdavd4MYf23QgeQhjy-vEfDJXa5oGJwF6goCPi5-_eWUueUMM8hEaApZgEALw_wcB",
  },
  {
    id: 9,
    name: "Grounds For Coffee",
    logo: "/sponsors/grounds for coffee.avif",
    featured: false,
    link: "https://groundsforcoffee.ca/",
  },
  {
    id: 10,
    name: "Steve's Poke Bar",
    logo: "/sponsors/stevespoke.jpg",
    featured: false,
    link: "https://www.stevespokebar.ca/",
  },
  {
    id: 11,
    name: "Vinysa Yoga",
    logo: "/sponsors/vnysa.avif",
    featured: false,
    link: "https://havynhot.com/",
  },
  {
    id: 12,
    name: "AMS UBC",
    logo: "/sponsors/ams.avif",
    featured: false,
    link: "https://www.ams.ubc.ca/",
  },
  {
    id: 13,
    name: "Contender's Training Studio",
    logo: "/sponsors/cts.avif",
    featured: false,
    link: "https://contenders.ca/",
  },
  {
    id: 14,
    name: "Gaiam",
    logo: "/sponsors/gaiam.avif",
    featured: false,
    link: "https://www.gaiam.com/",
  },
  {
    id: 15,
    name: "Open Door Yoga",
    logo: "/sponsors/opendooryoga.avif",
    featured: false,
    link: "https://opendooryoga.bc.ca/?gad_source=1&gclid=CjwKCAiAh6y9BhBREiwApBLHCwfFhhC8_JWw73UHRiRO2M3uatzTImQYMUvJx_sh_kmPDWNdg9OqPBoCY1AQAvD_BwE",
  },
  {
    id: 16,
    name: "Richmond Olympic Oval",
    logo: "/sponsors/oval.avif",
    featured: false,
    link: "https://richmondoval.ca/",
  },
  {
    id: 17,
    name: "Real Canadian Superstore",
    logo: "/sponsors/superstore.avif",
    featured: false,
    link: "https://www.realcanadiansuperstore.ca/en",
  },
  {
    id: 18,
    name: "Boulevard Coffee Roasting",
    logo: "/sponsors/boulevard.avif",
    featured: false,
    link: "https://visit.ubc.ca/eat-drink-and-stay/cafes/the-boulevard-coffee-roasting-co/",
  },
  {
    id: 19,
    name: "The Hot Box Yoga",
    logo: "/sponsors/hotbox.avif",
    featured: false,
    link: "https://www.thehotboxyoga.com/",
  },
  {
    id: 20,
    name: "Body Energy Club",
    logo: "/sponsors/body.svg",
    featured: true,
    description: "We’re more than a vitamin, supplement and health food store, we’re a lifestyle.",
    link: "https://www.bodyenergyclub.com/",
  },
];

export default function PartnershipsPage() {
  const featuredPartners = partners.filter((partner) => partner.featured);
  const otherPartners = partners.filter((partner) => !partner.featured);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <motion.h2
        className="text-4xl font-bold text-center text-[#224e70] mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our Partners
      </motion.h2>

      {/* Featured Partners */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-denim">
          Club Collaborations & Current Sponsors
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <Link href={partner.link}>
                <div className="flex justify-center mb-6">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-16 object-contain"
                  />
                </div>
              </Link>
              <h3 className="text-xl font-bold mb-3 text-center">
                {partner.name}
              </h3>
              <p className="text-center">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Sponsors */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-denim">
          Our Previous Sponsors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {otherPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <Link href={partner.link}>
                <div className="flex justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 object-contain"
                  />
                </div>
              </Link>
              <h3 className="text-md font-bold mb-2 text-center">
                {partner.name}
              </h3>
              <p className="text-sm text-center">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsorship Levels */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl font-bold text-center text-[#224e70] mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Sponsorship Levels
        </motion.h2>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Single time */}
          <motion.div
            className="bg-skyblue/10 p-8 rounded-xl border-2 border-denim"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-2 text-navy">
              Single-time Sponsor
            </h3>
            <div className="text-center text-sm text-denim font-bold mb-3">
              Product contributions for single events ​
            </div>
            <div className="space-y-3">
              <p className="text-denim">
                In return for your generous contributions, we will:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon color="text-[#3d98c6]" size="small" />
                  <span>Advertise your business during the event</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon color="text-[#3d98c6]" size="small" />
                  <span>Feature your business in our event newsletter</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon color="text-[#3d98c6]" size="small" />
                  <span>Feature your business on our website, Facebook, and Instagram accounts during promotion period for the event</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Premium */}
          <motion.div
            className="bg-skyblue/10 p-8 rounded-xl border-2 border-denim"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-center mb-2 text-navy">
              Premium Sponsor
            </h3>
            <div className="text-center text-sm text-denim font-bold mb-3">
              Product contributions twice or more/year, or contributions with a
              monetary equivalent of $200 or more
            </div>
            <div className="space-y-3">
              <p className="text-denim">
                In return for your generous contributions, we will:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon color="text-[#3d98c6]" size="small" />
                  <span>Advertise your business during ALL our events</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon color="text-[#3d98c6]" size="small" />
                  <span>Feature your business continuously on our website, Facebook and Instagram accounts</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon color="text-[#3d98c6]" size="small" />
                  <span>Feature your business continuously in our bi-weekly newsletters </span>
                </li>
              </ul>
            </div>
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
        <h2 className="text-2xl font-bold text-navy mb-6">Work with us</h2>
        <p className="mb-6">
          Work together with us to establish friendships and create fantastic
          memories for everyone involved!
        </p>

        <div className="space-y-4">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSf3vZw2dk1O3LDwa5gB11Lpf7R7_oRs6kMvKwXKiA-LiXuv9A/viewform"
            className="block bg-white hover:bg-gray-50 p-4 rounded-lg shadow-sm border border-aqua transition-colors"
          >
            <h3 className="font-bold text-denim mb-1">Hire an Instructor</h3>
            <p className="text-sm text-gray-600">
              Are you looking for training focused on core and isolated muscle
              toning or looking to have one of trained POP Pilates instructors
              at your event? UBC Pilates would love to help you out and fulfill
              your Pilates and fitness goals! Hire us by filling out a request
              form.
            </p>
          </Link>

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSf3vZw2dk1O3LDwa5gB11Lpf7R7_oRs6kMvKwXKiA-LiXuv9A/viewform"
            className="block bg-white hover:bg-gray-50 p-4 rounded-lg shadow-sm border border-aqua transition-colors"
          >
            <h3 className="font-bold text-denim mb-1">Collaborate with us</h3>
            <p className="text-sm text-gray-600">
              We aim to strengthen our community by networking and collaborating
              with other clubs and student societies that are looking to try out
              or train with us! We enjoy meeting and working with new people so
              much and if you feel the same, we would love to work with you!
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
