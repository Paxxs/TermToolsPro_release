// @vitest-environment jsdom

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Button } from "./button"

describe("Button", () => {
  it("renders a button by default", () => {
    render(<Button>Save</Button>)

    expect(screen.getByRole("button", { name: "Save" })).toBeTruthy()
  })

  it("renders its child when asChild is set", () => {
    render(
      <Button asChild>
        <a href="/docs">Docs</a>
      </Button>
    )

    expect(screen.getByRole("link", { name: "Docs" }).getAttribute("href")).toBe(
      "/docs"
    )
  })
})
