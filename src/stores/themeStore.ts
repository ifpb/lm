import { atom } from 'nanostores';

export const isDark = atom(false);

export const getCodeTheme = () => {
  return isDark.get() ? 'github-dark' : 'github-light';
};
