'use client'

import { useState } from 'react'
import { DISCIPLINES, getTrainingPacesForVdot, type TrainingPaces } from '@/lib/vdot-utils'
import { useVdotCalculator } from '@/hook/useVdotCalculator'
import { CalculatorInputCard } from '@/components/tools/calculator-input-card'

const TRAINING_ZONES: { label: string; key: keyof TrainingPaces; description: string }[] = [
  { label: 'Threshold', key: 'threshold', description: 'Tempo / lactate threshold pace (per km)' },
  { label: 'Interval', key: 'interval', description: 'VO₂max interval pace (per km)' },
  { label: 'Rep 200m', key: 'rep200', description: 'Target time for 200m repetitions' },
  { label: 'Rep 400m', key: 'rep400', description: 'Target time for 400m repetitions' },
]

export function TrainingCalculator() {
  const [result, setResult] = useState<TrainingPaces | null>(null)
  const [vdot, setVdot] = useState<number | null>(null)

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
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Based on</p>
              <p className="text-lg font-medium">{selectedLabel}</p>
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
                    <p className="text-xs text-custom-dark-gray mt-0.5">Easy pace range (per km)</p>
                  </div>
                  <span className="text-base font-medium text-custom-dark tabular-nums ml-4 shrink-0">
                    {result.easyMin} – {result.easyMax}
                  </span>
                </div>
              )}
              {TRAINING_ZONES.map((zone) => {
                const val = result[zone.key]
                if (val === null) {
                  // null = not recommended at this fitness level
                  return (
                    <div key={zone.key} className="flex justify-between items-start py-3 gap-4">
                      <div>
                        <span className="text-sm font-medium text-custom-dark">{zone.label}</span>
                        <p className="text-xs text-custom-dark-gray mt-0.5">{zone.description}</p>
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
                      <p className="text-xs text-custom-dark-gray mt-0.5">{zone.description}</p>
                    </div>
                    <span className="text-base font-medium text-custom-dark tabular-nums ml-4 shrink-0">
                      {val}
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
