type Mode = "production" | "development";


export type EnvType = {
  mode: Mode;
  port: number;
};

export type OptionsWebpack = {
  pathEntryPoint: string;
  mode: EnvType['mode']; 
  port: number;
  pathOutputPoint: string;
  pathIndexFile: string;
};

