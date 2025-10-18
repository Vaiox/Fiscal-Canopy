import { getPostsByPage, getSortedPostsData, getCategories } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Sidebar from '@/components/Sidebar'
import Pagination from '@/components/Pagination'

export function generateStaticParams() {
  const allPosts = getSortedPostsData()
  const totalPages = Math.ceil(allPosts.length / 6)
  
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2), // Start from page 2
  }))
}

export default function PaginatedPage({ params }: { params: { page: string } }) {
  const pageNumber = parseInt(params.page)
  const { posts, totalPages, currentPage } = getPostsByPage(pageNumber, 6)
  const allPosts = getSortedPostsData()
  const categories = getCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Posts Grid - 2/3 width */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-6 font-heading">All Posts - Page {currentPage}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>

        {/* Sidebar - 1/3 width */}
        <div className="md:col-span-1">
          <Sidebar popularPosts={allPosts.slice(0, 6)} categories={categories} />
        </div>
      </div>
    </div>
  )
}
