const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
          },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|mp4|woff|svg||eot|ttf|otf)$/i,
        use: [
          { loader: 'file-loader' },
        ],
      },
      {
        test: /\.(raw.html|raw.css)$/i,
        loader: "raw-loader",
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './public/favicon.png', to: 'favicon.png' },
        { from: './public/favicon-2.png', to: 'favicon-2.png' }
      ]
    })
  ],
  resolve: {
    extensions: [ '.ts', '.js', '.tsx', '.jsx'],
  },
};
