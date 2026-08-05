"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="w-4 h-4 mt-0.5 text-denim shrink-0" strokeWidth={3} />
      <span>{children}</span>
    </li>
  );
}

export default function PricesPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-cream">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1
          className="font-heading text-4xl text-center text-ink mb-3 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Prices
        </motion.h1>
        <motion.p
          className="text-xl text-ink/70 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Choose the plan that fits your Pilates journey!
        </motion.p>
        <motion.p
          className="text-sm text-ink/50 max-w-3xl mx-auto mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Payment can be made in-person (cash/credit) or through Bounce.
        </motion.p>
        <div className="mt-5 flex justify-center">
          <Button
            href="https://www.bouncelife.com/organizations/66e09dfa67d86b2c13b88831?membership-required=false"
            variant="primary"
          >
            Go Premium
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* No Membership */}
          <Card accent="blue">
            <h3 className="text-2xl font-bold text-center mb-6 text-ink">
              No Membership
            </h3>
            <div className="space-y-4">
              <div className="bg-cream p-4 rounded-lg border-2 border-ink/10">
                <p className="text-denim font-black text-xl mb-3">
                  $10 per class
                </p>
                <ul className="space-y-2 text-sm">
                  <CheckItem>First-timers get their first class for free</CheckItem>
                </ul>
              </div>
            </div>
          </Card>

          {/* Regular Membership */}
          <Card accent="yellow" delay={0.1}>
            <h3 className="text-2xl font-bold text-center mb-6 text-ink">
              Regular Membership
            </h3>
            <div className="space-y-4">
              <div className="bg-cream p-4 rounded-lg border-2 border-ink/10">
                <h4 className="font-bold text-lg mb-1 text-ink">Annual: $35</h4>
                <h4 className="font-bold text-lg mb-3 text-ink">Term: $25</h4>
                <ul className="space-y-2 text-sm">
                  <CheckItem>Discounted class fees of $5 (on top of the base fee)</CheckItem>
                  <CheckItem>Entered into our term raffles (1 entry)</CheckItem>
                </ul>
              </div>
            </div>
          </Card>

          {/* Premium Membership */}
          <Card
            accent="yellow"
            delay={0.2}
            className="bg-skyblue md:col-span-2"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <h3 className="text-2xl font-bold text-center text-ink">
                Premium Membership
              </h3>
              <span className="bg-lightyellow text-ink text-xs font-bold px-3 py-1 rounded-full border-2 border-ink">
                BEST VALUE
              </span>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-ink/10">
              <div className="text-center mb-4">
                <h4 className="font-black text-xl text-ink mb-1">
                  Annual: $65 | Term: $45
                </h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-ink">
                <ul className="space-y-2 text-sm">
                  <CheckItem><strong>All classes included</strong> (no additional fees)</CheckItem>
                  <CheckItem>Attend social events for <strong>heavily discounted prices/free</strong></CheckItem>
                  <CheckItem>Entered into term raffles <strong>(2 entries)</strong></CheckItem>
                  <CheckItem>Access to <strong>exclusive contests and rewards</strong></CheckItem>
                </ul>
                <ul className="space-y-2 text-sm">
                  <CheckItem>Eligible for <strong>care packages and sponsorship goodies</strong></CheckItem>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20">
        <h2 className="font-heading text-3xl text-center text-ink mb-12 tracking-tight">
          Extra Info
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* First Class Free */}
          <Card accent="blue">
            <h3 className="text-xl font-bold text-ink mb-4">First Class Free</h3>
            <p className="text-ink/70">
              Everyone is welcome to attend their first UBC Pilates class
              absolutely free of charge! The only requirement is to enjoy
              yourself :) (& make sure you snag your ticket on bounce first!)
            </p>
          </Card>

          {/* Members Access */}
          <Card accent="yellow" delay={0.1}>
            <h3 className="text-xl font-bold text-ink mb-4">Member Benefits</h3>
            <p className="text-ink/70 mb-2">All members enjoy:</p>
            <ul className="space-y-2 text-ink/80">
              <CheckItem><strong>Members-only online community</strong> with early access to announcements</CheckItem>
              <CheckItem><strong>Close friends access</strong> on Instagram for BTS content</CheckItem>
              <CheckItem><strong>Monthly care packages</strong> and giveaways (limited)</CheckItem>
            </ul>
          </Card>
        </div>
      </div>

      {/* Group Services */}
      <Card hover={false} className="bg-white">
        <h2 className="font-heading text-2xl text-ink mb-6 tracking-tight">
          Group & Event Services
        </h2>
        <p className="mb-6 text-ink/70">
          Discover the benefits of Pilates with our group classes! Our
          instructors offer accessible classes for all levels; you will have fun
          whether you are beginner or advanced.
        </p>

        <div className="space-y-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfTVGEi_BoXeMKp7DMAyj3ZDjWN6A0IYtMZXYgo_Yx3ul21fw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-cream hover:bg-lightyellow/30 p-4 rounded-lg border-2 border-ink/15 hover:border-ink transition-colors duration-150"
          >
            <h3 className="font-bold text-ink mb-1">Mat Rental Request</h3>
            <p className="text-sm text-ink/60">
              Fill out our form to reserve mats for your group
            </p>
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf-ioKkSQ4269qy-nPsH4KkDnknirG32nJriGPEur7i2ZP5nw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-cream hover:bg-lightyellow/30 p-4 rounded-lg border-2 border-ink/15 hover:border-ink transition-colors duration-150"
          >
            <h3 className="font-bold text-ink mb-1">Instructor Request</h3>
            <p className="text-sm text-ink/60">
              Book a private instructor for your event
            </p>
          </a>
        </div>
      </Card>
    </div>
  );
}
