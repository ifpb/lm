import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useStore } from '@nanostores/react';
import { isDark } from '../stores/themeStore';

export interface Props extends React.HTMLAttributes<HTMLIFrameElement> {
  src: string;
  height?: number;
}

export default function Iframe({ src, height }: Props) {
  const [iFrameHeight, setIFrameHeight] = useState(0);

  const iFrameRef = useRef<HTMLIFrameElement>(null);

  const $isDark = useStore(isDark);

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

  useEffect(() => {
    // console.log($isDark);

    iFrameRef?.current?.contentWindow?.document.head
      .querySelector('style')
      ?.remove();

    if ($isDark) {
      iFrameRef?.current?.contentWindow?.document.head.insertAdjacentHTML(
        'beforeend',
        `<style>
          :root {
            --color-primary: #ffffff;
          }

          body {
            color: var(--color-primary);
          }

          a {
            color: var(--color-primary);
          }

          * {
            border-color: var(--color-primary) !important;
          }
        </style>`
      );
    }
  }, [$isDark]);

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
