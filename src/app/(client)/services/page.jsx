import { ServiceCard } from "@/components/client/Services";
import { servicesData } from "@/data";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createMetadata({
    fallbackTitle: "Vastu Services",

    fallbackDescription:
      "Explore residential, commercial and industrial Vastu consultation services.",

    path: "/services",
  });
}

// //use for single service page
// export async function generateMetadata({ params }) {
//   const service = await getService(params.slug);

//   return createMetadata({
//     seo: service.seo,

//     fallbackTitle: service.title,

//     fallbackDescription: service.shortDescription,

//     fallbackImage: service.featuredImage,

//     path: `/services/${service.slug.current}`,
//   });
// }
export default function ServicePage(){

    return(
        <>
    
     <ServiceCard items={servicesData}/>


        </>
    )
}