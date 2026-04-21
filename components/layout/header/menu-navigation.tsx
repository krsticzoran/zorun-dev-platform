import Link from "next/link";
import { useState } from 'react'
import { getMenuLinks, calculators } from "@/lib/menu";

interface MenuContentProps {
  onClose: () => void;
}

interface MenuLinkProps {
  href: string;
  label: string;

  onClose: () => void;
}

export function MenuNavigation({ onClose }: MenuContentProps) {
  const menuLinks = getMenuLinks();
  const [toolsOpen, setToolsOpen] = useState(false)
  return (
    <nav className="flex h-full flex-col mt-[66px] gap-4 w-full">
      <MenuLink href="/" label="Home" onClose={onClose} />

      {menuLinks
        .filter((link) => link.visible !== false)
        .map((item) => (
          <MenuLink
            href={item.href}
            label={item.label}
            onClose={onClose}
            key={item.href}
          />
        ))}

      {/* Calculators grouped under a single dropdown */}
      <div>
        <button
          onClick={() => setToolsOpen((s) => !s)}
          aria-expanded={toolsOpen}
          className="group relative overflow-hidden font-familjen text-[22px] leading-[22px] font-medium h-[22px] w-full flex items-center justify-between"
        >
          {/* default text */}
          <span className="block translate-y-0 opacity-75 transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
            Calculators
          </span>

          {/* hover text */}
          <span className="absolute left-0 top-full block translate-y-0 text-white transition-all duration-500 ease-in-out group-hover:-translate-y-full">
            Calculators
          </span>

          <span className={`ml-3 transition-transform ${toolsOpen ? 'rotate-180' : 'rotate-0'}`}>
            ▼
          </span>
        </button>

        {toolsOpen && (
          <div className="mt-3 flex flex-col pl-4 gap-3">
            {calculators.map((c) => (
              <MenuLink key={c.href} href={c.href} label={c.label} onClose={onClose} />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function MenuLink({ href, label, onClose }: MenuLinkProps) {
  return (
    <Link
      key={href}
      href={href}
      onClick={onClose}
      className="group relative overflow-hidden font-familjen text-[22px] leading-[22px] font-medium h-[22px] block"
    >
      {/* default text */}
      <span className="block translate-y-0 opacity-75 transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
        {label}
      </span>

      {/* hover text */}
      <span className="absolute left-0 top-full block translate-y-0 text-white transition-all duration-500 ease-in-out group-hover:-translate-y-full">
        {label}
      </span>
    </Link>
  );
}
