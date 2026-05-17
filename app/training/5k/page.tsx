import Training5kForm from './_components/training-5k-form'

export default function Page() {
  return (
    <main className="py-6">
      <div className="max-w-2xl px-4">
        <h1 className="text-2xl font-semibold mb-4">5K Training — Basic info</h1>
        <Training5kForm />
      </div>
    </main>
  )
}
