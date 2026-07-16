import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Authors",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
      placeholder: "Founder, Astrologer, Editor...",
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "string",
      placeholder: "20+ Years Experience",
    }),

    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 5,
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "website",
      title: "Website",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),

    defineField({
      name: "facebook",
      title: "Facebook",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),

    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "photo",
      subtitle: "designation",
    },
  },
});
