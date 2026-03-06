import Image from "next/image";
import { Container } from "@/components/layout/container";
import { CategoryCard } from "@/components/cards/categroy-card";
import { PaginationNav } from "@/components/ui/pagination-nav";
import { Post } from "@/type/post";
import { CategoryData } from "@/type/category-data";

interface CategoryPageLayoutProps {
  categoryMeta: CategoryData;
  featuredPost: Post;
  gridPosts: Post[];
  category: string;
  currentPage: number;
  totalPages: number;
}

export function CategoryPageLayout({
  categoryMeta,
  featuredPost,
  gridPosts,
  category,
  currentPage,
  totalPages,
}: CategoryPageLayoutProps) {
  return (
    <main className="bg-bg-secondary pb-[100px] xl:pb-[120px] page-fade">
      <div className="relative w-full h-[400px] xl:h-[calc(100vh-330px)]">
        <Image
          src={categoryMeta.image}
          alt={categoryMeta.alt}
          fill
          quality={75}
          priority
          sizes="100vw"
          className={`object-cover z-0 ${
            categoryMeta.objectPosition === "top"
              ? "object-top"
              : categoryMeta.objectPosition === "bottom"
              ? "object-bottom"
              : "object-center"
          }`}
        />
      </div>

      <Container className="pt-16 sm:pt-20 xl:pt-24 mb-5">
        <h1 className="text-black max-w-[1000px] capitalize mb-10 xl:mb-14">
          {categoryMeta.excerpt}
        </h1>
      </Container>

      <Container className="flex flex-col gap-3">
        <CategoryCard post={featuredPost} variant="featured" />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          {gridPosts.map((post) => (
            <CategoryCard post={post} key={post.slug} />
          ))}
        </div>

        <PaginationNav
          category={category}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Container>
    </main>
  );
}
