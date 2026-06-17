// @vitest-environment jsdom

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { HeroVideoBackdrop } from "./HeroVideoBackdrop"

describe("HeroVideoBackdrop", () => {
  it("renders a decorative autoplaying loop video background", () => {
    render(<HeroVideoBackdrop />)

    const video = screen.getByTestId("hero-video-backdrop")

    expect(video.getAttribute("aria-hidden")).toBe("true")
    expect(video).toHaveProperty("autoplay", true)
    expect(video).toHaveProperty("loop", true)
    expect(video).toHaveProperty("muted", true)
    expect(video).toHaveProperty("playsInline", true)
    expect(video.getAttribute("src")).toContain("videos.pexels.com")
  })
})
