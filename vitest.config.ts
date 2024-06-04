import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/testSetup.ts',
	},

	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
});
