import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import { slugifyCategory } from "./slugify";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt?: string;
  category: string | string[];
  author: string;
  readTime: string;
  tags?: string[];
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt?: string;
  category: string | string[];
  author: string;
  readTime: string;
  tags?: string[];
}

/**
 * Get all Markdown filenames from the posts directory.
 */
function getPostFileNames(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
}

/**
 * Convert frontmatter category data into a predictable form.
 */
function normalizeCategories(
  category: unknown
): string | string[] {
  if (Array.isArray(category)) {
    return category
      .filter(Boolean)
      .map((value) => String(value).trim())
      .filter(Boolean);
  }

  if (typeof category === "string") {
    return category.trim();
  }

  return "";
}

/**
 * Convert frontmatter tags into a predictable string array.
 */
function normalizeTags(tags: unknown): string[] {
  if (!Array.isArray(tags)) {
    return [];
  }

  return tags
    .filter(Boolean)
    .map((tag) => String(tag).trim())
    .filter(Boolean);
}

/**
 * Read metadata from a single Markdown post.
 */
function readPostMeta(fileName: string): PostMeta {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data } = matter(fileContents);

  return {
    slug,
    title: String(data.title ?? ""),
    date: String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    image: String(data.image ?? ""),
    imageAlt:
      data.imageAlt !== undefined
        ? String(data.imageAlt)
        : undefined,
    category: normalizeCategories(data.category),
    author: String(data.author ?? ""),
    readTime: String(data.readTime ?? ""),
    tags: normalizeTags(data.tags),
  };
}

/**
 * Get all posts sorted by date, newest first.
 */
export function getSortedPostsData(): PostMeta[] {
  const allPostsData = getPostFileNames().map(readPostMeta);

  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return dateB - dateA;
  });
}

/**
 * Get all available post slugs.
 */
export function getAllPostSlugs(): { slug: string }[] {
  return getPostFileNames().map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

/**
 * Get the complete data for a single post.
 */
export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  /**
   * The article title is rendered separately by the article page.
   * Remove an H1 from Markdown content to prevent duplicate titles.
   */
  const contentWithoutH1 = content.replace(/^#\s+.+$/m, "").trim();

  const contentHtml = await marked(contentWithoutH1);

  return {
    slug,
    content: contentHtml,
    title: String(data.title ?? ""),
    date: String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    image: String(data.image ?? ""),
    imageAlt:
      data.imageAlt !== undefined
        ? String(data.imageAlt)
        : undefined,
    category: normalizeCategories(data.category),
    author: String(data.author ?? ""),
    readTime: String(data.readTime ?? ""),
    tags: normalizeTags(data.tags),
  };
}

/**
 * Get a paginated list of posts.
 */
export function getPostsByPage(
  page: number,
  postsPerPage: number = 6
): {
  posts: PostMeta[];
  totalPages: number;
  currentPage: number;
} {
  const allPosts = getSortedPostsData();

  const safePage = Math.max(1, page);
  const safePostsPerPage = Math.max(1, postsPerPage);

  const totalPages = Math.ceil(
    allPosts.length / safePostsPerPage
  );

  const startIndex =
    (safePage - 1) * safePostsPerPage;

  const endIndex =
    startIndex + safePostsPerPage;

  const posts = allPosts.slice(
    startIndex,
    endIndex
  );

  return {
    posts,
    totalPages,
    currentPage: safePage,
  };
}

/**
 * Get related posts based on category.
 */
export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 4
): PostMeta[] {
  const allPosts = getSortedPostsData();

  const targetCategorySlug =
    slugifyCategory(category);

  return allPosts
    .filter((post) => {
      if (post.slug === currentSlug) {
        return false;
      }

      if (Array.isArray(post.category)) {
        return post.category.some(
          (cat) =>
            slugifyCategory(cat) ===
            targetCategorySlug
        );
      }

      return (
        slugifyCategory(post.category) ===
        targetCategorySlug
      );
    })
    .slice(0, limit);
}

/**
 * Get all unique categories.
 *
 * Original display names are preserved while category
 * matching is normalized through the slug.
 */
