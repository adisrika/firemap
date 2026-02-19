import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description:
    'FIREmap privacy policy. We collect no personal data, require no accounts, and use cookieless analytics. Your calculator inputs stay in your browser.',
  path: '/privacy',
  noIndex: false,
});

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-12">
          <h1 className="text-3xl font-extrabold text-navy-800 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: February 2026</p>

          <div className="space-y-10">
            {/* 1. What We Collect */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">1. What We Collect</h2>
              <p className="text-gray-600 leading-relaxed">
                FIREmap does not collect personal information. There are no accounts, no logins, and
                no server-side storage of your data. All calculator inputs — your age, income,
                expenses, savings, and other fields — exist only in your browser or in the URL
                parameters you choose to share. We never transmit these values to our servers.
              </p>
            </section>

            {/* 2. Cookies */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">2. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                FIREmap sets no first-party cookies. We do not use tracking cookies, advertising
                cookies, or session cookies. Our analytics provider (Plausible, described below) is
                cookieless by design and does not set any cookies on your device.
              </p>
            </section>

            {/* 3. Analytics */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">3. Analytics</h2>
              <p className="text-gray-600 leading-relaxed">
                We use{' '}
                <a
                  href="https://plausible.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fire-500 hover:underline"
                >
                  Plausible Analytics
                </a>{' '}
                to understand aggregate site usage (page views, traffic sources, popular pages). Plausible
                is a privacy-first analytics service: it collects no personal data, sets no cookies,
                and is fully GDPR-compliant. No individual user is identified or tracked across
                sessions. The data collected is aggregate only — for example, &quot;500 people visited
                the calculator page today&quot; — and is never sold or shared with third parties.
              </p>
            </section>

            {/* 4. Third-Party Links */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">4. Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">
                The Resources page links to external websites such as books, podcasts, and
                investment platforms. These sites have their own privacy policies and data practices.
                FIREmap is not responsible for the privacy practices of any linked external site. We
                recommend reviewing the privacy policy of any third-party site you visit.
              </p>
            </section>

            {/* 5. Children */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">5. Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                FIREmap is not directed at children under the age of 13. We do not knowingly collect
                any information from children under 13. If you believe a child has provided personal
                information through our site, please contact us and we will promptly address it.
              </p>
            </section>

            {/* 6. Changes */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">6. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the
                top of this page always reflects the current version. Continued use of FIREmap after
                any changes constitutes your acceptance of the updated policy. We encourage you to
                review this page periodically.
              </p>
            </section>

            {/* 7. Contact */}
            <section>
              <h2 className="text-xl font-bold text-navy-800 mb-3">7. Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                Questions or concerns about this Privacy Policy? Email us at{' '}
                <a
                  href="mailto:privacy@firemap.app"
                  className="text-fire-500 hover:underline"
                >
                  privacy@firemap.app
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
