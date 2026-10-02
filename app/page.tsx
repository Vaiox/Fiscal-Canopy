import {
  getSortedPostsData,
  getPostsByPage,
  getCategories,
} from "@/lib/posts";
import FeaturedPosts from "@/components/FeaturedPosts";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";

export default function Home() {
  const allPosts = getSortedPostsData();
  const { posts, totalPages, currentPage } = getPostsByPage(1, 6);
  const categories = getCategories();

  return (
    <>
      {/* Featured Posts Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-8 mb-8">
        <FeaturedPosts posts={allPosts.slice(0, 3)} />
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Posts Grid - 2/3 width */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="md:col-span-1">
            <Sidebar
              popularPosts={allPosts.slice(0, 6)}
              categories={categories}
            />
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-8 lg:py-12 mt-8 lg:mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-6 lg:mb-8 font-heading text-gray-900 dark:text-gray-100">
            YOU MAY ALSO LIKE
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {allPosts.slice(3, 7).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}