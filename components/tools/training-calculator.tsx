'use client'

import { useState } from 'react'
import {
  DISCIPLINES,
  getTrainingPacesForVdot,
  kmPaceToMilePace,
  type TrainingPaces,
} from '@/lib/vdot-utils'
import { useVdotCalculator } from '@/hook/useVdotCalculator'
import { CalculatorInputCard } from '@/components/tools/calculator-input-card'

const TRAINING_ZONES: { label: string; key: keyof TrainingPaces; rep?: true }[] = [
  { label: 'Threshold', key: 'threshold' },
  { label: 'Interval', key: 'interval' },
  { label: 'Rep 200m', key: 'rep200', rep: true },
  { label: 'Rep 400m', key: 'rep400', rep: true },
]

const ZONE_DESCRIPTIONS: Record<keyof TrainingPaces, string> = {
  vdot: '',
  easyMin: 'Easy pace range',
  easyMax: 'Easy pace range',
  threshold: 'Tempo / lactate threshold pace',
  interval: 'VO₂max interval pace',
  rep200: 'Target time for 200m repetitions',
  rep400: 'Target time for 400m repetitions',
}

export function TrainingCalculator() {
  const [result, setResult] = useState<TrainingPaces | null>(null)
  const [vdot, setVdot] = useState<number | null>(null)
  const [unit, setUnit] = useState<'km' | 'mile'>('km')

  function convertPace(pace: string, isRep?: true): string {
    if (!pace) return ''
    if (isRep || unit === 'km') return pace
    return kmPaceToMilePace(pace)
  }

  const { discipline, selectedLabel, error, timeInput, handleDisciplineChange, handleCalculate } =
    useVdotCalculator(
      (entry) => {
        setVdot(entry.vdot)
        setResult(getTrainingPacesForVdot(entry.vdot))
      },
      () => {
        setResult(null)
        setVdot(null)
      }
    )

  return (
    <div className="w-full max-w-2xl mx-auto">
      <CalculatorInputCard
        disciplines={DISCIPLINES}
        discipline={discipline}
        onDisciplineChange={handleDisciplineChange}
        selectedLabel={selectedLabel}
        timeInput={timeInput}
        error={error}
        onCalculate={handleCalculate}
        buttonLabel="Calculate Training Paces"
      />

      {result && vdot !== null && (
        <div className="bg-white border border-custom-gray rounded-2xl overflow-hidden">
          {/* VDOT header */}
          <div className="bg-custom-dark text-white px-6 sm:px-8 py-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Your VDOT</p>
              <p className="text-5xl font-medium leading-none">
                {Number.isInteger(vdot) ? vdot : vdot.toFixed(1)}
              </p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Based on</p>
                <p className="text-lg font-medium">{selectedLabel}</p>
              </div>
              {/* Unit toggle */}
              <div className="flex rounded-lg overflow-hidden border border-white/20 text-xs font-medium uppercase tracking-wider">
                <button
                  onClick={() => setUnit('km')}
                  className={`px-3 py-1.5 transition-colors cursor-pointer ${
                    unit === 'km' ? 'bg-white text-custom-dark' : 'text-white/60 hover:text-white'
                  }`}
                >
                  /km
                </button>
                <button
                  onClick={() => setUnit('mile')}
                  className={`px-3 py-1.5 transition-colors cursor-pointer ${
                    unit === 'mile' ? 'bg-white text-custom-dark' : 'text-white/60 hover:text-white'
                  }`}
                >
                  /mi
                </button>
              </div>
            </div>
          </div>

          {/* Training paces */}
          <div className="px-6 sm:px-8 py-6">
            <p className="text-xs uppercase tracking-widest text-custom-dark-gray mb-4">
              Training Paces
            </p>
            <div className="flex flex-col divide-y divide-custom-gray">
              {/* Easy / Long runs — combined min–max row */}
              {result.easyMin && result.easyMax && (
                <div className="flex justify-between items-center py-3">
                  <div>
                    <span className="text-sm font-medium text-custom-dark">
                      Easy &amp; Long Runs
                    </span>
                    <p className="text-xs text-custom-dark-gray mt-0.5">
                      {ZONE_DESCRIPTIONS.easyMin} (per {unit === 'km' ? 'km' : 'mile'})
                    </p>
                  </div>
                  <span className="text-base font-medium text-custom-dark tabular-nums ml-4 shrink-0">
                    {convertPace(result.easyMin)} – {convertPace(result.easyMax)}
                  </span>
                </div>
              )}
              {TRAINING_ZONES.map((zone) => {
                const val = result[zone.key]
                const description = zone.rep
                  ? ZONE_DESCRIPTIONS[zone.key]
                  : `${ZONE_DESCRIPTIONS[zone.key]} (per ${unit === 'km' ? 'km' : 'mile'})`
                if (val === null) {
                  // null = not recommended at this fitness level
                  return (
                    <div key={zone.key} className="flex justify-between items-start py-3 gap-4">
                      <div>
                        <span className="text-sm font-medium text-custom-dark">{zone.label}</span>
                        <p className="text-xs text-custom-dark-gray mt-0.5">{description}</p>
                      </div>
                      <p className="text-xs text-custom-dark-gray italic text-left max-w-[250px] shrink-0">
                        At this fitness level, high-intensity intervals are not yet recommended.
                      </p>
                    </div>
                  )
                }
                if (!val) return null
                return (
                  <div key={zone.key} className="flex justify-between items-center py-3">
                    <div>
                      <span className="text-sm font-medium text-custom-dark">{zone.label}</span>
                      <p className="text-xs text-custom-dark-gray mt-0.5">{description}</p>
                    </div>
                    <span className="text-base font-medium text-custom-dark tabular-nums ml-4 shrink-0">
                      {convertPace(val as string, zone.rep)}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
