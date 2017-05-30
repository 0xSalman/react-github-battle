const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {

  entry: src + '/index.tsx',

  output: {
    path: dist,
    publicPath: '/dist/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  devtool: 'source-map', // 'cheap-module-source-map'

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: src,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    /*new HtmlWebpackPlugin({
     template: 'index.html'
     })*/
    // new webpack.NoErrorsPlugin()
  ]
};
