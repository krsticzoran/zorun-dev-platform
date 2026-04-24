'use client'

import { useMemo } from 'react'
import { parseTimeToSeconds, formatSeconds, kmPaceToMilePace } from '@/lib/vdot-utils'
import type { TrainingPaces } from '@/lib/vdot-utils'

interface Props {
  paces: TrainingPaces
  unit: 'km' | 'mile'
}

const W = { easy: '45%', tempo: '35%', interval: '20%' }

export function TrainingZoneChart({ paces, unit }: Props) {
  const z = useMemo(() => {
    const cvt = (p: string) => parseTimeToSeconds(unit === 'mile' ? kmPaceToMilePace(p) : p)
    return {
      easyMin: cvt(paces.easyMin),
      easyMax: cvt(paces.easyMax),
      threshold: cvt(paces.threshold),
      hasInterval: !!paces.interval,
    }
  }, [paces, unit])

  const unitLabel = unit === 'km' ? '/km' : '/mi'

  return (
    <div className="px-6 sm:px-8 pt-5 pb-4 border-t border-custom-gray">
      <p className="text-xs uppercase tracking-widest text-custom-dark-gray mb-3">
        Zone Overview{' '}
        <span className="normal-case font-normal text-custom-dark-gray/70">(min{unitLabel})</span>
      </p>

      {/* ── Zone bar ─────────────────────────────────────────────────────── */}
      <div className="relative flex h-10 rounded-lg overflow-hidden w-full">
        {/* Easy — 45% */}
        <div
          className="flex items-center justify-center text-[11px] font-semibold text-green-700"
          style={{ width: W.easy, backgroundColor: '#4ade8045' }}
        >
          Easy
        </div>

        {/* Marathon / Tempo — 35% */}
        <div
          className="flex items-center justify-center text-[11px] font-semibold text-orange-700"
          style={{ width: W.tempo, backgroundColor: '#fb923c45' }}
        >
          Marathon / Tempo
        </div>

        {/* Intervals — 20% */}
        {z.hasInterval && (
          <div
            className="flex items-center justify-center text-[11px] font-semibold text-red-700"
            style={{ width: W.interval, backgroundColor: '#dd233445' }}
          >
            Intervals
          </div>
        )}
      </div>

      {/* ── Boundary time labels below the bar ───────────────────────────── */}
      <div className="relative h-5 mt-1 text-[10px] tabular-nums text-custom-dark-gray">
        {/* easyMax — centered on left boundary of Easy zone (0%) */}
        <span className="absolute -translate-x-1/2" style={{ left: '0%' }}>
          {formatSeconds(z.easyMax)}
        </span>
        {/* easyMin — centered on Easy/Tempo boundary (45%) */}
        <span className="absolute -translate-x-1/2" style={{ left: W.easy }}>
          {formatSeconds(z.easyMin)}
        </span>
        {/* threshold — centered on Tempo/Intervals boundary (80%) */}
        <span className="absolute -translate-x-1/2" style={{ left: '80%' }}>
          {formatSeconds(z.threshold)}
        </span>
      </div>
    </div>
  )
}
