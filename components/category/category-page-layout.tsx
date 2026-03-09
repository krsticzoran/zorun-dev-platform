import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Post } from "@/type/post";
import { CategoryData } from "@/type/category-data";
import { CategoryFilter } from "@/components/category/category-filter";
import { CategoryPostsGrid } from "./category-posts-grid";
import { Suspense } from "react";

interface CategoryPageLayoutProps {
  categoryMeta: CategoryData;
  featuredPost: Post;
  gridPosts: Post[];
  category: string;
  currentPage: number;
  totalPages: number;
  categoryPosts: Post[];
}

export async function CategoryPageLayout({
  categoryMeta,
  featuredPost,
  gridPosts,
  category,
  currentPage,
  totalPages,
  categoryPosts,
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
        <Suspense fallback={null}>
          <CategoryFilter
            tags={categoryMeta.tags}
            categoryPosts={categoryPosts}
            featuredPost={featuredPost}
            gridPosts={gridPosts}
            category={category}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </Suspense>
      </Container>
    </main>
  );
}
