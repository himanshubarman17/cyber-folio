export default {
  name: "badges",
  title: "Badges",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Badge Title",
      type: "string",
    },

    {
      name: "issuer",
      title: "Issuer",
      type: "string",
    },

    {
      name: "image",
      title: "Badge Image (optional)",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "link",
      title: "Badge Link (optional)",
      type: "url",
    },

    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    },
  ],
};