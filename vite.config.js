import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" permite publicar en GitHub Pages o en un dominio propio sin cambiar nada.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
