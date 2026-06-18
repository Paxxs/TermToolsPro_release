import { createFileRoute } from "@tanstack/react-router"

import { getSeoHead } from "@/lib/seo"
import { LicensePage } from "@/pages/legal/LicensePage"

export const Route = createFileRoute("/zh/legal/license")({
  head: () => getSeoHead("/legal/license", "zh"),
  component: LicensePage,
})
