import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-800 bg-gray-900 text-gray-300 dark:border-gray-900 dark:bg-black dark:text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white dark:text-gray-100">
              About
            </h3>

            <p className="mb-4 text-sm leading-relaxed">
              A modern blog platform powered by Next.js and Markdown.
              Stay updated with the latest articles on technology,
              lifestyle, health, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white dark:text-gray-100">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white dark:hover:text-gray-200"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-of-service"
                  className="transition-colors hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white dark:text-gray-100">
              Categories
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/category/lifestyle"
                  className="transition-colors hover:text-white"
                >
                  Lifestyle
                </Link>
              </li>

              <li>
                <Link
                  href="/category/technology"
                  className="transition-colors hover:text-white"
                >
                  Technology
                </Link>
              </li>

              <li>
                <Link
                  href="/category/health"
                  className="transition-colors hover:text-white"
                >
                  Health
                </Link>
              </li>

              <li>
                <Link
                  href="/category/travel"
                  className="transition-colors hover:text-white"
                >
                  Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white dark:text-gray-100">
              Connect
            </h3>

            <div className="flex space-x-4">

              {/* Twitter */}
              <a
                href="#"
                className="transition-colors hover:text-white dark:hover:text-gray-200"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                  />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm dark:border-gray-900">
          <p>
            &copy; {new Date().getFullYear()} - All Right Reserved by FiscalCanopy
          </p>
        </div>
      </div>
    </footer>
  );
}