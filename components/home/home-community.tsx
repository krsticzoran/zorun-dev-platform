import { CategoryCard } from "@/components/cards/categroy-card";
import { Container } from "../layout/container";
import { useCategoryPosts } from "@/hook/useCategoryPosts";
import { SectionHeader } from "../ui/section-header";

export default function HomeCommunity() {
  const trainingPosts = useCategoryPosts("mission", 2);

  return (
    <section className="relative bg-bg-secondary py-[100px] xl:py-[120px]">
      <Container className="relative flex flex-col z-50">
        <SectionHeader slug="mission" />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
          {trainingPosts.map((post) => (
            <CategoryCard
              post={post}
              key={post.slug}
              titleAs="h3"
              bgColor="bg-bg-secondary"
              readingTimeBgColor="bg-white"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
