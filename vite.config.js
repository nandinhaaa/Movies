import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Inclua o plugin react() apenas uma vez
  base: "/Movies",
});

