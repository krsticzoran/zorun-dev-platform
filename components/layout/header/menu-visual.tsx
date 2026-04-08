import Image from "next/image";

import headerImage from "@/assets/images/header/race.jpg";

export function MenuVisual() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={headerImage}
        fill
        quality={60}
        alt="running race"
        className="object-cover page-fade"
      />
      <div className="absolute left-4 top-7 z-50  ">
        <div className="flex gap-2">
          <span className="text-white font-familjen font-bold text-[33px] md:text-[38px] lg:text-[42px] tracking-tighter leading-none">
            Zo
          </span>
          <span className="text-custom-accent font-familjen font-bold text-[33px] md:text-[38px] lg:text-[42px] tracking-tighter leading-none">
            Run
          </span>
        </div>
        <p className="text-white font-medium text-lg  mt-2 ">
          Stories. Insights. Movement.
        </p>
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 35%)",
        }}
      />
    </div>
  );
}
