import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Correct Vite Config
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias for easy imports
    },
  },
  root: ".", // Root folder
  build: {
    outDir: "dist", // Build output folder
    emptyOutDir: true,
  },
  server: {
    port: 5173, // Default Vite Port
  },
});
