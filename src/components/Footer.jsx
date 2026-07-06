import { CONTACT } from '../data/plans'

export default function Footer() {
  return (
    <footer className="border-t border-slate-line mt-24">
      <div className="max-w-6xl mx-auto px-5 py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="font-display font-bold text-lg mb-2">
            <span className="text-signal">Ai</span> Broadband
          </div>
          <p className="text-mist-dim">Fiber internet for {CONTACT.area}.</p>
        </div>
        <div>
          <p className="text-mist-dim mb-2 uppercase text-xs tracking-wider">Contact</p>
          {CONTACT.phones.map((p) => (
            <p key={p}><a href={`tel:+91${p}`} className="hover:text-signal">+91 {p}</a></p>
          ))}
        </div>
        <div>
          <p className="text-mist-dim mb-2 uppercase text-xs tracking-wider">Address</p>
          <p className="text-mist-dim">{CONTACT.address}</p>
        </div>
      </div>
      <p className="text-center text-xs text-mist-dim/70 pb-8">
        © {new Date().getFullYear()} Ai Broadband
      </p>
    </footer>
  )
}