import Link from 'next/link';
import { useState } from 'react';

export const Window: React.FC<{
  title: string;
  header?: string;
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
        <div className="title-bar-text">{props.title}</div>
        <div className="title-bar-controls">
          <Link href="/about">
            <button aria-label="Help"></button>
          </Link>
          <Link href="/">
            <button aria-label="Close"></button>
          </Link>
        </div>
      </div>
      <div className="window-body">
        <div className="window-body-content">
          {props.header ? <h2>{props.header}</h2> : null}
          {props.children}
        </div>
      </div>
    </div>
  );
};

Window.defaultProps = {
  width: 800
};
