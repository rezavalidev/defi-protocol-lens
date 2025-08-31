import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-800 text-white">
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Aave V3 Dashboard (Sepolia)</h1>
        {/* Dashboard component will go here */}
      </div>
    </main>
  )
}
