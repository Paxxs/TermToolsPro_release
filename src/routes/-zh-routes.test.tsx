// @vitest-environment jsdom

import { RouterProvider, createMemoryHistory } from "@tanstack/react-router"
import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest"

import i18n from "@/lib/i18n-config"
import { getRouter } from "@/router"

vi.mock("@tanstack/react-devtools", () => ({
  TanStackDevtools: () => null,
}))

vi.mock("@tanstack/react-router-devtools", () => ({
  TanStackRouterDevtoolsPanel: () => null,
}))

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  globalThis.ResizeObserver = ResizeObserverMock

  Object.defineProperty(globalThis, "localStorage", {
    value: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
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

async function renderRoute(pathname: string) {
  const router = getRouter()
  router.update({
    ...router.options,
    history: createMemoryHistory({ initialEntries: [pathname] }),
  })
  await router.load()

  render(<RouterProvider router={router} />)
}

describe("Chinese localized routes", () => {
  afterEach(async () => {
    cleanup()
    await i18n.changeLanguage("en")
  })

  it("renders the Chinese index page at /zh", async () => {
    await renderRoute("/zh")

    expect(
      await screen.findByRole("heading", {
        name: "一个终端套件，兼顾录制、回放与隐私保护",
      })
    ).toBeTruthy()
  })

  it("renders the download page at /zh/download", async () => {
    await renderRoute("/zh/download")

    expect(
      await screen.findByRole("heading", {
        name: "下载 TermTools Pro v1.0.2",
      })
    ).toBeTruthy()
    expect(
      screen
        .getByRole("link", {
          name: "下载 v1.0.2",
        })
        .getAttribute("href")
    ).toBe("https://github.com/Paxxs/TermToolsPro_release/releases/tag/v1.0.2")
    expect(screen.queryByRole("heading", { name: "安装说明" })).toBeNull()
    expect(screen.queryByRole("heading", { name: "Linux" })).toBeNull()
    expect(screen.queryByRole("heading", { name: "macOS" })).toBeNull()
    expect(
      screen.queryByRole("heading", { name: "各个特性，一眼秒懂" })
    ).toBeNull()
  })

  it("renders the about page at /zh/about", async () => {
    await renderRoute("/zh/about")

    expect(
      await screen.findByRole("heading", { name: "关于 TermTools" })
    ).toBeTruthy()
    expect(screen.getByText("我们的愿景")).toBeTruthy()
    expect(
      screen.queryByRole("heading", {
        name: "一个终端套件，兼顾录制、回放与隐私保护",
      })
    ).toBeNull()
  })

  it("renders nested legal pages under /zh/legal", async () => {
    await renderRoute("/zh/legal/privacy")

    expect(
      await screen.findByRole("heading", { name: "隐私政策" })
    ).toBeTruthy()
    expect(screen.getByText("Last updated: June 17, 2026")).toBeTruthy()
    expect(
      screen.queryByRole("heading", {
        name: "一个终端套件，兼顾录制、回放与隐私保护",
      })
    ).toBeNull()
  })
})
