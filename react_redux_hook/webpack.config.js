const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: [ path.join(__dirname, 'src'), path.join(__dirname, 'public') ],
    hot: true,
    open: true,
    watchContentBase: true,
    watchOptions: {
      poll: true,
      aggregateTimeout: 5000
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ui.bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader' ]},
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /\.(woff(2)?|svg|eot|ttf|gif|jpg|png)(\?.+)?$/, use: 'file-loader'},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './public/index.html'
      })
  ]
};