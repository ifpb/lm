import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface Props extends React.HTMLAttributes<HTMLIFrameElement> {
  src: string;
  height?: number;
}

export default function Iframe({ src, height }: Props) {
  const [iFrameHeight, setIFrameHeight] = useState(0);
  const iFrameRef = useRef<HTMLIFrameElement>(null);

  const handleResize = useCallback(
    (iframe: React.RefObject<HTMLIFrameElement>) => {
      const { body, documentElement } =
        iframe?.current?.contentWindow?.document || {};

      const contentHeight = Math.max(
        body?.clientHeight ?? 0,
        body?.offsetHeight ?? 0,
        body?.scrollHeight ?? 0,
        documentElement?.clientHeight ?? 0,
        documentElement?.offsetHeight ?? 0,
        documentElement?.scrollHeight ?? 0
      );

      setIFrameHeight(height || contentHeight);
    },
    []
  );

  useEffect(() => {
    handleResize(iFrameRef);
  }, [handleResize, iFrameRef]);

  return (
    <iframe
      ref={iFrameRef}
      onLoad={() => handleResize(iFrameRef)}
      src={src}
      style={{
        height: `${Number(iFrameHeight)}px`,
        width: '100%',
      }}
    />
  );
}
