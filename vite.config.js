import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/la-voix-intime-one-to-one/',
  plugins: [react(), tailwindcss()],
})
