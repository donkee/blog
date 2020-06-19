import { format } from 'date-fns';
import Link from 'next/link';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { StoryblokResult } from 'storyblok-js-client';
import { CodeBlock } from './CodeBlock';

export const PostWindow: React.FC<{
  data?: StoryblokResult;
  width?: number;
}> = props => {
  const [width, setWidth] = useState(`${props.width}px`);

  return (
    <div
      className="window"
      style={{
        margin: 'auto',
        width: width,
        transition: 'all 0.2s'
      }}>
      <div className="title-bar">
        <div className="title-bar-text">
          {props.data.data.story.content.title}
        </div>
        <div className="title-bar-controls">
          <Link href="/about">
            <button aria-label="Help"></button>
          </Link>
          <button
            aria-label={width === '100%' ? 'Restore' : 'Maximize'}
            onClick={() => {
              setWidth(prevWidth =>
                prevWidth === '100%' ? `${props.width}px` : '100%'
              );
            }}></button>
          <Link href="/">
            <button aria-label="Close"></button>
          </Link>
        </div>
      </div>
      <div className="window-body">
        <div className="window-body-content">
          <h3>{props.data.data.story.content.header}</h3>
          <h5 style={{ marginBottom: '16px' }}>
            {'Published on ' +
              format(new Date(props.data.data.story.published_at), 'PPPP')}
          </h5>
          <ReactMarkdown
            source={props.data ? props.data.data.story.content.body : null}
            renderers={{ code: CodeBlock }}
          />
          {props.children}
        </div>
      </div>
    </div>
  );
};

PostWindow.defaultProps = {
  width: 800
};
