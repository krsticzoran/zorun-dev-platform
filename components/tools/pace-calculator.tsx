'use client'

import { useRef, useState } from 'react'
import type { VdotLookupEntry } from '@/lib/vdot-lookup'
import { DISCIPLINES, findClosestVdotEntry } from '@/lib/vdot-utils'

export function PaceCalculator() {
  const [discipline, setDiscipline] = useState<keyof VdotLookupEntry>('time5k')
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [result, setResult] = useState<VdotLookupEntry | null>(null)
  const [error, setError] = useState('')

  const minutesRef = useRef<HTMLInputElement>(null)
  const secondsRef = useRef<HTMLInputElement>(null)

  const selectedLabel = DISCIPLINES.find((d) => d.key === discipline)?.label ?? ''

  function clearResult() {
    setResult(null)
    setError('')
  }

  function handleCalculate() {
    setError('')
    setResult(null)

    const h = parseInt(hours || '0', 10)
    const m = parseInt(minutes || '0', 10)
    const s = parseInt(seconds || '0', 10)

    if (isNaN(h) || isNaN(m) || isNaN(s) || m > 59 || s > 59 || (h === 0 && m === 0 && s === 0)) {
      setError('Enter a valid time. Minutes and seconds must be 0–59.')
      return
    }

    const totalSeconds = h * 3600 + m * 60 + s
    const entry = findClosestVdotEntry(discipline, totalSeconds)
    setResult(entry)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleCalculate()
  }

  function handleTimeChange(
    val: string,
    setter: (v: string) => void,
    nextRef?: React.RefObject<HTMLInputElement | null>
  ) {
    const clean = val.replace(/\D/g, '').slice(0, 2)
    setter(clean)
    clearResult()
    if (clean.length === 2) nextRef?.current?.focus()
  }

  function padField(val: string, setter: (v: string) => void) {
    if (val.length === 1) setter(val.padStart(2, '0'))
  }

  const inputClass =
    'w-full border border-custom-gray rounded-lg px-3 py-3 text-2xl font-medium text-center text-custom-dark bg-white focus:outline-none focus:border-custom-dark transition-colors tabular-nums'

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Input card */}
      <div className="bg-white border border-custom-gray rounded-2xl p-6 sm:p-8 mb-8">
        <div className="flex flex-col gap-5">
          {/* Discipline select */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="discipline"
              className="text-sm font-medium text-custom-dark-gray uppercase tracking-wider"
            >
              Distance
            </label>
            <select
              id="discipline"
              value={discipline}
              onChange={(e) => {
                setDiscipline(e.target.value as keyof VdotLookupEntry)
                clearResult()
              }}
              className="w-full border border-custom-gray rounded-lg px-4 py-3 text-base text-custom-dark bg-white focus:outline-none focus:border-custom-dark transition-colors cursor-pointer"
            >
              {DISCIPLINES.map((d) => (
                <option key={d.key} value={d.key}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          {/* Time input — three separate fields */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-custom-dark-gray uppercase tracking-wider">
              Your time for {selectedLabel}
            </span>
            <div className="flex items-center gap-2">
              {/* Hours */}
              <div className="flex flex-col items-center gap-1 flex-1">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  value={hours}
                  onChange={(e) => handleTimeChange(e.target.value, setHours, minutesRef)}
                  onBlur={() => padField(hours, setHours)}
                  onKeyDown={handleKeyDown}
                  placeholder="00"
                  aria-label="Hours"
                  className={inputClass}
                />
                <span className="text-xs text-custom-dark-gray uppercase tracking-wider">hrs</span>
              </div>
              <span className="text-3xl font-medium text-custom-dark-gray mb-5">:</span>
              {/* Minutes */}
              <div className="flex flex-col items-center gap-1 flex-1">
                <input
                  ref={minutesRef}
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  value={minutes}
                  onChange={(e) => handleTimeChange(e.target.value, setMinutes, secondsRef)}
                  onBlur={() => padField(minutes, setMinutes)}
                  onKeyDown={handleKeyDown}
                  placeholder="00"
                  aria-label="Minutes"
                  className={inputClass}
                />
                <span className="text-xs text-custom-dark-gray uppercase tracking-wider">min</span>
              </div>
              <span className="text-3xl font-medium text-custom-dark-gray mb-5">:</span>
              {/* Seconds */}
              <div className="flex flex-col items-center gap-1 flex-1">
                <input
                  ref={secondsRef}
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  value={seconds}
                  onChange={(e) => handleTimeChange(e.target.value, setSeconds)}
                  onBlur={() => padField(seconds, setSeconds)}
                  onKeyDown={handleKeyDown}
                  placeholder="00"
                  aria-label="Seconds"
                  className={inputClass}
                />
                <span className="text-xs text-custom-dark-gray uppercase tracking-wider">sec</span>
              </div>
            </div>
            {error && <p className="text-sm text-custom-accent mt-1">{error}</p>}
          </div>

          {/* CTA button */}
          <button
            onClick={handleCalculate}
            className="w-full bg-custom-dark text-white rounded-lg px-6 py-3.5 text-base font-medium uppercase tracking-wider hover:bg-custom-accent transition-colors duration-200 cursor-pointer"
          >
            Calculate Equivalent Times
          </button>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="bg-white border border-custom-gray rounded-2xl overflow-hidden">
          {/* VDOT badge */}
          <div className="bg-custom-dark text-white px-6 sm:px-8 py-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Your VDOT</p>
              <p className="text-5xl font-medium leading-none">{result.vdot}</p>
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
