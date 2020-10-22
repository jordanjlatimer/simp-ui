const path = require('path');
const pkg = require('./package.json');

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", 
          "css-loader",
          "resolve-url-loader",
          "sass-loader"
        ]
      }
    ]
  },
  optimization: {
    minimize: true
  }
};