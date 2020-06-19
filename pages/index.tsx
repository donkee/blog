import ReactMarkdown from 'react-markdown';
import useSWR from 'swr';
import { PostsTeaser } from '../components/PostsTeaser';
import { Window } from '../components/Window';
import { Storyblok } from '../storyblokClient';

const Home = () => {
  const { data, error } = useSWR('home', story =>
    Storyblok.get(`cdn/stories/${story}`)
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="container">
      <main>
        <Window title="Symantech" header="Welcome to my blog!" width={1000}>
          <ReactMarkdown source={data ? data.data.story.content.body : null} />
          <h4>Recent posts:</h4>
          <PostsTeaser />
        </Window>
      </main>
    </div>
  );
};

export default Home;
