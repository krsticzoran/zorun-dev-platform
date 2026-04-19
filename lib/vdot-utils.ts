import { VDOT_LOOKUP_TABLE, type VdotLookupEntry } from '@/lib/vdot-lookup'

export interface Discipline {
  label: string
  key: keyof VdotLookupEntry
}

/** All time-field keys on VdotLookupEntry (excludes `vdot`). */
const TIME_KEYS: (keyof VdotLookupEntry)[] = [
  'time1500m',
  'timeMile',
  'time3000m',
  'time2Mile',
  'time5k',
  'time10k',
  'time15k',
  'timeHalfMarathon',
  'timeMarathon',
]

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
 * Format a number of seconds back into a human-readable time string.
 * >= 1 hour  → H:MM:SS
 * < 1 hour   → M:SS
 */
export function formatSeconds(totalSec: number): string {
  const rounded = Math.round(totalSec)
  if (rounded >= 3600) {
    const h = Math.floor(rounded / 3600)
    const m = Math.floor((rounded % 3600) / 60)
    const s = rounded % 60
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }
  const m = Math.floor(rounded / 60)
  const s = rounded % 60
  return `${m}:${String(s).padStart(2, '0')}`
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
 * Binary search + linear interpolation through the VDOT table.
 *
 * 1. Finds the two surrounding rows (slightly slower and slightly faster).
 * 2. Calculates the precise decimal VDOT by interpolating between them.
 * 3. Interpolates equivalent times for every other discipline.
 *
 * If the input matches a table entry exactly, returns that row as-is.
 *
 * Times in the table are in descending order (slower → faster as index ↑).
 */
export function findClosestVdotEntry(
  disciplineKey: keyof VdotLookupEntry,
  inputSeconds: number
): VdotLookupEntry {
  const table = VDOT_LOOKUP_TABLE

  // --- Binary search: find `lo`, the first index where tableTime <= inputSeconds ---
  let lo = 0
  let hi = table.length - 1

  while (lo < hi) {
    const mid = (lo + hi) >> 1
    const midSeconds = parseTimeToSeconds(table[mid][disciplineKey] as string)
    if (inputSeconds > midSeconds) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }

  // Clamp to table bounds (should already be guaranteed by range check)
  if (lo === 0) return table[0]
  if (lo >= table.length) return table[table.length - 1]

  // `lo` = faster row (smaller time, higher VDOT)
  // `lo - 1` = slower row (larger time, lower VDOT)
  const slower = table[lo - 1]
  const faster = table[lo]

  const slowerSec = parseTimeToSeconds(slower[disciplineKey] as string)
  const fasterSec = parseTimeToSeconds(faster[disciplineKey] as string)

  // Exact match — no interpolation needed
  if (inputSeconds === slowerSec) return slower
  if (inputSeconds === fasterSec) return faster

  // Fraction: 0 = exactly at slower row, 1 = exactly at faster row
  const t = (slowerSec - inputSeconds) / (slowerSec - fasterSec)

  // Interpolated VDOT (e.g. 50.4)
  const interpolatedVdot = Math.round((slower.vdot + t * (faster.vdot - slower.vdot)) * 10) / 10

  // Build the interpolated result with equivalent times for every discipline
  const result: Record<string, string | number> = { vdot: interpolatedVdot }

  for (const key of TIME_KEYS) {
    const sSec = parseTimeToSeconds(slower[key] as string)
    const fSec = parseTimeToSeconds(faster[key] as string)
    const interpolatedSec = sSec + t * (fSec - sSec) // sSec*(1-t) + fSec*t
    result[key] = formatSeconds(interpolatedSec)
  }

  return result as unknown as VdotLookupEntry
}
