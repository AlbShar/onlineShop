import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import type { OptionsWebpack } from "../../types/webpack/types";

export const getPlugins = (optionsWebpack: OptionsWebpack) => {
  const {mode, isAnalyzer, pathIndexFile} = optionsWebpack;
  let isDev = mode === 'development' ;
  let isProd = mode === 'production' ;


    return [
        new HtmlWebpackPlugin({
          template: pathIndexFile,
        }),
        new MiniCssExtractPlugin({
         filename: 'styles/styles[contenthash].css'
        }),
        isDev && new webpack.ProgressPlugin() ,
        (isProd && isAnalyzer) && new BundleAnalyzerPlugin()
      ].filter(Boolean)
}