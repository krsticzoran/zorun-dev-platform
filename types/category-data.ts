import { StaticImageData } from "next/image";
import { Tag } from "@/lib/tags";

export type CategoryData = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  objectPosition?: "center" | "top" | "bottom";
  excerpt: string;
  ctaText: string;
  visible?: boolean;
  tags: Tag[];
};
