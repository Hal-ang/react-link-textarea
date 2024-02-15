2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
43;
44;
45;
46;

import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts', // 진입점?
    output: [
      {
        file: packageJson.main, // commonjs 형태로 번들링
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module, // ES모듈 형태로 번들링
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(), // peerDependencises에 사용된 라이브러리를 번들에서 제외합니다.
      resolve(), // 외부 노드 모듈을 사용할 수 있게 해줍니다.
      commonjs(), // commonjs 형태 모듈도 해석할 수 있게 해줍니다.
      typescript({tsconfig: './tsconfig.json'}), // 타입스크립트를 사용할 수 있게 해줍니다.
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{file: 'dist/index.d.ts', format: 'esm'}],
    plugins: [
      dts.default(), // 타입스크립트 타입 정의를 번들링 해줍니다.
    ],
  },
];
