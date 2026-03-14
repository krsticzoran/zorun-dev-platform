import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx/mdx-content";
import { mdxComponents } from "@/components/mdx/mdx-components";
import Image from "next/image";
import Divider from "@/components/ui/divider";
import { getPost } from "@/lib/content";
import { formatDate } from "@/lib/date";
import Link from "next/link";
import { Container } from "@/components/layout/container";

interface PostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { category, slug } = await params;

  const post = getPost(category, slug);

  if (!post) return {};

  const url = `https://trkackeprice.com/${category}/${slug}`;

  return {
    title: `Trkačke priče – ${post.title}`,
    description: post.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      images: [
        {
          url: `https://trkackeprice.com${post.image}`,
          alt: post.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`https://trkackeprice.com${post.image}`],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { category, slug } = await params;

  const post = getPost(category, slug);

  if (!post) {
    notFound();
  }

  const categoryPosts = posts
    .filter((post) => post.category === category && post.slug !== slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <main className="flex flex-col mx-auto justify-center bg-bg-secondary page-fade">
      <article>
        <header>
          <Image
            src={post.image}
            alt={post.imageAlt}
            sizes="100vw"
            quality={75}
            priority
            className={`w-full h-[400px] xl:h-[calc(100vh-360px)]  object-cover ${
              post.objectPosition === "top"
                ? "object-top"
                : post.objectPosition === "bottom"
                ? "object-bottom"
                : "object-center"
            }`}
          />
          <Container className="pt-16 sm:pt-20 xl:pt-24">
            <Link href={`/${post.category}`} className="inline-block">
              <p className="text-sm !text-custom-accent font-semibold mb-2 uppercase">
                {post.category.replace(/-/g, " ")}
              </p>
            </Link>
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-3">
              <h1 className="text-black max-w-[1000px]">{post.title}</h1>
              <div className="flex  xl:flex-col gap-5 xl:gap-2 xl:mb-2.5">
                <p className="flex gap-2 leading-[22px] font-medium text-custom-dark">
                  <span className="font-semibold">
                    {post.metadata.readingTime} min čitanja
                  </span>
                </p>
                <p className="leading-[22px] text-custom-dark opacity-80">
                  {formatDate(post.date)}
                </p>
              </div>
            </div>
          </Container>
        </header>

        <Divider />

        <Container>
          <MDXContent code={post.content} components={mdxComponents} />
        </Container>

        <Divider className="mb-[100px] lg:mb-[120px]" />
      </article>
    </main>
  );
}
