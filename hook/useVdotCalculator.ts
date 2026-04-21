'use client'

import { useState } from 'react'
import type { VdotLookupEntry } from '@/lib/vdot-lookup'
import {
  DISCIPLINES,
  findClosestVdotEntry,
  getTimeRange,
  parseTimeToSeconds,
} from '@/lib/vdot-utils'
import { useTimeInput } from '@/hook/useTimeInput'

/**
 * Shared form logic for both VDOT-based calculators.
 *
 * Handles discipline selection, time input, validation and range checks.
 * When input is valid, calls `onValidEntry` with the matched VdotLookupEntry
 * so each calculator can derive its own result.
 *
 * @param onValidEntry - called with the closest VdotLookupEntry on success
 * @param onClear      - called whenever the form resets (discipline change, keystroke)
 */
export function useVdotCalculator(
  onValidEntry: (entry: VdotLookupEntry) => void,
  onClear?: () => void
) {
  const [discipline, setDiscipline] = useState<keyof VdotLookupEntry>('time5k')
  const [error, setError] = useState('')

  const selectedLabel = DISCIPLINES.find((d) => d.key === discipline)?.label ?? ''

  function clearResult() {
    setError('')
    onClear?.()
  }

  const timeInput = useTimeInput(clearResult)
  const { hours, minutes, seconds } = timeInput

  function handleDisciplineChange(key: keyof VdotLookupEntry) {
    setDiscipline(key)
    clearResult()
  }

  function handleCalculate() {
    setError('')

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

    onValidEntry(findClosestVdotEntry(discipline, totalSeconds))
  }

  return {
    discipline,
    selectedLabel,
    error,
    timeInput,
    handleDisciplineChange,
    handleCalculate,
  }
}
