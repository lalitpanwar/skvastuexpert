import React from 'react';
import { Button } from "@/components/ui/button";
import { CalendarDays, MessageCircle } from "lucide-react";
import Link from 'next/link';

// Default Data (Vastu)
const defaultHero = {
  title: <>Harmonize Your Home with <span className="text-orange-400">Vedic Vastu</span></>,
  subtitle: "Expert guidance by Pandit Shiv Kumar Sharma for a prosperous, peaceful, and balanced household environment through ancient wisdom.",
  bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  primaryBtn: { text: "Book Consultation", link: "/book" },
  secondaryBtn: { text: "WhatsApp Pandit Ji", link: "https://wa.me/yournumber" }
};

export default function ConsultationHero({ 
  title = defaultHero.title, 
  subtitle = defaultHero.subtitle, 
  bgImage = defaultHero.bgImage, 
  primaryBtn = defaultHero.primaryBtn,
  secondaryBtn = defaultHero.secondaryBtn
}) {
  return (
    <section className="relative w-full">
      {/* Background Container */}
      <div 
       
        className="h-[500px] md:h-[650px] w-full bg-cover bg-center relative flex items-center justify-center text-center px-6 md:px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45)), url('${bgImage}')`,
        }}
      >
        <div className="max-w-4xl flex flex-col items-center"> 
          
          {/* Main Title */}
          <h1 className="text-white text-4xl md:text-7xl font-black leading-[1.1] mb-6 drop-shadow-lg">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-base md:text-xl font-medium mb-10 max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* Action Buttons */}
        
          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary Button */}
            <Button 
              asChild
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-7 rounded-full text-base  shadow-2xl border-none transition-transform hover:scale-105 active:scale-95"
            >
              <Link href={primaryBtn.link} className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5" />
                {primaryBtn.text}
              </Link>
            </Button>

            {/* Secondary Button */}
            <Button 
              asChild
              variant="outline"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-7 rounded-full text-base  hover:bg-white/25 transition-all hover:scale-105 active:scale-95"
            >
              <Link href={secondaryBtn.link} className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 fill-current" />
                {secondaryBtn.text}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}