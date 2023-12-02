import { getDevServer } from "./getDevServer";
import { getPlugins } from "./getPlugins";
import { getLoaders } from "./getLoaders";
import type { OptionsWebpack } from "../../types/webpack/types";


export const getWebpackConfig = (optionsWebpack: OptionsWebpack) => {
    const {mode, port, pathEntryPoint, pathOutputPoint, srcPath} = optionsWebpack;
    let isDev = mode === 'development' ;
 
    return {
        // динамический режим сборки
        mode: mode,
        // точка входа
        entry: pathEntryPoint,
        // карта исходного кода, чтобы мы знали где у нас ошибка в коде
        devtool: isDev && "inline-source-map",
        // куда и как будет происходить сборка
        output: {
          path: pathOutputPoint,
          // динамическое название выходного файла, которое меняется когда меняется код
          filename: "js/[name].[contenthash].js",
          assetModuleFilename: 'assets/[hash].[ext]',
          clean: true,
        },
        // свойство template нужно чтобы в папке build в index.html содержалось все тоже самое что и в public, иначе будет дефолтный index.html
        plugins: getPlugins(optionsWebpack),
        module: {
          rules: getLoaders(optionsWebpack)
        },
        resolve: {
          // указывается список расширений которые мы можем использовать в наших файлах
          extensions: [".tsx", ".ts", ".js"],
          alias: {
            "~": srcPath,
          },
        },
        devServer: isDev
          ? getDevServer(optionsWebpack) : undefined
          
      };
}