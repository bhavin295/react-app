# ReactJs 

* Clone the repository.
 `https://github.com/bhavin-bacancy/react-app.git`

* Install all dependencies
  `npm i`.

* For Development
  `npm start`.
  Application should start on port `3000`.

* For build
  `npm run build`

# Webpack Configuration : 

	(1) npm i webpack webpack-cli webpack-merge webpack-dev-server -D

	  - For Installing Webpack, webpack CLI, Webpack dev server and merge files.
	
	(2) npm install --save-dev css-loader sass-loader

      - For Load the CSS & Sass Files. 

	(3) npm install --save-dev style-loader

	  - For Load the Inline styles. 

	(4) npm install html-webpack-plugin clean-webpack-plugin

      - Install plugins for webpack

	(5) Babel Configuration :-

		- npm install babel-core babel-preset-env babel-preset-react --save-dev
		- npm install --save-dev babel-loader

		* babel-preset-env:

			- for compiling Javascript ES6 code down to ES5.

		* babel-preset-react:

			- for compiling JSX and other stuff down to Javascript.

# Reference Links for Webpack : 

	(1) https://webpack.js.org/concepts/

	(2) https://medium.freecodecamp.org/how-to-build-your-own-react-boilerplate-2f8cbbeb9b3f

	(3) https://www.valentinog.com/blog/react-webpack-babel/

# React Configuration : 

	(1) npm install react --save

	(2) npm install react-dom --save

		* Add index.html file : 

			This is just regular HTML. adding index_bundle.js script, which is our bundled app file.

		* Add files using react structure : 

			- src
				- componenets
					- App.js
				- styles
					- style.css
				- index.js

# Reference Links for React :

	(1) https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm

# Router Configuration :

	(1) npm i react-router --save-dev

	(2) npm install react-router-dom

			* Apply in devServer: { historyApiFallback: true}

				- historyApiFallback: true 
				// It used when refresh or manually give path using react router

# Redux Configuration :

	(1) npm install --save react-redux

			- install redux in your app.

			