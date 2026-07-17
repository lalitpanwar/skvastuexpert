export function breadcrumbSchema(site, items) {
  return {
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.label,

      ...(item.href && {
        item: `${site.url}${item.href}`,
      }),
    })),
  };
}