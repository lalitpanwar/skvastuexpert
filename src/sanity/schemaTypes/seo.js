import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",

  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Recommended: 50-60 characters",
      validation: (Rule) => Rule.max(60),
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "Recommended: 150-160 characters",
      validation: (Rule) => Rule.max(160),
    }),

    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
    }),

    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
      description: "Enable only if you don't want search engines to index this page.",
    }),
  ],

  options: {
    collapsible: true,
    collapsed: false,
  },
});