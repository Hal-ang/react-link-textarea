import autoprefixer from "autoprefixer";
import cssimport from "postcss-import";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import swc from "@rollup/plugin-swc";
import terser from "@rollup/plugin-terser";
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
      swc({
        include: ["**/*.ts", "**/*.tsx"],
        exclude: ["**/node_modules/**", /\.css$/]
      }),
      typescript(),
      postcss({
        plugins: [cssimport(), autoprefixer()]
      }),
      peerDepsExternal(),
      terser(),
      visualizer()
    ],
    exclude: ["**/.storybook/**", "**/stories/**", "**/stories/*.d.ts"]
  },
  {
    // path to your declaration files root
    input: "./dist/dts/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    external: [/\.css$/],
    plugins: [dts()]
  }
];
