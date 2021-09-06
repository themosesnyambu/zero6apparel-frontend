/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv');
const webpack = require('webpack');
const config = require('./webpack.config');

const env = dotenv.config().parsed;
process.env.NODE_ENV = 'development';

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    historyApiFallback: true,
    hot: true,quiet: true,
    overlay: true,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new webpack.EnvironmentPlugin({
        NODE_ENV: 'development', 
        DEBUG: true,
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env),
    }),
  ],
});
