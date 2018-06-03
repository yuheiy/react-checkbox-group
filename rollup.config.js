import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

export default [
  {
    input: 'src/react-checkbox-group.tsx',
    output: {
      format: 'umd',
      file: pkg.browser,
      name: 'ReactCheckboxGroup',
      globals: ['react', 'prop-types'],
    },
    plugins: [babel({ exclude: 'node_modules/**' }), resolve(), commonjs()],
    external: ['react', 'prop-types'],
  },
  {
    input: 'src/react-checkbox-group.tsx',
    output: [
      {
        format: 'cjs',
        file: pkg.main,
      },
      {
        format: 'es',
        file: pkg.module,
      },
    ],
    plugins: [babel({ exclude: 'node_modules/**' })],
    external: ['react', 'prop-types'],
  },
]
