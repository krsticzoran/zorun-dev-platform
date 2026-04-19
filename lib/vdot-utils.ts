import { VDOT_LOOKUP_TABLE, type VdotLookupEntry } from '@/lib/vdot-lookup'

export interface Discipline {
  label: string
  key: keyof VdotLookupEntry
}

export const DISCIPLINES: Discipline[] = [
  { label: '1500m', key: 'time1500m' },
  { label: '1 Mile', key: 'timeMile' },
  { label: '3000m', key: 'time3000m' },
  { label: '2 Mile', key: 'time2Mile' },
  { label: '5K', key: 'time5k' },
  { label: '10K', key: 'time10k' },
  { label: '15K', key: 'time15k' },
  { label: 'Half Marathon', key: 'timeHalfMarathon' },
  { label: 'Marathon', key: 'timeMarathon' },
]

export function parseTimeToSeconds(time: string): number {
  const parts = time.trim().split(':').map(Number)
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2]
  }
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1]
  }
  return NaN
}

/**
 * Returns the valid time range (slowest / fastest) for a given discipline.
 * Table index 0 = VDOT 30 (slowest), last index = VDOT 85 (fastest).
 */
export function getTimeRange(disciplineKey: keyof VdotLookupEntry): {
  slowest: string
  fastest: string
} {
  const table = VDOT_LOOKUP_TABLE
  return {
    slowest: table[0][disciplineKey] as string,
    fastest: table[table.length - 1][disciplineKey] as string,
  }
}

/**
 * Binary search through the VDOT table to find the entry whose time for
 * the given discipline is closest to inputSeconds.
 *
 * Times are sorted in descending order (slower → faster as index increases).
 */
export function findClosestVdotEntry(
  disciplineKey: keyof VdotLookupEntry,
  inputSeconds: number
): VdotLookupEntry {
  const table = VDOT_LOOKUP_TABLE
  let lo = 0
  let hi = table.length - 1

  while (lo < hi) {
    const mid = (lo + hi) >> 1
    const midSeconds = parseTimeToSeconds(table[mid][disciplineKey] as string)
    // Times decrease as index increases, so if input is slower (larger) go left
    if (inputSeconds > midSeconds) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }

  // lo is now the first index where tableTime <= inputSeconds
  // Compare lo and its left neighbour to find the closest
  if (lo === 0) return table[0]
  if (lo >= table.length) return table[table.length - 1]

  const diffLo = Math.abs(parseTimeToSeconds(table[lo][disciplineKey] as string) - inputSeconds)
  const diffPrev = Math.abs(
    parseTimeToSeconds(table[lo - 1][disciplineKey] as string) - inputSeconds
  )

  return diffLo <= diffPrev ? table[lo] : table[lo - 1]
}
