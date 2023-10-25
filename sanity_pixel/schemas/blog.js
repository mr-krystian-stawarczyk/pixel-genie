export default {
  name: 'blog',
  title: 'Blog',
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
      name: 'date',
      title: 'Date',
      type: 'date', // Change this to 'date' type
      options: {
        dateFormat: 'DD-MM-YYYY', // Specify your desired date format
      },
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name.de', // Use the 'name' field in English as the source for the slug
        maxLength: 200, // Adjust the maximum length as needed
      },
    },

    {
      name: 'details',
      title: 'Details',
      type: 'object',
      fields: [
        {
          name: 'details1',
          title: 'Wstep ',
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
        {
          name: 'details4',
          title: 'Details 4',
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
          name: 'details5',
          title: 'Details 5',
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
          name: 'details6',
          title: 'Details 6',
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
          name: 'details7',
          title: 'Details 7',
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
          name: 'details8',
          title: 'Details 8',
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
          name: 'details9',
          title: 'Details 9',
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
          name: 'details10',
          title: 'Details 10',
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
          name: 'details11',
          title: 'Details 11',
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
          name: 'details12',
          title: 'Details 12',
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
          name: 'details13',
          title: 'Details 13',
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
          name: 'details14',
          title: 'Details 14',
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
          name: 'details15',
          title: 'Details 15',
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
          name: 'details16',
          title: 'Podsumowanie 1',
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
          name: 'details17',
          title: 'Podsumowanie 2',
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
