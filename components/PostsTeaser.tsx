import Link from 'next/link';
import useSWR from 'swr';
import { Storyblok } from '../storyblokClient';

export const PostsTeaser = () => {
  const { data, error } = useSWR('posts', story =>
    Storyblok.get('cdn/stories', {
      starts_with: `${story}/`,
      per_page: 5
    })
  );
  if (!data) return <div>loading...</div>;

  return (
    <aside>
      <ul className={'tree-view'}>
        {data.data.stories.map(s => {
          return (
            <li>
              <Link href="/posts/[slug]" as={`/${s.full_slug}`}>
                <a>{s.content.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
