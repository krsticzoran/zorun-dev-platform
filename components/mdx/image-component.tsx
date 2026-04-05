import Image from "next/image";

interface ImageComponentProps {
  src: string;
  alt: string;
  isSquare?: boolean;
}

export function ImageComponent({
  src,
  alt,
  isSquare = false,
}: ImageComponentProps) {
  return (
    <div
      className={`relative w-full my-8 overflow-hidden  ${
        isSquare
          ? "aspect-square max-w-[650px]"
          : "aspect-3/2 max-w-[1300px] mx-auto"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1300px) 100vw, 1300px"
      />
    </div>
  );
}
