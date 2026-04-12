import { posts } from '#site/content'

import { notFound } from 'next/navigation'
import { categoriesData } from '@/lib/categories'
import { POSTS_PER_PAGE, SITE_URL } from '@/lib/constants'
import { CategoryPageLayout } from '@/components/category/category-page-layout'

interface CategoryPageProps {
  params: Promise<{ category: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  return Object.keys(categoriesData).map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params

  const categoryMeta = categoriesData[category]

  if (!categoryMeta) {
    notFound()
  }

  return {
    title: `Zorun  - ${categoryMeta.title}`,
    description: categoryMeta.description,
    alternates: {
      canonical: `${SITE_URL}/${category}`,
    },
    openGraph: {
      title: `Zorun  - ${categoryMeta.title}`,
      description: categoryMeta.description,
      url: `${SITE_URL}/${category}`,
      type: 'website',
      images: [
        {
          url: categoryMeta.image.src,
          alt: categoryMeta.alt,
          width: 1200,
          height: 600,
        },
      ],
    },
  }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category } = await params

  const categoryMeta = categoriesData[category]

  const categoryPosts = posts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  if (!categoryPosts.length) {
    notFound()
  }

  const totalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE)

  const paginatedPosts = categoryPosts.slice(0, POSTS_PER_PAGE)

  const featuredPost = paginatedPosts[0]
  const gridPosts = paginatedPosts.slice(1)

  return (
    <CategoryPageLayout
      categoryMeta={categoryMeta}
      featuredPost={featuredPost}
      gridPosts={gridPosts}
      category={category}
      currentPage={1}
      totalPages={totalPages}
      categoryPosts={categoryPosts}
      searchParams={searchParams}
    />
  )
}
