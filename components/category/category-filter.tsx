"use client";
import { Tag, TAGS } from "@/lib/tags";
import { useQueryState } from "nuqs";

interface CategoryFilterProps {
  tags: Tag[];
}

export function CategoryFilter({ tags }: CategoryFilterProps) {
  const [tag, setTag] = useQueryState("tag");

  if (!tags || tags.length === 0) return null;

  return (
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
  );
}
