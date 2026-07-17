import JsonLd from "@/components/client/Shared/JsonLd";
import HomePage from "./HomePage";
import { createMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema, webpageSchema } from "@/lib/schema";
import { getSiteConfig } from "@/lib/site";

export async function generateMetadata() {
  return createMetadata({
    fallbackTitle:
      "Senior Vastu Consultant in Ghaziabad | Home, Office & Commercial Vastu Expert",

    fallbackDescription:
      "Consult the best Senior Vastu Consultant in Ghaziabad for home, office, plot, school and commercial spaces.",

    path: "/",
  });
  
}

const site = getSiteConfig();
const PublicPage = () => {

    return(
        <>
        <JsonLd
  data={[
    organizationSchema(site),
    websiteSchema(site),
    webpageSchema({
      site,
    title:
      "Senior Vastu Consultant in Ghaziabad | Home, Office & Commercial Vastu Expert",

    description:
      "Consult the best Senior Vastu Consultant in Ghaziabad for home, office, plot, school and commercial spaces.",

    path: "/",
    }),
  ]}
/> 
  <HomePage />
        </>
    )
}

export default PublicPage