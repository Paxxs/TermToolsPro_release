import { defineConfig } from "vitest/config"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  test: {
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/worktree-i18n-routes/**",
    ],
  },
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
        { path: "/zh" },
        { path: "/zh/about" },
        { path: "/zh/download" },
        { path: "/zh/legal/terms" },
        { path: "/zh/legal/privacy" },
        { path: "/zh/legal/license" },
        { path: "/zh/legal/disclaimer" },
      ],
    }),
    viteReact(),
  ],
})

export default config
