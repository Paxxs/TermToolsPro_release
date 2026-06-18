// @vitest-environment jsdom

import { render, screen, within } from "@testing-library/react"
import { beforeAll, describe, expect, it } from "vitest"

import "@/lib/i18n-config"
import { HomePage } from "@/components/HomePage"

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

  it("keeps the original TermTools Pro product story and legacy tool content", async () => {
    render(<HomePage />)

    expect(
      await screen.findByText(/TermRecord, ReplayTheTerm, and FakeTerm/)
    ).toBeTruthy()
    expect(
      screen.getByText(/recording, playback, and replacement/)
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
})
