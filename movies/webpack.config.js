const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin')
require("babel-register");

module.exports = env => {
	console.log('Environment: ' + env);
	return{
  mode: env,
  devtool: 'none',

  entry: path.resolve(__dirname, "src/index.js"),

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

// Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
    // Plugins
  plugins: [
    new htmlWebpackPlugin({
      template: './dist/index.html',
      filename: 'index.html',
      hash: true
    })
  ]

	};

};

 