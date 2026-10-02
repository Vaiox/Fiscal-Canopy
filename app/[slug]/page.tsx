import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import {
  getPostData,
  getAllPostSlugs,
  getSortedPostsData,
  getRelatedPosts,
  getCategories,
  getAdjacentPosts,
} from "@/lib/posts";
import { slugifyCategory } from "@/lib/slugify";
import Sidebar from "@/components/Sidebar";
import PostCard from "@/components/PostCard";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  const category = Array.isArray(post.category)
    ? post.category[0]
    : post.category;

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com";

  const canonicalUrl = `${siteUrl}/${slug}`;

  return {
    title:
      post.title.length > 50
        ? post.title
        : `${post.title} | FiscalCanopy`,
    description: post.excerpt,
    keywords: post.tags?.join(", ") || category,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          alt: post.imageAlt || post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      url: canonicalUrl,
      siteName: "FiscalCanopy",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function PostPage({
  params,
}: PostPageProps) {
  const { slug } = await params;

  const post = await getPostData(slug);
  const allPosts = getSortedPostsData();

  const category = Array.isArray(post.category)
    ? post.category[0]
    : post.category;

  const relatedPosts = getRelatedPosts(slug, category, 4);
  const categories = getCategories();
  const { previousPost, nextPost } = getAdjacentPosts(slug);

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://yoursite.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "FiscalCanopy",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/${slug}`,
    },
    keywords: post.tags?.join(", ") || category,
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-6 mb-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Home
            </Link>

            <span className="text-gray-400 dark:text-gray-500 font-semibold">
              /
            </span>

            <Link
              href={`/category/${slugifyCategory(category)}`}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              {category}
            </Link>

            <span className="text-gray-400 dark:text-gray-500 font-semibold">
              /
            </span>

            <span className="text-gray-900 dark:text-gray-100 font-semibold truncate">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Main Content */}
          <article className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-transparent dark:border-gray-700">

              {/* Featured Image */}
              <div className="relative h-64 md:h-96">
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>

              {/* Article Content */}
              <div className="p-6 md:p-8">

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(Array.isArray(post.category)
                    ? post.category
                    : [post.category]
                  ).map((cat) => (
                    <Link
                      key={cat}
                      href={`/category/${slugifyCategory(cat)}`}
                    >
                      <span className="inline-block bg-primary text-white px-3 py-1 text-xs font-semibold rounded uppercase tracking-wide hover:bg-opacity-90 transition-colors">
                        {cat}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 font-heading leading-tight">
                  {post.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-6 mb-6 gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-white font-bold text-lg">
                        {post.author.charAt(0)}
                      </div>

                      <div className="ml-3">
                        <p className="font-semibold text-gray-900 dark:text-gray-100">
                          {post.author}
                        </p>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {format(
                            new Date(post.date),
                            "MMMM d, yyyy"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </div>
                </div>

                {/* Article Body */}
                <div
                  className="article-content prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{
                    __html: post.content,
                  }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Tags:
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/tag/${encodeURIComponent(
                            tag.toLowerCase().replace(/\s+/g, "-")
                          )}`}
                          className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 text-xs rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Buttons */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Share this article:
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                      <span>Facebook</span>
                    </button>

                    <button
                      type="button"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors text-sm"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                      <span>Twitter</span>
                    </button>

                    <button
                      type="button"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors text-sm"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span>LinkedIn</span>
                    </button>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg border border-transparent dark:border-gray-600">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                      {post.author.charAt(0)}
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {post.author}
                      </h2>

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        An experienced writer passionate about sharing
                        knowledge and insights on various topics. Follow
                        for more quality content and updates.
                      </p>

                      <div className="flex items-center space-x-4 mt-3">
                        <a
                          href="#"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                          aria-label="Twitter"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        </a>

                        <a
                          href="#"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                          aria-label="Facebook"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                        </a>

                        <a
                          href="#"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <Sidebar
              popularPosts={allPosts.slice(0, 6)}
              categories={categories}
            />
          </aside>
        </div>

        {/* Previous / Next Post Navigation */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

            {/* Previous Post */}
            {previousPost && (
              <Link
                href={`/${previousPost.slug}`}
                className="group block"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow h-full flex flex-col border border-transparent dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                    ← Previous Post
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {previousPost.title}
                  </h3>
                </div>
              </Link>
            )}

            {/* Next Post */}
            {nextPost && (
              <Link
                href={`/${nextPost.slug}`}
                className={`group block ${
                  !previousPost ? "md:col-start-2" : ""
                }`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow h-full flex flex-col border border-transparent dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 md:text-right">
                    Next Post →
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors line-clamp-2 md:text-right">
                    {nextPost.title}
                  </h3>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-800 py-12 mt-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 font-heading text-gray-900 dark:text-gray-100">
              You May Also Like
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedPosts.map((relatedPost) => (
                <PostCard
                  key={relatedPost.slug}
                  post={relatedPost}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}