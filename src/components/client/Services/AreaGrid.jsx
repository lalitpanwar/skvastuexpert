"use client";
import SectionLayout from "@/components/client/Layout/SectionLayout";
import { MapPin, Building2, Map, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import CustomButton from "@/components/client/Layout/CustomButton"; 
import TitleBorder from "@/components/client/Layout/TitleBorder";
import { createWhatsAppLink, createCallLink } from "@/lib";

const iconMap = {
  ghaziabad: MapPin,
  noida: Building2,
  ncr: Map,
};

export default function AreaGrid({ title, subtitle, variant, bgColor, areas }) {
  
  // WhatsApp logic
  const whatsappNo = "919811893069";

  return (
    <SectionLayout
        title={title}
        subtitle={subtitle}
        variant={variant}
        bgColor={bgColor}
      >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {areas.map((item, index) => {
        const Icon = iconMap[item.iconType] || MapPin;
        return (
          <div 
            key={index} 
            className="group bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-xl border border-slate-100 dark:border-zinc-800 hover:border-secondary transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-primary transition-colors duration-300">
                <Icon className="text-primary group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-bold ml-4 text-slate-900 dark:text-white">
                {item.region}
              </h3>
            </div>
            
            <ul className="space-y-2 text-slate-600 dark:text-zinc-400 font-normal">
              {item.locations.map((loc, i) => (
                <li key={i} className="flex items-center gap-3 group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover/item:scale-150 group-hover/item:bg-primary transition-all"></span> 
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>

    {/* SEO Trust Banner - Styled with Theme */}
    <div className="w-full max-w-5xl mx-auto bg-secondary/5 dark:bg-white/5 shadow-inner rounded-[2rem] p-8 text-center mt-16 border border-secondary/20">
      <p className="font-serif italic text-xl md:text-2xl text-slate-700 dark:text-zinc-300 mb-3">
           "Professional Vastu consultation is available across
    Ghaziabad, Noida & NCR for homes, offices, plots
    and commercial spaces."
      </p>
      <TitleBorder classes="mx-auto mb-4" />
      <p className="uppercase tracking-[0.25em] text-[10px] md:text-xs text-primary font-bold">
         Trusted Vastu Consultant in Ghaziabad & NCR
      </p>
    </div>

    {/* Action Buttons - Using your Theme Buttons */}
    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
      <Link href={createCallLink()} className="group min-w-[200px]">
        <CustomButton 
          variant="primary" 
          className="w-full py-4 rounded-full pointer-events-none" 
          icon={Phone}
        >
          Book Vastu Consultation
        </CustomButton>
      </Link>

      <Link 
        href={createWhatsAppLink("professional Vastu consultation")}
        target="_blank"
        className="group min-w-[200px]"
      >
        <CustomButton 
          variant="whatsapp" 
          className="w-full py-4 rounded-full pointer-events-none" 
          icon={MessageCircle}
        >
          WhatsApp Chat
        </CustomButton>
      </Link>
    </div>
  </SectionLayout>
  );
}