"use client";

import { mobileFooterLinks } from "@/data/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartLengthPseudo from "../cart/CartLengthPseudo";

export default function MobileFooter() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveLink(pathname);
  }, []);

  return (
    <div className="lg:hidden bg-white dark:bg-neutral-900 py-1 w-full fixed bottom-0 right-0 shadow-lg shadow-neutral-500 border-t z-20">
      <div className="flex justify-between items-center sm:px-5 px-1">
        {mobileFooterLinks.map((link) => (
          <div key={link.id}>
            {link.href ? (
              <Link
                onClick={() => setActiveLink(link.href)}
                href={link.href}
                className={`flex relative items-center flex-col gap-1.5 justify-center transition-all hover:text-neutral-800 dark:hover:text-neutral-50 ${
                  activeLink === link.href
                    ? "text-neutral-800 dark:text-neutral-50"
                    : "text-neutral-400"
                }`}
              >
                {link.title === "سبد خرید" && (
                  <CartLengthPseudo className="w-5 h-5 top-0 right-7" />
                )}
                {activeLink === link.href ? link.activeIcon : link.icon}
                <small className="text-xs max-sm:text-[10px]">
                  {link.title}
                </small>
              </Link>
            ) : (
              <div
                onClick={() => setActiveLink(link.href)}
                className={`flex transition-all text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-50`}
              >
                {link.icon}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
