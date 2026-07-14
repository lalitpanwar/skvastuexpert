import AcharyaProfile from "@/components/client/SharedSection/AcharyaProfile"
import FAQ from "@/components/client/SharedSection/FAQSection"
import ConsultantProfile from "@/components/client/PageSection/ConsultantProfile"
import ConsultationHero from "@/components/client/PageSection/ConsultationHero"
import DeepDiveSection from "@/components/client/Services/DeepDiveSection"
import ImageCarousel from "@/components/client/PageSection/ImageCarousel"
import ServiceGrid from "@/components/client/Services/ServiceGrid"

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