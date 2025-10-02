// PostCSS configuration: autoprefixer in all modes, cssnano in production
const fs = require('fs');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

let purgecssPlugin = null;
try {
  // lazy require only if installed
  const mod = require('@fullhuman/postcss-purgecss');
  purgecssPlugin = mod && (mod.default || mod);
} catch (_) {}

function loadSafelist() {
  try {
    const p = path.resolve(__dirname, './tools/purgecss.safelist.json');
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return { standard: [], greedy: [] };
  }
}

const safelist = loadSafelist();

module.exports = {
  map: !isProd,
  plugins: [
    require('autoprefixer')(),
    ...(isProd && purgecssPlugin
      ? [
          purgecssPlugin({
            content: [
              './public/**/*.html',
              './public/**/*.hbs',
              './public/**/*.js',
              './src/**/*.js',
              './src/**/*.ts',
              './src/**/*.hbs',
              './src/**/*.html',
              './templates/**/*.hbs'
            ],
            safelist: {
              standard: safelist.standard || [],
              greedy: safelist.greedy || []
            },
            defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
          })
        ]
      : []),
    ...(isProd
      ? [
          require('cssnano')({ preset: 'default' })
        ]
      : []),
  ],
};
