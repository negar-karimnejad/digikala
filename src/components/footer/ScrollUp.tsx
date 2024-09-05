"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollUp({
  children,
  title,
  className,
}: {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}) {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <button
        className={`transition-all duration-700 ${className} ${
          showScrollUp ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollUp}
      >
        {title}
        {children ? children : <ChevronUp size={18} />}
      </button>
    </>
  );
}
