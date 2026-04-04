"use client";
import React, { useEffect, useState } from "react";
import { Flame, Phone, CalendarCheck, Menu, Sparkles } from "lucide-react"; 
import Container from "../client/Container";
import Navigation from "./Navigation";
import Link from "next/link";
import { Button } from "../ui/button";

export default function MainHeader() {

  const [isScrolled, setIsScrolled] = useState(false);
const [open, setOpen] = useState(false); // 1. Mobile state yahan rakhi
  useEffect(() => {
    const handleScroll = () => {
      // Agar 20px se zyada scroll ho toh glass effect dikhao
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] shadow-md ${isScrolled 
          ? "glass-header "  
          : "bg-white dark:bg-zinc-900 " 
      }`}>
      <Container max="w-full" classes="py-4 flex items-center justify-between">
        
        {/* 1. LOGO SECTION (Lucide: Flame) */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="text-saffron bg-saffron/10 p-2.5 rounded-xl transition-all duration-300 group-hover:bg-saffron/20 group-hover:rotate-12">
            <Flame size={28} strokeWidth={2.5} className="fill-saffron/20" />
          </div>
          
          <Link href="/">
          <div className="flex flex-col">
            <h2 className="text-royal-blue dark:text-saffron text-xl font-black leading-none tracking-tight">
              Shivkumar<span className="text-saffron">Sharma</span>
            </h2>
            <div className="flex items-center gap-1">
               <span className="text-[10px] uppercase tracking-[0.2em]  text-royal-blue/60 dark:text-saffron/60">
                Vedic Excellence
              </span>
              <Sparkles size={10} className="text-saffron animate-pulse" />
            </div>
          </div>
</Link>
        </div>

        {/* 2. NAVIGATION (Deskstop) */}
        <div className="hidden lg:block">
          <Navigation open={open} setOpen={setOpen}/>
        </div>

        {/* 3. ACTION SECTION (Lucide: Phone & Calendar) */}
        <div className="flex items-center gap-4">
          {/* Support Number (Hidden on mobile) */}
          <div className="hidden xl:flex items-center gap-2 text-royal-blue/80 dark:text-white/80 mr-4">
            <div className="p-2 bg-slate-100 dark:bg-white/5 rounded-full">
              <Phone size={16} className="text-saffron" />
            </div>
            <span className="text-sm ">+91 98118 93069</span>
          </div>

          {/* Appointment Button (Lucide: CalendarCheck) */}
          
          <Button variant="destructive"  className="hidden sm:flex">
            <CalendarCheck size={18} />
            <span>Book Now</span>
          </Button>

          {/* Mobile Menu Icon (Lucide: Menu) */}
          <button onClick={() => setOpen(true)} className="lg:hidden p-2 text-royal-blue dark:text-white">
            <Menu size={28} />
          </button>
        </div>

      </Container>
    </header>
  );
}