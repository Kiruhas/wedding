import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
	plugins: [react(), tailwindcss()],
	css: {
		modules: {
			generateScopedName: mode === 'development' ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:6]'
		}
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
}))
