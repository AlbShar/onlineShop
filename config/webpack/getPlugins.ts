import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import type { OptionsWebpack } from "../../types/webpack/types";


export const getPlugins = (optionsWebpack: OptionsWebpack) => {
  const {mode, port, pathIndexFile} = optionsWebpack;
  let isDev = mode === 'development' ;


    return [
        new HtmlWebpackPlugin({
          template: pathIndexFile,
        }),
        new MiniCssExtractPlugin({
         filename: 'styles/styles[contenthash].css'
        }),
        isDev && new webpack.ProgressPlugin() ,
      ].filter(Boolean)
}