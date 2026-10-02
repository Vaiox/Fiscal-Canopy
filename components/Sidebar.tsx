import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

import type { PostMeta } from "@/lib/posts";
import { slugifyCategory } from "@/lib/slugify";

interface SidebarProps {
  popularPosts: PostMeta[];
  categories: string[];
}

export default function Sidebar({
  popularPosts,
  categories,
}: SidebarProps) {
  return (
    <aside className="space-y-8">

      {/* =====================================================
          ADVERTISEMENT
      ===================================================== */}

      <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-center text-white">
        <p className="mb-2 text-sm font-semibold">
          ADVERTISEMENT
        </p>

        <p className="text-xs opacity-90">
          300x250
        </p>
      </div>


      {/* =====================================================
          POPULAR POSTS
      ===================================================== */}

      <div className="overflow-hidden rounded-lg border border-transparent bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">

        <div className="bg-gray-900 px-6 py-3 text-white dark:bg-gray-700">
          <h3 className="text-sm font-bold uppercase tracking-wide">
            Popular Posts
          </h3>
        </div>

        <div className="divide-y divide-gray-100 dark:divide-gray-700">

          {popularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="group flex gap-4 p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
            >

              <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded">
                <Image
                  src={post.image}
                  alt={
                    post.imageAlt ||
                    post.title
                  }
                  fill
                  sizes="96px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="min-w-0 flex-1">

                <h4 className="mb-1 line-clamp-2 text-sm font-semibold text-gray-900 transition-colors group-hover:text-primary dark:text-gray-100 dark:group-hover:text-blue-400">
                  {post.title}
                </h4>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {format(
                    new Date(post.date),
                    "MMM d, yyyy"
                  )}
                </p>

              </div>
            </Link>
          ))}

        </div>
      </div>


      {/* =====================================================
          RECENT POSTS
      ===================================================== */}

      <div className="overflow-hidden rounded-lg border border-transparent bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">

        <div className="bg-gray-900 px-6 py-3 text-white dark:bg-gray-700">
          <h3 className="text-sm font-bold uppercase tracking-wide">
            Recent Posts
          </h3>
        </div>

        <div className="divide-y divide-gray-100 dark:divide-gray-700">

          {popularPosts
            .slice(0, 5)
            .map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="group flex gap-4 p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
              >

                <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded">
                  <Image
                    src={post.image}
                    alt={
                      post.imageAlt ||
                      post.title
                    }
                    fill
                    sizes="96px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="min-w-0 flex-1">

                  <h4 className="mb-1 line-clamp-2 text-sm font-semibold text-gray-900 transition-colors group-hover:text-primary dark:text-gray-100 dark:group-hover:text-blue-400">
                    {post.title}
                  </h4>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {format(
                      new Date(post.date),
                      "MMM d, yyyy"
                    )}
                  </p>

                </div>

              </Link>
            ))}

        </div>
      </div>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <div className="overflow-hidden rounded-lg border border-transparent bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">

        <div className="bg-gray-900 px-6 py-3 text-white dark:bg-gray-700">
          <h3 className="text-sm font-bold uppercase tracking-wide">
            Categories
          </h3>
        </div>

        <div className="p-4">

          <ul className="space-y-2">

            {categories.map((category) => (
              <li key={category}>

                <Link
                  href={`/category/${slugifyCategory(
                    category
                  )}`}
                  className="flex items-center justify-between rounded px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                >

                  <span className="font-medium">
                    {category}
                  </span>

                  {/*
                   * The old project displayed "(12)" for
                   * every category. We intentionally don't
                   * reproduce that incorrect hard-coded
                   * value. Real counts will be connected
                   * when the homepage is migrated.
                   */}

                </Link>

              </li>
            ))}

          </ul>

        </div>
      </div>

    </aside>
  );
}