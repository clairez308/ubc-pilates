"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
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
    <>
      <motion.nav
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div className="cursor-pointer">
              <Link href="/">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Pilates Club Logo"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-xl font-black text-denim">
                      UBC Pilates Club
                    </h1>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link href={item.link} key={item.link}>
                <motion.button
                  key={item.link}
                  onClick={() => setActiveItem(item.link)}
                  className={`relative px-4 py-2 rounded-lg font-medium ${
                    activeItem === item.link
                      ? "text-cyan-600 bg-cyan-50"
                      : "text-slate-600 hover:text-cyan-600 hover:bg-gray-50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  {pathname === item.link && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    />
                  )}
                </motion.button>
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    animate={
                      isMobileMenuOpen
                        ? { rotate: 45, y: 6 }
                        : { rotate: 0, y: 0 }
                    }
                    className="w-5 h-0.5 bg-slate-600 block transition-all duration-300 origin-center"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-5 h-0.5 bg-slate-600 block mt-1 transition-all duration-300"
                  />
                  <motion.span
                    animate={
                      isMobileMenuOpen
                        ? { rotate: -45, y: -6 }
                        : { rotate: 0, y: 0 }
                    }
                    className="w-5 h-0.5 bg-slate-600 block mt-1 transition-all duration-300 origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
            >
              <div className="px-4 py-6 space-y-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setActiveItem(item.link);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeItem === item.link
                        ? "text-cyan-600 bg-cyan-50 border-l-4 border-cyan-500"
                        : "text-slate-600 hover:text-cyan-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;

// const Navbar = () => {
//   const path = usePathname();
//   const menuItem = [
//     {
//       name: "Home",
//       link: "/",
//     },
//     {
//       name: "Prices",
//       link: "/prices",
//     },
//     {
//       name: "Calendar",
//       link: "/calendar",
//     },
//     {
//       name: "Events",
//       link: "/events",
//     },
//     {
//       name: "FAQ",
//       link: "/faq",
//     },
//     {
//       name: "Team",
//       link: "/team",
//     },
//     {
//       name: "Partnerships",
//       link: "/partnerships",
//     },
//   ];
//   return (
//     <div className="flex justify-between p-3 bg-skyblue shadow-md">
//       <Link href="/">
//         <Image src="/logo.png" alt="Pilates Club Logo" width={60} height={60} />
//       </Link>
//       <div>
//         <ul className="flex items-center h-full">
//           {menuItem.map((menu) => {
//             const isActive = menu.link === path;
//             return (
//               <li key={menu.link}>
//                 <Link
//                   href={menu.link}
//                   className={isActive
//                     ? "m-2 text-denim font-bold underline underline-offset-4"
//                     : "m-2 text-black hover:text-denim transition-colors duration-300"
//                   }
//                 >
//                   {menu.name}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
