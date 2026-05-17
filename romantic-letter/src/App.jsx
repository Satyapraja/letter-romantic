import { useRef, useState } from "react"

export default function RomanticLandingPage() {
  const [showComfort, setShowComfort] = useState(false)
  const [showLetter, setShowLetter] = useState(false)

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-rose-50 to-pink-200 text-rose-900 relative">

      {/* FLOATING DECOR */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-2xl opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          >
            {i % 3 === 0 ? "🌸" : i % 3 === 1 ? "💗" : "✨"}
          </div>
        ))}
      </div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">

        <div className="bg-white/40 backdrop-blur-md border border-white/50 shadow-2xl rounded-[40px] p-10 md:p-16 max-w-3xl">

          <p className="uppercase tracking-[0.4em] text-xs text-rose-500 mb-5">
            made with love
          </p>

          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            For Vina Zayyidatul Wazhi
          </h1>

          <p className="text-rose-700">
            Some feelings are too soft for words, so I turned them into a place you can open.
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">

            <button
              onClick={() => setShowLetter(true)}
              className="px-8 py-4 rounded-full bg-rose-400 text-white hover:scale-105 transition"
            >
              Open The Letter
            </button>

            <button
              onClick={() => setShowComfort(true)}
              className="px-8 py-4 rounded-full border border-rose-300 bg-white/50 hover:scale-105 transition"
            >
              Stay A Little Longer
            </button>

          </div>
        </div>

        {/* COMFORT POPUP */}
        {showComfort && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="bg-white/80 p-10 rounded-[40px] max-w-lg relative">

              <button
                onClick={() => setShowComfort(false)}
                className="absolute top-4 right-4"
              >
                ✕
              </button>

              <div className="text-5xl mb-6">🌸</div>

              <p className="text-rose-700 italic">
                You don’t have to be strong all the time.  
                It’s okay to rest. You’re still deeply valued.
              </p>

            </div>
          </div>
        )}

        {/* FLOATING CARD */}
        <div className="mt-16">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl px-8 py-5 shadow-xl">
            <p className="text-sm italic text-rose-700">
              “You feel like a warm memory I haven’t lived yet.”
            </p>
          </div>
        </div>

      </section>

      {/* LETTER SECTION */}
      <section className="px-6 py-28 relative z-10">

        {showLetter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-6">

            <div className="bg-[#fffaf5] rounded-[40px] p-10 max-w-3xl w-full relative">

              <button
                onClick={() => setShowLetter(false)}
                className="absolute top-4 right-4"
              >
                ✕
              </button>

              <h2 className="text-sm tracking-[0.3em] text-rose-400 mb-6">
                THE REAL LETTER
              </h2>

              <div className="space-y-4 text-rose-800 leading-relaxed">
                <p>Dear Vina,</p>

                <p>
                  I don’t really know where to start, but I just want you to know you matter.
                </p>

                <p>
                  You are strong, even when you feel like you're not.
                </p>

                <p>
                  And I’ll stay, even in silence.
                </p>

                <p>
                  — from someone who cares about you
                </p>
              </div>

            </div>
          </div>
        )}

      </section>

    </div>
  )
}