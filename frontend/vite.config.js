import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  assetsInclude: ["**/*.heic"],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('leaflet') || id.includes('react-leaflet')) return 'leaflet'
          if (id.includes('react-icons')) return 'icons'
          if (
            id.includes('react-dom') ||
            id.includes('react-router') ||
            id.includes(`${path.sep}react${path.sep}`) ||
            id.includes('/react/')
          ) {
            return 'react-vendor'
          }
        },
      },
    },
  },
})

