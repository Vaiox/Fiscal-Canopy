import type { Metadata } from "next";

import {
  getSortedPostsData,
  getCategories,
} from "@/lib/posts";
import { slugifyCategory } from "@/lib/slugify";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  const categories = getCategories();

  return categories.map((category) => ({
    category: slugifyCategory(category),
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  const categoryName =
    category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${categoryName} Articles | FiscalCanopy`,
    description: `Browse all ${categoryName} articles and guides on FiscalCanopy`,
  };
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;

  const allPosts = getSortedPostsData();
  const categories = getCategories();

  const categoryName =
    category.charAt(0).toUpperCase() + category.slice(1);

  const categoryPosts = allPosts.filter((post) => {
    if (Array.isArray(post.category)) {
      return post.category.some(
        (cat) =>
          slugifyCategory(cat) === slugifyCategory(category)
      );
    }

    return (
      slugifyCategory(post.category) ===
      slugifyCategory(category)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

        {/* Category Posts */}
        <div className="md:col-span-2">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 font-heading text-gray-900 dark:text-gray-100">
              {categoryName}
            </h1>

            <p className="text-gray-600 dark:text-gray-400">
              {categoryPosts.length} articles found
            </p>
          </div>

          {categoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryPosts.map((post) => (
                <PostCard
                  key={post.slug}
                  post={post}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 text-center border border-transparent dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No posts found in this category yet.
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