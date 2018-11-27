const path = require('path')
const webpack = require('webpack')
const serverHost = "localhost"
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg|proto)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'IC-SDK',
      template: path.join(__dirname, '/src/index.ejs'),
      filename:"./index.html",
      inject: 'body',
      hash: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '/protos'),
        to: path.join(__dirname, './dist/protos'),
        ignore: ['.*']
      }
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: serverHost,
    port: 9090,
    inline: true,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.ejs']
  }
}
