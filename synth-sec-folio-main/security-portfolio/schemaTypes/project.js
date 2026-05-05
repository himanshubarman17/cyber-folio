export default {
  name: 'project',
  title: 'Projects',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'github',
      title: 'GitHub Link',
      type: 'url',
    },

    {
      name: 'live',
      title: 'Live Demo',
      type: 'url',
    },

    {
      name: 'tags',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}