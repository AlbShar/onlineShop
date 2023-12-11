import path from "path";
import webpack from "webpack";
import { getWebpackConfig } from "./src/shared/config/webpack";
import { EnvType } from "./types/types";

export default (env: EnvType) => {
  const pathEntryPoint = path.resolve(__dirname,  "src", "index.tsx");
  const srcPath = path.resolve(__dirname, 'src');
  const pathOutputPoint = path.resolve(__dirname,  "build");
  const pathIndexFile = path.resolve(__dirname, "public", "index.html");
  const publicPath = path.resolve(__dirname, "public");
  const optionsWebpack = {
    pathEntryPoint,
    mode: env.mode ?? "development",
    port: env.port ?? 8080,
    pathOutputPoint,
    pathIndexFile,
    isAnalyzer: env.isAnalyzer,
    srcPath,
    publicPath,
  };
  const config: webpack.Configuration = getWebpackConfig(optionsWebpack);

  return config;
};
