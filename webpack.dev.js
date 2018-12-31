const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval', // Choose a style of source mapping to enhance the debugging process { generated code }
	cache: true, // cache value true or false
	
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true
	},
	optimization: {
		 namedModules: true, // Tells webpack to use readable module
		   nodeEnv: 'development',
		   usedExports: true, // Tells webpack to determine used exports for each module
		   noEmitOnErrors: false, // skip phase whenever there are errors while compiling.
		   minimize: false, // Tell webpack to minimize the bundle 
	},
	externals: {
			jquery: 'jQuery' // The externals configuration option provides a way of excluding dependencies from the output bundles. 
	},
	performance: {
    hints: false, // tells webpack to throw either an error or a warning when hints are found. 
  }
})