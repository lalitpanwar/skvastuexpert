import { defineField, defineType } from "sanity";

export const settingsType = defineType({
  name: "settings",
  title: "Website Settings",
  type: "document",
preview: {
  prepare() {
    return {
      title: "Website Settings",
    };
  },
},
  fields: [
    defineField({
      name: "siteTitle",
      title: "Website Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "siteDescription",
      title: "Website Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "defaultOgImage",
      title: "Default OG Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "facebook",
      title: "Facebook",
      type: "url",
    }),

    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
    }),

    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    }),

    defineField({
      name: "youtube",
      title: "YouTube",
      type: "url",
    }),
  ],
});