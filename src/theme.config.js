export default {
  github: 'https://github.com/ifpb/lm', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/ifpb/lm/blob/master/src/pages', // base URL for the docs repository
  titleSuffix: ' – LM',
  nextLinks: true,
  prevLinks: true,
  floatTOC: true,
  search: false,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: 'IFPB - LM',
  footerEditLink: false, // 'Edite esta página no GitHub'
  logo: (
    <>
      <strong>Linguagem de Marcação</strong>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Linguagem de Script" />
      <meta name="og:title" content="Linguagem de Script" />
    </>
  ),
};
