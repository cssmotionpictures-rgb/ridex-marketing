import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black text-white font-sans">
      <div className="max-w-3xl text-center space-y-8">
        
        <h1 className="text-6xl font-black tracking-tighter">
          RIDE<span className="text-yellow-500">X</span> NEXUS
        </h1>
        
        <p className="text-xl text-gray-400">
          The ultimate enterprise Web3 ecosystem. Trade, Ride, Stream, and Pay — all inside one unified super-app.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
            <h2 className="text-xl font-bold text-purple-500 mb-2">Bambi FX</h2>
            <p className="text-sm text-gray-500">AI-powered trading signals.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
            <h2 className="text-xl font-bold text-amber-500 mb-2">Monarch</h2>
            <p className="text-sm text-gray-500">Premium market analytics.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
            <h2 className="text-xl font-bold text-green-500 mb-2">FX Beast</h2>
            <p className="text-sm text-gray-500">Monster trading engine.</p>
          </div>
        </div>

        <div className="pt-10">
          <Link 
            href="https://ridex-crixcoin.com" 
            className="inline-block bg-yellow-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            Launch App
          </Link>
        </div>

      </div>
    </main>
  );
}
