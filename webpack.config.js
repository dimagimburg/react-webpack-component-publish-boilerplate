var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    bundle: [
      "react-hot-loader/patch",
      './src/Counter',
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:3000'
    ],
    demo: [
      "react-hot-loader/patch",
      './demo/index',
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:3000'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'demo')
      }
    ]
  }
};
