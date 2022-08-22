import SanityClientConstructor from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

const client = new SanityClientConstructor({
  projectId: 'salz0z30',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
});

// eslint-disable-next-line new-cap
const builder = new createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 3333 CORS Policy
// sanity cors add http://localhost:3000

export default client;
