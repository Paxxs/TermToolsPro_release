import { createFileRoute } from "@tanstack/react-router"

import { getSeoHead } from "@/lib/seo"
import { DisclaimerPage } from "@/pages/legal/DisclaimerPage"

export const Route = createFileRoute("/zh/legal/disclaimer")({
  head: () => getSeoHead("/legal/disclaimer", "zh"),
  component: DisclaimerPage,
})
