import { posts } from '#site/content'
import { notFound } from 'next/navigation'
import { categoriesData } from '@/lib/categories'
import { POSTS_PER_PAGE, SITE_URL } from '@/lib/constants'
import { CategoryPageLayout } from '@/components/category/category-page-layout'

interface CategoryPageProps {
  params: Promise<{ category: string; page: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  const pages: { category: string; page: string }[] = []

  Object.keys(categoriesData).forEach((category) => {
    const categoryPosts = posts.filter((post) => post.category === category)
    const totalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE)

    for (let i = 2; i <= totalPages; i++) {
      pages.push({ category, page: i.toString() })
    }
  })

  return pages
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category, page } = await params

  const categoryMeta = categoriesData[category]
  if (!categoryMeta) notFound()

  return {
    title: `Trkačke priče - ${categoryMeta.title} - Strana ${page}`,
    description: categoryMeta.description,
    alternates: {
      canonical: `${SITE_URL}/${category}/page/${page}`,
    },
    openGraph: {
      title: `Trkačke priče - ${categoryMeta.title} - Strana ${page}`,
      description: categoryMeta.description,
      url: `${SITE_URL}/${category}/page/${page}`,
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
  const { category, page } = await params

  const categoryMeta = categoriesData[category]
  if (!categoryMeta) notFound()

  const categoryPosts = posts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  if (!categoryPosts.length) notFound()

  const currentPage = Number(page)
  if (currentPage < 1) notFound()

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const paginatedPosts = categoryPosts.slice(startIndex, endIndex)

  if (!paginatedPosts.length) notFound()

  const featuredPost = paginatedPosts[0]
  const gridPosts = paginatedPosts.slice(1)

  const totalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE)

  return (
    <CategoryPageLayout
      categoryMeta={categoryMeta}
      featuredPost={featuredPost}
      gridPosts={gridPosts}
      category={category}
      currentPage={currentPage}
      totalPages={totalPages}
      categoryPosts={categoryPosts}
      searchParams={searchParams}
    />
  )
}
