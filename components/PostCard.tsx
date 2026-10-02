import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

import type { PostMeta } from "@/lib/posts";
import { slugifyCategory } from "@/lib/slugify";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  const primaryCategory = Array.isArray(post.category)
    ? post.category[0]
    : post.category;

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-transparent dark:border-gray-700">
      <Link href={`/${post.slug}`} className="block">
        <div className="relative h-40 sm:h-48 lg:h-52 overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            className="object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-3 sm:p-4 lg:p-6 flex flex-col flex-grow">
        <Link href={`/category/${slugifyCategory(primaryCategory)}`}>
          <span className="inline-block text-xs font-semibold text-primary dark:text-blue-400 uppercase tracking-wide hover:underline mb-2">
            {primaryCategory}
          </span>
        </Link>

        <Link href={`/${post.slug}`}>
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 lg:mb-3 hover:text-primary dark:hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 lg:mb-4 line-clamp-2 sm:line-clamp-3 leading-relaxed flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-3 lg:pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
          <span className="font-medium truncate mr-2">
            {post.author}
          </span>

          <span className="whitespace-nowrap">
            {format(new Date(post.date), "MMM d, yyyy")}
          </span>
        </div>
      </div>
    </article>
  );
}