const path = require("path");
const { icons } = require("react-icons");
const pkg = require("./package.json");

module.exports = {
  mode: "development",
  output: {
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
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
  },
  externals: {
    react: "react",
    "react-icons": "react-icons",
    "prop-types": "prop-types"
  }
};