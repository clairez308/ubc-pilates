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
          With a membership, get free access to all our classes, exclusive
          socials, raffles &amp; contests, merch deals, online content, and more!
        </motion.p>
        <motion.p
          className="text-sm text-ink/50 max-w-3xl mx-auto mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Classes start September 21st. 
        </motion.p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Button
            href="https://www.showpass.com/discounted-membership/"
            variant="primary"
          >
            Buy a Membership
          </Button>
          <Button
            href="https://www.bouncelife.com/organizations/66e09dfa67d86b2c13b88831?membership-required=false"
            variant="secondary"
          >
            Book a Drop-In Class
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to School Offer */}
        <Card accent="yellow" className="bg-skyblue mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-center text-ink">
              Back to School Membership Offer
            </h3>
            <span className="bg-lightyellow text-ink text-xs font-bold px-3 py-1 rounded-full border-2 border-ink">
              SEPT 8 – SEPT 25
            </span>
          </div>
          <p className="text-center text-ink/70 text-sm">
            Save on Annual &amp; Term memberships for a limited time — prices
            below reflect the discount.
          </p>
        </Card>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Annual Membership */}
          <Card accent="blue">
            <h3 className="text-2xl font-bold text-center mb-6 text-ink">
              Annual Membership
            </h3>
            <div className="bg-cream p-4 rounded-lg border-2 border-ink/10">
              <p className="text-center mb-3">
                <span className="text-ink/40 line-through text-lg mr-2">$65</span>
                <span className="text-denim font-black text-xl">$55</span>
              </p>
              <ul className="space-y-2 text-sm">
                <CheckItem>Valid for the entire 2026–2027 school year (Term 1 &amp; Term 2)</CheckItem>
                <CheckItem><strong>Free access to all our classes</strong></CheckItem>
                <CheckItem>Exclusive socials, raffles &amp; contests</CheckItem>
                <CheckItem>Merch deals &amp; online content</CheckItem>
              </ul>
            </div>
          </Card>

          {/* Term Membership */}
          <Card accent="blue" delay={0.1}>
            <h3 className="text-2xl font-bold text-center mb-6 text-ink">
              Term Membership
            </h3>
            <div className="bg-cream p-4 rounded-lg border-2 border-ink/10">
              <p className="text-center mb-3">
                <span className="text-ink/40 line-through text-lg mr-2">$45</span>
                <span className="text-denim font-black text-xl">$40</span>
              </p>
              <ul className="space-y-2 text-sm">
                <CheckItem>Only joining us for one term? Get all the same perks for Term 1</CheckItem>
                <CheckItem><strong>Free access to all our classes</strong></CheckItem>
                <CheckItem>Exclusive socials, raffles &amp; contests</CheckItem>
                <CheckItem>Merch deals &amp; online content</CheckItem>
              </ul>
            </div>
          </Card>

          {/* Drop-In */}
          <Card accent="yellow" delay={0.2}>
            <h3 className="text-2xl font-bold text-center mb-6 text-ink">
              Drop-In
            </h3>
            <div className="bg-cream p-4 rounded-lg border-2 border-ink/10">
              <p className="text-denim font-black text-xl text-center mb-3">
                $7 per class
              </p>
              <ul className="space-y-2 text-sm">
                <CheckItem>No membership required</CheckItem>
                <CheckItem>
                  First-timers get their first class for free (valid for
                  general classes only — not themed classes, collaborations,
                  or special events/socials)
                </CheckItem>
                <CheckItem>
                  Pay via e-transfer to{" "}
                  <a
                    href="mailto:jaylenechih@gmail.com"
                    className="font-bold text-denim hover:underline"
                  >
                    jaylenechih@gmail.com
                  </a>{" "}
                  and complete the Membership Form (linked below)
                </CheckItem>
              </ul>
            </div>
          </Card>
        </div>

        {/* Membership Form PSA */}
        <Card hover={false} className="bg-white mb-12">
          <h3 className="text-xl font-bold text-ink mb-2">
            Important: Complete Your Membership Form
          </h3>
          <p className="text-ink/70 mb-4">
            After purchasing a membership, you&apos;ll receive a Google Form by
            email — you must complete it in order to join our classes. This
            form is also available on our Linktree.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfneiLpCq5vGm5yfdxBgTGuDl3jQNBwNoVeaqN2hTjEK7IwPA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-cream hover:bg-lightyellow/30 p-4 rounded-lg border-2 border-ink/15 hover:border-ink transition-colors duration-150"
          >
            <h4 className="font-bold text-ink mb-1">Membership Form</h4>
            <p className="text-sm text-ink/60">
              Fill this out after purchasing your membership
            </p>
          </a>
        </Card>
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
