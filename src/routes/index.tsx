import { createFileRoute } from "@tanstack/react-router"

import { HomePage } from "@/components/HomePage"
import { getSeoHead } from "@/lib/seo"

export const Route = createFileRoute("/")({
  head: () => getSeoHead("/", "en"),
  component: HomePage,
})
