import { SITE_FALLBACK as SITE } from "@/lib/site/fallback";

export default function manifest() {
  return {
    name: SITE.name,

    short_name: SITE.name,

    description: SITE.description,

    start_url: "/",

    scope: "/",

    display: "standalone",

    orientation: "portrait-primary",

    background_color: "#ffffff",

    theme_color: "#ffffff",

    lang: SITE.language,

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}