import type { EnvType } from "../../types/webpack/types";

export const getDevServer = (env: EnvType) => {
    return {
        port: env.port ?? 3000,
        open: true,
      }
}