/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

import * as fs from 'fs';

const createSetting = (name) => ({
  input: `dist/${name}.js`,
  output: {
    file: `docs/${name}.bundled.js`,
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({'Reflect.decorate': 'undefined'}),
    resolve(),
    terser({
      ecma: 2017,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
});

const DIST_DIR = 'dist';
const FILES = fs.readdirSync(DIST_DIR);
const JS_FILENAMES = FILES.map((file) => file.split('.'))
  .filter(([_, ex]) => ex === 'js')
  .map(([name]) => name);

export default JS_FILENAMES.map(createSetting);
