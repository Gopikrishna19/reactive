const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index",
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: ['ts-loader']
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html'
    }),
  ]
};
