"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const path = usePathname();
  const menuItem = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Prices",
      link: "/prices",
    },
    {
      name: "Calendar",
      link: "/calendar",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "Team",
      link: "/team",
    },
    {
      name: "Partnerships",
      link: "/partnerships",
    },
  ];
  return (
    <div className="flex justify-between p-3 bg-skyblue shadow-md">
      <Link href="/">
        <Image src="/logo.png" alt="Pilates Club Logo" width={60} height={60} />
      </Link>
      <div>
        <ul className="flex items-center h-full">
          {menuItem.map((menu) => {
            const isActive = menu.link === path;
            return (
              <li key={menu.link}>
                <Link
                  href={menu.link}
                  className={isActive 
                    ? "m-2 text-denim font-bold underline underline-offset-4" 
                    : "m-2 hover:text-denim transition-colors duration-300"
                  }
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;