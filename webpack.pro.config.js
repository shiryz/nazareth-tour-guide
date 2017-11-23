const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.png$/,
        loaders: ['file-loader']
      }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
