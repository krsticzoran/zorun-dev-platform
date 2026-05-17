import Link from 'next/link'
import { SectionCTA } from './section-cta'
import { categoriesData } from '@/lib/categories'

interface SectionHeaderProps {
  slug: string
  bgColor?: string
  btnColor?: string
  btnBorderColor?: string
}

export function SectionHeader({
  slug,
  bgColor = 'white',
  btnColor,
  btnBorderColor,
}: SectionHeaderProps) {
  const category = categoriesData[slug]

  return (
    <div className="flex justify-between flex-col md:flex-row gap-2 items-start md:items-center mb-4 xl:mb-6 pb-3">
      <Link href={`/blog/${slug}`}>
        <h2
          className={`text-[40px] sm:text-[48px] xl:text-[56px] leading-tight ${
            bgColor === 'black' ? 'text-white' : 'text-black '
          } uppercase font-medium`}
        >
          {category.title}
        </h2>
      </Link>
      <SectionCTA
        href={`/blog/${slug}`}
        text={category.ctaText}
        btnColor={btnColor}
        btnBorderColor={btnBorderColor}
      />
    </div>
  )
}
