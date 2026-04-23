'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

export function VdotTooltip() {
  const [open, setOpen] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const btnRef = useRef<HTMLButtonElement>(null)

  const updateCoords = useCallback(() => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    setCoords({
      top: rect.top + window.scrollY - 8, // 8px gap above button
      left: rect.left + rect.width / 2 + window.scrollX,
    })
  }, [])

  const show = useCallback(() => {
    updateCoords()
    setOpen(true)
  }, [updateCoords])

  const hide = useCallback(() => setOpen(false), [])

  // Close on outside click/touch
  useEffect(() => {
    if (!open) return
    function handleOutside(e: MouseEvent | TouchEvent) {
      if (btnRef.current && !btnRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('touchstart', handleOutside)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
    }
  }, [open])

  const popover = open
    ? createPortal(
        <div
          role="tooltip"
          style={{
            position: 'absolute',
            top: coords.top,
            left: coords.left,
            transform: 'translate(-50%, -100%)',
            zIndex: 9999,
          }}
          className="w-64 rounded-xl bg-white text-custom-dark shadow-xl p-4 text-left pointer-events-none"
        >
          {/* Arrow */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white" />

          <p className="text-xs font-semibold uppercase tracking-widest text-custom-dark-gray mb-1.5">
            What is VDOT?
          </p>
          <p className="text-sm leading-relaxed">
            <strong>VDOT</strong> is a measure of your current running fitness, developed by{' '}
            <strong>Jack Daniels</strong>. Unlike a lab VO₂max test, it is based purely on your race
            result and is used to set precise training paces for every workout.
          </p>
        </div>,
        document.body
      )
    : null

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        aria-label="What is VDOT?"
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        onClick={() => (open ? hide() : show())}
        className="ml-1.5 w-4 h-4 rounded-full bg-white/20 hover:bg-white/40 transition-colors flex items-center justify-center text-[10px] font-bold text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-accent"
      >
        i
      </button>
      {popover}
    </>
  )
}
