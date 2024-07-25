"use client";

import { mobileFooterLinks } from "@/data/data";
import Link from "next/link";
import { useState } from "react";

export default function MobileFooter() {
  const pathname = window.location.pathname;
  const [activeLink, setActiveLink] = useState(pathname);

  return (
    <div className="lg:hidden bg-white dark:bg-neutral-900 py-1 w-full fixed bottom-0 right-0 shadow-lg shadow-neutral-500 border-t z-30">
      <div className="flex justify-between items-center">
        {mobileFooterLinks.map((link) => (
          <Link
            key={link.id}
            onClick={() => setActiveLink(link.href)}
            href={link.href}
            className={`flex-1 flex relative items-center flex-col gap-1.5 justify-center transition-all hover:text-neutral-800 dark:hover:text-neutral-50 ${
              activeLink === link.href
                ? "text-neutral-800 dark:text-neutral-50"
                : "text-neutral-400"
            }`}
          >
            {activeLink === link.href ? link.activeIcon : link.icon}
            <small className="text-xs">{link.title}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}
