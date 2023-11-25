module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,html,jpeg,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};