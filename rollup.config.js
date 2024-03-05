// rollup.config.js

import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";
import cssimport from "postcss-import";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "./dist/esm/bundle.js",
        format: "es",
        sourcemap: true
      },
      {
        file: "./dist/bundle.js",
        format: "cjs",
        sourcemap: true
      }
    ],
    plugins: [
      // 바벨 트랜스파일러 설정
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-env", "@babel/preset-react"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }),
      postcss({
        plugins: [cssimport(), autoprefixer()]
      }),
      typescript(),
      peerDepsExternal()
    ]
  },
  {
    // path to your declaration files root
    input: "./dist/dts/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    external: [/\.css$/, "**/stories/**", "**/stories.ts"],
    plugins: [dts()]
  }
];
