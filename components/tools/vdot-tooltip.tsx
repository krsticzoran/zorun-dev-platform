'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function VdotTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label="What is VDOT?"
          className="ml-1.5 w-4 h-4 rounded-full bg-white/20 hover:bg-white/40 transition-colors flex items-center justify-center text-[10px] font-bold text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-accent"
        >
          i
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-[260px] text-sm leading-relaxed">
        <strong className="block mb-1">What is VDOT?</strong>
        VDOT is a measure of your current running fitness, developed by Jack Daniels. Unlike a lab
        VO₂max test, it is based purely on your race result and is used to set precise training
        paces for every workout.
      </TooltipContent>
    </Tooltip>
  )
}
