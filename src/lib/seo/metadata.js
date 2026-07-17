import { SITE_FALLBACK as SITE } from "@/lib/site/fallback";
import { urlFor } from "@/sanity/lib/image";

function getImage(image) {
  if (!image) {
    return `${SITE.url}${SITE.defaultOg}`;
  }

  if (typeof image === "string") {
    return image.startsWith("http")
      ? image
      : `${SITE.url}${image}`;
  }

  return urlFor(image)
    .width(1200)
    .height(630)
    .fit("crop")
    .url();
}

export function createMetadata({
  seo = {},

  fallbackTitle = "",

  fallbackDescription = "",

  fallbackImage = null,

  path = "/",

  type = "website",

  keywords = [],

  authors,

  creator,

  publisher,

  category,

  applicationName,

  referrer = "origin-when-cross-origin",

  other = {},
}) {
  const title = seo.title || fallbackTitle || SITE.title;

  const description =
    seo.description || fallbackDescription || SITE.description;

  const image = getImage(seo.image || fallbackImage);

  const canonical = seo.canonical || `${SITE.url}${path}`;

  const noIndex = seo.noIndex ?? false;
  const noFollow = seo.noFollow ?? false;

  return {
    metadataBase: new URL(SITE.url),

    title,

    description,

    keywords: [...new Set(seo.keywords || keywords)],

    authors: authors || [
      {
        name: SITE.author,
        url: SITE.url,
      },
    ],

    creator: creator || SITE.author,

    publisher: publisher || SITE.name,

    category,

    applicationName: applicationName || SITE.name,

    referrer,

    alternates: {
      canonical,
    },

    robots: {
      index: !noIndex,
      follow: !noFollow,

      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    verification: {
      google: SITE.googleVerification,
    },

    openGraph: {
      type,

      locale: SITE.locale,

      url: canonical,

      title,

      description,

      siteName: SITE.name,

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [image],

      creator: SITE.twitter || undefined,

      site: SITE.twitter || undefined,
    },

    appleWebApp: {
      capable: true,

      statusBarStyle: "default",

      title: SITE.name,
    },

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    icons: {
      icon: [
        {
          url: SITE.favicon,
        },
      ],

      shortcut: SITE.favicon,

      apple: [
        {
          url: "/apple-icon.png",
          sizes: "180x180",
        },
      ],
    },

    other,
  };
}