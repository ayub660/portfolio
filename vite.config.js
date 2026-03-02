import { defineConfig } from 'vite' // এই লাইনটি মিসিং ছিল
import react from '@vitejs/plugin-react'
import path from "path"
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    strictPort: false, // পোর্ট বিজি থাকলে অটো অন্য পোর্টে রান করবে
  }
})