import path from "path";
import webpack from "webpack";
import { getWebpackConfig } from "./config/webpack/getWebpackConfig";
import { EnvType } from "./types/webpack/types";

export default (env: EnvType) => {
  const pathEntryPoint = path.resolve(__dirname, "src", "index.tsx");
  const pathOutputPoint = path.resolve(__dirname, "build");
  const pathIndexFile = path.resolve(__dirname, "public", "index.html");
  const optionsWebpack = {pathEntryPoint, env, pathOutputPoint, pathIndexFile};
  const config: webpack.Configuration = getWebpackConfig(optionsWebpack);

  return config;
};
