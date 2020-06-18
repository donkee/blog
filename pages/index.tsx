import Head from 'next/head';
import StoryblokClient from 'storyblok-js-client';
import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';

export const api_key = process.env.NEXT_PUBLIC_STORYBLOK;

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
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="container">
      <Head>
        <title>Captain's Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to my blog!</h1>
        <ReactMarkdown source={data ? data.data.story.content.body : null} />
      </main>
    </div>
  );
};

export default Home;
