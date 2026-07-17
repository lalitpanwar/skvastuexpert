import { createMetadata } from "@/lib/seo";
import ContactPageClient from "./ContactPageClient";
import JsonLd from "@/components/client/Shared/JsonLd";
import {
  breadcrumbSchema,
  localBusinessSchema,
  organizationSchema,
  webpageSchema,
} from "@/lib/schema";
import Breadcrumb from "@/components/client/Shared/Breadcrumb";
import { contactBreadcrumb } from "@/lib/navigation/breadcrumb";
import { getSiteConfig } from "@/lib/site";

export async function generateMetadata() {
  return createMetadata({
    fallbackTitle: "Contact Us",

    fallbackDescription:
      "Contact our Vastu experts for online and offline consultation.",

    path: "/contact",
  });
}
export default async function ContactPage() {
  const site = await getSiteConfig();
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(site),

          localBusinessSchema(site),
          webpageSchema({
            site,
            title: "Contact Us",

            description:
              "Contact our Vastu experts for online and offline consultation.",

            path: "/contact",
          }),
          breadcrumbSchema(site, contactBreadcrumb()),
        ]}
      />
      <ContactPageClient />
      <Breadcrumb items={contactBreadcrumb()} />
    </>
  );
}
