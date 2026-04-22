import { Container } from "../layout/container";
import HomeCard from "../cards/home-card";
import { useCategoryPosts } from "@/hooks/useCategoryPosts";
import Quote from "./quotes";
import { SectionHeader } from "../ui/section-header";

export default function HomeTraining() {
  const equimpmentPosts = useCategoryPosts("beyond-the-miles");

  return (
    <section className="bg-black py-[100px] xl:py-[120px]">
      <Container className="flex flex-col">
        <SectionHeader
          slug="beyond-the-miles"
          bgColor="black"
          btnBorderColor="border-white"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {equimpmentPosts.map((post) => (
            <HomeCard key={post.title} post={post} />
          ))}
        </div>
        <Quote />
      </Container>
    </section>
  );
}
