export default {
  name: "certifications",
  title: "Certifications",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Certificate Title",
      type: "string",
    },

    {
      name: "issuer",
      title: "Issuer",
      type: "string",
    },

    {
      name: "image",
      title: "Certificate Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "issuedAt",
      title: "Issued Date",
      type: "string",
    },

    {
      name: "credentialUrl",
      title: "Credential Link",
      type: "url",
    },

    {
      name: "verifyUrl",
      title: "Verify Link (optional)",
      type: "url",
    },
  ],
};