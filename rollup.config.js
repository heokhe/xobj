import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

const input = 'lib/index.js'
const packageName = 'x_'

const babelPlugin = babel({ exclude: ['node_modules/**'] })

export default [
	{
		input,
		output: {
			name: packageName,
			file: pkg.browser,
			format: 'iife'
		},
		plugins: [
			resolve(),
			commonjs(),
			babelPlugin,
		]
	},
	{
		input,
		output: {
			name: packageName,
			file: pkg.browser.replace(/\.js$/, '.min.js'),
			format: 'iife'
		},
		plugins: [
			resolve(),
			commonjs(),
			babelPlugin,
			uglify()
		]
	},
	{
		input,
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			resolve(),
			commonjs(),
			babelPlugin
		]
	}
];
