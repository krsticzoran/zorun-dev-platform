"use client";
import { Tag, TAGS } from "@/lib/tags";
import { useQueryState } from "nuqs";
import { Post } from "@/type/post";
import { Container } from "@/components/layout/container";
import { CategoryCard } from "@/components/cards/categroy-card";
import { CategoryPostsGrid } from "./category-posts-grid";

interface CategoryFilterProps {
  tags: Tag[];
  categoryPosts: Post[];
  featuredPost: Post;
  gridPosts: Post[];
  category: string;
  currentPage: number;
  totalPages: number;
}

export function CategoryFilter({
  tags,
  categoryPosts,
  featuredPost,
  gridPosts,
  category,
  currentPage,
  totalPages,
}: CategoryFilterProps) {
  const validTags = Object.keys(TAGS) as Tag[];

  const [tag, setTag] = useQueryState<Tag | null>("tag", {
    defaultValue: null,
    parse: (value) =>
      validTags.includes(value as Tag) ? (value as Tag) : null,
  });

  if (!tags || tags.length === 0)
    return (
      <CategoryPostsGrid
        featuredPost={featuredPost}
        gridPosts={gridPosts}
        category={category}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    );

  const filteredPosts = tag
    ? categoryPosts
        .filter((post) => post.tags?.includes(tag))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : [];

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setTag(null)}
          className="px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
        >
          Svi članci
        </button>
        {tags.map((tagValue) => (
          <button
            key={tagValue}
            className="px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
            onClick={() => setTag(tagValue)}
          >
            {TAGS[tagValue]}
          </button>
        ))}
      </div>
      {tag ? (
        <div className="flex flex-col gap-3 mt-5">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
            {filteredPosts.map((post) => (
              <CategoryCard post={post} key={post.slug} />
            ))}
          </div>
        </div>
      ) : (
        <CategoryPostsGrid
          featuredPost={featuredPost}
          gridPosts={gridPosts}
          category={category}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
}
