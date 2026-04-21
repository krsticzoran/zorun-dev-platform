import { categoriesData } from '@/lib/categories'

export type MenuLink = {
  href: string
  label: string
  visible?: boolean
}

export function getMenuLinks(): MenuLink[] {
  const calculators: MenuLink[] = [
    { href: '/pace-calculator', label: 'Pace Calculator' },
    { href: '/training-calculator', label: 'Training Zones' },
  ]

  const categories = Object.entries(categoriesData).map(([slug, category]) => ({
    href: `/${slug}`,
    label: category.title,
    visible: category?.visible ?? true,
  }))

  // Return only category links here; calculators will be rendered in a grouped
  // dropdown in the menu UI (so categories appear first as requested).
  return [...categories]
}

export const calculators: MenuLink[] = [
  { href: '/pace-calculator', label: 'Pace Calculator' },
  { href: '/training-calculator', label: 'Training Zones' },
]
