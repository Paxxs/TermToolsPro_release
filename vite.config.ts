import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
      },
      pages: [
        { path: "/" },
        { path: "/about" },
        { path: "/download" },
        { path: "/legal/terms" },
        { path: "/legal/privacy" },
        { path: "/legal/license" },
        { path: "/legal/disclaimer" },
      ],
    }),
    viteReact(),
  ],
})

export default config
