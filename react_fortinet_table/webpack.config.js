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
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.less$/, 
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader' ]},
      { test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: 'babel-loader' },
      { test: /\.(woff(2)?|svg|eot|ttf|gif|jpg|png)(\?.+)?$/, 
        use: 'file-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './public/index.html'
      })
  ]
};