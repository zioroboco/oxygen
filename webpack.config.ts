import * as HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration } from "webpack"
import { name as title } from "./package.json"

const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin")

const config: Configuration = {
  mode: "development",
  entry: "./frontend",
  resolve: {
    alias: { "react-dom": "@hot-loader/react-dom" },
    extensions: [".ts", ".tsx", ".js", ".json", ".wasm"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: ["react-hot-loader/babel"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title }),
    new WasmPackPlugin({ crateDirectory: __dirname }),
  ],
}

export default config
