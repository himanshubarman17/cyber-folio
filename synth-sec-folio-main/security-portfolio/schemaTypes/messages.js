export default {
  name: "messages",
  title: "Messages",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "message",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "createdAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],
};