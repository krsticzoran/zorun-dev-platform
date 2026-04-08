// components/HomeCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/type/post'

interface HomeCardProps {
  post: Post
  priority?: boolean
}

export default function HomeCard({ post, priority = false }: HomeCardProps) {
  return (
    <Link
      href={`/${post.category}/${post.slug}`}
      className="relative h-60 overflow-hidden p-1 bg-[#1b1b1b]"
    >
      <Image
        src={post.image}
        alt={post.imageAlt}
        fill
        sizes="(min-width: 768px) calc((min(1300px, 100vw) - 32px) / 3), 100vw"
        priority={priority}
        className="object-cover hover:scale-105 transition-all duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-white z-10 font-medium backdrop-blur-[20px] bg-black/25">
        {post.title}
      </div>
    </Link>
  )
}
