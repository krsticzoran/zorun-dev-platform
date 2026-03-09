"use client";
import { Tag, TAGS } from "@/lib/tags";
import { useQueryState } from "nuqs";
import { Post } from "@/type/post";
import { Container } from "@/components/layout/container";
import { CategoryCard } from "@/components/cards/categroy-card";

interface CategoryFilterProps {
  tags: Tag[];
  categoryPosts: Post[];
  children: React.ReactNode;
}

export function CategoryFilter({
  tags,
  categoryPosts,
  children,
}: CategoryFilterProps) {
  const validTags = Object.keys(TAGS) as Tag[];

  const [tag, setTag] = useQueryState<Tag | null>("tag", {
    defaultValue: null,
    parse: (value) =>
      validTags.includes(value as Tag) ? (value as Tag) : null,
  });

  if (!tags || tags.length === 0) return children;

  const filteredPosts = categoryPosts
    .filter((post) => !tag || post.tags?.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <div
        className={`flex flex-wrap gap-2 ${
          filteredPosts.length > 0 ? "mb-5" : ""
        }`}
      >
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
        <Container className="flex flex-col gap-3">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
            {filteredPosts.map((post) => (
              <CategoryCard post={post} key={post.slug} />
            ))}
          </div>
        </Container>
      ) : (
        children
      )}
    </>
  );
}
