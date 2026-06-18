import { createFileRoute } from "@tanstack/react-router"

import { DisclaimerPage } from "@/pages/legal/DisclaimerPage"

export const Route = createFileRoute("/zh/legal/disclaimer")({
  component: DisclaimerPage,
})
