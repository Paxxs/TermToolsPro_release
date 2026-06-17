import { defineConfig } from "@tanstack/react-start/config"
import tailwindcss from "@tailwindcss/vite"
import { devtools } from "@tanstack/devtools-vite"

export default defineConfig({
  vite: {
    plugins: [devtools(), tailwindcss()],
  },
  react: {},
  routers: {
    ssr: {
      prerender: {
        routes: [
          "/",
          "/about",
          "/download",
          "/legal/terms",
          "/legal/privacy",
          "/legal/license",
          "/legal/disclaimer",
        ],
      },
    },
  },
})
