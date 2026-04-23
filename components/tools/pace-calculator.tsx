'use client'

import { useState } from 'react'
import type { VdotLookupEntry } from '@/lib/vdot-lookup'
import { DISCIPLINES } from '@/lib/vdot-utils'
import { useVdotCalculator } from '@/hooks/useVdotCalculator'
import { CalculatorInputCard } from '@/components/tools/calculator-input-card'
import { VdotTooltip } from '@/components/tools/vdot-tooltip'

export function PaceCalculator() {
  const [result, setResult] = useState<VdotLookupEntry | null>(null)

  const { discipline, selectedLabel, error, timeInput, handleDisciplineChange, handleCalculate } =
    useVdotCalculator(
      (entry) => setResult(entry),
      () => setResult(null)
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
        buttonLabel="Calculate Equivalent Times"
      />

      {/* Results */}
      {result && (
        <div className="bg-white border border-custom-gray rounded-2xl overflow-hidden">
          {/* VDOT badge */}
          <div className="bg-custom-dark text-white px-6 sm:px-8 py-5 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <p className="text-xs uppercase tracking-widest text-white/60">Your VDOT</p>
                <VdotTooltip />
              </div>
              <p className="text-5xl font-medium leading-none">
                {Number.isInteger(result.vdot) ? result.vdot : result.vdot.toFixed(1)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">
                Selected Distance
              </p>
              <p className="text-lg font-medium">{selectedLabel}</p>
              <p className="text-2xl font-medium text-custom-accent">
                {result[discipline] as string}
              </p>
            </div>
          </div>

          {/* Equivalent times table */}
          <div className="px-6 sm:px-8 py-6">
            <p className="text-xs uppercase tracking-widest text-custom-dark-gray mb-4">
              Equivalent Times
            </p>
            <div className="flex flex-col divide-y divide-custom-gray">
              {DISCIPLINES.filter((d) => d.key !== discipline).map((d) => (
                <div key={d.key} className="flex justify-between items-center py-3">
                  <span className="text-sm text-custom-dark-gray">{d.label}</span>
                  <span className="text-base font-medium text-custom-dark tabular-nums">
                    {result[d.key] as string}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
