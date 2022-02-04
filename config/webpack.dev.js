const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.common');

const port = 3000;

const devConfig = {
  mode: 'development',
  devServer: {
    port,
  },
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ],
      },
      {
        test: /\.s?css$/,
        exclude: /\.module\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
