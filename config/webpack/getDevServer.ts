import type { EnvType } from "../../types/webpack/types";

export const getDevServer = (port: EnvType['port']) => {
    return {
        port: port,
        open: true,
        // работает только в dev режиме, если раздавать статику через nginx то надо делать проксирование на index.html
        historyApiFallback: true,
      }
}