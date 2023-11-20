import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export const getPlugins = (isDev: boolean, isProd: boolean, pathIndexFile: string) => {
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