import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path' // Tambahkan impor path

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: ['.js', '.jsx'], // Pastikan ekstensi JSX bisa dikenali
  },
});
