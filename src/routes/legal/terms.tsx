import { createFileRoute } from "@tanstack/react-router"

import { getSeoHead } from "@/lib/seo"
import { TermsPage } from "@/pages/legal/TermsPage"

export const Route = createFileRoute("/legal/terms")({
  head: () => getSeoHead("/legal/terms", "en"),
  component: TermsPage,
})
