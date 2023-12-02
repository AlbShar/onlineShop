import path from "path";
import webpack from "webpack";
import { getWebpackConfig } from "./config/webpack/getWebpackConfig";
import { EnvType } from "./types/webpack/types";

export default (env: EnvType) => {
  const pathEntryPoint = path.resolve(__dirname,  "src", "index.tsx");
  const pathOutputPoint = path.resolve(__dirname,  "build");
  const pathIndexFile = path.resolve(__dirname, "public", "index.html");
  const srcPath = path.resolve(__dirname, 'src');
  const publicPath = path.resolve(__dirname, "public");
  console.log('srcPath', srcPath)
  const optionsWebpack = {
    pathEntryPoint,
    mode: env.mode ?? 'development',
    port: env.port ?? 5000,
    pathOutputPoint,
    pathIndexFile,
    isAnalyzer: env.isAnalyzer,
    srcPath,
    publicPath
  };
  const config: webpack.Configuration = getWebpackConfig(optionsWebpack);

  return config;
};
