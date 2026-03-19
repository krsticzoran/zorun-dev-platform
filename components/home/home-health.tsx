import { CategoryCard } from "@/components/cards/categroy-card";
import { Container } from "../layout/container";

import { useCategoryPosts } from "@/hook/useCategoryPosts";
import { SectionHeader } from "../ui/section-header";

export default function HomeHealth() {
  const trainingPosts = useCategoryPosts("logic", 2);

  return (
    <section className="bg-white py-[100px] xl:py-[120px]">
      <Container className="flex flex-col">
        <SectionHeader slug="logic" />

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
