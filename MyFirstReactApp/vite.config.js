import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ADD THIS LINE: It must be exactly your GitHub repo name surrounded by slashes
  base: "./", 
})
