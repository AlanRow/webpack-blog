const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {  
  entry: {
    index: './src/assets/js/main.js',
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : false,
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Blog',
      template: './src/public/index.html'
    }),
  ],
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};