import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      theme: {
        // ...
        colors: {
          darkblue: {
            DEFAULT: "#0E2653",
            50: "#C6D7F5",
            100: "#B5CAF3",
            200: "#92B2ED",
            300: "#6F99E7",
            400: "#4C80E1",
            500: "#2967DB",
            600: "#2056BC",
            700: "#1A4699",
            800: "#143676",
            900: "#0E2653",
          },
        },
      },
    }),
    AutoImport(),
    svgLoader(),
  ],
});
