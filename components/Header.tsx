"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">

        {/* Logo */}
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold font-heading text-gray-900 dark:text-gray-100 hover:text-primary transition-colors"
          >
            FiscalCanopy
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between pb-4 border-t border-gray-100 dark:border-gray-800 pt-3">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors uppercase tracking-wide"
            >
              HOME
            </Link>

            <Link
              href="/category/lifestyle"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors uppercase tracking-wide"
            >
              LIFESTYLE
            </Link>

            <Link
              href="/category/technology"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors uppercase tracking-wide"
            >
              TECHNOLOGY
            </Link>

            <Link
              href="/category/health"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors uppercase tracking-wide"
            >
              HEALTH
            </Link>

            <Link
              href="/category/travel"
              className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors uppercase tracking-wide"
            >
              TRAVEL
            </Link>
          </div>

          {/* Dark Mode */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 dark:border-gray-800 mt-2">
            <div className="flex flex-col space-y-3 pt-4">

              <button
                type="button"
                onClick={toggleDarkMode}
                className="flex items-center justify-between text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors uppercase tracking-wide py-2 hover:bg-gray-50 dark:hover:bg-gray-800 px-2 rounded"
              >
                <span>DARK MODE</span>

                <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800">
                  {darkMode ? (
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 text-gray-700 dark:text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </div>
              </button>

              {[
                ["/", "HOME"],
                ["/category/lifestyle", "LIFESTYLE"],
                ["/category/technology", "TECHNOLOGY"],
                ["/category/health", "HEALTH"],
                ["/category/travel", "TRAVEL"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors uppercase tracking-wide py-2 hover:bg-gray-50 dark:hover:bg-gray-800 px-2 rounded"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}