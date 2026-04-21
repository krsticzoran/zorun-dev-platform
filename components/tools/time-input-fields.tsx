import type { TimeInputState } from '@/hook/useTimeInput'

interface TimeInputFieldsProps {
  timeInput: TimeInputState
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const inputClass =
  'w-full border border-custom-gray rounded-lg px-3 py-3 text-2xl font-medium text-center text-custom-dark bg-white focus:outline-none focus:border-custom-dark transition-colors tabular-nums'

export function TimeInputFields({ timeInput, onKeyDown }: TimeInputFieldsProps) {
  const {
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
  } = timeInput

  return (
    <div className="flex items-center gap-2">
      {/* Hours */}
      <div className="flex flex-col items-center gap-1 flex-1">
        <input
          type="text"
          inputMode="numeric"
          maxLength={2}
          value={hours}
          onChange={(e) => handleTimeChange(e.target.value, setHours, minutesRef)}
          onBlur={(e) => padOnBlur(e, setHours)}
          onKeyDown={onKeyDown}
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
          onBlur={(e) => padOnBlur(e, setMinutes)}
          onKeyDown={onKeyDown}
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
          onBlur={(e) => padOnBlur(e, setSeconds)}
          onKeyDown={onKeyDown}
          placeholder="00"
          aria-label="Seconds"
          className={inputClass}
        />
        <span className="text-xs text-custom-dark-gray uppercase tracking-wider">sec</span>
      </div>
    </div>
  )
}
