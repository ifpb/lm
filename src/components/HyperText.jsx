import { useCallback, useEffect, useRef, useState } from 'react';

export default function HyperText({ src, children, height }) {
  const [content, setContent] = useState('');
  const [iFrameHeight, setIFrameHeight] = useState(0);
  const iFrameRef = useRef(null);
  const style = {
    borderRadius: '0.3rem',
    backgroundColor: '#f3f6fa',
    border: 'solid 1px #dce6f0',
    padding: '1rem',
    marginTop: '0.8rem',
  };

  const handleResize = useCallback((iframe) => {
    setIFrameHeight(
      height ||
        iframe.current.contentWindow.document.documentElement.offsetHeight
    );
  }, []);

  useEffect(() => {
    if (src) {
      handleResize(iFrameRef);
    } else {
      setContent(children);
    }
  }, [handleResize, iFrameRef]);

  return src ? (
    <iframe
      ref={iFrameRef}
      onLoad={() => handleResize(iFrameRef)}
      src={src}
      style={{
        ...style,
        height: `${Number(iFrameHeight) + 30}px`,
        width: '100%',
      }}
    />
  ) : (
    <div style={style}>{content}</div>
  );
}