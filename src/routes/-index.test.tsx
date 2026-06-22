// @vitest-environment jsdom

import { cleanup, render, screen, within } from "@testing-library/react"
import { afterEach, beforeAll, describe, expect, it } from "vitest"

import { HomePage } from "@/components/HomePage"
import i18n from "@/lib/i18n-config"

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe("home page", () => {
  beforeAll(() => {
    globalThis.ResizeObserver = ResizeObserverMock
  })

  afterEach(async () => {
    cleanup()
    await i18n.changeLanguage("en")
  })

  it("routes homepage download calls to the localized download page", async () => {
    render(<HomePage />)

    expect(
      screen
        .getByRole("link", { name: "Download TermTools Pro" })
        .getAttribute("href")
    ).toBeTruthy()
    expect(
      screen
        .getByRole("link", { name: "Download TermTools Pro" })
        .getAttribute("href")
    ).toBe("/download")

    const legacySection = screen.getByRole("region", {
      name: "All three original tools, now in one workflow",
    })

    expect(
      within(legacySection).getByText(
        /TermTools Pro unifies the original TermRecord, ReplayTheTerm, and FakeTerm/
      )
    ).toBeTruthy()

    expect(
      within(legacySection).queryByRole("link", { name: /Download / })
    ).toBeNull()

    expect(screen.queryByRole("link", { name: "Download v1.0.2" })).toBeNull()
  })

  it("keeps homepage download links localized when Chinese is selected", async () => {
    await i18n.changeLanguage("zh")

    render(<HomePage />)

    expect(
      screen
        .getByRole("link", { name: "立即下载 TermTools Pro" })
        .getAttribute("href")
    ).toBeTruthy()
    expect(
      screen
        .getByRole("link", { name: "立即下载 TermTools Pro" })
        .getAttribute("href")
    ).toBe("/zh/download")

    expect(
      screen.getByRole("region", {
        name: "三项原子能力，现在合并成一个工作流",
      })
    ).toBeTruthy()
    expect(screen.queryByRole("link", { name: /下载 TermRecord/ })).toBeNull()
  })

  it("renders the revised product story in English and Chinese", async () => {
    render(<HomePage />)

    expect(
      screen.getByRole("heading", {
        name: "One terminal suite for recording, replay, and privacy protection",
      })
    ).toBeTruthy()
    expect(
      screen.getByText(
        /TermTools Pro brings TermRecord, ReplayTheTerm, and FakeTerm together/
      )
    ).toBeTruthy()

    cleanup()
    await i18n.changeLanguage("zh")
    render(<HomePage />)

    expect(
      screen.getByRole("heading", {
        name: "一个终端套件，兼顾录制、回放与隐私保护",
      })
    ).toBeTruthy()
    expect(
      screen.getByText(
        /TermTools Pro 将原来的 TermRecord、ReplayTheTerm、FakeTerm 整合为一款完整的终端录制平台/
      )
    ).toBeTruthy()
  })
})
