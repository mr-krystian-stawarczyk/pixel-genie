export default {
  name: 'realizacje',
  title: 'Realizacje',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        {
          name: 'eng',
          title: 'English',
          type: 'string',
        },
        {
          name: 'pl',
          title: 'Polish',
          type: 'string',
        },
        {
          name: 'de',
          title: 'German',
          type: 'string',
        },
      ],
    },
    {
      name: 'details',
      title: 'Details',
      type: 'object',
      fields: [
        {
          name: 'eng',
          title: 'English',
          type: 'string',
        },
        {
          name: 'pl',
          title: 'Polish',
          type: 'string',
        },
        {
          name: 'de',
          title: 'German',
          type: 'string',
        },
      ],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
}
