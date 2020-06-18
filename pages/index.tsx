import App from './_app';

import Head from 'next/head';
import StoryblokClient from 'storyblok-js-client';
import useSWR from 'swr';

export const api_key = process.env.storyblok_key;

export const Storyblok = new StoryblokClient({
  accessToken: api_key,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
});

const Home = () => {
  const { data, error } = useSWR('home', story =>
    Storyblok.get(`cdn/stories/${story}`)
  );

  return (
    <div className="container">
      <Head>
        <title>Captain's Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to my blog!</h1>
        {data ? data.data.content.body : null}
      </main>
    </div>
  );
};

export default Home;
