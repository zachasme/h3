const {resolve} = require('path');

// default location for table of contents
const DOCS = require('../docs/table-of-contents.json');

module.exports = {
  plugins: [{
    resolve: `gatsby-theme-ocular`,
    options: {
      // Adjusts amount of debug information from gatsby-theme-ocular
      logLevel: 1,

      DOC_FOLDERS: [`${__dirname}/../docs/`],
      ROOT_FOLDER: `${__dirname}/../`,
      DIR_NAME: `${__dirname}`,
      SOURCE: [`${__dirname}/static`, `${__dirname}/src`],

      PROJECT_TYPE: 'github',
      PROJECT_NAME: 'H3',
      PROJECT_ORG: 'uber',
      PROJECT_URL: 'https://h3geo.org/',
      PROJECT_DESC: 'Hexagonal hierarchical geospatial indexing system.',
      PATH_PREFIX: '/',

      FOOTER_LOGO: '',

      HOME_PATH: '/',
      HOME_HEADING: 'Hexagonal hierarchical geospatial indexing system',
      HOME_RIGHT: null,
      HOME_BULLETS: [
        {
          text: 'Partition data into a hexagonal grid',
          desc: 'H3 has an easy API for indexing coordinates into a hexagonal, global grid.',
          img: 'images/icon-high-precision.svg'
        },
        {
          text: 'Hierarchical grid system',
          desc: 'Easy, bitwise truncation to coarser, approximate cells, along with area compression/decompression algorithms.',
          img: 'images/icon-layers.svg'
        },
        {
          text: 'Fully global',
          desc: 'Along with twelve pentagons, the entire world is addressable in H3, down to square meter resolution.',
          img: 'images/icon-chart.svg'
        }
      ],

      // your table of contents goes here
      DOCS,

      EXAMPLES: [
        //{
        //  title: 'Minimal Example',
        //  path: 'examples/minimal/',
        //  image: 'images/hero.jpg',
        //  componentUrl: resolve('../examples/minimal/app.js')
        //}
      ],

      THEME_OVERRIDES: [
        //  {key: 'primaryFontFamily', value: 'serif'}
      ],

      PROJECTS: [
        // {name: 'Project name', url: 'http://project.url'},
      ],
      ADDITIONAL_LINKS: [
        // {name: 'link label', href: 'http://link.url'}
      ],

      GA_TRACKING: null,

      // For showing star counts and contributors.
      // Should be like btoa('YourUsername:YourKey') and should be readonly.
      GITHUB_KEY: null
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-katex`,
          options: {
            // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
            strict: `ignore`
          }
        }
      ],
    },
  },
]};
