import Link from 'next/link'
import Image from 'next/image'
import { PostMeta } from '@/lib/posts'
import { format } from 'date-fns'

interface SidebarProps {
  popularPosts: PostMeta[]
  categories: string[]
}

export default function Sidebar({ popularPosts, categories }: SidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Ad Space */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center">
        <p className="text-sm font-semibold mb-2">ADVERTISEMENT</p>
        <p className="text-xs opacity-90">300x250</p>
      </div>

      {/* Popular Posts */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-transparent dark:border-gray-700">
        <div className="bg-gray-900 dark:bg-gray-700 text-white px-6 py-3">
          <h3 className="font-bold uppercase text-sm tracking-wide">Popular Posts</h3>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {popularPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="flex gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
            >
              <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {format(new Date(post.date), 'MMM d, yyyy')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-transparent dark:border-gray-700">
        <div className="bg-gray-900 dark:bg-gray-700 text-white px-6 py-3">
          <h3 className="font-bold uppercase text-sm tracking-wide">Recent Posts</h3>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {popularPosts.slice(0, 5).map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="flex gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
            >
              <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {format(new Date(post.date), 'MMM d, yyyy')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-transparent dark:border-gray-700">
        <div className="bg-gray-900 dark:bg-gray-700 text-white px-6 py-3">
          <h3 className="font-bold uppercase text-sm tracking-wide">Categories</h3>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/category/${category.toLowerCase()}`}
                  className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors py-2 px-3 rounded hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <span className="font-medium">{category}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">(12)</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
