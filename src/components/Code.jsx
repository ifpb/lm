import React, { useEffect, useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
// https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
import theme from 'prism-react-renderer/themes/dracula';

export default function Code({ src, code, lang }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    async function loadContent() {
      const res = await fetch(src);

      const content = await res.text();

      setContent(content.trim());
    }

    if (code) {
      setContent(code.trim());
    } else {
      loadContent();
    }
  }, []);

  return (
    <Highlight {...defaultProps} code={content} language={lang} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre>
          <code className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
