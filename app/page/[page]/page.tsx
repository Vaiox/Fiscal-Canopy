import type { Metadata } from "next";

import {
  getPostsByPage,
  getSortedPostsData,
  getCategories,
} from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";

interface PageProps {
  params: Promise<{
    page: string;
  }>;
}

export function generateStaticParams() {
  const allPosts = getSortedPostsData();
  const postsPerPage = 6;
  const totalPages = Math.ceil(
    allPosts.length / postsPerPage
  );

  return Array.from(
    { length: Math.max(totalPages - 1, 0) },
    (_, index) => ({
      page: String(index + 2),
    })
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { page } = await params;

  return {
    title: `Page ${page} | FiscalCanopy`,
    description: `Browse page ${page} of FiscalCanopy articles.`,
  };
}

export default async function PaginatedHome({
  params,
}: PageProps) {
  const { page: pageParam } = await params;

  const page = Number.parseInt(pageParam, 10);

  const currentPage =
    Number.isFinite(page) && page > 1 ? page : 2;

  const { posts, totalPages } = getPostsByPage(
    currentPage,
    6
  );

  const allPosts = getSortedPostsData();
  const categories = getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

        {/* Posts */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                post={post}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
          />
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