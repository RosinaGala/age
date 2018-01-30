const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: "age.",
      template: "./template/index-template.html"
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: ["bundle.js"]
    })
  ]
};
