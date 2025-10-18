import { getSortedPostsData, getAllTags, getPostsByTag } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Sidebar from '@/components/Sidebar'
import { getCategories } from '@/lib/posts'

export function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export function generateMetadata({ params }: { params: { tag: string } }) {
  const tag = params.tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return {
    title: `${tag} Articles | FiscalCanopy`,
    description: `Browse all articles tagged with ${tag} on FiscalCanopy`,
    keywords: tag,
  }
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const allPosts = getSortedPostsData()
  const categories = getCategories()
  
  // Convert URL tag back to display format
  const tagDisplay = params.tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  
  // Filter posts by tag (case-insensitive)
  const tagPosts = allPosts.filter((post) => {
    if (!post.tags) return false
    return post.tags.some(t => t.toLowerCase().replace(/\s+/g, '-') === params.tag.toLowerCase())
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-2">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-primary dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <h1 className="text-4xl font-bold font-heading text-gray-900 dark:text-gray-100">{tagDisplay}</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{tagPosts.length} {tagPosts.length === 1 ? 'article' : 'articles'} found</p>
          </div>

          {tagPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tagPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 text-center border border-transparent dark:border-gray-700">
              <svg className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <p className="text-gray-500 dark:text-gray-400 text-lg">No posts found with this tag yet.</p>
            </div>
          )}
        </div>

        <div className="md:col-span-1">
          <Sidebar popularPosts={allPosts.slice(0, 6)} categories={categories} />
        </div>
      </div>
    </div>
  )
}
