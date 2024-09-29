"use client";

import { mobileFooterLinks } from "@/data/data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileFooter() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveLink(pathname);
  }, []);

  return (
    <div className="lg:hidden bg-white dark:bg-neutral-900 py-1 w-full fixed bottom-0 right-0 shadow-lg shadow-neutral-500 border-t z-20">
      <div className="flex justify-between items-center px-5">
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
                  <span className="flex items-center justify-center text-xs rounded-sm absolute w-5 h-5 bg-red-500 top-0 left-0 text-white border border-white">
                    {cartItems.length}
                  </span>
                )}
                {activeLink === link.href ? link.activeIcon : link.icon}
                <small className="text-xs">{link.title}</small>
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
