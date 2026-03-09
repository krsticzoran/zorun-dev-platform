import { Container } from "@/components/layout/container";
import { CategoryCard } from "@/components/cards/categroy-card";
import { PaginationNav } from "@/components/ui/pagination-nav";
import { Post } from "@/type/post";

interface CategoryPostsGridProps {
  featuredPost: Post;
  gridPosts: Post[];
  category: string;
  currentPage: number;
  totalPages: number;
}

export function CategoryPostsGrid({
  featuredPost,
  gridPosts,
  category,
  currentPage,
  totalPages,
}: CategoryPostsGridProps) {
  return (
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
  );
}
