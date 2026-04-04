import SectionLayout from "@/components/ui/custom/section-layout";
import ProductCarousel from "@/components/client/ProductCarousel";// Jo aapne banaya tha
import { pujaData } from "@/app/data/puja/pujaData";
export default function Astrology() {
  return (
    <main>
      
      {/* 1. HERO SECTION (Aapka existing hero yahan aayega) */}

      {/* 2. PRIMARY PUJA SERVICES (Left Align + See More) */}
      <SectionLayout
        title="Popular Puja Services"
        subtitle="Vedic rituals performed with devotion for your prosperity and peace."
        seeMoreLink="/services"
        seeMoreText="View All Pujas"
        bgColor="" // Thoda off-white background
      >
        <ProductCarousel items={pujaData} />
      </SectionLayout>

      {/* 3. SACRED STEPS (Center Align + Dark Background) */}
      <SectionLayout
        title="Sacred Steps to Your Consultation"
        subtitle="Connecting with Pandit Ji is a seamless spiritual journey."
        variant="center"
        bgColor="bg-[#001f3f]" // Navy Blue
        light={true} // Text white ho jayega
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Example Step Card */}
          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="text-[#d4af37] text-4xl  mb-4">01</div>
            <h3 className="text-white text-xl  mb-2">Select Puja</h3>
            <p className="text-white/60 text-sm">Choose from our wide range of Vedic services.</p>
          </div>
          {/* ... aise hi baki 3 steps ... */}
        </div>
      </SectionLayout>

      {/* 4. AREA WE COVER (Left Align - No See More) */}
      <SectionLayout
        title="Pandit for Puja in Ghaziabad"
        subtitle="Hum Ghaziabad aur NCR ke har kone mein sevaen pradan karte hain."
        bgColor="bg-white"
      >
        {/* Aapka Area Grid wala code yahan */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {["Indirapuram", "Raj Nagar", "Vaishali", "Vasundhara"].map((city) => (
             <div key={city} className="p-4 border rounded-lg text-center font-medium hover:border-[#d4af37]">
               {city}
             </div>
           ))}
        </div>
      </SectionLayout>

    </main>
  );
}