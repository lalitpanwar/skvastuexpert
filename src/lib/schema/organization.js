import { urlFor } from "@/sanity/lib/image";

function getLogo(site) {
  if (!site.logo) {
    return `${site.url}/logo.png`;
  }

  if (typeof site.logo === "string") {
    return site.logo.startsWith("http")
      ? site.logo
      : `${site.url}${site.logo}`;
  }

  return urlFor(site.logo)
    .width(512)
    .height(512)
    .fit("crop")
    .url();
}

export function organizationSchema(site) {
  const logo = getLogo(site);

  return {
    "@type": "Organization",

    "@id": `${site.url}/#organization`,

    name: site.legalName || site.businessName || site.name,

    url: site.url,

    logo,

    image: logo,

    description: site.description,

    email: site.email,

    telephone: site.phone,

    sameAs: site.sameAs || [],

contactPoint: [
  {
    "@type": "ContactPoint",
    telephone: site.phone,
    email: site.email,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
     url: site.url,
  },
],
  };
}