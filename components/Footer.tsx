import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 mt-16 border-t border-gray-800 dark:border-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white dark:text-gray-100 text-lg font-bold mb-4">About</h3>
            <p className="text-sm leading-relaxed mb-4">
              A modern blog platform powered by Next.js and Markdown. Stay updated with the latest articles on technology, lifestyle, health, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white dark:text-gray-100 text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white dark:hover:text-gray-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white dark:text-gray-100 text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/lifestyle" className="hover:text-white transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/category/technology" className="hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/category/health" className="hover:text-white transition-colors">
                  Health
                </Link>
              </li>
              <li>
                <Link href="/category/travel" className="hover:text-white transition-colors">
                  Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white dark:text-gray-100 text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-900 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} - All Right Reserved by MyBlog</p>
        </div>
      </div>
    </footer>
  )
}
