import { posts } from "#site/content";

export function useCategoryPosts(category: string, limit: number = 3) {
  const categoryPosts = posts
    .filter((post) => post.category === category && post.featured !== true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

  return categoryPosts;
}
