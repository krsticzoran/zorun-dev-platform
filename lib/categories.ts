import trainingImg from "@/assets/images/categories/trening.webp";
import healthImg from "@/assets/images/categories/zdravlje.webp";
import gearImg from "@/assets/images/categories/oprema.webp";
import worldImg from "@/assets/images/categories/iz-sveta-trcanja.webp";

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
  logs: {
    title: "System Logs",
    description:
      "Raw training data and chronological progress. Every run is a commit towards the Sub-3 goal. Tracking miles, heart rate, and performance metrics in real-time.",
    image: trainingImg,
    alt: "Visual representation of running logs and data metrics",
    excerpt:
      "> INITIALIZING... Track every kilometer and every byte of progress",
    ctaText: "Open Logs",
    tags: [],
  },
  stack: {
    title: "The Stack",
    description:
      "Hardware and software setup. Detailed reviews of running shoes, watches, and gadgets, plus an inside look at the tech stack powering this project.",
    image: gearImg,
    alt: "Running and dev gear configuration",
    excerpt: "Tools that make the difference: From carbon to code",
    ctaText: "View Stack",
    tags: [],
  },
  logic: {
    title: "The Logic",
    description:
      "Training algorithms, recovery methodology, and the science of running. An engineering approach to physiology, nutrition, and performance optimization.",
    image: healthImg,
    alt: "Diagrams and scientific approach to running performance",
    excerpt: "System Analysis: How to optimize human hardware",
    ctaText: "Explore Methodology",
    tags: [],
  },

  mission: {
    title: "The Mission",
    description:
      "Roadmap to December 2027. A transparent look at goals, upcoming races, and current Personal Bests. From 3 years of downtime to a Sub-3 Marathon.",
    image: worldImg,
    alt: "Roadmap towards the Sub-3 marathon goal",
    excerpt: "Target: Sub-3 Marathon. View the roadmap and progress",
    ctaText: "View Roadmap",
    tags: [],
  },
};
