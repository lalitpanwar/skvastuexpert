export function localBusinessSchema(site) {
  return {
    "@type": "LocalBusiness",

    "@id": `${site.url}/#localbusiness`,

    name: site.name,

    image: `${site.url}${site.logo}`,

    url: site.url,

    telephone: site.phone,

    email: site.email,

    description: site.description,

    address: {
      "@type": "PostalAddress",

      streetAddress: "",

      addressLocality: "Ghaziabad",

      addressRegion: "Uttar Pradesh",

      postalCode: "",

      addressCountry: "IN",
    },

    areaServed: {
      "@type": "Country",

      name: "India",
    },

    priceRange: "₹₹",
  };
}