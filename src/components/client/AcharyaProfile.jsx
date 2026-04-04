"use client";
import React from "react";
import { 
  Star, 
  History, 
  Languages, 
  BrainCircuit, 
  MapPin, 
  MessageCircle, 
  CalendarCheck 
} from "lucide-react";
import Container from "./Container";
import Link from "next/link";
import CustomButton from "../ui/custom/CustomButton";

export default function AcharyaProfile({
  image = "/images/acharya-shivkumar-sharma.jpg",
  name = "ShivKumar Sharma",
  rating = "4.9/5",
  quote = "Authentic Vedic rituals performed with complete devotion and shastra-based vidhi guidance.",
  experience = "15+ Years",
  languages = "Hindi, Sanskrit",
  specialization = "Vedic Rituals",
  location = "Delhi NCR & Online",
  whatsappNo = "+919811893069"
}) {
  const cleanWhatsAppNo = whatsappNo.replace(/\D/g, "");

  return (
    // Section background ko light secondary ya off-white rakha hai taaki white card pop kare
    <section className="bg-[#fffcf5] py-24 relative overflow-hidden">
      {/* Background Glows (Theme Colors) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px] -ml-48 -mb-48"></div>

      <Container>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Connect with Our <span className="text-primary">Pandit ji</span>
          </h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-[2.5rem] shadow-xl p-8 lg:p-12 border border-slate-100 relative z-10">
          
          {/* Image Side */}
          <div className="lg:col-span-5 relative group/img">
            {/* Soft Glow on Hover */}
            <div className="absolute -inset-2 bg-primary/10 rounded-[2.2rem] blur opacity-0 group-hover/img:opacity-100 transition duration-700"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                <img 
                alt={name}
                className="w-full h-full object-cover grayscale-[15%] group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700"
                src={image} 
                />
            </div>
            
            {/* Rating Tag using Secondary color */}
            <div className="absolute bottom-6 left-6 bg-secondary text-black px-5 py-2 rounded-xl flex items-center gap-2 font-bold shadow-xl scale-100 group-hover/img:scale-110 transition-transform">
              <Star size={16} fill="currentColor" className="text-primary" /> {rating} Rating
            </div>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                Acharya <span className="text-primary">{name}</span>
              </h3>
              <p className="text-slate-600 text-xl leading-relaxed font-light italic border-l-4 border-secondary pl-6">
                "{quote}"
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
              <ProfileStat icon={History} label="Experience" value={experience} />
              <ProfileStat icon={Languages } label="Languages" value={languages} />
              <ProfileStat icon={BrainCircuit} label="Specialization" value={specialization} />
              <ProfileStat icon={MapPin} label="Location" value={location} />
            </div>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              
              <Link href="/book-a-pandit" className="flex-1 group">
                <CustomButton 
                  variant="primary" 
                  className="w-full py-4 rounded-2xl pointer-events-none" 
                  icon={CalendarCheck}
                >
                  Book Now
                </CustomButton>
              </Link>

              <Link 
                href={`https://wa.me/${cleanWhatsAppNo}`}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="flex-1 group"
              >
                <CustomButton 
                  variant="whatsapp" 
                  className="w-full py-4 rounded-2xl pointer-events-none" 
                  icon={MessageCircle}
                >
                  WhatsApp Chat
                </CustomButton>
              </Link>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProfileStat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-5 group">
      {/* Icon Box using light Primary/Secondary mix */}
      <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-secondary/20">
        <div className="group-hover:text-white transition-colors">
            <Icon className="text-primary group-hover:text-white transition-colors duration-500" size={24} />
        </div>
      </div>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-[0.2em] mb-1 font-semibold">{label}</p>
        <p className="text-slate-900 text-lg font-bold tracking-wide">{value}</p>
      </div>
    </div>
  );
}