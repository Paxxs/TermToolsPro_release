import { describe, expect, it } from "vitest"

import { getSeoHead } from "@/lib/seo"
import type { Language, LocalizedRoute } from "@/lib/i18n-routing"

import { Route as AboutRoute } from "./about"
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
    head?: (ctx?: never) => unknown
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
  it("wires English routes to localized SEO metadata", () => {
    for (const routeConfig of englishRoutes) {
      const head = routeConfig.module.options.head

      expect(head).toBeTypeOf("function")
      expect(head?.()).toEqual(
        getSeoHead(routeConfig.route, routeConfig.language)
      )
    }
  })

  it("wires Chinese routes to localized SEO metadata", () => {
    for (const routeConfig of chineseRoutes) {
      const head = routeConfig.module.options.head

      expect(head).toBeTypeOf("function")
      expect(head?.()).toEqual(
        getSeoHead(routeConfig.route, routeConfig.language)
      )
    }
  })
})
