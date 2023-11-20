type Mode = "production" | "development";
type Paths = {
  pathEntryPoint: string;
  pathOutputPoint: string;
  pathIndexFile: string;
};

export type EnvType = {
  mode: Mode;
  port: number;
};

export type OptionsWebpack = {
  env: EnvType;
} & Paths;
