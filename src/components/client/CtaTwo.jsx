
import { Phone, CalendarCheck } from "lucide-react";
import Container from "./Container";

export default function CtaTwo({
  title = "Book Pandit Ji for Shubh Puja",
  description = "Transparent pricing • Vedic Vidhi • Certified Pandits for all your spiritual needs.",
  primaryBtnText = "Book Now",
  secondaryBtnText = "Call Pandit Ji",
  phoneNumber = "+919876543210"
}) {
  return (
    <section className="py-24">
        
      <Container>
        <div className="bg-saffron/10 dark:bg-saffron/5 rounded-[40px] p-12 lg:p-20 relative overflow-hidden border border-saffron/10">
          
          {/* Decorative Dot Pattern Background */}
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #B48B3D 1.5px, transparent 1.5px)`,
              backgroundSize: '24px 24px'
            }}
          ></div>

          {/* Glowing Aura Effect */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-saffron/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-saffron/20 blur-[100px] rounded-full"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl lg:text-6xl font-sans  text-royal-blue dark:text-white mb-8 leading-tight">
              {title}
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {/* Primary Action */}
              <button className="bg-saffron text-royal-blue px-10 py-5 rounded-2xl  hover:shadow-[0_20px_40px_rgba(180,139,61,0.3)] hover:-translate-y-1 transition-all duration-300 text-lg flex items-center gap-2 cursor-pointer">
                <CalendarCheck size={22} />
                {primaryBtnText}
              </button>

              {/* Secondary Action */}
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-white dark:bg-zinc-900 text-royal-blue dark:text-white border border-saffron/20 px-10 py-5 rounded-2xl  hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 text-lg shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <Phone size={20} className="text-saffron" />
                {secondaryBtnText}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}