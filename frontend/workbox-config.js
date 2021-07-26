module.exports = {
  globDirectory: 'src/',
  globPatterns: ['**/*.{tsx,ts,woff,woff2}'],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'public/sw.js',
};
