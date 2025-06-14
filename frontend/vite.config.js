import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.__NEXT_ROUTER_BASEPATH': JSON.stringify(process.env.__NEXT_ROUTER_BASEPATH || "")
  },
  server: {
    allowedHosts: [],
  },
})
