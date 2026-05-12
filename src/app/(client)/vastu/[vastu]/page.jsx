import AcharyaProfile from "@/components/client/AcharyaProfile"
import FAQ from "@/components/client/FAQSection"
import ConsultantProfile from "@/components/client/PageSection/ConsultantProfile"
import ConsultationHero from "@/components/client/PageSection/ConsultationHero"
import DeepDiveSection from "@/components/client/PageSection/DeepDiveSection"
import ImageCarousel from "@/components/client/PageSection/ImageCarousel"
import ServiceGrid from "@/components/client/PageSection/ServiceGrid"

export default function VastuPage(){



    return(

        <>
        <ConsultationHero />
        <ServiceGrid />
        <DeepDiveSection />
        <ConsultantProfile />
        <ImageCarousel title="Transformed Living" bgColor ="bg-[#f8f7f5] dark:bg-[#221b10]"/>
        <FAQ />
        
        </>
    )

}