export function getCategories(): string[] {
  const allPosts = getSortedPostsData();

  const categories = allPosts.flatMap((post) => {
    if (Array.isArray(post.category)) {
      return post.category;
    }

    return [post.category];
  });

  const uniqueCategories = new Map<
    string,
    string
  >();

  categories.forEach((category) => {
    if (!category) {
      return;
    }

    const cleanCategory =
      String(category).trim();

    const slug =
      slugifyCategory(cleanCategory);

    if (!slug) {
      return;
    }

    if (!uniqueCategories.has(slug)) {
      uniqueCategories.set(
        slug,
        cleanCategory
      );
    }
  });

  return Array.from(
    uniqueCategories.values()
  );
}

/**
 * Get every category with its real post count.
 */
export function getCategoriesWithCount(): Array<{
  category: string;
  count: number;
}> {
  const allPosts = getSortedPostsData();

  const categoryCounts = new Map<
    string,
    {
      category: string;
      count: number;
    }
  >();

  allPosts.forEach((post) => {
    const postCategories =
      Array.isArray(post.category)
        ? post.category
        : [post.category];

    /**
     * Prevent a category appearing twice in one
     * post from being counted twice.
     */
    const uniquePostCategorySlugs =
      new Set<string>();

    postCategories.forEach((category) => {
      if (!category) {
        return;
      }

      const cleanCategory =
        String(category).trim();

      const slug =
        slugifyCategory(cleanCategory);

      if (
        !slug ||
        uniquePostCategorySlugs.has(slug)
      ) {
        return;
      }

      uniquePostCategorySlugs.add(slug);

      const existing =
        categoryCounts.get(slug);

      if (existing) {
        existing.count += 1;
      } else {
        categoryCounts.set(slug, {
          category: cleanCategory,
          count: 1,
        });
      }
    });
  });

  return Array.from(
    categoryCounts.values()
  );
}

/**
 * Get previous and next posts for article navigation.
 *
 * Posts are sorted newest-first:
 *
 * previousPost → older article
 * nextPost     → newer article
 */
export function getAdjacentPosts(
  currentSlug: string
): {
  previousPost: PostMeta | null;
  nextPost: PostMeta | null;
} {
  const allPosts = getSortedPostsData();

  const currentIndex =
    allPosts.findIndex(
      (post) =>
        post.slug === currentSlug
    );

  if (currentIndex === -1) {
    return {
      previousPost: null,
      nextPost: null,
    };
  }

  return {
    previousPost:
      currentIndex <
      allPosts.length - 1
        ? allPosts[currentIndex + 1]
        : null,

    nextPost:
      currentIndex > 0
        ? allPosts[currentIndex - 1]
        : null,
  };
}

/**
 * Get all unique tags.
 */
export function getAllTags(): string[] {
  const allPosts = getSortedPostsData();

  const tags = allPosts.flatMap(
    (post) => post.tags || []
  );

  return Array.from(
    new Set(tags)
  ).sort((a, b) =>
    a.localeCompare(b)
  );
}

/**
 * Get posts matching a tag.
 *
 * Matching is case-insensitive.
 */
export function getPostsByTag(
  tag: string
): PostMeta[] {
  const allPosts = getSortedPostsData();

  const targetTag =
    tag.trim().toLowerCase();

  return allPosts.filter((post) => {
    if (!post.tags) {
      return false;
    }

    return post.tags.some(
      (postTag) =>
        postTag.trim().toLowerCase() ===
        targetTag
    );
  });
}

/**
 * Get every tag with its post count.
 */
export function getTagsWithCount(): Array<{
  tag: string;
  count: number;
}> {
  const allPosts = getSortedPostsData();

  const tagCounts = new Map<
    string,
    {
      tag: string;
      count: number;
    }
  >();

  allPosts.forEach((post) => {
    if (!post.tags) {
      return;
    }

    const countedTags =
      new Set<string>();

    post.tags.forEach((tag) => {
      const cleanTag =
        tag.trim();

      if (!cleanTag) {
        return;
      }

      const normalized =
        cleanTag.toLowerCase();

      if (countedTags.has(normalized)) {
        return;
      }

      countedTags.add(normalized);

      const existing =
        tagCounts.get(normalized);

      if (existing) {
        existing.count += 1;
      } else {
        tagCounts.set(normalized, {
          tag: cleanTag,
          count: 1,
        });
      }
    });
  });

  return Array.from(
    tagCounts.values()
  ).sort(
    (a, b) => b.count - a.count
  );
}