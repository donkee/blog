import ReactMarkdown from 'react-markdown';
import useSWR from 'swr';
import { Window } from '../components/Window';
import { Storyblok } from '../storyblokClient';

const About = () => {
  const { data, error } = useSWR('about', story =>
    Storyblok.get(`cdn/stories/${story}`)
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="container">
      <main>
        <Window title="About Me" header="About Me">
          <ReactMarkdown source={data ? data.data.story.content.body : null} />
        </Window>
      </main>
    </div>
  );
};

export default About;
