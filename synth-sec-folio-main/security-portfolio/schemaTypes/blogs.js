export default {
  name: "blog",
  title: "Blog",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    },

    {
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: [
          { title: "Medium", value: "Medium" },
          { title: "Dev.to", value: "Dev.to" },
          { title: "Hashnode", value: "Hashnode" },
          { title: "Personal Blog", value: "Personal Blog" },
        ],
      },
    },

    {
      name: "url",
      title: "Blog URL",
      type: "url",
    },

    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
  ],
};