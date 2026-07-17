import { urlFor } from "@/sanity/lib/image";

function getImage(site) {
  if (!site.logo) return `${site.url}/logo.png`;

  if (typeof site.logo === "string") {
    return site.logo.startsWith("http")
      ? site.logo
      : `${site.url}${site.logo}`;
  }

  return urlFor(site.logo).width(800).height(800).url();
}

export function personSchema(site) {
  const image = getImage(site);

  return {
    "@type": "Person",

    "@id": `${site.url}/#person`,

    name: site.author,

    url: site.url,

    image,

    description: site.description,

    email: site.email,

    telephone: site.phone,

    jobTitle: "Senior Vastu Consultant & Astro Vastu Expert",

    worksFor: {
      "@id": `${site.url}/#organization`,
    },

    sameAs: [
      site.facebook,
      site.instagram,
      site.linkedin,
      site.youtube,
      site.twitter,
    ].filter(Boolean),
  };
}