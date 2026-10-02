import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | FiscalCanopy",
  description:
    "Terms and conditions for using FiscalCanopy services.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-transparent dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-8 font-heading text-gray-900 dark:text-gray-100">
          Terms of Service
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              1. Acceptance of Terms
            </h2>

            <p>
              By accessing and using this website, you accept and agree
              to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              2. Use License
            </h2>

            <p className="mb-3">
              Permission is granted to temporarily download one copy of
              the materials on our website for personal,
              non-commercial transitory viewing only.
            </p>

            <p>
              This license shall automatically terminate if you violate
              any of these restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              3. Disclaimer
            </h2>

            <p>
              The materials on our website are provided on an 'as is'
              basis. We make no warranties, expressed or implied, and
              hereby disclaim all other warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              4. Limitations
            </h2>

            <p>
              In no event shall we or our suppliers be liable for any
              damages arising out of the use or inability to use the
              materials on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              5. User Comments
            </h2>

            <p>
              Certain parts of this website offer users the opportunity
              to post comments. We reserve the right to monitor and
              remove comments that we consider inappropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              6. Intellectual Property
            </h2>

            <p>
              All content published on this website is subject to
              copyright and owned by us or our content creators.
              Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              7. Links to Other Websites
            </h2>

            <p>
              Our website may contain links to third-party websites. We
              have no control over, and assume no responsibility for,
              the content of these sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              8. Modifications
            </h2>

            <p>
              We may revise these terms of service at any time without
              notice. By using this website, you agree to be bound by
              the current version of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              9. Governing Law
            </h2>

            <p>
              These terms shall be governed by and construed in
              accordance with applicable laws, without regard to its
              conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              10. Contact Information
            </h2>

            <p>
              For questions about these Terms of Service, please contact
              us at:{" "}
              <a
                href="mailto:legal@myblog.com"
                className="text-primary dark:text-blue-400 hover:underline"
              >
                legal@myblog.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}