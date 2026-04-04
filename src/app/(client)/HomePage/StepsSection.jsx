"use client";
import React from "react";
import Container from "@/components/client/Container";
import { BookOpen, CalendarCheck, ShieldCheck, ChevronRight } from "lucide-react";
import TitleBorder from "@/components/ui/custom/TitleBorder";

export default function StepsSection() {
  const steps = [
    {
      icon: BookOpen,
      title: "Select Service",
      desc: "Grah Pravesh, Katha, or Astrology consultation.",
    },
    {
      icon: CalendarCheck,
      title: "Schedule Time",
      desc: "Pick a Shubh Muhurat for your ceremony.",
    },
    {
      icon: ShieldCheck,
      title: "Divine Ritual",
      desc: "Authentic Vidhi-Vidhan at your doorstep.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FFFDF9]" id="process">
      <Container>
        {/* Outer Box - Soft Saffron Background */}
        <div className="bg-[#FFF8F0] rounded-[3rem] p-8 md:p-14 border border-primary/10 relative overflow-hidden">
          
          {/* Subtle Background Pattern (Spiritual Feel) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32" />

          {/* Header */}
          <div className="text-center mb-12 relative z-10">
            <p className="text-primary font-bold uppercase tracking-[0.25em] text-[10px] md:text-xs mb-3">
              Kashi Tradition Meets Convenience
            </p>
            <h2 className="text-slate-900 text-3xl md:text-5xl font-bold">
              Sacred Booking <span className="text-secondary italic font-serif">Process</span>
            </h2>
            
            <TitleBorder classes="mx-auto mt-4"/>
          </div>

          {/* Steps Grid */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 relative z-10">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center flex-1 group w-full">
                  
                  {/* Icon Box - White & Saffron */}
                  <div className="relative size-20 flex items-center justify-center mb-6">
                    {/* Shadow Effect */}
                    <div className="absolute inset-0 bg-primary/10 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Main Box */}
                    <div className="relative size-full bg-white border border-primary/20 flex items-center justify-center rounded-[1.8rem] shadow-sm group-hover:border-primary group-hover:-translate-y-1 transition-all duration-300">
                      <step.icon className="text-primary" size={30} strokeWidth={1.5} />
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 size-7 bg-secondary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white shadow-md">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="space-y-2">
                    <h4 className="text-lg md:text-xl font-normal  text-slate-900">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Connector Arrow (Desktop Only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center h-20 text-primary/20">
                    <ChevronRight size={32} strokeWidth={1.5} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
        </div>
      </Container>
    </section>
  );
}