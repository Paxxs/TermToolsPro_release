// @vitest-environment jsdom

import {
  RouterContextProvider,
  createMemoryHistory,
} from "@tanstack/react-router"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, beforeAll, describe, expect, it } from "vitest"

import i18n from "@/lib/i18n-config"
import { getRouter } from "@/router"
import { ThemeProvider } from "@/hooks/use-theme"
import Header from "./Header"

const storage = new Map<string, string>()

beforeAll(() => {
  Object.defineProperty(globalThis, "localStorage", {
    value: {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => storage.set(key, value),
      removeItem: (key: string) => storage.delete(key),
      clear: () => storage.clear(),
    },
    configurable: true,
  })

  Object.defineProperty(window, "matchMedia", {
    value: () => ({
      matches: false,
      addEventListener: () => {},
      removeEventListener: () => {},
    }),
    configurable: true,
  })
})

async function renderHeaderAt(pathname: string) {
  const router = getRouter()
  router.update({
    ...router.options,
    history: createMemoryHistory({ initialEntries: [pathname] }),
  })
  await router.load()

  render(
    <RouterContextProvider router={router}>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </RouterContextProvider>
  )
}

describe("Header language routing", () => {
  afterEach(async () => {
    cleanup()
    await i18n.changeLanguage("en")
  })

  it("keeps Chinese navigation on Chinese routes", async () => {
    await renderHeaderAt("/zh/download")

    const featuresLink = screen.getByRole("link", { name: "功能特性" })
    const downloadLink = screen.getByRole("link", { name: "下载" })

    expect(featuresLink.getAttribute("href")).toBe("/zh")
    expect(featuresLink.className).not.toContain("is-active")
    expect(downloadLink.getAttribute("href")).toBe("/zh/download")
    expect(downloadLink.className).toContain("is-active")
    expect(screen.getByRole("link", { name: "关于" }).getAttribute("href")).toBe(
      "/zh/about"
    )
  })

  it("switches language links on the current page instead of the homepage", async () => {
    await renderHeaderAt("/zh/download")

    fireEvent.click(screen.getByRole("button", { name: "Switch language" }))

    expect(
      screen.getByRole("menuitem", { name: "English" }).getAttribute("href")
    ).toBe("/download")
    expect(
      screen.getByRole("menuitem", { name: "中文" }).getAttribute("href")
    ).toBe("/zh/download")
  })

  it("keeps English as the unprefixed canonical route set", async () => {
    await renderHeaderAt("/download")

    expect(screen.getByRole("link", { name: "Features" }).getAttribute("href"))
      .toBe("/")
    expect(
      screen.getByRole("link", { name: "Download" }).getAttribute("href")
    ).toBe("/download")
    expect(screen.getByRole("link", { name: "About" }).getAttribute("href")).toBe(
      "/about"
    )
  })
})
