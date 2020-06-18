import StoryblokClient from 'storyblok-js-client';
export const api_key = process.env.NEXT_PUBLIC_STORYBLOK;

export const Storyblok = new StoryblokClient({
  accessToken: api_key,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
});
