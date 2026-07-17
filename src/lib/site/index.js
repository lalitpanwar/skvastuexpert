import { cache } from "react";
import { client } from "@/sanity/lib/client";
import { SETTINGS_QUERY } from "@/sanity/lib/queries";
import { SITE_FALLBACK } from "./fallback";

export const getSiteConfig = cache(async () => {
  const settings = await client.fetch(
    SETTINGS_QUERY,
    {},
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  return {
    ...SITE_FALLBACK,
    ...settings,
  };
});