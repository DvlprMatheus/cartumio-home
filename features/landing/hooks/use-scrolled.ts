"use client";

import { useEffect, useState } from "react";

export function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("page-top");

    if (sentinel) {
      const observer = new IntersectionObserver(
        ([entry]) => setScrolled(!entry.isIntersecting),
        { threshold: 0 },
      );
      observer.observe(sentinel);
      return () => observer.disconnect();
    }

    const onScroll = () =>
      setScrolled((window.scrollY || document.documentElement.scrollTop) > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}
