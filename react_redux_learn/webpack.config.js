const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ui.bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: 'babel-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './public/index.html'
      })
  ]
};