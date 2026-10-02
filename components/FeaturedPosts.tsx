import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

import type { PostMeta } from "@/lib/posts";

interface FeaturedPostsProps {
  posts: PostMeta[];
}

export default function FeaturedPosts({
  posts,
}: FeaturedPostsProps) {
  if (posts.length < 3) return null;

  const [mainPost, secondPost, thirdPost] = posts;

  const getCategoryName = (
    category: string | string[]
  ) => (Array.isArray(category) ? category[0] : category);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 max-w-7xl mx-auto">

        {/* Main Featured Post */}
        <Link
          href={`/${mainPost.slug}`}
          className="md:col-span-8 group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-[400px] md:h-[490px]"
        >
          <Image
            src={mainPost.image}
            alt={mainPost.imageAlt || mainPost.title}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="inline-block bg-primary px-3 py-1 text-xs font-semibold rounded mb-3">
              {getCategoryName(mainPost.category)}
            </span>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
              {mainPost.title}
            </h2>

            <div className="flex items-center text-sm text-gray-300">
              <span>{mainPost.author}</span>
              <span className="mx-2">•</span>
              <span>
                {format(
                  new Date(mainPost.date),
                  "MMMM d, yyyy"
                )}
              </span>
            </div>
          </div>
        </Link>

        {/* Right Side */}
        <div className="md:col-span-4 flex flex-col gap-5">

          {/* Second Post */}
          <Link
            href={`/${secondPost.slug}`}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-[250px] md:h-[235px]"
          >
            <Image
              src={secondPost.image}
              alt={secondPost.imageAlt || secondPost.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent dark:from-gray-900/80 dark:via-gray-900/40" />

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white dark:text-gray-200">
              <span className="inline-block bg-primary px-2 py-1 text-xs font-semibold rounded mb-2">
                {getCategoryName(secondPost.category)}
              </span>

              <h2 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2 leading-tight text-white dark:text-gray-200">
                {secondPost.title}
              </h2>

              <div className="flex items-center text-xs text-gray-300 dark:text-gray-500">
                <span>{secondPost.author}</span>
                <span className="mx-2">•</span>
                <span>
                  {format(
                    new Date(secondPost.date),
                    "MMM d, yyyy"
                  )}
                </span>
              </div>
            </div>
          </Link>

          {/* Third Post */}
          <Link
            href={`/${thirdPost.slug}`}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-[250px] md:h-[235px]"
          >
            <Image
              src={thirdPost.image}
              alt={thirdPost.imageAlt || thirdPost.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <span className="inline-block bg-primary px-2 py-1 text-xs font-semibold rounded mb-2">
                {getCategoryName(thirdPost.category)}
              </span>

              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                {thirdPost.title}
              </h3>

              <div className="flex items-center text-xs text-gray-300">
                <span>{thirdPost.author}</span>
                <span className="mx-2">•</span>
                <span>
                  {format(
                    new Date(thirdPost.date),
                    "MMM d, yyyy"
                  )}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}