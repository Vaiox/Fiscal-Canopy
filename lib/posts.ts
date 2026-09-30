import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  image: string
  imageAlt?: string // Alt text for images (SEO)
  category: string | string[] // Support single or multiple categories
  author: string
  readTime: string
  tags?: string[] // Optional tags for SEO
}

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  imageAlt?: string // Alt text for images (SEO)
  category: string | string[] // Support single or multiple categories
  author: string
  readTime: string
  tags?: string[] // Optional tags for SEO
}

/**
 * Convert a category name into a URL-safe slug.
 *
 * Examples:
 * "Tech Tips"          -> "tech-tips"
 * "Personal Finance"   -> "personal-finance"
 * "Tax & GST"          -> "tax-and-gst"
 * "Money / Banking"    -> "money-banking"
 */
export function slugifyCategory(category: string): string {
  return category
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getSortedPostsData(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        image: data.image,
        imageAlt: data.imageAlt,
        category: data.category,
        author: data.author,
        readTime: data.readTime,
        tags: data.tags || [],
      }
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      return {
        slug: fileName.replace(/\.md$/, ''),
      }
    })
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Remove H1 tags from content to avoid duplicate titles
  // H1 is rendered separately
  const contentWithoutH1 = content.replace(/^#\s+.+$/m, '')
  const contentHtml = marked(contentWithoutH1)

  return {
    slug,
    content: contentHtml as string,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    image: data.image,
    imageAlt: data.imageAlt,
    category: data.category,
    author: data.author,
    readTime: data.readTime,
    tags: data.tags || [],
  }
}

export function getPostsByPage(
  page: number,
  postsPerPage: number = 6
): {
  posts: PostMeta[]
  totalPages: number
  currentPage: number
} {
  const allPosts = getSortedPostsData()
  const totalPages = Math.ceil(allPosts.length / postsPerPage)
  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const posts = allPosts.slice(startIndex, endIndex)

  return {
    posts,
    totalPages,
    currentPage: page,
  }
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 4
): PostMeta[] {
  const allPosts = getSortedPostsData()
  const targetCategorySlug = slugifyCategory(category)

  return allPosts
    .filter(post => {
      if (post.slug === currentSlug) return false

      if (Array.isArray(post.category)) {
        return post.category.some(
          cat => slugifyCategory(cat) === targetCategorySlug
        )
      }

      return slugifyCategory(post.category) === targetCategorySlug
    })
    .slice(0, limit)
}

export function getCategories(): string[] {
  const allPosts = getSortedPostsData()

  const categories = allPosts.flatMap(post => {
    if (Array.isArray(post.category)) {
      return post.category
    }

    return [post.category]
  })

  // Keep the original display name while preventing duplicate
  // category URLs when capitalization/spacing differs.
  const uniqueCategories = new Map<string, string>()

  categories.forEach(category => {
    if (!category) return

    const cleanCategory = String(category).trim()
    const slug = slugifyCategory(cleanCategory)

    if (!slug) return

    if (!uniqueCategories.has(slug)) {
      uniqueCategories.set(slug, cleanCategory)
    }
  })

  return Array.from(uniqueCategories.values())
}

/**
 * Get every category with its real number of posts.
 *
 * Example:
 * [
 *   { category: "Tech Tips", count: 1 },
 *   { category: "Finance", count: 8 }
 * ]
 */
export function getCategoriesWithCount(): Array<{
  category: string
  count: number
}> {
  const allPosts = getSortedPostsData()

  const categoryCounts = new Map<
    string,
    {
      category: string
      count: number
    }
  >()

  allPosts.forEach(post => {
    const postCategories = Array.isArray(post.category)
      ? post.category
      : [post.category]

    // Prevent accidentally counting the same category twice
    // if it appears twice in one post's category array.
    const uniquePostCategorySlugs = new Set<string>()

    postCategories.forEach(category => {
      if (!category) return

      const cleanCategory = String(category).trim()
      const slug = slugifyCategory(cleanCategory)

      if (!slug || uniquePostCategorySlugs.has(slug)) {
        return
      }

      uniquePostCategorySlugs.add(slug)

      const existing = categoryCounts.get(slug)

      if (existing) {
        existing.count += 1
      } else {
        categoryCounts.set(slug, {
          category: cleanCategory,
          count: 1,
        })
      }
    })
  })

  return Array.from(categoryCounts.values())
}

/**
 * Get previous and next posts for navigation.
 */
export function getAdjacentPosts(currentSlug: string): {
  previousPost: PostMeta | null
  nextPost: PostMeta | null
} {
  const allPosts = getSortedPostsData()
  const currentIndex = allPosts.findIndex(
    post => post.slug === currentSlug
  )

  if (currentIndex === -1) {
    return {
      previousPost: null,
      nextPost: null,
    }
  }

  return {
    previousPost:
      currentIndex < allPosts.length - 1
        ? allPosts[currentIndex + 1]
        : null,

    nextPost:
      currentIndex > 0
        ? allPosts[currentIndex - 1]
        : null,
  }
}

/**
 * Get all unique tags from all posts.
 */
export function getAllTags(): string[] {
  const allPosts = getSortedPostsData()
  const tags = allPosts.flatMap(post => post.tags || [])

  return Array.from(new Set(tags)).sort()
}

/**
 * Get posts by tag.
 */
export function getPostsByTag(tag: string): PostMeta[] {
  const allPosts = getSortedPostsData()

  return allPosts.filter(post => {
    if (!post.tags) return false

    return post.tags.some(
      t => t.toLowerCase() === tag.toLowerCase()
    )
  })
}

/**
 * Get tag with post count.
 */
export function getTagsWithCount(): Array<{
  tag: string
  count: number
}> {
  const allPosts = getSortedPostsData()
  const tagCounts: { [key: string]: number } = {}

  allPosts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1
      })
    }
  })

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({
      tag,
      count,
    }))
    .sort((a, b) => b.count - a.count)
}
