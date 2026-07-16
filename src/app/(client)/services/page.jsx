import { ServiceCard } from "@/components/client/Services";
import { servicesData } from "@/data";

export default function ServicePage(){

    return(
        <>
    
     <ServiceCard items={servicesData}/>


        </>
    )
}