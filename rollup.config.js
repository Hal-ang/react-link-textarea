// rollup.config.js

import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-import-css';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    // 바벨 트랜스파일러 설정
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    typescript(),
    css(),
  ],
};
