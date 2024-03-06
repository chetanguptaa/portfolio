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
      name: "code",
      title: "Code Block",
      type: "code",
    },
  ],
};
