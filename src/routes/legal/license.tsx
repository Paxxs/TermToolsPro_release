import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

export const Route = createFileRoute("/legal/license")({
  component: LicensePage,
})

function LicensePage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <section className="demo-page py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="demo-title mb-4">{t("legal.license.title")}</h1>
            <p className="demo-muted text-sm">Last updated: June 17, 2026</p>
          </div>

          <div className="demo-panel space-y-8">
            <section>
              <h2 className="demo-section-title mb-3">MIT License</h2>
              <p className="demo-muted mb-4 text-sm leading-relaxed">
                Copyright (c) 2023-2026 TermTools Contributors
              </p>
              <div className="demo-code-block text-sm leading-relaxed">
                <p className="mb-4">
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicense, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:
                </p>
                <p className="mb-4">
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the
                  Software.
                </p>
                <p>
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
                  KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
                  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">Third-Party Licenses</h2>
              <p className="demo-muted mb-3 text-sm leading-relaxed">
                TermTools Pro uses the following open-source libraries:
              </p>
              <ul className="demo-muted ml-6 list-disc space-y-2 text-sm">
                <li>React - MIT License</li>
                <li>TanStack Router - MIT License</li>
                <li>Tailwind CSS - MIT License</li>
                <li>Lucide Icons - ISC License</li>
                <li>Additional dependencies as listed in package.json</li>
              </ul>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">Attribution</h2>
              <p className="demo-muted text-sm leading-relaxed">
                While not required by the license, we appreciate attribution
                when redistributing or building upon TermTools Pro. A link back
                to the project repository is encouraged.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">Contributing</h2>
              <p className="demo-muted text-sm leading-relaxed">
                By contributing to TermTools Pro, you agree that your
                contributions will be licensed under the same MIT License. All
                contributors retain copyright to their respective contributions.
              </p>
            </section>

            <section>
              <h2 className="demo-section-title mb-3">Source Code</h2>
              <p className="demo-muted text-sm leading-relaxed">
                The complete source code for TermTools Pro is available on
                GitHub at:{" "}
                <a
                  href="https://github.com/Paxxs/termtools"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--lagoon-deep)] underline"
                >
                  github.com/Paxxs/termtools
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
