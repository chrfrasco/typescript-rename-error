import CleanWebpackPlugin from "clean-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: __dirname + "/dist"
  },
  plugins: [
    new CleanWebpackPlugin("dist"),
    new HTMLWebpackPlugin({
      template: "public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
      }
    ]
  }
};
