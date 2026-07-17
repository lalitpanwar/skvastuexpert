"use client";
import React from "react";
import Image from "next/image";
import { Container } from "@/components/client/Layout"; // Aapka layout container
import { Award, Calendar } from "lucide-react";
import { aboutData } from "@/data/aboutData";


export default function AboutPageClient(){
      const { hero, bio, stats, expertise, awards, gallery } = aboutData;
    return(
    <>
    
    {/* // Pura page ab ekdum clean light/cream blend par hai */}
    <div className="bg-[#fcfbfa] text-zinc-800 min-h-screen pt-28 pb-16 font-sans selection:bg-orange-100 selection:text-amber-900">
      
      {/* 1. HERO SECTION (Light & Spiritual Feel) */}
      <section className="relative overflow-hidden mb-16 bg-gradient-to-b from-amber-50/60 to-transparent pb-12">
        {/* Vedic Aesthetic ke liye ek soft glow bg mein */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-orange-200/20 rounded-full blur-[120px] pointer-events-none"></div>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <span className="text-orange-600 uppercase text-xs tracking-[0.2em] font-bold block bg-orange-50 w-fit px-3 py-1 rounded-full border border-orange-100">
                {hero.tagline}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-zinc-900 leading-tight">
                {hero.title}
              </h1>
              <p className="text-zinc-600 text-lg font-normal leading-relaxed max-w-2xl">
                {hero.subtitle}
              </p>
              
              {/* Stats Counters Grid (Light Variant) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-zinc-200/60">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-2xl md:text-3xl font-bold text-orange-600">{stat.value}</p>
                    <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Acharya Ji Main Photo Card */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-zinc-100 ring-1 ring-zinc-200/50">
                <Image
                  src={hero.mainImage}
                  alt={hero.title}
                  fill
                  priority
                  sizes="(max-w-7xl) 40vw, 100vw"
                  className="object-cover object-center"
                  quality={90}
                />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 2. BIO / JOURNEY SECTION */}
      <section className="py-12 bg-orange-50/30 border-t border-b border-orange-100/50">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-zinc-900 tracking-tight flex items-center gap-3">
              <span className="w-1 h-7 bg-orange-500 rounded-full inline-block"></span>
              {bio.heading}
            </h2>
            {bio.paragraphs.map((p, i) => (
              <p key={i} className="text-zinc-600 text-base leading-relaxed font-normal">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. EXPERTISE / CORE AREAS (3 Columns - Puja, Astrology, Vastu) */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 tracking-tight mb-3">Our Core Expertise</h2>
            <p className="text-zinc-500 text-sm">Shastriya aur prachin vidhi dwara har samasya ka samadhan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((exp, i) => {
              const Icon = exp.Icon;
              return (
                <div key={i} className="bg-white border border-zinc-200/60 p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-900 group-hover:text-orange-600 transition-colors">{exp.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-normal">{exp.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. AWARDS & HONORS */}
      <section className="py-20 bg-amber-50/20 border-t border-b border-zinc-200/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-orange-600 uppercase text-xs tracking-widest font-bold block">Recognition</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900">Awards & Eminent Honors</h2>
              <p className="text-zinc-500 text-sm font-normal leading-relaxed">
                Eminent sansthaon aur vidwano dwara sammanit aur prashansit shastriya anubhav.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {awards.map((award, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-zinc-200/50 items-start shadow-sm">
                  <div className="p-3 bg-orange-50 rounded-xl text-orange-600 flex-shrink-0 border border-orange-100">
                    <Award size={24} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="text-lg font-bold text-zinc-900">{award.title}</h3>
                      <span className="flex items-center gap-1 text-[10px] bg-zinc-100 px-2 py-0.5 rounded text-zinc-500 font-mono font-medium">
                        <Calendar size={10} /> {award.year}
                      </span>
                    </div>
                    <p className="text-sm text-orange-600 font-semibold">{award.organization}</p>
                    <p className="text-xs text-zinc-500 font-normal leading-relaxed pt-1">{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. IMAGE GALLERY (Pinterest/Masonry Style) */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 tracking-tight mb-3">Spiritual Moments Gallery</h2>
            <p className="text-zinc-500 text-sm">Pujas, Vastu visits aur samman samaroh ki kuch jhalakiyan.</p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((img, i) => (
              <div key={i} className="break-inside-avoid relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-sm group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
                  sizes="(max-w-7xl) 33vw, 100vw"
                  quality={80}
                />
                {/* Image ke niche caption hamesha clean dikhega light backdrop ke sath */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                  <p className="text-xs text-white tracking-wide font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

    </div>
   
    </>
)}