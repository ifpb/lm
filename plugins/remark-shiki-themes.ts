import { visit } from 'unist-util-visit';
import { getHighlighter } from 'shiki';

// remarkPlugins: [
//   [remarkShikiThemes, { themes: ['github-light', 'github-dark'] }],
// ],

export default ({ themes }) => {
  return async function (tree) {
    const highlighters = await Promise.all(
      themes.map(async (theme) => await getHighlighter({ theme }))
    );

    visit(tree, 'code', (node) => {
      let lang: string;

      if (typeof node.lang === 'string') {
        const langExists = highlighters[0]
          .getLoadedLanguages()
          .includes(node.lang);
        if (langExists) {
          lang = node.lang;
        } else {
          lang = 'plaintext';
        }
      } else {
        lang = 'plaintext';
      }

      let html = highlighters
        .map((highlighter) => highlighter.codeToHtml(node.value, { lang }))
        .join('');

      node.type = 'html';
      node.value = html;
      node.children = [];
    });
  };
};
