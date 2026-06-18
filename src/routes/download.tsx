import { createFileRoute } from "@tanstack/react-router"

import { getSeoHead } from "@/lib/seo"
import { DownloadPage } from "@/pages/DownloadPage"

export const Route = createFileRoute("/download")({
  head: () => getSeoHead("/download", "en"),
  component: DownloadPage,
})
