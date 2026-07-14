"use client";

import Container from "@/components/client/Layout/Container";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/client/Layout/CustomButton";
import { createWhatsAppLink } from "@/lib";
import {
  Compass,
  Building2,
  Home,
  Map,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#fffcf5] pt-28 md:pt-36 pb-10 overflow-hidden"
      style={{
        backgroundImage: "url('/images/white-patternchakra.png')",

        backgroundRepeat: "repeat",
        backgroundPosition: "bottom",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[10rem] -mr-20 hidden lg:block blur-3xl opacity-50"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-[280px] md:max-w-[400px]">
              {/* IMAGE CONTAINER */}
              <div className="relative h-[340px] md:h-[500px] group">
                {/* Decorative Blur */}
                <div
                  className="
          absolute -top-6 -right-6
          w-32 h-32
          bg-secondary/20
          rounded-full
          blur-3xl
        "
                />

                {/* Main Image */}
                <div
                  className="
          relative w-full h-full
          rounded-[2.8rem]
          overflow-hidden
          border-[10px] border-white
          shadow-[0_30px_80px_rgba(0,0,0,0.12)]
        "
                >
                  <Image
                    src="/images/acharya-shivkumar-sharma.jpg"
                    alt="Acharya ShivKumar Sharma"
                    fill
                    priority
                    className="
            object-cover object-top
            transition-transform duration-700
            group-hover:scale-105
          "
                  />

                  {/* Soft Overlay */}
                  <div
                    className="
            absolute inset-0
            bg-gradient-to-t
            from-black/10
            via-transparent
            to-transparent
          "
                  />
                </div>

                {/* MODERN INFO CARD */}
                <div
                  className="
          absolute
          left-1/2
          bottom-3 md:bottom-5
          -translate-x-1/2

          w-[92%] md:w-[88%]

          bg-white/70
          backdrop-blur-xl

          border border-white/60

          rounded-[1.5rem] md:rounded-[2rem]

          px-4 md:px-5
          py-3 md:py-4

          shadow-[0_15px_40px_rgba(0,0,0,0.08)]

          flex items-center justify-between gap-3
        "
                >
                  {/* Left */}
                  <div className="min-w-0">
                    <p
                      className="
              text-[9px] md:text-[10px]
              uppercase
              tracking-[0.2em]
              text-slate-500
              font-semibold
              truncate
            "
                    >
                      Senior Vastu Expert
                    </p>

                    <h3
                      className="
              text-sm md:text-xl
              font-black
              text-slate-900
              mt-1
              leading-tight
              truncate
            "
                    >
                      Acharya ShivKumar Sharma
                    </h3>
                  </div>

                  {/* Right Accent */}
                  <div
                    className="
            min-w-10 md:min-w-12
            h-10 md:h-12
            rounded-2xl
            bg-secondary
            flex items-center justify-center
            shadow-lg
          "
                  >
                    <Sparkles className="text-black" size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20">
              <Sparkles size={12} className="text-primary animate-pulse" />

              <span className="text-primary text-[10px] font-black uppercase tracking-wider">
                Trusted Vastu Consultant in Ghaziabad
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Best{" "}
              <span className="text-primary italic font-serif">
                Vastu Consultant
              </span>{" "}
              in Ghaziabad for Your Home & Workplace
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light px-4 md:px-0">
              Expert Vastu consultation for Home, Office, Plot, Shop, Factory &
              Commercial Spaces with practical remedies and online floor plan
              analysis.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2 px-4 md:px-0">
              <Link
                href={createWhatsAppLink("Vastu Consultation")}
                target="_blank"
                className="w-full sm:w-auto"
              >
                <CustomButton
                  variant="primary"
                  className="w-full justify-center"
                >
                  Book Consultation
                </CustomButton>
              </Link>

              <Link
                href={createWhatsAppLink("Online Vastu Analysis")}
                target="_blank"
                className="w-full sm:w-auto"
              >
                <CustomButton
                  variant="outlineSuccess"
                  className="w-full justify-center"
                >
                  Online Vastu Analysis
                </CustomButton>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 px-4 md:px-0">
              <TrustBox number="10+" text="Years Experience" />

              <TrustBox number="1000+" text="Consultations" />

              <TrustBox number="Online" text="Floor Plan Analysis" />

              <TrustBox number="No" text="Demolition Remedies" />
            </div>
          </div>
        </div>

        {/* QUICK SERVICE BAR */}
        <div className="mt-12 relative z-20">
          <div className="bg-white p-2 rounded-[2rem] md:rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
            <div className="flex md:grid md:grid-cols-4 gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2">
              <QuickService
                Icon={Home}
                title="Home Vastu"
                desc="Peace & Harmony"
                href="#"
              />

              <QuickService
                Icon={Building2}
                title="Office Vastu"
                desc="Business Growth"
                href="#"
              />

              <QuickService
                Icon={Map}
                title="Plot Vastu"
                desc="Land Selection"
                href="#"
              />

              <QuickService
                Icon={Compass}
                title="Online Analysis"
                desc="Floor Plan Check"
                href="#"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustBox({ number, text }) {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
      <h3 className="text-primary font-black text-xl">{number}</h3>

      <p className="text-xs text-slate-500 font-medium mt-1">{text}</p>
    </div>
  );
}

function QuickService({ Icon, title, desc, href }) {
  return (
    <Link
      href={href}
      className="min-w-[180px] md:min-w-0 flex-shrink-0 snap-center flex items-center gap-3 p-3 rounded-2xl md:rounded-full transition-all hover:bg-secondary/5 group"
    >
      <div className="p-2 rounded-xl md:rounded-full bg-secondary/10 text-primary">
        <Icon size={18} />
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-sm mb-0.5 text-slate-900 leading-none">
          {title}
        </h4>

        <p className="text-[9px] font-bold uppercase tracking-normal opacity-70 text-slate-400">
          {desc}
        </p>
      </div>

      <ArrowRight
        size={12}
        className="mr-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
      />
    </Link>
  );
}
