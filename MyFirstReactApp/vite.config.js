import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Must be imported

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // <-- Must be included here!
  ],
  base: './',
})
