const path = require('path');
<<<<<<< HEAD
const webpack = require('webpack');
=======
>>>>>>> 1809ee99125a043a37b94e1577a2a047c2454faa

module.exports = {
  entry: './src/client/index.jsx',
  output: {
<<<<<<< HEAD
    path: path.resolve(__dirname, 'dist'),
=======
    path: path.resolve(__dirname, 'public'),
>>>>>>> 1809ee99125a043a37b94e1577a2a047c2454faa
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
<<<<<<< HEAD
  plugins: [new webpack.optimize.UglifyJsPlugin()],
=======
>>>>>>> 1809ee99125a043a37b94e1577a2a047c2454faa
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
