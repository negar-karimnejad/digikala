"use client";

import useScroll from "@/utils/useScroll";
import { ReactNode } from "react";

export default function TopbarContainer({ children }: { children: ReactNode }) {
  const { isVisible } = useScroll();

  return (
    <header
      className={`sticky top-0 bg-white dark:bg-neutral-950 w-full z-40 p-4 ${
        isVisible ? "" : "shadow-sm border-b"
      }`}
    >
      {children}
    </header>
  );
}
