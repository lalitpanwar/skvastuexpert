import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Posts",
  type: "document",

  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "publishing",
      title: "Publishing",
    },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "content",
      validation: (Rule) => Rule.max(180),
    }),

    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      group: "content",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "caption",
          title: "Image Caption",
          type: "string",
        },
      ],
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      group: "content",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      group: "content",
      to: [{ type: "category" }],
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      group: "content",
      to: [{ type: "author" }],
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      group: "publishing",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      group: "publishing",
      initialValue: false,
    }),

    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
    defineField({
      name: "readingTime",
      title: "Reading Time",
      type: "number",
      group: "publishing",
      description: "Minutes (e.g. 5)",
    }),
    defineField({
      name: "updatedAt",
      title: "Last Updated",
      type: "datetime",
      group: "publishing",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "featuredImage",
      subtitle: "publishedAt",
    },
  },
});
