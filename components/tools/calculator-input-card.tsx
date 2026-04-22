import type { VdotLookupEntry } from '@/lib/vdot-lookup'
import type { Discipline } from '@/lib/vdot-utils'
import type { TimeInputState } from '@/hooks/useTimeInput'
import { TimeInputFields } from '@/components/tools/time-input-fields'

interface CalculatorInputCardProps {
  /** All available distance options shown in the select. */
  disciplines: Discipline[]
  /** Currently selected discipline key. */
  discipline: keyof VdotLookupEntry
  onDisciplineChange: (key: keyof VdotLookupEntry) => void
  /** Human-readable label for the selected discipline, used in the time label. */
  selectedLabel: string
  /** Time input state + handlers from `useTimeInput`. */
  timeInput: TimeInputState
  /** Validation error message; empty string = no error. */
  error: string
  /** Called when the Calculate button is pressed (or Enter is pressed in a time field). */
  onCalculate: () => void
  /** Button label. Defaults to "Calculate". */
  buttonLabel?: string
}

export function CalculatorInputCard({
  disciplines,
  discipline,
  onDisciplineChange,
  selectedLabel,
  timeInput,
  error,
  onCalculate,
  buttonLabel = 'Calculate',
}: CalculatorInputCardProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') onCalculate()
  }

  return (
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
            onChange={(e) => onDisciplineChange(e.target.value as keyof VdotLookupEntry)}
            className="w-full border border-custom-gray rounded-lg px-4 py-3 text-base text-custom-dark bg-white focus:outline-none focus:border-custom-dark transition-colors cursor-pointer"
          >
            {disciplines.map((d) => (
              <option key={d.key} value={d.key}>
                {d.label}
              </option>
            ))}
          </select>
        </div>

        {/* Three-field time input */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-custom-dark-gray uppercase tracking-wider">
            Your time for {selectedLabel}
          </span>
          <TimeInputFields timeInput={timeInput} onKeyDown={handleKeyDown} />
          {error && <p className="text-sm text-custom-accent mt-1">{error}</p>}
        </div>

        {/* CTA button */}
        <button
          onClick={onCalculate}
          className="w-full bg-custom-dark text-white rounded-lg px-6 py-3.5 text-base font-medium uppercase tracking-wider hover:bg-custom-accent transition-colors duration-200 cursor-pointer"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}
