import { useState } from 'react'
import { PLANS, CYCLE_LABELS } from '../data/plans'

export default function Services() {
  const [cycle, setCycle] = useState(1)

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <p className="font-mono text-xs tracking-[0.2em] text-volt mb-3">SERVICES</p>
      <h1 className="font-display font-bold text-4xl mb-4">Plans built for how you use the internet</h1>
      <p className="text-mist-dim max-w-xl mb-10">
        Every plan includes unlimited data, free installation, and 24/7 support. Pick a speed, then a billing cycle.
      </p>

      <div className="inline-flex rounded-md border border-slate-line p-1 mb-10 bg-ink-soft">
        {Object.entries(CYCLE_LABELS).map(([value, label]) => (
          <button
            key={value}
            onClick={() => setCycle(Number(value))}
            className={`px-4 py-2 rounded text-sm font-display font-semibold transition-colors ${
              cycle === Number(value) ? 'bg-signal text-ink' : 'text-mist-dim hover:text-mist'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLANS.map((p) => {
          const price = p.prices[cycle]
          const isBest = p.tag === 'Best Value'
          return (
            <div
              key={p.id}
              className={`relative rounded-xl border p-6 flex flex-col gap-4 bg-ink-soft transition-all duration-300 hover:-translate-y-1 ${
                isBest ? 'border-signal shadow-[0_0_25px_-8px_rgba(255,196,45,0.4)]' : 'border-slate-line'
              }`}
            >
              {isBest && (
                <span className="absolute -top-3 left-6 bg-signal text-ink text-xs font-display font-bold px-3 py-1 rounded-full">
                  Best Value
                </span>
              )}
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl font-bold">{p.speed}</span>
                <span className="text-mist-dim text-sm">Mbps</span>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-signal">₹{price}</span>
                <span className="text-mist-dim text-sm"> / {CYCLE_LABELS[cycle]}</span>
              </div>
              <button className="font-display font-semibold rounded-md bg-signal text-ink py-2.5 hover:bg-white transition-colors">
                Buy Now
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}