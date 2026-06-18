import { createFileRoute } from "@tanstack/react-router"

import { getSeoHead } from "@/lib/seo"
import { DownloadPage } from "@/pages/DownloadPage"

export const Route = createFileRoute("/zh/download")({
  head: () => getSeoHead("/download", "zh"),
  component: DownloadPage,
})
