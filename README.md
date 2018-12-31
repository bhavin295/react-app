# ReactJs Configuration

* Clone the repository.
 `https://github.com/bhavin-bacancy/react-app.git`

* Install all dependencies
  `npm i`.

* For Development
  `npm start`.
  Application should start on port `3000`.

* For build
  `npm run build`

* Webpack Config 

	(1) npm i webpack webpack-cli -D

	    - For Installing Webpack and webpack CLI

	(2) npm i webpack-merge webpack-dev-server

			- For Installing Webpack dev server and merge files.
	
	(3) npm install --save-dev css-loader sass-loader

	    - For Load the CSS & Sass Files. 

	(4) npm install --save-dev style-loader

	    - For Load the Inline styles. 

	(5) npm install html-webpack-plugin clean-webpack-plugin

      - Install plugins for webpack

	(6) Babel Configuration :-

			- npm install babel-core babel-preset-env babel-preset-react --save-dev
			- npm install --save-dev babel-loader

			babel-preset-env:
				- for compiling Javascript ES6 code down to ES5.
			babel-preset-react:
				- for compiling JSX and other stuff down to Javascript.

	### Reference Links ###

	(1) https://webpack.js.org/concepts/
	(2) https://medium.freecodecamp.org/how-to-build-your-own-react-boilerplate-2f8cbbeb9b3f
	(3) https://www.valentinog.com/blog/react-webpack-babel/
