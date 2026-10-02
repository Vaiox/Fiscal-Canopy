import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FiscalCanopy",
  description:
    "Learn about how FiscalCanopy collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-transparent dark:border-gray-700">
        <h1 className="text-4xl font-bold mb-8 font-heading text-gray-900 dark:text-gray-100">
          Privacy Policy
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              1. Information We Collect
            </h2>

            <p className="mb-3">
              We collect information that you provide directly to us,
              including:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Name and email address when you subscribe to our newsletter
              </li>
              <li>Comments and feedback you provide</li>
              <li>Usage data and analytics through cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              2. How We Use Your Information
            </h2>

            <p className="mb-3">
              We use the information we collect to:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>
                Send you newsletters and updates (with your consent)
              </li>
              <li>Respond to your comments and questions</li>
              <li>
                Analyze usage patterns to improve user experience
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              3. Cookies and Tracking
            </h2>

            <p>
              We use cookies and similar tracking technologies to track
              activity on our website and hold certain information. You
              can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              4. Third-Party Services
            </h2>

            <p className="mb-3">
              We may use third-party services that collect, monitor, and
              analyze data:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Google Analytics for website analytics</li>
              <li>Google AdSense for advertising</li>
              <li>Social media platforms for content sharing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              5. Data Security
            </h2>

            <p>
              We implement appropriate security measures to protect your
              personal information. However, no method of transmission
              over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              6. Your Rights
            </h2>

            <p className="mb-3">You have the right to:</p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              7. Children's Privacy
            </h2>

            <p>
              Our website is not intended for children under 13. We do
              not knowingly collect personal information from children
              under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              8. Changes to This Policy
            </h2>

            <p>
              We may update our Privacy Policy from time to time. We
              will notify you of any changes by posting the new Privacy
              Policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              9. Contact Us
            </h2>

            <p>
              If you have any questions about this Privacy Policy,
              please contact us at:{" "}
              <a
                href="mailto:privacy@myblog.com"
                className="text-primary dark:text-blue-400 hover:underline"
              >
                privacy@myblog.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}