import path from "path";
import type { OptionsWebpack } from "../../../../types/types";

export const getDevServer = (optionsWebpack: OptionsWebpack) => {
  const {port, pathOutputPoint} = optionsWebpack;
    return {
        port: port,
        open: true,
        // работает только в dev режиме, если раздавать статику через nginx то надо делать проксирование на index.html
        historyApiFallback: true,
        // данное свойство активирует hmr, при обновлении когда страница не перезагружается
        hot: true,
      }
}