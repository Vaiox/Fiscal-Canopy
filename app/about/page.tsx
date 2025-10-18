import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | FiscalCanopy',
  description: 'Learn about FiscalCanopy, your trusted resource for insurance and financial guidance.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center font-heading text-gray-900 dark:text-gray-100">About Us</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-transparent dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Our Story</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Welcome to FiscalCanopy, your trusted resource for insurance and financial guidance. We're dedicated
            to helping you navigate the complex world of insurance, finance, and wealth management with confidence.
            Our mission is to provide clear, actionable insights that empower you to make informed financial decisions.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Whether you're looking for insurance coverage, planning your financial future, or seeking investment advice,
            FiscalCanopy offers expert guidance backed by research and real-world experience. We break down complex
            financial topics into easy-to-understand articles that help you protect and grow your wealth.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-transparent dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">Insurance</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Comprehensive guides on health, life, auto, home, and business insurance to protect what matters most.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">Finance</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Expert advice on budgeting, saving, debt management, and building financial stability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">Investments</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Strategic insights on stocks, bonds, real estate, retirement planning, and wealth building.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">Wealth Management</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Long-term financial strategies, tax planning, estate planning, and legacy building.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 border border-transparent dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Our Values</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">Quality First:</strong>
                <span className="text-gray-700 dark:text-gray-300"> We prioritize accuracy, depth, and usefulness in every article.</span>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary dark:text-blue-400 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">Reader-Centric:</strong>
                <span className="text-gray-700 dark:text-gray-300"> Your needs and interests guide our content strategy.</span>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary dark:text-blue-400 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">Integrity:</strong>
                <span className="text-gray-700 dark:text-gray-300"> We maintain transparency and honesty in all our content.</span>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary dark:text-blue-400 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">Continuous Improvement:</strong>
                <span className="text-gray-700 dark:text-gray-300"> We constantly evolve to serve you better.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-transparent dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Get in Touch</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, 
            feel free to reach out through our contact page.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
