import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, {Configuration} from "webpack";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import type { OptionsWebpack } from "../../types/webpack/types";

export const getPlugins = (optionsWebpack: OptionsWebpack): Configuration['plugins'] => {
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
        (isProd && isAnalyzer) && new BundleAnalyzerPlugin(),
        // этот плагин выносит в отдельный поток проверку типов TS, тем самым уменьшая время сборки webpack
        isDev ? new ForkTsCheckerWebpackPlugin() : undefined,
        isDev && new ReactRefreshWebpackPlugin()
      ].filter(Boolean)
}