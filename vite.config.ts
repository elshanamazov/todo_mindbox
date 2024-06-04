import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/todo_mindbox/',
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
});
