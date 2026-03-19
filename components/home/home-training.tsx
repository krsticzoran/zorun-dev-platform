import { CategoryCard } from "@/components/cards/categroy-card";
import { Container } from "../layout/container";
import { SectionHeader } from "../ui/section-header";
import { useCategoryPosts } from "@/hook/useCategoryPosts";

export default function HomeEquipment() {
  const trainingPosts = useCategoryPosts("logs");

  return (
    <section className="bg-bg-secondary py-[100px] xl:py-[120px]">
      <Container className="flex flex-col">
        <SectionHeader slug="logs" />
        <CategoryCard post={trainingPosts[0]} variant="featured" titleAs="h3" />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
          {trainingPosts.slice(1).map((post) => (
            <CategoryCard post={post} key={post.slug} titleAs="h3" />
          ))}
        </div>
      </Container>
    </section>
  );
}
