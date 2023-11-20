import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const getLoaders = (isDev: boolean) => {
    return [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
         {
           // через регулярку указываем какие расширения мы обрабатываем
           test: /\.tsx?$/,
           // ts-loader умеет работать с JSX поэтому babel-loader не нужен
           use: "ts-loader",
           // указываем что не обрабатываем
           exclude: /node_modules/,
         },
         
       ]
}