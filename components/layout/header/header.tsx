import Link from "next/link";

import { Container } from "../container";
import { MenuVisual } from "./menu-visual";

import Menu from "./menu";

export default function Header() {
  return (
    <header className="h-20 fixed top-0 left-0 right-0 backdrop-blur-[20px] bg-black/25 z-50">
      <div className="h-full">
        <Container className="h-full flex items-center">
          <div className="flex w-full items-center justify-between h-full">
            <Link href="/" className="flex gap-2 items-center -mt-[5px]">
              <span className="text-white font-familjen text-[33px] md:text-[38px] lg:text-[42px] tracking-tighter leading-none">
                Zo Run
              </span>
              <span className="text-custom-accent font-familjen text-[33px] md:text-[38px] lg:text-[42px] tracking-tighter leading-none">
                Dev
              </span>
            </Link>
            <Menu>
              <MenuVisual />
            </Menu>
          </div>
        </Container>
      </div>
    </header>
  );
}
