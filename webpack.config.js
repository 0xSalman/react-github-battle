const path = require('path');
const webpack = require('webpack');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

const config = {

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
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;
