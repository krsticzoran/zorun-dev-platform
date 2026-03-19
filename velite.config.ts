import { defineConfig, s } from "velite";

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    posts: {
      name: "Post",
      pattern: "posts/**/*.mdx",
      schema: s
        .object({
          title: s.string().max(99),
          featured: s.boolean().optional(),
          slug: s.slug("posts"),
          description: s.string().max(999),
          date: s.isodate(),
          category: s.enum(["logs", "stack", "logic", "mission"]),
          image: s.image(),
          imageAlt: s.string().max(200),
          metadata: s.metadata(),
          tags: s.array(s.string()).optional(),
          content: s.mdx(),
          objectPosition: s.enum(["top", "center", "bottom"]).optional(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/${data.category}/${data.slug}`,
        })),
    },
  },
});
