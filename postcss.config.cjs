// PostCSS configuration: autoprefixer in all modes, cssnano in production
module.exports = {
  map: process.env.NODE_ENV !== 'production',
  plugins: [
    require('autoprefixer')(),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('cssnano')({
            preset: 'default',
          }),
        ]
      : []),
  ],
};
