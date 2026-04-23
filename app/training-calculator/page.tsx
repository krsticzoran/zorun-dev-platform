import type { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { TrainingCalculator } from '@/components/tools/training-calculator'

export const metadata: Metadata = {
  title: 'Training Pace Calculator — zorun.dev',
  description:
    'Enter your race time for any distance and get personalized training paces — easy, threshold, interval and rep paces — based on the Jack Daniels VDOT system.',
}

export default function TrainingCalculatorPage() {
  return (
    <main className="pt-40 pb-16 sm:pt-48 sm:pb-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-[40px] sm:text-[52px] xl:text-[64px] leading-tight font-medium uppercase mb-4">
            Training Paces
          </h1>
          <p className="text-base sm:text-lg text-custom-dark-gray leading-relaxed">
            Select a distance, enter your recent race time and get your personalized{' '}
            <span className="text-custom-dark font-medium">Jack Daniels training paces</span> —
            easy, threshold, interval and repetition zones.
          </p>
        </div>

        <TrainingCalculator />
      </Container>
    </main>
  )
}
