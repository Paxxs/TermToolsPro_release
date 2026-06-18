import { useTranslation } from "react-i18next"

export function DisclaimerPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <section className="demo-page py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="demo-title mb-4">{t("legal.disclaimer.title")}</h1>
            <p className="demo-muted text-sm">Last updated: June 17, 2026</p>
          </div>

          <div className="demo-panel space-y-8">
            <section>
              <h2 className="demo-section-title mb-3">1. General Disclaimer</h2>
              <p className="demo-muted text-sm leading-relaxed">
                TermTools Pro is provided "as is" without warranty of any kind,
                either express or implied. The authors and contributors make no
                representations or warranties regarding the accuracy,
                reliability, or completeness of the software.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">2. No Warranty</h2>
              <p className="demo-muted mb-3 text-sm leading-relaxed">
                We do not warrant that:
              </p>
              <ul className="demo-muted ml-6 list-disc space-y-2 text-sm">
                <li>The software will meet your specific requirements</li>
                <li>
                  The software will be uninterrupted, timely, secure, or
                  error-free
                </li>
                <li>
                  The results obtained from using the software will be accurate
                  or reliable
                </li>
                <li>Any errors in the software will be corrected</li>
              </ul>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">
                3. Limitation of Liability
              </h2>
              <p className="demo-muted text-sm leading-relaxed">
                In no event shall the authors, copyright holders, or
                contributors be liable for any direct, indirect, incidental,
                special, exemplary, or consequential damages (including but not
                limited to procurement of substitute goods or services, loss of
                use, data, or profits, or business interruption) arising in any
                way out of the use of this software.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">
                4. User Responsibility
              </h2>
              <p className="demo-muted text-sm leading-relaxed">
                Users are solely responsible for determining the appropriateness
                of using TermTools Pro and assume all risks associated with its
                use. This includes compliance with applicable laws, protection
                of confidential information, and proper backup of important
                data.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">5. Content Disclaimer</h2>
              <p className="demo-muted text-sm leading-relaxed">
                TermTools Pro records terminal content as directed by the user.
                We are not responsible for the content of recordings, including
                any sensitive information, credentials, or confidential data
                that may be captured. Users should exercise caution when
                recording and sharing terminal sessions.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">6. External Links</h2>
              <p className="demo-muted text-sm leading-relaxed">
                This website may contain links to external websites. We have no
                control over the content and availability of those sites and
                accept no responsibility for them or any loss or damage that may
                arise from your use of them.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">7. Security</h2>
              <p className="demo-muted text-sm leading-relaxed">
                While we strive to maintain the security of the software, we
                cannot guarantee that unauthorized access to your recordings or
                data will never occur. Users should implement appropriate
                security measures for sensitive recordings.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">8. Indemnification</h2>
              <p className="demo-muted text-sm leading-relaxed">
                You agree to indemnify and hold harmless the authors,
                contributors, and maintainers from any claims, damages, losses,
                liabilities, and expenses (including legal fees) arising from
                your use of TermTools Pro or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">
                9. Changes to Disclaimer
              </h2>
              <p className="demo-muted text-sm leading-relaxed">
                We reserve the right to update this disclaimer at any time
                without prior notice. Your continued use of the software after
                any changes indicates your acceptance of the updated disclaimer.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">
                10. Contact Information
              </h2>
              <p className="demo-muted text-sm leading-relaxed">
                For questions or concerns regarding this disclaimer, please
                contact us through our GitHub repository at{" "}
                <a
                  href="https://github.com/Paxxs/termtools"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--lagoon-deep)] underline"
                >
                  github.com/Paxxs/termtools
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
