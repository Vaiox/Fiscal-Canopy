import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about FiscalCanopy and our mission to provide practical insights on insurance, finance, budgeting, and wealth management.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-gray-100 mb-4">
            About FiscalCanopy
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            Your guide to smarter financial decisions.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10 border border-transparent dark:border-gray-700">

          <div className="article-content">

            <h2>Who We Are</h2>

            <p>
              FiscalCanopy is a platform dedicated to helping readers
              better understand insurance, finance, budgeting, investing,
              and wealth management.
            </p>

            <p>
              We believe financial information should be practical,
              understandable, and useful in everyday life. Our goal is
              to break down complicated topics into clear and accessible
              guides.
            </p>

            <h2>What We Cover</h2>

            <p>
              Our content covers a range of personal-finance topics,
              including:
            </p>

            <ul>
              <li>Insurance and financial protection</li>
              <li>Personal finance and budgeting</li>
              <li>Investing and wealth building</li>
              <li>Financial planning</li>
              <li>Technology and its impact on finance</li>
              <li>Lifestyle topics connected to financial well-being</li>
            </ul>

            <h2>Our Mission</h2>

            <p>
              Our mission is to make financial knowledge easier to
              understand so readers can make more informed decisions
              about their money and future.
            </p>

            <p>
              FiscalCanopy focuses on educational content and general
              information. Our articles are not intended to replace
              professional financial, legal, tax, or insurance advice.
            </p>

            <h2>Why FiscalCanopy?</h2>

            <p>
              The name FiscalCanopy represents the idea of creating a
              dependable layer of knowledge and guidance around your
              financial life — a canopy under which you can explore,
              learn, and plan with greater confidence.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}