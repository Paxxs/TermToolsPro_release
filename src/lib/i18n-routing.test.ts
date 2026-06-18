import { describe, expect, it } from "vitest"

import {
  getLanguageFromPathname,
  getLocalizedRoute,
  localizePathname,
  stripLanguagePrefix,
} from "./i18n-routing"

describe("i18n routing", () => {
  it("uses English as the default unprefixed language", () => {
    expect(getLanguageFromPathname("/")).toBe("en")
    expect(getLanguageFromPathname("/download")).toBe("en")
    expect(getLanguageFromPathname("/legal/privacy")).toBe("en")
  })

  it("detects Chinese from the zh route prefix", () => {
    expect(getLanguageFromPathname("/zh")).toBe("zh")
    expect(getLanguageFromPathname("/zh/download")).toBe("zh")
    expect(getLanguageFromPathname("/zh/legal/privacy")).toBe("zh")
  })

  it("maps localized paths back to canonical routes", () => {
    expect(stripLanguagePrefix("/zh")).toBe("/")
    expect(stripLanguagePrefix("/zh/download")).toBe("/download")
    expect(stripLanguagePrefix("/zh/legal/privacy/")).toBe("/legal/privacy")
  })

  it("localizes the current route without changing pages", () => {
    expect(localizePathname("/download", "zh")).toBe("/zh/download")
    expect(localizePathname("/zh/download", "en")).toBe("/download")
    expect(localizePathname("/zh/legal/privacy", "en")).toBe("/legal/privacy")
    expect(localizePathname("/legal/privacy", "zh")).toBe("/zh/legal/privacy")
  })

  it("builds localized navigation links from canonical routes", () => {
    expect(getLocalizedRoute("/", "en")).toBe("/")
    expect(getLocalizedRoute("/", "zh")).toBe("/zh")
    expect(getLocalizedRoute("/about", "en")).toBe("/about")
    expect(getLocalizedRoute("/about", "zh")).toBe("/zh/about")
  })
})
