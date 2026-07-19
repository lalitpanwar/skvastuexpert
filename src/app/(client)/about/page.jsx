import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/client/Shared/JsonLd";
import {
  organizationSchema,
  webpageSchema,
  breadcrumbSchema,
  personSchema,
} from "@/lib/schema";
import { aboutBreadcrumb } from "@/lib/navigation/breadcrumb";
import AboutPageClient from "./___AboutPageClient";
import { getSiteConfig } from "@/lib/site";
import Breadcrumb from "@/components/client/Shared/Breadcrumb";
import HeroSection from "@/components/client/About/HeroSection";
import OurStorySection from "@/components/client/About/OurStorySection";
import PhilosophySection from "@/components/client/About/PhilosophySection";
import JourneyTimelineSection from "@/components/client/About/JourneyTimelineSection";
import GallerySection from "@/components/client/About/GallerySection";
import AboutVastu from "@/components/client/About/AboutVastu";

export function generateMetadata() {
  return createMetadata({
    fallbackTitle: "About Us - Acharya Shiv Kumar Sharma",
    fallbackDescription:
      "About Us - Acharya Shiv Kumar Sharma, Senior Vastu Consultant and Astro Vastu Expert in Ghaziabad.",
    path: "/about",
  });
}

export default async function AboutPage() {
  const site = await getSiteConfig();

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(site),

          personSchema(site),

          webpageSchema({
            site,
            title: "About Us - Acharya Shiv Kumar Sharma",
            description:
              "About Us - Acharya Shiv Kumar Sharma, Senior Vastu Consultant and Astro Vastu Expert in Ghaziabad.",
            path: "/about",
          }),

          breadcrumbSchema(site, aboutBreadcrumb()),
        ]}
      />
      <AboutVastu />

       <Breadcrumb items={aboutBreadcrumb()} /> 
    </>
  );
}