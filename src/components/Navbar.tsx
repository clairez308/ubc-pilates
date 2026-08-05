"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Prices", link: "/prices" },
    { name: "Calendar", link: "/calendar" },
    { name: "Events", link: "/events" },
    { name: "FAQ", link: "/faq" },
    { name: "Team", link: "/team" },
    { name: "Partnerships", link: "/partnerships" },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white border-b-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center border-2 border-ink shadow-[3px_3px_0_0_#004669] bg-white">
              <Image src="/logo.png" alt="Pilates Club Logo" width={36} height={36} />
            </div>
            <span className="hidden sm:block text-xl font-black text-ink tracking-tight">
              UBC Pilates Club
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link
                  href={item.link}
                  key={item.link}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-all duration-150 border-2 ${
                    isActive
                      ? "bg-lightyellow text-ink border-ink shadow-[3px_3px_0_0_#004669]"
                      : "text-ink/70 border-transparent hover:text-ink hover:bg-cream"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border-2 border-ink hover:bg-cream transition-colors duration-150"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-ink" />
            ) : (
              <Menu className="w-6 h-6 text-ink" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t-2 border-ink"
          >
            <div className="px-4 py-6 space-y-2">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.link;
                return (
                  <Link
                    href={item.link}
                    key={item.link}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-bold border-2 transition-all duration-150 ${
                      isActive
                        ? "bg-lightyellow text-ink border-ink shadow-[3px_3px_0_0_#004669]"
                        : "text-ink/70 border-transparent hover:text-ink hover:bg-cream"
                    }`}
                  >
                    <motion.span
                      className="block"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
