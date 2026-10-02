import type { Metadata } from "next";

import {
  getSortedPostsData,
  getAllTags,
} from "@/lib/posts";
import { slugifyTag } from "@/lib/slugify";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export function generateStaticParams() {
  const tags = getAllTags();

  return tags.map((tag) => ({
    tag: slugifyTag(tag),
  }));
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params;

  const tagName = tag
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  return {
    title: `${tagName} Articles | FiscalCanopy`,
    description: `Browse all articles tagged with ${tagName} on FiscalCanopy`,
  };
}

export default async function TagPage({
  params,
}: TagPageProps) {
  const { tag } = await params;

  const allPosts = getSortedPostsData();
  const categories = Array.from(
    new Set(
      allPosts.flatMap((post) =>
        Array.isArray(post.category)
          ? post.category
          : [post.category]
      )
    )
  );

  const decodedTag = decodeURIComponent(tag);

  const tagPosts = allPosts.filter((post) =>
    post.tags?.some(
      (postTag) =>
        slugifyTag(postTag) ===
        slugifyTag(decodedTag)
    )
  );

  const tagName = decodedTag
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

        {/* Tag Posts */}
        <div className="md:col-span-2">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 font-heading text-gray-900 dark:text-gray-100">
              #{tagName}
            </h1>

            <p className="text-gray-600 dark:text-gray-400">
              {tagPosts.length} articles found
            </p>
          </div>

          {tagPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tagPosts.map((post) => (
                <PostCard
                  key={post.slug}
                  post={post}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 text-center border border-transparent dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No posts found with this tag yet.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <Sidebar
            popularPosts={allPosts.slice(0, 6)}
            categories={categories}
          />
        </div>
      </div>
    </div>
  );
}