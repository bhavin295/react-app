const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
	entry: {
		main: './src/index.js' // entry point indicates which module webpack should use to begin.
	},
	output: {
		filename: '[name].[hash].js', // tells webpack how to write the compiled files to disk.
		path: path.resolve('./dist'),
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: ['node_modules'],
				use: [{ loader: 'babel-loader' }],
			},
			{
				test: /\.s(a|c)ss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				],
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({ // Plugin that simplifies creation of HTML files to serve your bundles
			template: 'index.html'
		}),
		new CleanWebPackPlugin(['dist']) // A webpack plugin to remove/clean your build folder(s) before building
	]
}