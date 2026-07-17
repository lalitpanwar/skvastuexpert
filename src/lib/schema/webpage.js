export function webpageSchema({
  site,
  title,
  description,
  path,
}) {
  return {
    "@type": "WebPage",

    "@id": `${site.url}${path}`,

    url: `${site.url}${path}`,

    name: title,

    description,

    isPartOf: {
      "@id": `${site.url}/#website`,
    },

    about: {
      "@id": `${site.url}/#organization`,
    },

    inLanguage: site.language,
  };
}