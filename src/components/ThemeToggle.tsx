import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button onClick={handleClick} className="hover:text-gray-500">
      {theme === 'light' ? (
        <Icon icon="ph:moon" style={{ fontSize: '28px' }} />
      ) : (
        <Icon icon="ph:sun" style={{ fontSize: '28px' }} />
      )}
    </button>
  );
}
