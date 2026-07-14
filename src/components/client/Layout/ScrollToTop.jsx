"use client";

import { useEffect, useState } from "react";

import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[99]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            group

            flex items-center justify-center

            w-14 h-14

            rounded-full

            bg-primary

            text-white

            shadow-[0_20px_40px_rgba(208,0,0,0.35)]

            border-2 border-white/20

            hover:bg-primary-hover

            hover:-translate-y-2

            active:scale-95

            transition-all duration-300

            cursor-pointer
          "
        >
          <ArrowUp
            size={24}
            strokeWidth={3}
            className="
              transition-transform duration-300

              group-hover:-translate-y-1
            "
          />
        </button>
      )}
    </div>
  );
}