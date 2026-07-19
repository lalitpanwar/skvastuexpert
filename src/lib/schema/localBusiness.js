export function localBusinessSchema(site) {
  return {
    "@type": "LocalBusiness",

    "@id": `${site.url}/#localbusiness`,

    name: site.businessName || site.name,

    url: site.url,

    image: `${site.url}${site.logo}`,

    logo: `${site.url}${site.logo}`,

    telephone: site.phone,

    email: site.email,

    description: site.description,

    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    ...(site.geo?.latitude &&
      site.geo?.longitude && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
      }),

    ...(site.sameAs?.length && {
      sameAs: site.sameAs,
    }),

    ...(site.mapLink && {
      hasMap: site.mapLink,
    }),

    priceRange: "₹₹",

    ...(site.openTime &&
      site.closeTime && {
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: site.openTime,
            closes: site.closeTime,
          },
        ],
      }),
  };
}