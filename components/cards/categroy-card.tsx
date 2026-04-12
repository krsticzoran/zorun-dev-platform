import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "#site/content";
import { formatDate } from "@/lib/date";

interface PostCardProps {
  post: Post;
  variant?: "featured" | "regular";
  titleAs?: "h2" | "h3" | "h4";
  bgColor?: string;
  readingTimeBgColor?: string;
}

export function CategoryCard({
  post,
  variant = "regular",
  titleAs = "h2",
  bgColor = "bg-white",
  readingTimeBgColor = "bg-[#efefef]",
}: PostCardProps) {
  const isFeatured = variant === "featured";
  const TitleTag = titleAs;

  return (
    <Link
      href={`/${post.category}/${post.slug}`}
      className={`${bgColor} p-1 flex flex-col ${
        isFeatured ? "xl:flex-row gap-6" : ""
      }`}
    >
      <div
        className={`relative w-full ${
          isFeatured ? "xl:w-1/2 xl:h-100 aspect-3/2" : "aspect-3/2"
        } overflow-hidden`}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          quality={75}
          fill
          sizes="(min-width: 1280px) 650px, 100vw"
          className="object-cover hover:scale-110 transition-all duration-300"
        />
      </div>
      <div
        className={`pt-6 px-5 pb-4 flex flex-col gap-5 ${
          isFeatured ? "xl:w-1/2 xl:gap-8" : ""
        }`}
      >
        <div className="flex justify-between text-custom-dark text-sm leading-5 font-semibold">
          <p
            className={`w-fit inline-flex items-center gap-1 py-1.5 px-3 ${readingTimeBgColor}  `}
          >
            <Clock size={14} className="opacity-70" />
            {post.metadata.readingTime} min čitanja
          </p>
          <p className={`w-fit inline-flex items-center gap-1 py-1.5 px-3  `}>
            {formatDate(post.date)}
          </p>
        </div>
        <TitleTag
          className={`text-xl sm:text-[22px] xl:text-[26px] font-medium text-black`}
        >
          {post.title}
        </TitleTag>
        <p className="leading-[22px] text-custom-dark-gray font-medium line-clamp-3 sm:line-clamp-2">
          {post.description}
        </p>
      </div>
    </Link>
  );
}
