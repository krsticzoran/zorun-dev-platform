import missionImg from '@/assets/images/categories/sub3.webp'
import trainingImg from '@/assets/images/categories/image.webp'
import lifestyleImg from '@/assets/images/categories/oprema.webp'

import { StaticImageData } from 'next/image'
import { Tag } from '@/lib/tags'

export const categoriesData: Record<
  string,
  {
    title: string
    description: string
    image: StaticImageData
    alt: string
    objectPosition?: 'center' | 'top' | 'bottom'
    excerpt: string
    ctaText: string
    visible?: boolean
    tags: Tag[]
  }
> = {
  'sub-3-journey': {
    title: 'Sub 3 Journey',
    description:
      'At 45, starting over is a choice. This is the reality of chasing a sub-3 hour marathon while balancing a professional career and being a father. No filters, just the road to December 2027.',
    image: missionImg,
    alt: 'The path to a sub-3 hour marathon at 45',
    excerpt: 'The road to a sub-3 hour marathon at 45.',
    ctaText: 'Follow the Journey',
    tags: [],
  },
  'training-after-40': {
    title: 'Training After 40',
    description:
      'Running in your 40s is a different game. It’s about being faster and stronger while balancing a career, a family, and the reality of aging. No shortcuts, no injuries—just a smart approach for those of us who refuse to slow down.',
    image: trainingImg,
    alt: 'A focused runner over 40 maintaining a steady pace',
    excerpt: 'Your best miles are still ahead of you. Keep moving forward.',
    ctaText: 'Start Training',
    objectPosition: 'top',
    tags: ['beginner', 'intermediate', 'advanced'],
  },
  'beyond-the-miles': {
    title: 'Beyond the Miles',
    description:
      'Running is about more than just the miles on your watch. This is where we talk about everything that happens between workouts—from recovery and nutrition to time management and staying motivated. Everything you need to stay consistent and enjoy the ride.',
    image: lifestyleImg,
    alt: "A runner's watch, healthy meal, and gear on a table",
    excerpt: 'How to balance your running goals with a busy life.',
    ctaText: 'Explore More',
    tags: [],
  },
}
