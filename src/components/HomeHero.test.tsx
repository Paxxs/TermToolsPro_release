// @vitest-environment jsdom

import { render, screen } from "@testing-library/react"
import { beforeAll, describe, expect, it } from "vitest"

import { HomeHero } from "./HomeHero"

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe("HomeHero", () => {
  beforeAll(() => {
    globalThis.ResizeObserver = ResizeObserverMock
  })

  it("renders the hero content and decorative background video", () => {
    render(<HomeHero />)

    expect(screen.getByRole("heading", { name: "TermTools Pro" })).toBeTruthy()
    expect(screen.getByRole("button", { name: "Get Started" })).toBeTruthy()
    expect(screen.getByRole("button", { name: "Learn More" })).toBeTruthy()

    const video = document.querySelector("video")
    expect(video).toBeTruthy()
    expect(video instanceof HTMLVideoElement ? video.autoplay : false).toBe(
      true
    )
    expect(video instanceof HTMLVideoElement ? video.loop : false).toBe(true)
    expect(video instanceof HTMLVideoElement ? video.muted : false).toBe(true)
    expect(video?.getAttribute("src")).toContain("videos.pexels.com")
    expect(screen.getByText("Built for terminal work")).toBeTruthy()
  })

  it("renders hero calls to action as links when hrefs are provided", () => {
    render(
      <HomeHero
        getStartedHref="https://example.com/download"
        learnMoreHref="#features"
      />
    )

    expect(
      screen.getByRole("link", { name: "Get Started" }).getAttribute("href")
    ).toBe("https://example.com/download")
    expect(
      screen.getByRole("link", { name: "Learn More" }).getAttribute("href")
    ).toBe("#features")
  })
})
