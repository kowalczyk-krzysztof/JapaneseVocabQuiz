module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{tsx,ts}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/sw.js'
};