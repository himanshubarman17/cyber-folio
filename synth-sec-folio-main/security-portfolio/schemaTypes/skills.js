export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Skill Name",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
};