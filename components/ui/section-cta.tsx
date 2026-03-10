import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionCTAProps {
  href: string;
  text: string;
  btnColor?: string;
}

export function SectionCTA({
  href,
  text,
  btnColor = "white",
}: SectionCTAProps) {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center h-fit gap-2 pr-3 border-2 border-white ${
        btnColor === "secondary" ? "bg-bg-secondary" : "bg-white"
      }
                  text-black 
                 transition-all duration-500 group overflow-hidden `}
    >
      <div className="flex justify-center items-center bg-black h-8 w-8 md:h-[35px] md:w-[35px] text-white flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-40">
        <ArrowRight size={18} />
      </div>
      <span className="capitalize font-semibold text-sm md:text-base leading-[19px] transition-opacity duration-500 group-hover:opacity-0">
        {text}
      </span>

      <div
        className="absolute left-0 top-0 bottom-0 flex justify-center items-center gap-2 px-1.5 w-full bg-black text-white font-semibold capitalize text-sm md:text-base
                      -translate-x-full transition-transform duration-500 group-hover:translate-x-0 pointer-events-none "
      >
        {text}
        <ArrowRight size={18} />
      </div>
    </Link>
  );
}
