const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  /** UI entry */
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
  },
  /** how to load different file types*/
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.less$/, 
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader' ]},
      { test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: 'babel-loader' },
      { test: /\.(woff(2)?|svg|eot|ttf|gif|jpg|png)(\?.+)?$/, use: 'file-loader' },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        template: './public/index.html',
        favicon: './public/favicon.ico'
      })
  ]
};