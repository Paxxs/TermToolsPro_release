import { describe, expect, it } from "vitest"

import { languages, localizedRoutes } from "./i18n-routing"
import {
  OG_IMAGE_URL,
  SITE_URL,
  getAlternateLinks,
  getCanonicalUrl,
  getSeoHead,
  getSitemapEntries,
  seoRoutes,
} from "./seo"

describe("SEO helpers", () => {
  it("builds production canonical URLs for English and Chinese pages", () => {
    expect(getCanonicalUrl("/", "en")).toBe(`${SITE_URL}/`)
    expect(getCanonicalUrl("/", "zh")).toBe(`${SITE_URL}/zh`)
    expect(getCanonicalUrl("/download", "en")).toBe(`${SITE_URL}/download`)
    expect(getCanonicalUrl("/download", "zh")).toBe(`${SITE_URL}/zh/download`)
  })

  it("builds reciprocal alternate language links for a route pair", () => {
    expect(getAlternateLinks("/legal/privacy")).toEqual([
      {
        rel: "alternate",
        hrefLang: "en",
        href: `${SITE_URL}/legal/privacy`,
      },
      {
        rel: "alternate",
        hrefLang: "zh-CN",
        href: `${SITE_URL}/zh/legal/privacy`,
      },
      {
        rel: "alternate",
        hrefLang: "x-default",
        href: `${SITE_URL}/legal/privacy`,
      },
    ])
  })

  it("has localized metadata for every configured route", () => {
    for (const route of localizedRoutes) {
      for (const language of languages) {
        expect(seoRoutes[route][language].title).toBeTruthy()
        expect(seoRoutes[route][language].description).toBeTruthy()
      }
    }
  })

  it("builds route head output with canonical and alternate links", () => {
    const head = getSeoHead("/download", "zh")
    const canonicalLinks = head.links.filter((link) => link.rel === "canonical")
    const alternateLinks = head.links.filter((link) => link.rel === "alternate")

    expect(canonicalLinks).toEqual([
      {
        rel: "canonical",
        href: `${SITE_URL}/zh/download`,
      },
    ])
    expect(alternateLinks).toHaveLength(3)
    expect(alternateLinks.map((link) => link.hrefLang)).toEqual([
      "en",
      "zh-CN",
      "x-default",
    ])
    expect(head.meta).toContainEqual({
      name: "description",
      content:
        "下载适用于 macOS 和 Linux 的 TermTools Pro，开始录制终端会话、回放工作流，并导出适合开发者文档的演示内容。",
    })
    expect(head.meta).toContainEqual({
      property: "og:url",
      content: `${SITE_URL}/zh/download`,
    })
    expect(head.meta).toContainEqual({
      property: "og:image",
      content: OG_IMAGE_URL,
    })
    expect(head.meta).toContainEqual({
      name: "twitter:card",
      content: "summary_large_image",
    })
    expect(head.meta).toContainEqual({
      name: "twitter:image",
      content: OG_IMAGE_URL,
    })
  })

  it("serializes JSON-LD for primary SEO pages", () => {
    const homeJsonLd = getSeoHead("/", "en").scripts.map((script) =>
      JSON.parse(script.children)
    )
    const downloadJsonLd = getSeoHead("/download", "zh").scripts.map((script) =>
      JSON.parse(script.children)
    )
    const aboutJsonLd = getSeoHead("/about", "en").scripts.map((script) =>
      JSON.parse(script.children)
    )
    const legalJsonLd = getSeoHead("/legal/privacy", "en").scripts

    expect(homeJsonLd.map((entry) => entry["@type"])).toEqual([
      "WebSite",
      "SoftwareApplication",
    ])
    expect(downloadJsonLd.map((entry) => entry["@type"])).toEqual([
      "SoftwareApplication",
    ])
    expect(aboutJsonLd.map((entry) => entry["@type"])).toEqual(["Organization"])
    expect(legalJsonLd).toEqual([])
  })

  it("lists every localized page for the static sitemap", () => {
    const sitemapUrls = getSitemapEntries().map((entry) => entry.loc)

    for (const route of localizedRoutes) {
      for (const language of languages) {
        expect(sitemapUrls).toContain(getCanonicalUrl(route, language))
      }
    }
  })
})
