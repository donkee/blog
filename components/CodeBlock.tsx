import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs';

export const CodeBlock = (props: { language: string; value: string }) => {
  const { language, value } = props;

  return (
    <SyntaxHighlighter language={language} style={vs}>
      {value}
    </SyntaxHighlighter>
  );
};
