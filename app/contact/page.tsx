import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | FiscalCanopy",
  description:
    "Get in touch with FiscalCanopy for questions about insurance and financial guidance.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center font-heading text-gray-900 dark:text-gray-100">
          Contact Us
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          Have questions or feedback? We'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-transparent dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Send us a Message
            </h2>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name *
                </label>

                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email *
                </label>

                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject *
                </label>

                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6 border border-transparent dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Get in Touch
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Email
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400">
                      contact@myblog.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-transparent dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Follow Us
              </h3>

              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}