import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { PostWindow } from '../../components/PostWindow';
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

      <PostWindow data={data} />
    </div>
  );
};

export default Post;
