import { Link } from 'react-router-dom'
import { Infinity, Wrench, Cable, Zap, Headset, CalendarCheck } from 'lucide-react'
import { FEATURES, CONTACT, PLANS, CYCLE_LABELS } from '../data/plans'

const ICONS = [Infinity, Wrench, Cable, Zap, Headset, CalendarCheck]

const STEPS = [
  { n: '01', title: 'Pick a plan', desc: 'Choose the speed that fits how your home uses the internet.' },
  { n: '02', title: 'We install', desc: 'Our technician runs the fiber line — most homes go live the same day.' },
  { n: '03', title: 'Stay connected', desc: 'Track usage and renew from your dashboard, or just call us.' },
]

const TESTIMONIALS = [
  { name: 'Fahad R.', area: 'Jahanuma', quote: 'Installed the same afternoon I called. Speed matched what was promised.' },
  { name: 'Ayesha S.', area: 'Bahadurpura', quote: 'Switched from a cable operator — no more buffering during video calls.' },
  { name: 'Imran K.', area: 'Jahanuma', quote: 'Support actually picks up the phone. Fixed a router issue in ten minutes.' },
]

export default function Home() {
  const popular = PLANS.filter((p) => [150, 300, 500].includes(p.speed))

  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-volt mb-4">
            GPON HIGH-SPEED FIBER · {CONTACT.area.toUpperCase()}
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-6">
            Feel the difference of <span className="text-signal">real</span> fiber speed.
          </h1>
          <p className="text-mist-dim text-lg mb-8 max-w-md">
            Unlimited data, free installation, and speeds up to 500 Mbps — installed the same day you call.
          </p>
          <div className="pulse-track w-full max-w-md h-px bg-slate-line mb-8">
            <span className="pulse-dot" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/services" className="font-display font-semibold px-6 py-3 rounded-md bg-signal text-ink hover:bg-white transition-colors">
              View Plans
            </Link>
            <a href={`tel:+91${CONTACT.phones[0]}`} className="font-display font-semibold px-6 py-3 rounded-md border border-slate-line hover:border-volt hover:text-volt transition-colors">
              Call {CONTACT.phones[0]}
            </a>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-slate-line">
          <img src="/images/p1.jpg" alt="Ai Broadband fiber installation" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 border-t border-slate-line">
        <h2 className="font-display font-bold text-2xl mb-10">What every connection includes</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={f.title}
                className="p-5 rounded-lg border border-slate-line bg-ink-soft transition-all duration-300 hover:-translate-y-1 hover:border-signal hover:shadow-[0_0_25px_-8px_rgba(255,196,45,0.4)]"
              >
                <Icon className="w-6 h-6 text-signal mb-3" strokeWidth={1.75} />
                <h3 className="font-display font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-mist-dim">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Popular plans */}
      <section className="max-w-6xl mx-auto px-5 py-16 border-t border-slate-line">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-display font-bold text-2xl">Popular plans</h2>
          <Link to="/services" className="text-sm text-volt hover:underline">See all plans →</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popular.map((p) => (
            <div
              key={p.id}
              className={`relative rounded-xl border p-6 flex flex-col gap-4 bg-ink-soft transition-all duration-300 hover:-translate-y-1 ${
                p.tag ? 'border-signal shadow-[0_0_25px_-8px_rgba(255,196,45,0.4)]' : 'border-slate-line'
              }`}
            >
              {p.tag && (
                <span className="absolute -top-3 left-6 bg-signal text-ink text-xs font-display font-bold px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              )}
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl font-bold">{p.speed}</span>
                <span className="text-mist-dim text-sm">Mbps</span>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-signal">₹{p.prices[1]}</span>
                <span className="text-mist-dim text-sm"> / {CYCLE_LABELS[1]}</span>
              </div>
              <Link
                to="/services"
                className="text-center font-display font-semibold rounded-md bg-signal text-ink py-2.5 hover:bg-white transition-colors"
              >
                View Plan
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-5 py-16 border-t border-slate-line">
        <h2 className="font-display font-bold text-2xl mb-10">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.n}>
              <div className="font-mono text-volt text-sm mb-2">{s.n}</div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-mist-dim">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-5 py-16 border-t border-slate-line">
        <h2 className="font-display font-bold text-2xl mb-10">From the neighborhood</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="p-6 rounded-lg border border-slate-line bg-ink-soft">
              <p className="text-sm text-mist-dim mb-4">"{t.quote}"</p>
              <p className="font-display text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-mist-dim">{t.area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 py-20 border-t border-slate-line text-center">
        <h2 className="font-display font-bold text-3xl mb-4">Ready to get connected?</h2>
        <p className="text-mist-dim mb-8">Same day installation available in {CONTACT.area}.</p>
        <Link to="/contact" className="inline-block font-display font-semibold px-8 py-3 rounded-md bg-signal text-ink hover:bg-white transition-colors">
          Request a new connection
        </Link>
      </section>
    </div>
  )
}