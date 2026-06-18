import { createFileRoute } from "@tanstack/react-router"

import { getSeoHead } from "@/lib/seo"
import { DisclaimerPage } from "@/pages/legal/DisclaimerPage"

export const Route = createFileRoute("/legal/disclaimer")({
  head: () => getSeoHead("/legal/disclaimer", "en"),
  component: DisclaimerPage,
})
