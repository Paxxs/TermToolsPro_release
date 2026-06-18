// @vitest-environment jsdom

import { act } from "@testing-library/react"
import { hydrateRoot } from "react-dom/client"
import { renderToString } from "react-dom/server"
import type { Root } from "react-dom/client"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { ThemeProvider, useTheme } from "./use-theme"

function createStorage(initialValues: Record<string, string> = {}) {
  const values = new Map(Object.entries(initialValues))

  return {
    get length() {
      return values.size
    },
    clear() {
      values.clear()
    },
    getItem(key: string) {
      return values.get(key) ?? null
    },
    key(index: number) {
      return Array.from(values.keys())[index] ?? null
    },
    removeItem(key: string) {
      values.delete(key)
    },
    setItem(key: string, value: string) {
      values.set(key, value)
    },
  } satisfies Storage
}

function installClientThemeApis(storage: Storage) {
  Object.defineProperty(window, "localStorage", {
    configurable: true,
    value: storage,
  })
  vi.stubGlobal("localStorage", storage)
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: vi.fn((query: string) => ({
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches: false,
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
      removeListener: vi.fn(),
    })),
  })
}

function ThemeIcon() {
  const { theme } = useTheme()
  return (
    <span data-testid="theme-icon">{theme === "light" ? "moon" : "sun"}</span>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ThemeIcon />
    </ThemeProvider>
  )
}

describe("ThemeProvider hydration", () => {
  beforeEach(() => {
    installClientThemeApis(createStorage())
  })

  afterEach(() => {
    document.body.innerHTML = ""
    document.documentElement.className = ""
    document.documentElement.removeAttribute("data-theme")
    document.documentElement.style.colorScheme = ""
    vi.restoreAllMocks()
  })

  it("keeps the first client render consistent with server HTML", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {})
    const clientWindow = window

    vi.stubGlobal("window", undefined)
    const serverHtml = renderToString(<App />)
    vi.stubGlobal("window", clientWindow)
    installClientThemeApis(createStorage({ theme: "dark" }))

    const container = document.createElement("div")
    container.innerHTML = serverHtml
    document.body.append(container)
    let root: Root | undefined

    await act(async () => {
      root = hydrateRoot(container, <App />)
    })

    expect(
      errorSpy.mock.calls.some(([message]) =>
        String(message).includes("Hydration failed")
      )
    ).toBe(false)

    await act(async () => {
      root?.unmount()
    })
  })
})
