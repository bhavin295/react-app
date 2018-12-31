const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	cache: true, // cache value true or false

	optimization: {
		namedModules: false, // Tells webpack to use readable module
			nodeEnv: 'production',
			usedExports: true, // Tells webpack to determine used exports for each module
			noEmitOnErrors: false, // skip phase whenever there are errors while compiling.
			minimize: false, // Tell webpack to minimize the bundle 
 },
})