import ProductCarousel from "@/components/client/Shop/ProductCarousel";
import HeroSection from "./HeroSection";
import Acharya from "./Acharya_forpuja";
import StepsSection from "./StepsSection";
import FAQ from "@/components/client/SharedSection/FAQSection";
import CTAOne from "@/components/client/SharedSection/Cta/CtaOne";
import { pujaData } from "@/data/pujaData";
import AreaGrid from "@/components/client/Services/AreaGrid";
import ProductCard from "@/components/client/ProductCard";
import AcharyaExpertise from "@/components/client/PageSection/AcharyaExpertise";
import FeaturedIn from "@/components/client/PageSection/FeaturedIn";
export default function HomePage() {
  const rituals = [
    { id: 1, title: "Ganesh Puja", img: "ganesh.png", tag: "MOST REQUESTED" },
    { id: 2, title: "Satyanarayan Katha", img: "pandit.png", tag: "" },
    { id: 3, title: "Havan Services", img: "shiv.png", tag: "" },
    { id: 4, title: "Vastu Shanti", img: "vastu.jpg", tag: "NEW" },
  ];
  const locations = [
    {
      region: "Ghaziabad (Main)",
      iconType: "ghaziabad",
      locations: [
        "Indirapuram",
        "Raj Nagar Extension",
        "Vasundhara & Vaishali",
        "Kavi Nagar & Shastri Nagar",
        "Crossings Republik",
      ],
    },
    {
      region: "Noida & G. Noida",
      iconType: "noida",
      locations: [
        "Noida Sector 62, 18, 150",
        "Gaur City 1 & 2",
        "Noida Extension",
        "Greater Noida West",
        "Pari Chowk Area",
      ],
    },
    {
      region: "Other NCR Areas",
      iconType: "ncr",
      locations: [
        "East Delhi (Laxmi Nagar)",
        "Siddhartha Vihar",
        "Sahibabad & Mohan Nagar",
        "Muradnagar",
        "Modinagar",
      ],
    },
  ];
  return (
    <>
      <HeroSection />
      <ProductCarousel
        items={pujaData}
        title="Rituals Performed by Pandit Ji"
        desktopCols={3}
        mobileCols={2}
        subtitle="Every ceremony is conducted with strict adherence to Shastras, ensuring the highest spiritual vibration for your household."
       buttonText="Book pandit"
       variant="primary"
      />

      <ProductCard

        items={pujaData}
        title="Special Event Puja"
        bgColor="bg-theme-warm"
        desktopCols={4}
        mobileCols={2}
        subtitle="Every ceremony is conducted with strict adherence to Shastras, ensuring the highest spiritual vibration for your household."
        variant="outline"
      />
  <AcharyaExpertise />
  
<FeaturedIn className="border-b border-slate-100" />
      <AreaGrid
        title="Sacred Puja Services Across Ghaziabad & NCR"
        subtitle="Experience authentic Vedic rituals performed by Acharya Shivkumar Sharma at the comfort of your home."
        variant="center"
        bgColor="bg-slate-50"
        areas={locations}
      />
      <StepsSection />
      <ProductCarousel
        items={pujaData}
        title="Mantra Jaap & Mukti Karma"
        desktopCols={3}
        mobileCols={2}
        subtitle="Every ceremony is conducted with strict adherence to Shastras, ensuring the highest spiritual vibration for your household."
        variant="secondary"
      />

<div className="bg-amber-50 py-20">
  <div className="text-center mb-16">
  <h3 className="text-secondary-hover dark:text-white text-3xl md:text-4xl font-sans  mb-4">Other Services</h3>
     <div className="w-20 h-1 bg-primary/30 mx-auto"></div>
     </div>
      <ProductCard
      className = "pt-0 md:pt-0"
       items={pujaData}
        title="Vasu Shastra"
        desktopCols={4}
        mobileCols={2}
        subtitle="Every ceremony is conducted with strict adherence to Shastras, ensuring the highest spiritual vibration for your household."/>
      <ProductCard
      className = "py-0 pb-20"
       items={pujaData}
        title="Astrology"
        desktopCols={4}
        mobileCols={2}
        subtitle="Every ceremony is conducted with strict adherence to Shastras, ensuring the highest spiritual vibration for your household."/>


</div>
      <FAQ />
      <CTAOne />
    </>
  );
}
