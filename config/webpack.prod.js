const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: { modules: true },
          },
          {
            loader: 'sass-loader',
            options: {
              api: 'modern',
              sassOptions: {
                silenceDeprecations: ['import', 'legacy-js-api'],
              },
            }
          },
        ],
      },
      {
        test: /\.s?css$/,
        exclude: /\.module\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              api: 'modern',
              sassOptions: {
                silenceDeprecations: ['import', 'legacy-js-api'],
              },
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
