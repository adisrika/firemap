import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Financial Disclaimer',
  description:
    'FIREmap financial disclaimer. Our calculator provides educational projections only — not personalized financial advice. Consult a licensed fiduciary advisor before making investment decisions.',
  path: '/disclaimer',
  noIndex: false,
});

export default function DisclaimerPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-12">
          <h1 className="text-3xl font-extrabold text-navy-800 mb-2">Financial Disclaimer</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: February 2026</p>

          <div className="space-y-10">
            {/* 1. Not Financial Advice */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">1. Not Financial Advice</h2>
              <p className="text-gray-600 leading-relaxed">
                FIREmap is an educational tool. All content on this website — including the FIRE
                calculator, learning articles, and curated resources — is provided for informational
                and educational purposes only. Nothing on this site constitutes personalized
                financial advice, investment recommendations, legal advice, or tax advice. Results
                from the calculator are projections based on simplified mathematical models, not
                professional financial planning.
              </p>
            </section>

            {/* 2. Model Limitations */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">2. Model Limitations</h2>
              <p className="text-gray-600 leading-relaxed">
                The FIRE calculator assumes constant annual return rates and a fixed inflation rate
                for the entire projection period. Real financial markets are volatile — returns vary
                significantly year to year, and sequence-of-returns risk (poor returns early in
                retirement) is not modeled. The calculator does not account for major life events
                such as job loss, divorce, disability, inheritance, large medical expenses, or
                changes in family size. Actual results will differ from projections.
              </p>
            </section>

            {/* 3. 4% Rule Context */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">3. The 4% Rule — Context and Limitations</h2>
              <p className="text-gray-600 leading-relaxed">
                The 4% safe withdrawal rate is derived from US historical market data and was
                popularized by the Trinity Study (Cooley, Hubbard &amp; Walz, 1998). It was designed
                for traditional 30-year retirements. For retirements spanning 40 or more years —
                common in the FIRE community — some researchers and financial planners suggest a
                more conservative withdrawal rate of 3% to 3.5%. The appropriate rate for your
                situation depends on your asset allocation, flexibility to reduce spending, and
                other income sources.
              </p>
            </section>

            {/* 4. Tax Disclaimer */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">4. Taxes</h2>
              <p className="text-gray-600 leading-relaxed">
                Calculator projections do not account for income taxes, capital gains taxes,
                required minimum distributions (RMDs), Social Security benefits, state and local
                taxes, or tax-advantaged account withdrawal rules (Traditional IRA, Roth IRA,
                401(k), etc.). Your actual after-tax income in retirement may differ substantially
                from the figures shown. Tax laws change frequently and vary by jurisdiction.
              </p>
            </section>

            {/* 5. Consult a Professional */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">5. Consult a Professional</h2>
              <p className="text-gray-600 leading-relaxed">
                Before making significant financial decisions based on any projections from this
                site, we strongly encourage you to consult qualified professionals:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-fire-500 font-bold mt-0.5">•</span>
                  <span>
                    <strong className="text-navy-700">Fee-only fiduciary financial advisor</strong> — compensated
                    only by you, legally obligated to act in your interest
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fire-500 font-bold mt-0.5">•</span>
                  <span>
                    <strong className="text-navy-700">Certified Public Accountant (CPA)</strong> — for tax
                    planning and optimization strategies
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-fire-500 font-bold mt-0.5">•</span>
                  <span>
                    <strong className="text-navy-700">Estate planning attorney</strong> — for wills, trusts,
                    and beneficiary designations
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                You can find fee-only fiduciary advisors through the{' '}
                <a
                  href="https://www.napfa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fire-500 hover:underline"
                >
                  National Association of Personal Financial Advisors (NAPFA)
                </a>{' '}
                or{' '}
                <a
                  href="https://www.garrettplanningnetwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fire-500 hover:underline"
                >
                  Garrett Planning Network
                </a>
                .
              </p>
            </section>

            {/* 6. External Links */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">6. External Links</h2>
              <p className="text-gray-600 leading-relaxed">
                The Resources page links to external websites, books, podcasts, and tools for
                educational purposes. FIREmap does not endorse, recommend, or have any affiliation
                with any linked products, services, or companies. Inclusion of a resource is not an
                endorsement, and exclusion does not imply disapproval. Always conduct your own
                research before using any financial product or service.
              </p>
            </section>

            {/* 7. No Liability */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">7. No Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                The creators and operators of FIREmap are not liable for any financial decisions,
                investment losses, tax liabilities, or other consequences arising from your use of
                this website or reliance on its content. You use this site at your own risk. The
                information is provided &quot;as is&quot; without warranties of any kind, express or implied.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
