import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'entry.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  name: 'Example',
  plugins: [
    resolve(),
    commonjs()
  ]
};