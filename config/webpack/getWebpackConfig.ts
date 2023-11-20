import { getDevServer } from "./getDevServer";
import { getPlugins } from "./getPlugins";
import { getLoaders } from "./getLoaders";
import type { OptionsWebpack } from "../../types/webpack/types";


export const getWebpackConfig = (optionsWebpack: OptionsWebpack) => {
    const {env, pathEntryPoint, pathOutputPoint, pathIndexFile} = optionsWebpack;
    const isDev = env.mode === 'development' ;
    const isProd = env.mode === 'production' ;
 
    return {
        // динамический режим сборки
        mode: env.mode ?? "development",
        // точка входа
        entry: pathEntryPoint,
        // карта исходного кода, чтобы мы знали где у нас ошибка в коде
        devtool: isDev && "inline-source-map",
        // куда и как будет происходить сборка
        output: {
          path: pathOutputPoint,
          // динамическое название выходного файла, которое меняется когда меняется код
          filename: "[name].[contenthash].js",
          clean: true,
        },
        // свойство template нужно чтобы в папке build в index.html содержалось все тоже самое что и в public, иначе будет дефолтный index.html
        plugins: getPlugins(isDev, isProd, pathIndexFile),
        module: {
          rules: getLoaders(isDev)
        },
        resolve: {
          // указывается список расширений которые мы можем использовать в наших файлах
          extensions: [".tsx", ".ts", ".js"],
        },
        devServer: isDev
          ? getDevServer(env) : undefined
          
      };
}