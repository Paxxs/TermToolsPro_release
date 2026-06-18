import { existsSync, readFileSync } from "node:fs"
import { resolve } from "node:path"

import { describe, expect, it } from "vitest"

import { OG_IMAGE_PATH, SITE_URL, getSitemapEntries } from "./seo"

describe("static SEO files", () => {
  it("publishes a sitemap with every localized SEO URL", () => {
    const sitemap = readPublicFile("sitemap.xml")
    const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
      ([, loc]) => loc
    )

    expect(locs).toEqual(getSitemapEntries().map((entry) => entry.loc))

    for (const entry of getSitemapEntries()) {
      expect(sitemap).toContain(`<loc>${entry.loc}</loc>`)
      expect(sitemap).toContain(`<changefreq>${entry.changefreq}</changefreq>`)
      expect(sitemap).toContain(`<priority>${entry.priority}</priority>`)
    }
  })

  it("allows crawling and advertises the production sitemap", () => {
    expect(readPublicFile("robots.txt").trim()).toBe(`User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`)
  })

  it("uses TermTools manifest branding and only references existing icons", () => {
    const manifest = JSON.parse(readPublicFile("manifest.json")) as {
      short_name: string
      name: string
      start_url: string
      theme_color: string
      background_color: string
      icons: Array<{ src: string }>
    }

    expect(manifest.short_name).toBe("TermTools")
    expect(manifest.name).toBe("TermTools Pro")
    expect(manifest.start_url).toBe("/")
    expect(manifest.theme_color).toBe("#0f172a")
    expect(manifest.background_color).toBe("#ffffff")

    for (const icon of manifest.icons) {
      expect(existsSync(resolve("public", icon.src))).toBe(true)
    }
  })

  it("publishes a PNG Open Graph image asset", () => {
    const image = readFileSync(
      resolve("public", trimLeadingSlash(OG_IMAGE_PATH))
    )

    expect(image.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a")
  })
})

function readPublicFile(filename: string): string {
  return readFileSync(resolve("public", filename), "utf8")
}

function trimLeadingSlash(pathname: string): string {
  return pathname.replace(/^\//, "")
}
