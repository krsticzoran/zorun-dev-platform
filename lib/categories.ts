import missionImg from "@/assets/images/categories/iz-sveta-trcanja.webp";
import logicImg from "@/assets/images/categories/zdravlje.webp";
import stackImg from "@/assets/images/categories/oprema.webp";
import balanceImg from "@/assets/images/categories/trening.webp";

import { StaticImageData } from "next/image";
import { Tag } from "@/lib/tags";

export const categoriesData: Record<
  string,
  {
    title: string;
    description: string;
    image: StaticImageData;
    alt: string;
    objectPosition?: "center" | "top" | "bottom";
    excerpt: string;
    ctaText: string;
    visible?: boolean;
    tags: Tag[];
  }
> = {
  mission: {
    title: "Sub 3 Journey",
    description:
      "At 45, starting over is a choice. This is the reality of chasing a sub-3 hour marathon while balancing a professional career and being a father. No filters, just the road to December 2027.",
    image: missionImg,
    alt: "The path to a sub-3 hour marathon at 45",
    excerpt: "The road to a sub-3 hour marathon at 45.",
    ctaText: "Follow the Journey",
    tags: [],
  },
  logic: {
    title: "Smart Training",
    description:
      "Running science for busy professionals. How to improve without injuries, specifically tailored for the 35+ runner who balances career, family, and performance.",
    image: logicImg,
    alt: "Scientific approach to running performance",
    excerpt: "Optimize the human hardware. Train smarter, not just harder.",
    ctaText: "Explore Training",
    tags: [],
  },
  stack: {
    title: "Tech & Gear",
    description:
      "Honest gear reviews from a utility perspective. Discover what actually makes you faster and what is just marketing. From carbon plates to recovery gadgets.",
    image: stackImg,
    alt: "Running and tech gear configuration",
    excerpt: "The Stack: Tested tools that drive real performance.",
    ctaText: "Inspect Gear",
    tags: [],
  },
  balance: {
    title: "Life Balance",
    description:
      "The intersection of health and productivity. How to manage nutrition, sleep, and recovery while working a high-focus 8-hour job without burning out.",
    image: balanceImg,
    alt: "Managing family, work, and high-performance training",
    excerpt: "System Stability: Balancing career, family, and the track.",
    ctaText: "View Balance",
    tags: [],
  },
};
