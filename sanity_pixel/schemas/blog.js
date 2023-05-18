export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
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
          name: 'de',
          title: 'Deutsch',
          type: 'string',
        },
        {
          name: 'pl',
          title: 'Polish',
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
          name: 'details1',
          title: 'Details 1',
          type: 'object',
          fields: [
            {
              name: 'eng',
              title: 'English',
              type: 'text',
            },
            {
              name: 'de',
              title: 'Deutsch',
              type: 'text',
            },
            {
              name: 'pl',
              title: 'Polish',
              type: 'text',
            },
          ],
        },
        {
          name: 'details2',
          title: 'Details 2',
          type: 'object',
          fields: [
            {
              name: 'eng',
              title: 'English',
              type: 'text',
            },
            {
              name: 'de',
              title: 'Deutsch',
              type: 'text',
            },
            {
              name: 'pl',
              title: 'Polish',
              type: 'text',
            },
          ],
        },
        {
          name: 'details3',
          title: 'Details 3',
          type: 'object',
          fields: [
            {
              name: 'eng',
              title: 'English',
              type: 'text',
            },
            {
              name: 'de',
              title: 'Deutsch',
              type: 'text',
            },
            {
              name: 'pl',
              title: 'Polish',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
