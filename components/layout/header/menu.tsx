'use client'

import { useState } from 'react'

import { Sheet, SheetContent, SheetTitle, SheetDescription } from '@/components/ui/sheet'

import { MenuNavigation } from './menu-navigation'
import { SocialsIcons } from '@/components/ui/social-icons'

export default function Menu({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleCloseMenu = () => setIsMenuOpen(false)

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="relative h-2.5 w-8 flex flex-col justify-between group cursor-pointer"
        aria-label="Toggle menu"
      >
        <div
          className="h-0.5 w-[22px] bg-white ml-auto transition-all duration-300 ease-in-out
      group-hover:w-8 group-hover:absolute group-hover:top-1/2
      group-hover:rotate-45 group-hover:right-0"
        />

        <div
          className="h-0.5 w-8 bg-white transition-all duration-300 ease-in-out
      group-hover:absolute group-hover:top-1/2
      group-hover:-rotate-45"
        />
      </button>
      <SheetContent
        side="left"
        className=" hidden md:block md:w-2/3 xl:w-3/4 [&>button]:hidden border-0! bg-black"
      >
        <SheetTitle className="sr-only">running image</SheetTitle>
        <SheetDescription className="sr-only">
          Decorative running image for header background
        </SheetDescription>
        {children}
      </SheetContent>
      <SheetContent
        side="right"
        className="w-full md:w-1/3 xl:w-1/4 bg-black text-white border-none p-10 [&>button]:hidden"
      >
        <SheetTitle className="sr-only">menu</SheetTitle>
        <SheetDescription className="sr-only">Main navigation and social links</SheetDescription>
        <div className="absolute right-4 top-11">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative h-2.5 w-8 flex flex-col justify-between cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="relative h-[26px] w-[26px]">
              <div className="absolute top-1/2 left-0 h-0.5 w-8 -translate-y-1/2 rotate-45 bg-white" />
              <div className="absolute top-1/2 left-0 h-0.5 w-8 -translate-y-1/2 -rotate-45 bg-white" />
            </div>
          </button>
        </div>
        <MenuNavigation onClose={handleCloseMenu} />
        <SocialsIcons />
      </SheetContent>
    </Sheet>
  )
}
