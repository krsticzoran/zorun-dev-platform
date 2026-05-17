import Link from 'next/link'

interface PaginationNavProps {
  category: string
  currentPage: number
  totalPages: number
}

export function PaginationNav({ category, currentPage, totalPages }: PaginationNavProps) {
  if (totalPages <= 1) return null

  const prevHref =
    currentPage - 1 === 1 ? `/blog/${category}` : `/blog/${category}/page/${currentPage - 1}`

  const nextHref = `/blog/${category}/page/${currentPage + 1}`

  let startPage = Math.max(currentPage - 1, 1)
  const endPage = Math.min(startPage + 2, totalPages)

  startPage = Math.max(endPage - 2, 1)

  const pages = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      {currentPage > 1 && (
        <Link
          href={`/blog/${category}`}
          className="w-8 h-8 flex items-center justify-center bg-white text-black"
        >
          &laquo;
        </Link>
      )}

      {currentPage > 1 && (
        <Link
          href={prevHref}
          className="w-8 h-8 flex items-center justify-center bg-white text-black"
        >
          &lt;
        </Link>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={page === 1 ? `/blog/${category}` : `/blog/${category}/page/${page}`}
          className={`w-8 h-8 flex items-center justify-center rounded font-semibold ${
            page === currentPage ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={nextHref}
          className="w-8 h-8 flex items-center justify-center bg-white text-black"
        >
          &gt;
        </Link>
      )}

      {currentPage < totalPages && (
        <Link
          href={`/blog/${category}/page/${totalPages}`}
          className="w-8 h-8 flex items-center justify-center bg-white text-black"
        >
          &raquo;
        </Link>
      )}
    </div>
  )
}
