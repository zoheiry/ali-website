const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const port = 3000;

const devConfig = {
  mode: 'development',
  devServer: {
    port,
  },
};

module.exports = merge(commonConfig, devConfig);
