import { ServiceCard } from "@/components/client/Services";
import { servicesData } from "@/data";

export default function ServicePage(){

    return(
        <>
        <div className="py-5">
     <ServiceCard items={servicesData}/>
</div>

        </>
    )
}