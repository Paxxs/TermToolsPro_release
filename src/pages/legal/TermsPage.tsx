import { useTranslation } from "react-i18next"

export function TermsPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <section className="demo-page py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="demo-title mb-4">{t("legal.terms.title")}</h1>
            <p className="demo-muted text-sm">Last updated: June 17, 2026</p>
          </div>

          <div className="demo-panel space-y-8">
            <section>
              <h2 className="demo-section-title mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="demo-muted text-sm leading-relaxed">
                By accessing and using TermTools Pro, you accept and agree to be
                bound by the terms and provision of this agreement. If you do
                not agree to these terms, please do not use our software.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">2. Use License</h2>
              <p className="demo-muted text-sm leading-relaxed">
                TermTools Pro is provided as open-source software. You are
                granted a non-exclusive, non-transferable license to use the
                software for personal and commercial purposes, subject to the
                terms of the applicable open-source license.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">
                3. User Responsibilities
              </h2>
              <p className="demo-muted mb-3 text-sm leading-relaxed">
                Users agree to:
              </p>
              <ul className="demo-muted ml-6 list-disc space-y-2 text-sm">
                <li>
                  Use the software in compliance with all applicable laws and
                  regulations
                </li>
                <li>
                  Not use the software for any unlawful or prohibited activities
                </li>
                <li>
                  Not attempt to reverse engineer, decompile, or disassemble the
                  software
                </li>
                <li>Respect intellectual property rights and licenses</li>
              </ul>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">
                4. Modifications to Service
              </h2>
              <p className="demo-muted text-sm leading-relaxed">
                We reserve the right to modify or discontinue the service at any
                time without notice. We shall not be liable to you or any third
                party for any modification, suspension, or discontinuance of the
                service.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">
                5. Limitation of Liability
              </h2>
              <p className="demo-muted text-sm leading-relaxed">
                TermTools Pro is provided "as is" without warranty of any kind.
                In no event shall the authors or copyright holders be liable for
                any claim, damages, or other liability arising from the use of
                the software.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">6. Changes to Terms</h2>
              <p className="demo-muted text-sm leading-relaxed">
                We reserve the right to update these terms at any time. We will
                notify users of any material changes by posting the new terms on
                this page. Your continued use of the service after such
                modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">
                7. Contact Information
              </h2>
              <p className="demo-muted text-sm leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us through our GitHub repository.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
