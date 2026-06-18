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

const requiredFeatureTitles = [
  "Terminal tutorial recording",
  "Recording playback",
  "Live text replacement",
  "Server operation recording",
  "Readable YAML config",
  "Shareable JSON recordings",
  "Automatic replay compression",
  "Single binary file",
]

describe("home page", () => {
  beforeAll(() => {
    globalThis.ResizeObserver = ResizeObserverMock
  })

  afterEach(async () => {
    cleanup()
    await i18n.changeLanguage("en")
  })

  it("keeps the original TermTools Pro product story and legacy tool content", async () => {
    render(<HomePage />)

    expect(
      (await screen.findAllByText(/TermRecord, ReplayTheTerm, and FakeTerm/))
        .length
    ).toBeTruthy()
    expect(
      screen.getAllByText(/recording, playback, and replacement/).length
    ).toBeTruthy()
    expect(
      screen.getByRole("heading", { name: "Core capabilities at a glance" })
    ).toBeTruthy()

    for (const title of requiredFeatureTitles) {
      expect(screen.getByRole("heading", { name: title })).toBeTruthy()
    }

    const legacySection = screen.getByRole("region", {
      name: "Still want the single-purpose versions?",
    })

    expect(
      within(legacySection).getByText(/We still keep them available/)
    ).toBeTruthy()

    for (const tool of ["TermRecord", "ReplayTheTerm", "FakeTerm"]) {
      expect(
        within(legacySection).getByRole("heading", { name: tool })
      ).toBeTruthy()
    }

    expect(
      within(legacySection).getByText(/records every SSH session/i)
    ).toBeTruthy()
    expect(
      within(legacySection).getByText(
        /best way to demonstrate a command-line terminal/i
      )
    ).toBeTruthy()
    expect(
      within(legacySection).getByText(/hide confidential information/i)
    ).toBeTruthy()
  })

  it("renders the legacy Chinese product copy when Chinese is selected", async () => {
    await i18n.changeLanguage("zh")

    render(<HomePage />)

    expect(
      screen.getAllByText(/TermRecord、ReplayTheTerm、FakeTerm/).length
    ).toBeTruthy()
    expect(screen.getAllByText(/录制、回放、替换/).length).toBeTruthy()
    expect(
      screen.getByRole("heading", { name: "各个特性，一眼秒懂" })
    ).toBeTruthy()
    expect(
      screen.getByRole("heading", { name: "仍然想用单功能版本？" })
    ).toBeTruthy()
    expect(screen.getByText(/SuperPaxxs/)).toBeTruthy()
    expect(screen.getByRole("link", { name: "MorFans Dev" })).toBeTruthy()
  })
})
