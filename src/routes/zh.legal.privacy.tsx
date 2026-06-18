import { createFileRoute } from "@tanstack/react-router"

import { getSeoHead } from "@/lib/seo"
import { PrivacyPage } from "@/pages/legal/PrivacyPage"

export const Route = createFileRoute("/zh/legal/privacy")({
  head: () => getSeoHead("/legal/privacy", "zh"),
  component: PrivacyPage,
})
