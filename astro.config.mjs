import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://portfolio.truong51972.id.vn",
  base: "/",
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  }
});
