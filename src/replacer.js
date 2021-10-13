const replace = require('replace-in-file');
const options = {
  files: ['../docs/**/*.html', '../docs/_next/static/chunks/**/*.js'],
  from: [
    /src="\/?imgs/g,
    /src:"\/?imgs/g,
    /href="\/imgs/g,
    /href:"\/imgs/g,
    /href="\/codes/g,
    /href:"\/codes/g,
    /src:"\/codes/g,
    /src="\/codes/g,
  ],
  to: [
    'src="/lm/imgs',
    'src:"/lm/imgs',
    'href="/lm/imgs',
    'href:"/lm/imgs',
    'href="/lm/codes',
    'href:"/lm/codes',
    'src:"/lm/codes',
    'src="/lm/codes',
  ],
};
(async function () {
  try {
    const results = await replace(options);
    console.log('Replacement results:', results);
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();
