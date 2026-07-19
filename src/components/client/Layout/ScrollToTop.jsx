"use client";

import { useEffect, useState } from "react";

import { ArrowUp } from "lucide-react";
import { createWhatsAppLink } from "@/lib";

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
<div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[99] flex flex-col items-center gap-4">

  {/* WhatsApp */}
  <a
    href={createWhatsAppLink("Consultation")}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="
      flex h-14 w-14 items-center justify-center
      rounded-full
      bg-[#25D366]
      text-white
      shadow-xl
      hover:scale-110
      transition-all
    "
  >
    {/* WhatsApp SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-7 w-7 fill-current"
    >
      <path d="M19.11 17.38c-.29-.14-1.7-.84-1.97-.93-.26-.1-.46-.14-.65.14-.19.29-.75.93-.91 1.12-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.41-.85-.76-1.42-1.69-1.58-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.23-.56-.46-.48-.65-.49h-.55c-.19 0-.5.07-.77.36-.26.29-1 1-.99 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.02 3.08 4.89 4.32.68.29 1.21.46 1.63.59.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
      <path d="M16.02 3C8.84 3 3 8.84 3 16c0 2.57.75 5.08 2.18 7.22L3.1 29l5.95-2.02A13 13 0 0016.02 29C23.2 29 29 23.16 29 16S23.2 3 16.02 3zm0 23.64c-2.09 0-4.14-.56-5.93-1.63l-.42-.25-3.53 1.2 1.18-3.44-.27-.44A10.57 10.57 0 015.39 16c0-5.86 4.77-10.63 10.63-10.63S26.65 10.14 26.65 16s-4.77 10.64-10.63 10.64z"/>
    </svg>
  </a>

  {/* Scroll To Top */}
  {isVisible && (
    <button
      onClick={scrollToTop}
      className="
        group
        flex h-14 w-14 items-center justify-center
        rounded-full
        bg-primary
        text-white
        shadow-xl
        hover:-translate-y-1
        transition-all
      "
    >
      <ArrowUp size={24} strokeWidth={3} />
    </button>
  )}
</div>
  );
}