import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Website Settings",
  type: "document",

  groups: [
    { name: "general", title: "General" },
    { name: "seo", title: "SEO" },
    { name: "contact", title: "Contact" },
    { name: "social", title: "Social" },
    { name: "analytics", title: "Analytics" },
  ],

  fields: [
    // ---------------- General ----------------
    defineField({
      name: "siteName",
      title: "Website Name",
      type: "string",
      group: "general",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "siteUrl",
      title: "Website URL",
      type: "url",
      group: "general",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "general",
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      group: "general",
    }),

    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
      options: { hotspot: true },
      group: "general",
    }),

    // ---------------- SEO ----------------

    defineField({
      name: "defaultTitle",
      title: "Default SEO Title",
      type: "string",
      group: "seo",
    }),

    defineField({
      name: "defaultDescription",
      title: "Default SEO Description",
      type: "text",
      rows: 3,
      group: "seo",
    }),

    defineField({
      name: "defaultKeywords",
      title: "Default Keywords",
      type: "array",
      of: [{ type: "string" }],
      group: "seo",
    }),

    defineField({
      name: "defaultOgImage",
      title: "Default Open Graph Image",
      type: "image",
      options: { hotspot: true },
      group: "seo",
    }),

    defineField({
      name: "twitterHandle",
      title: "Twitter/X Username",
      type: "string",
      group: "seo",
    }),

    // ---------------- Contact ----------------

    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      group: "contact",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "text",
      group: "contact",
    }),

    // ---------------- Social ----------------

    defineField({
      name: "facebook",
      title: "Facebook",
      type: "url",
      group: "social",
    }),

    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
      group: "social",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
      group: "social",
    }),

    defineField({
      name: "youtube",
      title: "YouTube",
      type: "url",
      group: "social",
    }),

    // ---------------- Analytics ----------------

    defineField({
      name: "googleVerification",
      title: "Google Verification",
      type: "string",
      group: "analytics",
    }),

    defineField({
      name: "googleAnalyticsId",
      title: "Google Analytics ID",
      type: "string",
      group: "analytics",
    }),

    defineField({
      name: "googleTagManagerId",
      title: "Google Tag Manager ID",
      type: "string",
      group: "analytics",
    }),
  ],

  preview: {
    select: {
      title: "siteName",
      media: "logo",
    },
  },
});