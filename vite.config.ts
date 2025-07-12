import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/cast-my-char/', // nome do repositório com barra no fim
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
