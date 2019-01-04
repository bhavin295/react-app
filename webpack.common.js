const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebPackPlugin = require('clean-webpack-plugin')
var webpack = require('webpack');

const path = require('path')

module.exports = {
	mode: 'development',

	entry: ['babel-polyfill', './src/index.js'],
	output: {
		filename: 'bundle.js', // tells webpack how to write the compiled files to disk.
		path: path.resolve('./dist'),
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			}
		]
	},

	plugins: [
		new HtmlWebPackPlugin({ // Plugin that simplifies creation of HTML files to serve your bundles
			template: 'index.html'
		}),
		new CleanWebPackPlugin(['dist']), // A webpack plugin to remove/clean your build folder(s) before building
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		})
	],
}