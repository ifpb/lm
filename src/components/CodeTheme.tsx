import React, { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { isDark } from '../stores/themeStore';

export interface Props {
  codeDark: JSX.Element;
  codeLight: JSX.Element;
}

export default function CodeTheme({ codeDark, codeLight }: Props) {
  const [theme, setTheme] = useState('github-light');

  const $isDark = useStore(isDark);

  useEffect(() => {
    setTheme($isDark ? 'github-dark' : 'github-light');
  }, []);

  useEffect(() => {
    setTheme($isDark ? 'github-dark' : 'github-light');
  }, [$isDark]);

  return <>{theme === 'github-dark' ? codeDark : codeLight}</>;
}
