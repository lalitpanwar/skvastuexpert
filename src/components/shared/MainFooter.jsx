"use client";
import React from "react";
import { Church, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Container from "@/components/client/Container";
import { footerData } from "@/app/data/footer";

export default function MainFooter() {
  const { about, services, contact, socials, legal } = footerData;

  return (
    <footer className="relative bg-[#0a0a0b] text-white/90 pt-20 pb-8 overflow-hidden font-sans border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20 relative z-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#d9a01a]/10 p-2.5 rounded-xl border border-[#d9a01a]/20">
                <Church className="text-secondary/80" size={26} strokeWidth={2} />
              </div>
              <Link href="/" className="text-2xl font-bold tracking-tight">
                {about.name}<span className="text-secondary/80 font-medium"> {about.surname}</span>
              </Link>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-light">
              {about.description}
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, link }, i) => (
                <a 
                  key={i} 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="size-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-[#d9a01a] hover:border-[#d9a01a]/40 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services List */}
          <div className="flex flex-col gap-8">
            <h4 className="text-sm font-semibold text-secondary uppercase tracking-[0.2em]">
              Core Services
            </h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {services.pujas.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-white/40 hover:text-white text-sm flex items-center gap-2 transition-colors group"
                >
                  <div className="size-1 bg-white/20 rounded-full group-hover:bg-secondary"></div>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Contact (Clickable Info) */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2.5rem] relative group transition-all duration-500 hover:border-[#d9a01a]/20">
            <h4 className="text-sm font-semibold text-secondary/80  uppercase tracking-[0.2em] mb-8">Reach Out</h4>
            <div className="space-y-6">
              <a href={contact.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group/item">
                <MapPin className="text-secondary/60 mt-1 transition-transform group-hover/item:scale-110" size={18} />
                <span className="text-white/50 text-xs leading-relaxed group-hover/item:text-white transition-colors">{contact.address}</span>
              </a>
              <a href={`tel:${contact.phone}`} className="flex items-center gap-4 group/item">
                <Phone className="text-secondary/60 transition-transform group-hover/item:scale-110" size={18} />
                <span className="text-white/80 font-semibold text-base group-hover/item:text-secondary/80 transition-colors">{contact.phone}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 group/item">
                <Mail className="text-secondary/60 transition-transform group-hover/item:scale-110" size={18} />
                <span className="text-white/40 text-xs truncate group-hover/item:text-white transition-colors">{contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* SEO Grid (Dynamic & Clickable) */}
        <div className="py-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {[
            { label: "Rituals", list: services.pujas },
            { label: "Jyotish", list: services.astrology },
            { label: "Vastu", list: services.vastu },
            { label: "Links", list: services.quickLinks }
          ].map((sec, i) => (
            <div key={i} className="space-y-3">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{sec.label}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {sec.list.slice(0, 4).map(item => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className="text-xs text-white/20 hover:text-secondary/50 transition-colors"
                  >
                    {item.name}
                  </Link> 
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">
          <p>© {new Date().getFullYear()} Acharya {about.name} {about.surname} • Kashi Tradition</p>
          <div className="flex gap-8">
            {legal.map(item => (
              <Link key={item.name} href={item.href} className="hover:text-[#d9a01a] transition-colors">
                {item.name}
              </Link>
            ))}
            <span className="text-white/10 hidden md:block">|</span>
            <span className="text-white/40">Ghaziabad, Uttar Pradesh</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}