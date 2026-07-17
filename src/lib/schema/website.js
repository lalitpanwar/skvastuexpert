export function websiteSchema(site) {
  return {
    "@type": "WebSite",

    "@id": `${site.url}/#website`,

    url: site.url,

    name: site.name,

    description: site.description,

    inLanguage: site.language,

    publisher: {
      "@id": `${site.url}/#organization`,
    },


  };
}