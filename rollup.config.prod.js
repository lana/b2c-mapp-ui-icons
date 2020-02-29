import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
const babelConfig = require('./babelConfig')

export default {
	input: 'src/index.jsx',
	output: {
		file: 'dist/index.js',
		format: 'cjs',
		name: 'b2cMappUIAssets',
		sourcemap: true,
	},
	external: [],
	plugins: [
		cjs({
			include: /node_modules/,
		}),
		globals(),
		resolve({
			extensions: ['.jsx', '.js'],
			modules: true,
			mainFields: ['module', 'browser', 'main'],
			preferBuiltins: true,
			browser: false,
		}),
		postcss({
			extract: true,
			plugins: [autoprefixer()],
			modules: true,
		}),
		babel({
			...babelConfig,
		}),
	],
}
