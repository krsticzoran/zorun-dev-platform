import { categoriesData } from '@/lib/categories'

export type MenuLink = {
  href: string
  label: string
  visible?: boolean
}

export function getMenuLinks(): MenuLink[] {
  const categories = Object.entries(categoriesData).map(([slug, category]) => ({
    href: `/blog/${slug}`,
    label: category.title,
    visible: category?.visible ?? true,
  }))

  // Return only category links here; tools will be rendered in a grouped
  // dropdown in the menu UI (so categories appear first as requested).
  return [...categories]
}

export const tools: MenuLink[] = [
  { href: '/tools/pace-calculator', label: 'Pace Calculator' },
  { href: '/tools/training-calculator', label: 'Training Zones' },
]
