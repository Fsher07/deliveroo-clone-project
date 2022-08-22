export default {
  name: 'featured',
  title: 'Featured Menu categpries',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of the featured category',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description of the featured category',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{ type: 'reference', to: [{ type: 'restaurant' }] }],
    },
  ],
};
