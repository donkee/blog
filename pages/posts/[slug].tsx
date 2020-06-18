import Head from 'next/head';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import useSWR from 'swr';
import { CodeBlock } from '../../components/CodeBlock';
import { Window } from '../../components/Window';
import { Storyblok } from '../../storyblokClient';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error } = useSWR(slug, story =>
    Storyblok.get(`cdn/stories/posts/${story}`)
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="container">
      <Head>
        <title>{data.data.story.content.title} | Captain's Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Window
        title={data.data.story.content.title}
        header={data.data.story.content.header}>
        <ReactMarkdown
          source={data ? data.data.story.content.body : null}
          renderers={{ code: CodeBlock }}
        />
      </Window>
    </div>
  );
};

export default Post;
