import { CategoryCard } from '@/components/cards/categroy-card'
import { PaginationNav } from '@/components/ui/pagination-nav'
import type { Post } from '#site/content'

interface CategoryPostsGridProps {
  featuredPost: Post
  gridPosts: Post[]
  category: string
  currentPage: number
  totalPages: number
}

export function CategoryPostsGrid({
  featuredPost,
  gridPosts,
  category,
  currentPage,
  totalPages,
}: CategoryPostsGridProps) {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <CategoryCard post={featuredPost} variant="featured" />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        {gridPosts.map((post) => (
          <CategoryCard post={post} key={post.slug} />
        ))}
      </div>

      <PaginationNav category={category} currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}
