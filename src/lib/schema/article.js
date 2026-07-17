import { urlFor } from "@/sanity/lib/image";

function getImage(image) {
  if (!image) return null;

  if (typeof image === "string") return image;

  return urlFor(image)
    .width(1200)
    .height(630)
    .url();
}

export function articleSchema(site, post) {
  return {
    "@type": "Article",

    "@id": `${site.url}/blog/${post.slug.current}`,

    headline: post.title,

    description:
      post.seo?.description ||
      post.excerpt,

    image: getImage(post.featuredImage),

    datePublished: post.publishedAt,

    dateModified:
      post._updatedAt || post.publishedAt,

    author: {
      "@id": `${site.url}/#person`,
    },

    publisher: {
      "@id": `${site.url}/#organization`,
    },

    mainEntityOfPage: `${site.url}/blog/${post.slug.current}`,
  };
}