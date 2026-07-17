import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",

  groups: [
    {
      name: "basic",
      title: "Basic",
      default: true,
    },
    {
      name: "advanced",
      title: "Advanced",
    },
    {
      name: "social",
      title: "Social",
    },
  ],

  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      group: "basic",
      validation: (Rule) => Rule.max(60),
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      group: "basic",
      validation: (Rule) => Rule.max(160),
    }),

    defineField({
      name: "canonical",
      title: "Canonical URL",
      type: "url",
      group: "advanced",
    }),

    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      group: "advanced",
    }),

    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
      group: "advanced",
    }),

    defineField({
      name: "noFollow",
      title: "No Follow",
      type: "boolean",
      initialValue: false,
      group: "advanced",
    }),

    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "social",
    }),

    defineField({
      name: "twitterTitle",
      title: "Twitter Title",
      type: "string",
      group: "social",
    }),

    defineField({
      name: "twitterDescription",
      title: "Twitter Description",
      type: "text",
      rows: 3,
      group: "social",
    }),
  ],
});