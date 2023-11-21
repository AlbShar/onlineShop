import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { OptionsWebpack } from "../../types/webpack/types";

export const getLoaders = (optionsWebpack: OptionsWebpack) => {
  const {mode} = optionsWebpack;
  const isDev = mode === 'development' ;


  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        auto: true,
        localIdentName: isDev ? '[local]' : "[hash:base64:5]",
      },
    },
  }
    return [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings, в dev режиме 
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
         {
           // через регулярку указываем какие расширения мы обрабатываем
           test: /\.tsx?$/,
           // ts-loader умеет работать с JSX поэтому babel-loader не нужен
           use: "ts-loader",
           // указываем что не обрабатываем
           exclude: /node_modules/,
         },
         
       ]
}