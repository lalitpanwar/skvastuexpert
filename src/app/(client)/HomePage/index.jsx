import ProductCarousel from "@/components/client/ProductCarousel";
import HeroSection from "./HeroSection";
import Acharya from "./Acharya";
import StepsSection from "./StepsSection";
import FAQSection from "@/components/client/FAQSection";
import CTAOne from "@/components/client/CtaOne";
import { pujaData, servicesData } from "@/app/data";
import AreaGrid from "@/components/client/PageSection/AreaGrid";
import ProductCard from "@/components/client/ProductCard";
import AcharyaExpertise from "@/components/client/PageSection/AcharyaExpertise";
import FeaturedIn from "@/components/client/PageSection/FeaturedIn";
import ServiceGrid from "@/components/client/ServiceCard";
import SectionIntro from "@/components/client/SectionIntro";
import CtaTwo from "@/components/client/CtaTwo";
import ProblemSolutionSection from "@/components/client/ProblemSolutionSection";
import { vastuFaqs, testimonialsData } from "@/app/data";
import TestimonialSection from "@/components/client/PageSection/TestimonalSection";
import { createWhatsAppLink } from "@/lib";

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
      <SectionIntro />
<ServiceGrid items={servicesData}/>
<ProblemSolutionSection variant="center" bgColor="bg-amber-50"/>


  <AcharyaExpertise />
  
<FeaturedIn className="border-b border-slate-100" />
      <AreaGrid
  title="Vastu Consultation Services Across Ghaziabad & NCR"

  subtitle="Get professional Vastu consultation for homes, offices, plots & commercial spaces with practical guidance and accurate remedies."

        variant="center"
        bgColor="bg-slate-50"
        areas={locations}
      />
<TestimonialSection
  items={testimonialsData}

  title="What Our Clients Say"

  subtitle="Real experiences from people who transformed their spaces with Vastu consultation."

/>
<FAQSection
  title="Frequently Asked Questions"

  subtitle="Get answers related to Vastu consultation, online analysis & Vastu remedies."

  items={vastuFaqs}

  bgClass="bg-theme-warm"
/>
      <CTAOne buttonLink={createWhatsAppLink("professional Vastu consultation")} />

    </>
  );
}
