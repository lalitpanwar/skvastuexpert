"use client";
import Container from "@/components/client/Container";
import Link from "next/link";
import CustomButton from "@/components/ui/custom/CustomButton";
import {
  CalendarDays,
  Sparkles,
  Home,
  Flower2,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Award,
  MapPin,
} from "lucide-react";

export default function HeroSection({
  badgeText = "Trusted by 5000+ Families",
  titlePrimary = "Experience Authentic",
  titleHighlight = "Vedic Rituals",
  titleLocation = "in Ghaziabad",
  description = "Connect with Acharya ShivKumar Sharma for Shastra-based Puja, accurate Astrology, and Vastu consultations.",
  imageSrc = "images/acharya-shivkumar-sharma.jpg",
  whatsappNo = "919811893069",
  trustIndicators = [
    {
      icon: ShieldCheck,
      text: "100% Vidhi-Vidhān",
    },
    {
      icon: Award,
      text: "Certified Acharya",
    },
    {
      icon: MapPin,
      text: "Serving All Ghaziabad",
    },
  ],
}) {
  return (
    
    <section className="relative bg-[#fffcf5] pt-20 md:pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 rounded-l-[10rem] -mr-20 hidden lg:block"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Side - SEO & Text */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mt-4 md:mt-0 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
              <Sparkles size={16} className="text-primary animate-pulse" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                {badgeText}
              </span>
            </div>
            {/* Typography: Using Font-Serif for a Royal Look */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.15] mb-6">
              {titlePrimary} <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="text-primary italic font-serif pr-2">
                  {titleHighlight}
                </span>
                {/* Underline decorative SVG */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-secondary/40 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q50,0 100,10"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                  />
                </svg>
              </span>
              <span className="block md:inline"> {titleLocation}</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {description}
            </p>

            {/* Reusable Priority Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 mb-10">
              {trustIndicators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-slate-700 text-sm font-bold group"
                  >
                    <div className="p-1.5 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="tracking-tight">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CustomButtons Implementation */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Link href="/book-a-pandit" className="group/btn">
                <CustomButton
                  variant="primary"
                  className="w-full sm:w-auto px-10 py-5 text-lg rounded-2xl pointer-events-none"
                  icon={CalendarDays}
                >
                  Book Your Puja
                </CustomButton>
              </Link>

              <Link href={`https://wa.me/${whatsappNo}`} className="group/wa">
                <CustomButton
                  variant="whatsapp"
                  className="w-full sm:w-auto px-10 py-5 text-lg rounded-2xl pointer-events-none"
                  icon={MessageCircle}
                >
                  WhatsApp Now
                </CustomButton>
              </Link>
            </div>
          </div>

          {/* Right Side - Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-secondary/20 blur-3xl rounded-full opacity-50"></div>
            <div className="relative group">
              {/* Floating Stat Card on Image */}
              <div className="absolute -top-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 hidden md:flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <CheckCircle2 className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">
                    Experience
                  </p>
                  <p className="text-sm font-bold text-slate-900">25+ Years</p>
                </div>
              </div>
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl group">
                <img
                  src={imageSrc}
                  alt={`${titleHighlight} ${titleLocation}`}
                  className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Reusable Service Bar */}
      <div className="mt-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white dark:bg-zinc-900 p-4 rounded-[2.5rem] shadow-xl border border-slate-100">
            <QuickService
              Icon={Flower2}
              title="Sacred Puja"
              desc="Grah Pravesh, Vivah, etc."
            />
            <QuickService
              Icon={Sparkles}
              title="Astrology"
              desc="Kundali & Muhurata"
            />
            <QuickService
              Icon={Home}
              title="Vastu Shastra"
              desc="Home & Office Harmony"
            />
          </div>
        </Container>
      </div>
    </section>
  );
}

// Internal Helper Component
function QuickService({ Icon, title, desc }) {
  return (
    <div className="flex items-center gap-4 p-6 rounded-2xl hover:bg-secondary/10 transition-all group cursor-pointer">
      <div className="p-3 bg-secondary/20 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-all shadow-md">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
          {desc}
        </p>
      </div>
    </div>
  );
}
