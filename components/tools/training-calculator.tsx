'use client'

import { useState } from 'react'
import type { VdotLookupEntry } from '@/lib/vdot-lookup'
import {
  DISCIPLINES,
  findClosestVdotEntry,
  getTimeRange,
  getTrainingPacesForVdot,
  parseTimeToSeconds,
  type TrainingPaces,
} from '@/lib/vdot-utils'
import { useTimeInput } from '@/hook/useTimeInput'
import { CalculatorInputCard } from '@/components/tools/calculator-input-card'

const TRAINING_ZONES: { label: string; key: keyof TrainingPaces; description: string }[] = [
  { label: 'Easy (min)', key: 'easyMin', description: 'Slowest end of easy pace (per km)' },
  { label: 'Easy (max)', key: 'easyMax', description: 'Fastest end of easy pace (per km)' },
  { label: 'Threshold', key: 'threshold', description: 'Tempo / lactate threshold pace (per km)' },
  { label: 'Interval', key: 'interval', description: 'VO₂max interval pace (per km)' },
  { label: 'Rep 200m', key: 'rep200', description: 'Target time for 200m repetitions' },
  { label: 'Rep 400m', key: 'rep400', description: 'Target time for 400m repetitions' },
]

export function TrainingCalculator() {
  const [discipline, setDiscipline] = useState<keyof VdotLookupEntry>('time5k')
  const [result, setResult] = useState<TrainingPaces | null>(null)
  const [vdot, setVdot] = useState<number | null>(null)
  const [error, setError] = useState('')

  const selectedLabel = DISCIPLINES.find((d) => d.key === discipline)?.label ?? ''

  function clearResult() {
    setResult(null)
    setVdot(null)
    setError('')
  }

  const timeInput = useTimeInput(clearResult)
  const { hours, minutes, seconds } = timeInput

  function handleDisciplineChange(key: keyof VdotLookupEntry) {
    setDiscipline(key)
    clearResult()
  }

  function handleCalculate() {
    setError('')
    setResult(null)
    setVdot(null)

    const h = parseInt(hours || '0', 10)
    const m = parseInt(minutes || '0', 10)
    const s = parseInt(seconds || '0', 10)

    if (isNaN(h) || isNaN(m) || isNaN(s) || m > 59 || s > 59 || (h === 0 && m === 0 && s === 0)) {
      setError('Enter a valid time. Minutes and seconds must be 0–59.')
      return
    }

    const totalSeconds = h * 3600 + m * 60 + s

    const range = getTimeRange(discipline)
    const slowestSeconds = parseTimeToSeconds(range.slowest)
    const fastestSeconds = parseTimeToSeconds(range.fastest)
    if (totalSeconds > slowestSeconds || totalSeconds < fastestSeconds) {
      setError(
        `Time out of range for ${selectedLabel}. Must be between ${range.fastest} (fastest) and ${range.slowest} (slowest).`
      )
      return
    }

    const vdotEntry = findClosestVdotEntry(discipline, totalSeconds)
    const paces = getTrainingPacesForVdot(vdotEntry.vdot)
    setVdot(vdotEntry.vdot)
    setResult(paces)
  }

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
