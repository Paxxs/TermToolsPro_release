import { createFileRoute } from "@tanstack/react-router"

import { getSeoHead } from "@/lib/seo"
import { AboutPage } from "@/pages/AboutPage"

export const Route = createFileRoute("/about")({
  head: () => getSeoHead("/about", "en"),
  component: AboutPage,
})
