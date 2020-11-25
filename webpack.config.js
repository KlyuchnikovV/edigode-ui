const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: Structure to separated file

module.exports = {
  entry: './public/index.tsx',
  module: {
    rules: [
      {
        test: /\.js$|jsx|.ts$|.tsx/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './build')
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
        title: "Edigode",
        template: './public/index.html',
        filename: './index.html'
    })
  ]
};
