import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

export const Route = createFileRoute("/legal/privacy")({
  component: PrivacyPage,
})

function PrivacyPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <section className="demo-page py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="demo-title mb-4">{t("legal.privacy.title")}</h1>
            <p className="demo-muted text-sm">Last updated: June 17, 2026</p>
          </div>

          <div className="demo-panel space-y-8">
            <section>
              <h2 className="demo-section-title mb-3">
                1. Information We Collect
              </h2>
              <p className="demo-muted text-sm leading-relaxed">
                TermTools Pro is a local, privacy-focused application. We do not
                collect personal information or transmit data to external
                servers. All recordings and data remain on your device.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">2. Local Data Storage</h2>
              <p className="demo-muted mb-3 text-sm leading-relaxed">
                The application stores the following data locally on your
                device:
              </p>
              <ul className="demo-muted ml-6 list-disc space-y-2 text-sm">
                <li>Terminal recording sessions</li>
                <li>User preferences and settings</li>
                <li>Custom themes and configurations</li>
                <li>Export history and metadata</li>
              </ul>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">3. Device Information</h2>
              <p className="demo-muted text-sm leading-relaxed">
                The application may access device information necessary for
                functionality, such as: operating system version, screen
                resolution for proper rendering, and file system access for
                saving recordings. This information is used locally and never
                transmitted.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">
                4. No Analytics or Tracking
              </h2>
              <p className="demo-muted text-sm leading-relaxed">
                TermTools Pro does not include analytics, tracking pixels, or
                telemetry. We do not monitor your usage or collect behavioral
                data.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">
                5. Third-Party Services
              </h2>
              <p className="demo-muted text-sm leading-relaxed">
                The application does not integrate with third-party services or
                share data with external parties. Any exports or sharing of
                recordings is initiated and controlled entirely by you.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">6. Data Security</h2>
              <p className="demo-muted text-sm leading-relaxed">
                Since all data is stored locally on your device, you are
                responsible for securing your recordings. We recommend using
                appropriate file system permissions and encryption for sensitive
                recordings.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">
                7. Changes to Privacy Policy
              </h2>
              <p className="demo-muted text-sm leading-relaxed">
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated revision date.
                Continued use of the software after changes constitutes
                acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">8. Contact Us</h2>
              <p className="demo-muted text-sm leading-relaxed">
                If you have questions about this privacy policy, please reach
                out through our GitHub repository.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
