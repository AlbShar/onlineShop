import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";

import type { OptionsWebpack } from "../../types/webpack/types";

export const getLoaders = (
  optionsWebpack: OptionsWebpack
): ModuleOptions["rules"] => {
  const { mode} = optionsWebpack;
  const isDev = mode === "development";

  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
    
  };
  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        auto: true,
        localIdentName: isDev ? "[local]" : "[hash:base64:5]",
      },
    },
  };
  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings, в dev режиме
      MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  const tsLoader = {
    // через регулярку указываем какие расширения мы обрабатываем
    test: /\.tsx?$/,
    // ts-loader умеет работать с JSX поэтому babel-loader не нужен
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: isDev ? true : false,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
    generator: {
      outputPath: "js",
    },
    // указываем что не обрабатываем
    exclude: /node_modules/,
  };
  const svgLoader = {
    test: /\.svg$/i,
    use: [{ loader: "@svgr/webpack", options: { icon: true } }],
  };
  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          ["@babel/preset-react",
          
          {
            runtime: "automatic",
          },
        ]
        ],

      },
    },
  };

  return [sassLoader, babelLoader, assetsLoader, svgLoader];
};
