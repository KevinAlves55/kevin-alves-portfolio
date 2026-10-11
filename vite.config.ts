import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const repositoryBase = '/kevin-alves-portfolio/'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? repositoryBase : '/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
}))
