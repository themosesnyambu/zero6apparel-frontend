const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const inDevelopment = process.env.NODE_ENV !== 'production';
const htmlTitle = process.env.HTML_TITLE || 'zero6';

module.exports = {
  entry: [path.resolve(__dirname, "./src/index.js"), "babel-polyfill"],
  output: {
    path: path.join(__dirname,'/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
           "css-loader",          
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    fallback: {
      fs: false
    },
    extensions: ["*", ".js", ".jsx", ".scss"],
    alias: {
      '@': path.resolve(__dirname, '../', 'src/'),
      '@Config': path.resolve(__dirname, '../', 'src/config/'),
      '@Redux': path.resolve(__dirname, '../', 'src/redux/'),
      '@Actions': path.resolve(__dirname, '../', 'src/redux/actions'),
      '@Reducers': path.resolve(__dirname, '../', 'src/redux/reducers'),
      '@Types': path.resolve(__dirname, '../', 'src/redux/actions/types'),
      '@Common': path.resolve(__dirname, '../', 'src/components/common/'),
      '@Utils': path.resolve(__dirname, '../', 'utils/'),
      '@Views': path.resolve(__dirname, '../', 'src/components/views'),
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
  }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: htmlTitle,
    }),
    new MiniCssExtractPlugin({
      filename: inDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: inDevelopment ? '[id].css' : '[id].[hash].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running on http://localhost:8080'],
      },
    }),
  ],
};
