module.exports = {
  globDirectory: 'src/',
  globPatterns: ['**/*.{tsx,ts,png}'],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'public/sw.js',
};
