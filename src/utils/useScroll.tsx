"use client";
import { useEffect, useState } from "react";

function useScroll() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return window.pageYOffset;
    }
    return 0; // Default value for server-side rendering
  });

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollPos = window.pageYOffset;
        const isScrollingDown = prevScrollPos < currentScrollPos;

        setIsVisible(!isScrollingDown);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return { isVisible };
}

export default useScroll;
