"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // window.scrollY use karna zyada modern hai pageYOffset se
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-saffron text-royal-blue p-3 rounded-full shadow-2xl shadow-saffron/40 hover:bg-white hover:text-royal-blue transition-all duration-300 hover:-translate-y-2 active:scale-95 border-2 border-saffron group cursor-pointer flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp 
            size={24} 
            strokeWidth={3} 
            className="group-hover:animate-bounce transition-transform" 
          />
        </button>
      )}
    </div>
  );
}