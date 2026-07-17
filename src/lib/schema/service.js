import { urlFor } from "@/sanity/lib/image";

function getImage(image) {
  if (!image) return null;

  if (typeof image === "string") return image;

  return urlFor(image).width(1200).height(630).url();
}

export function serviceSchema(site, service) {
  return {
    "@type": "Service",

    name: service.title,

    description:
      service.seo?.description ||
      service.shortDescription,

    image: getImage(service.featuredImage),

    provider: {
      "@id": `${site.url}/#organization`,
    },

    areaServed: {
      "@type": "Country",

      name: "India",
    },

    serviceType: service.title,

    url: `${site.url}/${service.slug.current}`,
  };
}