"use client";
import Container from "@/components/client/Layout/Container";
import CustomButton from "@/components/ui/custom/CustomButton";
import {
  BadgeCheck,
  History,
  Languages,
  BrainCircuit,
  MapPin,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";
import Link from "next/link";

export default function Acharya({ variant = "primary" }) {
  // WhatsApp number clean karne ke liye logic
  const whatsappNo = "+919811893069";
  const cleanWhatsAppNo = whatsappNo.replace(/\D/g, "");

  const stats = [
    { icon: History, label: "Experience", value: "25+ Years" },
    { icon: Languages, label: "Languages", value: "Hindi, Sanskrit" },
    { icon: BrainCircuit, label: "Specialization", value: "Karma Kanda" },
    { icon: MapPin, label: "Location", value: "Delhi NCR & Online" },
  ];

  return (
    <section className="py-24 bg-[#fffcf5]" id="about-pandit">
      <Container classes="mx-auto">
        <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-zinc-800 shadow-2xl flex flex-col lg:flex-row">
          {/* Left Image Side */}
          <div className="lg:w-2/5 relative h-[500px] lg:h-auto group overflow-hidden">
            <img
              alt="Acharya Shivkumar Sharma"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              src="images/acharya-shivkumar-sharma.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <p className="tracking-[0.2em] uppercase text-xs text-secondary font-sans mb-2">
                Vedic Master Specialist
              </p>
              <h2 className="text-white text-2xl font-serif">
                Acharya{" "}
                <span className="text-success font-normal">
                  Shivkumar Sharma
                </span>
              </h2>
            </div>
          </div>

          {/* Right Content Side */}
          <div className="lg:w-3/5 p-8 md:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 text-primary mb-6 group">
           
                 <BadgeCheck size={28} strokeWidth={2.5} />
              
              <span className=" text-slate-500 tracking-[0.2em] uppercase text-sm">
                25+ Years of Spiritual Excellence
              </span>
            </div>

            <h2 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-sans mb-8">
              A Legacy of <span className="text-primary">Divine Knowledge</span>
            </h2>

            <p className="text-slate-600 dark:text-zinc-400 text-lg leading-relaxed mb-10 italic border-l-4 border-secondary pl-6 font-serif">
              "Acharya ShivKumar Sharma is a highly revered Vedic scholar
              hailing from the sacred city of Varanasi. With over two decades of
              dedicated practice, he specializes in Karma Kanda, Jyotish
              Shastra, and Vastu Vidya."
            </p>

            {/* ProfileStats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-10 mb-12">
              {stats.map((item, index) => (
                <ProfileStat
                  key={index}
                  Icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>

            {/* Combined Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Book Now Button */}
              <Link href="/book-a-pandit" className="flex-1 group">
                <CustomButton
                  variant="secondary"
                  className="w-full rounded-2xl pointer-events-none"
                  icon={CalendarCheck}
                >
                  Book Now
                </CustomButton>
              </Link>

              {/* WhatsApp Button */}
              {/* <Link
                href={`https://wa.me/${cleanWhatsAppNo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group"
              >
                <CustomButton
                  variant="whatsapp"
                  className="w-full rounded-2xl pointer-events-none"
                  icon={MessageCircle}
                >
                  WhatsApp Chat
                </CustomButton>
              </Link> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Helper Component for Stats
function ProfileStat({ Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 group/stat">
      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover/stat:bg-primary transition-all duration-300">
        <Icon
          size={22}
          className="text-primary group-hover/stat:text-white transition-colors"
        />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-0.5">
          {label}
        </p>
        <p className="text-slate-800 dark:text-zinc-200 font-normal text-base tracking-wide">
          {value}
        </p>
      </div>
    </div>
  );
}
