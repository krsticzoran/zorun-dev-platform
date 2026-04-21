'use client'

import { useRef, useState } from 'react'

export interface TimeInputState {
  hours: string
  minutes: string
  seconds: string
  minutesRef: React.RefObject<HTMLInputElement | null>
  secondsRef: React.RefObject<HTMLInputElement | null>
  handleTimeChange: (
    val: string,
    setter: (v: string) => void,
    nextRef?: React.RefObject<HTMLInputElement | null>
  ) => void
  padOnBlur: (e: React.FocusEvent<HTMLInputElement>, setter: (v: string) => void) => void
  setHours: (v: string) => void
  setMinutes: (v: string) => void
  setSeconds: (v: string) => void
  clearTime: () => void
}

/**
 * Manages the three-field time input (hours / minutes / seconds).
 * `onReset` is called on every keystroke so the parent can clear its result/error state.
 */
export function useTimeInput(onReset?: () => void): TimeInputState {
  const [hours, setHoursRaw] = useState('')
  const [minutes, setMinutesRaw] = useState('')
  const [seconds, setSecondsRaw] = useState('')

  const minutesRef = useRef<HTMLInputElement>(null)
  const secondsRef = useRef<HTMLInputElement>(null)

  function wrap(setter: (v: string) => void) {
    return (v: string) => {
      setter(v)
      onReset?.()
    }
  }

  const setHours = wrap(setHoursRaw)
  const setMinutes = wrap(setMinutesRaw)
  const setSeconds = wrap(setSecondsRaw)

  function handleTimeChange(
    val: string,
    setter: (v: string) => void,
    nextRef?: React.RefObject<HTMLInputElement | null>
  ) {
    const clean = val.replace(/\D/g, '').slice(0, 2)
    setter(clean)
    if (clean.length === 2) nextRef?.current?.focus()
  }

  function padOnBlur(e: React.FocusEvent<HTMLInputElement>, setter: (v: string) => void) {
    if (e.target.value.length === 1) setter(e.target.value.padStart(2, '0'))
  }

  function clearTime() {
    setHoursRaw('')
    setMinutesRaw('')
    setSecondsRaw('')
  }

  return {
    hours,
    minutes,
    seconds,
    minutesRef,
    secondsRef,
    handleTimeChange,
    padOnBlur,
    setHours,
    setMinutes,
    setSeconds,
    clearTime,
  }
}
