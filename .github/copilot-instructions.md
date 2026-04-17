# Copilot Instructions — zorun.dev

IMPORTANT: Follow the general Next.js development standards defined in .github/nextjs-standards.md.

## Project Overview

Next.js 16 (App Router) + React 19 blog for running content.  
Content is authored in MDX files and compiled at build time via **Velite**.  
Deployed to Vercel. Site URL: `https://zorun.dev`.

---

## Dev Workflows

```bash
npm run dev     # velite --watch + next dev (both must run together)
npm run build   # velite build then next build
npm run lint    # eslint
```

> **Important:** `velite` must run before `next build`. The `dev` script handles this in parallel automatically. Never run `next dev` alone — content won't be available.

---

## Architecture & Data Flow

```
content/posts/<category>/<slug>/index.mdx
        ↓ velite (velite.config.ts)
.velite/           ← auto-generated, never edit manually
        ↓
#site/content      ← virtual module used in imports
        ↓
lib/content.ts     ← getPost(), postsBySlug map
app/[category]/[slug]/page.tsx
```

- All post data is typed via Velite's inferred `Post` type from `#site/content` — **do not create a manual `Post` type**.
- `Post.permalink` is a computed field (`/${category}/${slug}`) added in `velite.config.ts` `.transform()`.

---

## Content Schema (velite.config.ts)

| Field            | Constraint                                                     |
| ---------------- | -------------------------------------------------------------- |
| `title`          | string, max 55 chars                                           |
| `category`       | enum: `training-after-40`, `sub-3-journey`, `beyond-the-miles` |
| `tags`           | optional array of `"beginner" \| "intermediate" \| "advanced"` |
| `image`          | processed by Velite → outputs to `public/static/`              |
| `objectPosition` | optional enum: `top \| center \| bottom`                       |

Adding a new category requires updating both `velite.config.ts` enum and `lib/categories.ts`.

---

## Key Conventions

- **Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Velite.
- **UI & Styling:** **shadcn/ui** patterns with **Tailwind CSS v4**. No `tailwind.config.js`. Use `@theme` in CSS for extensions.
- **MDX Styles:** Custom MDX element styles are defined in `components/mdx/mdx-components.tsx`.
- **Icons:** `lucide-react` for all UI icons.
- **Imports:** Always use `@/` alias for project files; `#site/content` for Velite data.
- **Components:** Named exports; prefer `async` Server Components. Use `clsx` and `tailwind-merge` (via a `cn()` utility) for dynamic classes.
- **Post type:** `import type { Post } from '#site/content'` — do not define manually.
- **Category metadata:** Lives in `lib/categories.ts` as `categoriesData: Record<string, CategoryData>`.
- **Constants:** Shared values (`POSTS_PER_PAGE`, `SITE_URL`) live in `lib/constants.ts`.
- **Data Fetching:** Fetch data directly in Server Components where possible. Use React **Suspense** for granular loading states.
- **Type Safety:** Use **Zod** for any runtime validation (API routes or form submissions).
- **Performance:** Always use `next/image` for images and `next/font` for typography.
- **File naming:** Component files use `kebab-case` (e.g., `home-hero.tsx`, `category-page-layout.tsx`) — not PascalCase. No barrel `index.ts` files; import components directly.

---

## MDX Custom Components

Custom components available inside MDX content (registered in `components/mdx/mdx-components.tsx`):

`TableComponent`, `ImageComponent`, `Highlight`, `BlockQuote`, `WhiteBox`, `Checklist`, `ImageCredits`, `YouTubeEmbed`, `ImageGallery`, `GalleryImage`

---

## Routing Structure

| Route                  | File                                  |
| ---------------------- | ------------------------------------- |
| `/`                    | `app/page.tsx`                        |
| `/<category>`          | `app/[category]/page.tsx`             |
| `/<category>/page/<n>` | `app/[category]/page/[page]/page.tsx` |
| `/<category>/<slug>`   | `app/[category]/[slug]/page.tsx`      |

Pagination uses `POSTS_PER_PAGE` (currently `5`) from `lib/constants.ts`.
