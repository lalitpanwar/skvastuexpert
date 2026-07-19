import { cache } from "react";

import { SETTINGS_QUERY } from "@/sanity/lib/queries";
import { SITE_FALLBACK } from "./fallback";
import { sanityFetch } from "@/sanity/lib/live";

export const getSiteConfig = cache(async () => {
  const settings = await sanityFetch(
    SETTINGS_QUERY,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return {
    ...SITE_FALLBACK,
    ...settings,
  };
});