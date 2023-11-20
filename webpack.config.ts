import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = 'production' | 'development';

type EnvType = {
  mode: Mode,
  port: number
}

 export default (env: EnvType) => {
   const isDev = env.mode === 'development' ? true : false;
   const config: webpack.Configuration = {
     // динамический режим сборки
     mode: env.mode ?? "development",
     // точка входа
     entry: path.resolve(__dirname, "src", "index.ts"),
     // карта исходного кода, чтобы мы знали где у нас ошибка в коде
     devtool: isDev && "inline-source-map",
     // куда и как будет происходить сборка
     output: {
       path: path.resolve(__dirname, "build"),
       // динамическое название выходного файла, которое меняется когда меняется код
       filename: "[name].[contenthash].js",
       clean: true,
     },
     // свойство template нужно чтобы в папке build в index.html содержалось все тоже самое что и в public, иначе будет дефолтный index.html
     plugins: [
       new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "public", "index.html"),
       }),
       isDev && new webpack.ProgressPlugin() ,
     ].filter(Boolean),
     module: {
       rules: [
         {
           // через регулярку указываем какие расширения мы обрабатываем
           test: /\.tsx?$/,
           use: "ts-loader",
           // указываем что не обрабатываем
           exclude: /node_modules/,
         },
       ],
     },
     resolve: {
       // указывается список расширений которые мы можем использовать в наших файлах
       extensions: [".tsx", ".ts", ".js"],
     },
     devServer: isDev
       ? {
           port: env.port ?? 3000,
           open: true,
         } : undefined
       
   };

   return config;
 };
