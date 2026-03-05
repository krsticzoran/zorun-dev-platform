import { StaticImageData } from "next/image";

export type CategoryData = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  objectPosition?: "center" | "top" | "bottom";
  excerpt: string;
  ctaText: string;
  visible?: boolean;
};
