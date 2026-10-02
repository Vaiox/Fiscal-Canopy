import type { MetadataRoute } from "next";

import {
  getSortedPostsData,
  getCategories,
  getAllTags,
} from "@/lib/posts";
import { slugifyCategory, slugifyTag } from "@/lib/slugify";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.vercel.app";

  const posts = getSortedPostsData();
  const categories = getCategories();
  const tags = getAllTags();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map(
    (category) => ({
      url: `${baseUrl}/category/${slugifyCategory(category)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const tagPages: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${baseUrl}/tag/${slugifyTag(tag)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...postPages,
    ...categoryPages,
    ...tagPages,
  ];
}