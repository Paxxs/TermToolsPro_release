import { createFileRoute } from "@tanstack/react-router"

import { LicensePage } from "@/pages/legal/LicensePage"

export const Route = createFileRoute("/zh/legal/license")({
  component: LicensePage,
})
