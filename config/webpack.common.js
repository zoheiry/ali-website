const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
      test: /\.(t|j)s(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/preset-react','@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          }
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: [ '.ts', '.js', '.tsx', '.jsx'],
  },
};
