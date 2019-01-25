const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
console.log(path.resolve(__dirname, './src/pug/index.pug'));
isSourceMap = true;
module.exports = {
  mode: 'development',
  entry: ['./src/js/index.jsx'],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
      {
        test: /\.pug$/,
        use: [{ loader: 'pug-loader' }]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isSourceMap,
              importLoader: 2,
              modules: true,
              localIdentName: '[path][name]__[local]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isSourceMap,
              plugins: [
                new HtmlWebpackPlugin({
                  inject: true,
                  hash: true,
                  template: path.resolve(__dirname, './src/pug/index.pug')
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isSourceMap
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.js', '.jsx', '.json', '.sass'],
    alias: {
      '~': path.resolve(__dirname, './src/js/'),
      sass: path.resolve(__dirname, './src/sass')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path.resolve(__dirname, './src/pug/index.pug')
    })
  ],
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: '/dist/js',
    port: 3030,
    // 他デバイスで見たい時用
    // host: "0.0.0.0",
    overlay: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
      colors: true
    }
  }
};
