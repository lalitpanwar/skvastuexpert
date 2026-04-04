"use client";
import Container from "@/components/client/Container";
import { GraduationCap, History, Landmark, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import CustomButton from "@/components/ui/custom/CustomButton";

export default function AcharyaExpertise({ 
  badgeText = "Legacy",
  titleLabel = "The Master Behind the Rituals",
  mainTitle = "A Legacy of",
  italicTitle = "Spiritual Excellence",
description="Acharya Shivkumar Sharma is not just a priest, but a scholar of Vedic sciences. Hailing from the spiritual heart of India, he brings the authenticity of Kashi rituals directly to your home in Ghaziabad and NCR.",
  imageSrc = "images/acharya-shivkumar-sharma.jpg",
  ctaText = "Read Full Journey",
  ctaLink = "/about",
  features = [
    {
      icon: GraduationCap,
      title: "Vedic Education",
      desc: "Acharya degree from Sampurnanand Sanskrit Vishwavidyalaya, Varanasi (Kashi).",
    },
    {
      icon: History,
      title: "25+ Years Experience",
      desc: "Performing complex rituals like Mahamrityunjay & Grah Pravesh for over two decades.",
    },
    {
      icon: Landmark,
      title: "Kashi Parampara",
      desc: "Following the authentic traditions of Kashi for every Shastriya Vidhi-Vidhan.",
    },
  ] 
}) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-10 left-0 text-[10rem] md:text-[12rem] font-bold text-slate-50 opacity-[0.04] select-none pointer-events-none uppercase">
        {badgeText}
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left: Image Side */}
          <div className="lg:w-1/2 relative w-full max-w-[500px] lg:max-w-none mx-auto">
            <div className="absolute -inset-3 border-2 border-secondary/20 rounded-[2.5rem] md:rounded-[3rem] translate-x-4 translate-y-4 -z-10"></div>
            <div className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white aspect-[4/5] lg:aspect-auto">
              <img 
                src={imageSrc} 
                alt={titleLabel} 
                className="w-full h-full lg:h-[600px] object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 -right-4 md:-right-8 bg-primary text-white p-4 md:p-6 rounded-2xl shadow-xl hidden sm:block">
              <Award size={32} className="text-secondary mb-1 md:mb-2" />
              <p className="font-bold text-lg md:text-xl leading-none">Authorized</p>
              <p className="text-[10px] uppercase tracking-widest opacity-80 mt-1">Spiritual Guide</p>
            </div>
          </div>

          {/* Right: Content Side */}
          <div className="lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left relative z-10">
            <div>
              <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-4">
                {titleLabel}
              </p>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                {mainTitle} <span className="text-secondary italic font-serif">{italicTitle}</span>
              </h3>
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-5 md:gap-6 pt-2">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4 group text-left">
                  <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <f.icon size={22} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg leading-none mb-1">{f.title}</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-4 md:pt-6">
              <Link href={ctaLink} className="group">
                <CustomButton 
                  variant="outline" 
                  className="w-full sm:w-auto pointer-events-none"
                  icon={ArrowRight}
                  iconSide="right"
                >
                  {ctaText}
                </CustomButton>
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}