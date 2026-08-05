"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardAccent = "blue" | "yellow" | "none";

const accentBorder: Record<CardAccent, string> = {
  blue: "border-l-4 border-l-denim",
  yellow: "border-l-4 border-l-lightyellow",
  none: "",
};

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  accent?: CardAccent;
}

export default function Card({
  children,
  className = "",
  delay = 0,
  hover = true,
  accent = "none",
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, boxShadow: "6px 6px 0 0 #004669" } : undefined}
      whileTap={hover ? { y: 0, boxShadow: "2px 2px 0 0 #004669" } : undefined}
      style={{ boxShadow: "4px 4px 0 0 #004669" }}
      className={cn(
        "bg-white rounded-xl border-2 border-ink p-6",
        accentBorder[accent],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
