import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, {Configuration} from "webpack";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

import type { OptionsWebpack } from "../../../../types/types";
import path from "path";

export const getPlugins = (optionsWebpack: OptionsWebpack): Configuration['plugins'] => {
  const {mode, isAnalyzer, pathIndexFile, publicPath, srcPath, pathOutputPoint} = optionsWebpack;
  let isDev = mode === 'development' ;
  let isProd = mode === 'production' ;


    return [
        new HtmlWebpackPlugin({
          template: pathIndexFile,
          favicon: path.resolve(publicPath, "favicon.ico")
        }),
        new MiniCssExtractPlugin({
         filename: 'styles/styles[contenthash].css'
        }),
        isDev && new webpack.ProgressPlugin() ,
        (isProd && isAnalyzer) && new BundleAnalyzerPlugin(),
        // этот плагин выносит в отдельный поток проверку типов TS, тем самым уменьшая время сборки webpack
        isDev ? new ForkTsCheckerWebpackPlugin() : undefined,
        // этот плагин позволяет не перезагружать страницу при изменении кода
        isDev && new ReactRefreshWebpackPlugin(),
        isProd && new CopyPlugin({
          patterns: [
            { from: path.resolve(srcPath, "assets", "locales"), to: path.resolve(pathOutputPoint, 'assets', 'locales') },
          ],
        }),
      ].filter(Boolean)
}