import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://truong51972.github.io",
  base: "/about-me",
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  }
});
