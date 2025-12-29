import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "khajuraho.staffhandler.com/webhooks/",
  plugins: [react(), tailwindcss()],
});
