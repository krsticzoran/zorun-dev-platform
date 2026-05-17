'use client'

import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Training5kForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="block mb-1 text-sm font-medium">Age</label>
        <Input type="number" name="age" min={0} placeholder="e.g. 30" />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Gender (optional)</label>
        <select
          name="gender"
          className="h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 text-base md:text-sm"
        >
          <option value="">Prefer not to say</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Weight (kg)</label>
          <Input type="number" name="weight" min={0} placeholder="e.g. 70" />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Height (cm)</label>
          <Input type="number" name="height" min={0} placeholder="e.g. 175" />
        </div>
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Current lifestyle (OBAVEZNO)</label>
        <div className="space-y-2 mt-2">
          <label className="flex items-start gap-2">
            <input type="radio" name="lifestyle" value="sedentary" className="mt-1 h-4 w-4" />
            <span>Sedentary (no regular exercise)</span>
          </label>
          <label className="flex items-start gap-2">
            <input type="radio" name="lifestyle" value="lightly_active" className="mt-1 h-4 w-4" />
            <span>Lightly active (walks occasionally)</span>
          </label>
          <label className="flex items-start gap-2">
            <input
              type="radio"
              name="lifestyle"
              value="moderately_active"
              className="mt-1 h-4 w-4"
            />
            <span>Moderately active (1–3 workouts/week)</span>
          </label>
          <label className="flex items-start gap-2">
            <input type="radio" name="lifestyle" value="active" className="mt-1 h-4 w-4" />
            <span>Active (regular training)</span>
          </label>
        </div>
      </div>

      <div>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}
