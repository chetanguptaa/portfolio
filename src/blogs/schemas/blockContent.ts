export default {
  title: "Block Content",
  type: "array",
  name: "blockContent",
  of: [
    {
      type: "block",
    },
    {
      type: "image",
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Alternative text",
          description: "Image",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      type: "code",
      name: "code",
      title: "Code with all options",
      options: {
        language: "javascript",
        languageAlternatives: [
          { title: "Javascript", value: "javascript" },
          { title: "TypeScript", value: "typescript" },
          { title: "tsx", value: "tsx" },
        ],
        withFilename: true,
      },
    },
  ],
};
