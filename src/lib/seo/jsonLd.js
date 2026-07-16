export function generateArticleJsonLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: post.title,

    description: post.excerpt,

    image: [
      post.featuredImage?.asset?.url,
    ],

    datePublished: post.publishedAt,

    dateModified:
      post._updatedAt || post.publishedAt,

    author: {
      "@type": "Person",
      name: post.author?.name,
    },

    publisher: {
      "@type": "Organization",
      name: "Shiv Kumar Sharma",
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/blog/${post.slug}`,
    },
  };
}