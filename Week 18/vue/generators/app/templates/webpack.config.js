const webpack = require("webpack"); //to access built-in plugins
const CopyPlugin = require("copy-webpack-plugin"); //installed via npm
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      { test: /\.css$/, use: ["vue-style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [{ from: "src/*.html", to: "[name].[ext]" }],
    }),
  ],
};
