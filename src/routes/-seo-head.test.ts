import { describe, expect, it } from "vitest"

import { getSeoHead } from "@/lib/seo"
import type { Language, LocalizedRoute } from "@/lib/i18n-routing"

import { Route as AboutRoute } from "./about"
import { Route as RootRoute } from "./__root"
import { Route as DownloadRoute } from "./download"
import { Route as IndexRoute } from "./index"
import { Route as DisclaimerRoute } from "./legal/disclaimer"
import { Route as LicenseRoute } from "./legal/license"
import { Route as PrivacyRoute } from "./legal/privacy"
import { Route as TermsRoute } from "./legal/terms"
import { Route as ZhAboutRoute } from "./zh.about"
import { Route as ZhDownloadRoute } from "./zh.download"
import { Route as ZhIndexRoute } from "./zh.index"
import { Route as ZhDisclaimerRoute } from "./zh.legal.disclaimer"
import { Route as ZhLicenseRoute } from "./zh.legal.license"
import { Route as ZhPrivacyRoute } from "./zh.legal.privacy"
import { Route as ZhTermsRoute } from "./zh.legal.terms"

type RouteWithHead = {
  options: {
    head?: unknown
  }
}

const englishRoutes = [
  { route: "/", language: "en", module: IndexRoute },
  { route: "/about", language: "en", module: AboutRoute },
  { route: "/download", language: "en", module: DownloadRoute },
  { route: "/legal/disclaimer", language: "en", module: DisclaimerRoute },
  { route: "/legal/license", language: "en", module: LicenseRoute },
  { route: "/legal/privacy", language: "en", module: PrivacyRoute },
  { route: "/legal/terms", language: "en", module: TermsRoute },
] as const satisfies Array<{
  route: LocalizedRoute
  language: Language
  module: RouteWithHead
}>

const chineseRoutes = [
  { route: "/", language: "zh", module: ZhIndexRoute },
  { route: "/about", language: "zh", module: ZhAboutRoute },
  { route: "/download", language: "zh", module: ZhDownloadRoute },
  { route: "/legal/disclaimer", language: "zh", module: ZhDisclaimerRoute },
  { route: "/legal/license", language: "zh", module: ZhLicenseRoute },
  { route: "/legal/privacy", language: "zh", module: ZhPrivacyRoute },
  { route: "/legal/terms", language: "zh", module: ZhTermsRoute },
] as const satisfies Array<{
  route: LocalizedRoute
  language: Language
  module: RouteWithHead
}>

describe("route SEO head metadata", () => {
  it("keeps the root route head limited to global document defaults", () => {
    const head = callRouteHead(RootRoute) as {
      meta: Array<Record<string, string>>
      links: Array<Record<string, string>>
    }

    expect(head.meta).toContainEqual({ charSet: "utf-8" })
    expect(head.meta).toContainEqual({
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    })
    expect(head.meta.some((meta) => "title" in meta)).toBe(false)
    expect(
      head.meta.some((meta) => meta.name === "description")
    ).toBe(false)
    expect(head.links.some((link) => link.rel === "stylesheet")).toBe(true)
  })

  it("wires English routes to localized SEO metadata", () => {
    for (const routeConfig of englishRoutes) {
      expect(callRouteHead(routeConfig.module)).toEqual(
        getSeoHead(routeConfig.route, routeConfig.language)
      )
    }
  })

  it("wires Chinese routes to localized SEO metadata", () => {
    for (const routeConfig of chineseRoutes) {
      expect(callRouteHead(routeConfig.module)).toEqual(
        getSeoHead(routeConfig.route, routeConfig.language)
      )
    }
  })
})

function callRouteHead(routeModule: RouteWithHead): unknown {
  const head = routeModule.options.head

  expect(head).toBeTypeOf("function")

  return (head as () => unknown)()
}
