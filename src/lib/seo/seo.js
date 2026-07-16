export function generateArticleMetadata(post) {
  const title = post.seo?.metaTitle || post.title;

  const description =
    post.seo?.metaDescription ||
    post.excerpt ||
    "Read this article.";

  const image =
    post.featuredImage?.asset?.url || "/images/og-image.jpg";

  const canonical = `https://yourdomain.com/blog/${post.slug}`;

  return {
    title,

    description,

    alternates: {
      canonical,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}