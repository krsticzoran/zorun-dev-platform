import type { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { PaceCalculator } from '@/components/tools/pace-calculator'

export const metadata: Metadata = {
  title: 'Pace Calculator — zorun.dev',
  description:
    'Enter your race time for any distance from 1500m to the marathon and get equivalent times for all other distances based on the Jack Daniels VDOT table.',
}

export default function PaceCalculatorPage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-custom-dark-gray mb-3">Tool</p>
          <h1 className="text-[40px] sm:text-[52px] xl:text-[64px] leading-tight font-medium uppercase mb-4">
            Pace Calculator
          </h1>
          <p className="text-base sm:text-lg text-custom-dark-gray leading-relaxed">
            Select a distance, enter your time and get equivalent race times for all other distances
            based on the{' '}
            <span className="text-custom-dark font-medium">Jack Daniels VDOT table</span>.
          </p>
        </div>

        <PaceCalculator />
      </Container>
    </main>
  )
}
