import { pujaData } from "@/data/pujaData";
import AcharyaProfile from "@/components/client/SharedSection/AcharyaProfile";
import Breadcrumb from "@/components/client/Layout/Breadcrumb_old";
import CtaTwo from "@/components/client/SharedSection/Cta/CtaTwo";
import FAQ from "@/components/client/SharedSection/FAQSection";
import ImageCarousel from "@/components/client/PageSection/ImageCarousel";
import PujaChecklist from "@/components/client/Services/PujaChecklist";
import RelatedGrid from "@/components/client/Services/RelatedGrid";
import ServiceContent from "@/components/client/Services/ServiceContent";
import ServiceHero from "@/components/client/Services/ServiceHero";

export default async function PujaPage({ params }) {
  const { pujaName } = await params;
  console.log("pujaName", pujaName);
  const data = pujaData?.find((p) => p.slug === pujaName);
  
  if (!data) return <div>Puja not found</div>;
  return (
    <>
      <Breadcrumb />
{/* Title, Price, Image aur Description yahan jayenge */}
      <ServiceHero 
        title={data.title} 
        price={data.price} 
        mainImage={`/images/puja/${data.image}.jpg`} 
        description={data.description} 
      />

      {/* Importance aur Puja Vidhi yahan dikhayenge */}
      <ServiceContent 
        importanceText={data.importance} 
        vidhiText={data.pujaVidhi} 
      />

      {/* "Provided by Us" vs "Arranged by You" yahan jayega */}
      <PujaChecklist 
        providedItems={data.samagri.providedByUs} 
        arrangedItems={data.samagri.arrangedByYou} 
      />
      <AcharyaProfile />
      <ImageCarousel />
      <FAQ />
      <RelatedGrid rituals={pujaData}/>
      <CtaTwo />
      service page {pujaName}
    </>
  );
}
