import Container from "@/components/client/Layout/Container";
import { 
  CalendarDays, 
  Mouse, 
  Sparkles, 
  Home, 
  Flower2, 
  ArrowRight 
} from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section className="relative w-full  flex flex-col pt-32 pb-40 md:pb-52 overflow-hidden bg-royal-blue">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA24lEzGrLrOGjLX2hHplNzuyW6yjYd6ZQg3HQ5Si_lpab_onUs4WNP87t5VlmVOucX7UdQxw__w-hSkVYGKkrqftetuPhhx81yqqD-vVye_9TooaW8SSwSO9XYrTURO9Xir7HNSJahS7Dy4HoQwlOJS4pNq4lyXc7iw2oUEGuCVAbohrnKdFdhPU0OhzMVwSXf7QvVrtkd224xRz5T35Xa6FZ1fpv5wqd3UiKfqo46zufQ23Ar5z5IdoNQC7Fg_Au0QKB1zIwrPk8")' }}></div>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/60 via-transparent to-black/20"></div>

        {/* Content */}
        <Container classes="w-full relative z-10 text-center flex flex-col items-center">
        
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-saffron/50"></span>
            <span className="text-saffron  tracking-[0.3em] uppercase text-xs md:text-sm">
              Ancient Wisdom for Modern Life
            </span>
            <span className="w-12 h-[1px] bg-saffron/50"></span>
          </div>

          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-sans leading-[1.1] text-shadow-lg max-w-5xl mb-8">
            Authentic Vedic Rituals with{" "}
            <span className="text-saffron">Pt ShivKumar Sharma</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-12">
            Bridging the gap between the divine and the devotee through sacred
            ceremonies, precision astrology, and harmonious Vastu.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* 1. RESERVE YOUR PUJA (Lucide: CalendarDays) */}
            <button className="bg-marigold-gradient text-white px-10 py-5 rounded-xl  transition-all shadow-2xl hover:brightness-110 flex items-center gap-3 text-lg group">
              Reserve Your Puja{" "}
              <CalendarDays size={22} className="group-hover:scale-110 transition-transform" />
            </button>

            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-10 py-5 rounded-xl  transition-all text-lg flex items-center gap-2">
              Explore Services <ArrowRight size={20} />
            </button>
          </div>
        
        </Container>

        {/* 2. SCROLL TO EXPLORE (Lucide: Mouse with Animation) */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                <span className="text-white text-[10px] uppercase tracking-widest ">Scroll to explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
      </section>

      {/* Floating Service Bar */}
      <Container classes="-mt-12 relative z-20 px-6">
      
        <div className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl p-2 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto border border-saffron/10">
          
          <button className="flex-1 min-w-[160px] flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-saffron/10 text-saffron border border-saffron/20 transition-all hover:bg-saffron/20">
            {/* Sacred Puja Icon */}
            <Flower2 size={20} strokeWidth={2.5} />
            <span className=" text-sm">Sacred Puja</span>
          </button>

          <button className="flex-1 min-w-[160px] flex items-center justify-center gap-3 px-6 py-4 rounded-xl hover:bg-[#f4efe7] dark:hover:bg-zinc-800 transition-all text-royal-blue dark:text-white group">
            {/* Astrology Icon */}
            <Sparkles size={20} className="text-saffron group-hover:animate-spin-slow" />
            <span className=" text-sm">Vedic Astrology</span>
          </button>

          <button className="flex-1 min-w-[160px] flex items-center justify-center gap-3 px-6 py-4 rounded-xl hover:bg-[#f4efe7] dark:hover:bg-zinc-800 transition-all text-royal-blue dark:text-white">
            {/* Vastu Icon */}
            <Home size={20} className="text-saffron" />
            <span className=" text-sm">Vastu Shastra</span>
          </button>

        </div>
      </Container>
    </>
  );
}