import Link from 'next/link'
import { Tag, TAGS } from '@/lib/tags'
import type { Post } from '#site/content'
import { CategoryCard } from '@/components/cards/categroy-card'
import { CategoryPostsGrid } from './category-posts-grid'

interface CategoryFilterProps {
  tags: Tag[]
  categoryPosts: Post[]
  featuredPost: Post
  gridPosts: Post[]
  category: string
  currentPage: number
  totalPages: number
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function CategoryFilter({
  tags,
  categoryPosts,
  featuredPost,
  gridPosts,
  category,
  currentPage,
  totalPages,
  searchParams,
}: CategoryFilterProps) {
  const resolvedParams = await searchParams
  const activeTag = (resolvedParams.tag as string) || null

  const filteredPosts = activeTag
    ? categoryPosts
        .filter((post) => post.tags?.includes(activeTag as Tag))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : []

  if (!tags || tags.length === 0) {
    return (
      <CategoryPostsGrid
        featuredPost={featuredPost}
        gridPosts={gridPosts}
        category={category}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    )
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href={`/${category}`}
          scroll={false}
          className={`px-3 py-1 rounded font-semibold transition-colors ${
            !activeTag
              ? 'text-white bg-black'
              : 'text-black bg-white hover:bg-gray-100 border border-gray-200'
          }`}
        >
          All posts
        </Link>

        {tags.map((tagValue) => (
          <Link
            key={tagValue}
            href={`/${category}?tag=${tagValue}`}
            scroll={false}
            className={`px-3 py-1 rounded font-semibold transition-colors ${
              activeTag === tagValue
                ? 'text-white bg-black'
                : 'text-black bg-white hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {TAGS[tagValue]}
          </Link>
        ))}
      </div>

      {activeTag ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-5">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <CategoryCard post={post} key={post.slug} />)
          ) : (
            <p className="text-gray-500 py-10">No posts with this tag.</p>
          )}
        </div>
      ) : (
        <CategoryPostsGrid
          featuredPost={featuredPost}
          gridPosts={gridPosts}
          category={category}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  )
}
