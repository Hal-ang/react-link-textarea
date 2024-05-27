import autoprefixer from "autoprefixer";
import babel from "@rollup/plugin-babel";
import cssimport from "postcss-import";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import preserveDirectives from "rollup-preserve-directives";
import { swc } from "rollup-plugin-swc3";
import typescript from "@rollup/plugin-typescript";
import { visualizer } from "rollup-plugin-visualizer";

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
      visualizer(),
      swc(),
      preserveDirectives(),
      postcss({
        plugins: [cssimport(), autoprefixer()]
      }),
      typescript(),
      peerDepsExternal()
    ],
    exclude: ["**/storybook/**", "**/stories/**", "**/stories/*.d.ts"]
  },
  {
    // path to your declaration files root
    input: "./dist/dts/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    external: [/\.css$/],
    plugins: [dts()]
  }
];
