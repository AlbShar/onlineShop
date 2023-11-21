import type { EnvType } from "../../types/webpack/types";

export const getDevServer = (port: EnvType['port']) => {
    return {
        port: port,
        open: true,
      }
}