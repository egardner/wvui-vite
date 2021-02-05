const vue2 = require( 'vite-plugin-vue2' );
const fs = require( 'fs' );
const path = require( 'path' );

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
	build: {
		// See https://vitejs.dev/guide/build.html#library-mode
		lib: {
			entry: path.resolve(__dirname, 'src/entries/wvui.ts'),
			name: 'WVUI'
		},

		minify: true,

		rollupOptions: {
			external: ['vue'],

			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	plugins: [
		vue2.createVuePlugin(),

		// Explicitly emit an index.html file for demo purposes
		// TODO: Re-enable this if we can figure out a way to emit a stand-alone
		// file for the Demo vue application that showcases components in the
		// library
		// {
		// 	name: 'emit-index',
		// 	generateBundle() {
		// 		this.emitFile({
		// 			type: 'asset',
		// 			fileName: 'index.html',
		// 			source: fs.readFileSync(
		// 				path.resolve(__dirname, 'index.dist.html'),
		// 				'utf-8'
		// 			)
		// 		})
		// 	}
        // }
	]
};
