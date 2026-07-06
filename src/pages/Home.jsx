import { Link } from 'react-router-dom'
import { Infinity, Wrench, Cable, Zap, Headset, CalendarCheck } from 'lucide-react'
import { FEATURES, CONTACT } from '../data/plans'

const ICONS = [Infinity, Wrench, Cable, Zap, Headset, CalendarCheck]

export default function Home() {
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
        <img
  src="/images/p1.jpg"
  alt="Ai Broadband fiber installation"
  className="w-full h-full object-cover"
/>
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
    </div>
  )
}