const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
require('dotenv').config()

module.exports = {
  entry: {
    'assets/bundle.js': path.resolve(__dirname, 'src/js/index.js'),
    'assets/bundle.css': path.resolve(__dirname, 'src/css/index.scss'),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name]",
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    port: process.env.PORT,
  },
  devtool: "source-map",
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'eslint-loader',
      //   },
      // },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: ["react", "es2016", "stage-3", "es2015"],
            plugins: ["transform-class-properties"],
          },
        }],
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: [
      path.join(__dirname, "node_modules")
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name]'),
    new CopyWebpackPlugin([{ from: 'src/*.html', to: '[name].[ext]' }]),
    new webpack.DefinePlugin({
      'process.env': {
        'FB_APP_ID': process.env.FB_APP_ID,
      },
    }),
  ],
};
