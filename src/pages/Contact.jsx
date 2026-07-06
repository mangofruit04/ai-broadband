import { useState } from 'react'
import { CONTACT } from '../data/plans'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form submitted:', form) // we'll replace this with real saving soon
    setSent(true)
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-14">
      <div>
        <p className="font-mono text-xs tracking-[0.2em] text-volt mb-3">CONTACT</p>
        <h1 className="font-display font-bold text-4xl mb-6">Talk to us, or request a new connection</h1>

        <div className="space-y-4 mb-10">
          <div>
            <p className="text-sm text-mist-dim">Owner</p>
            <p className="font-display">{CONTACT.owner}</p>
          </div>
          <div>
            <p className="text-sm text-mist-dim">Phone</p>
            {CONTACT.phones.map((p) => (
              <p key={p}>
                <a href={`tel:+91${p}`} className="hover:text-signal">+91 {p}</a>
              </p>
            ))}
          </div>
          <div>
            <p className="text-sm text-mist-dim">Service area</p>
            <p>{CONTACT.area}</p>
          </div>
          <div>
            <p className="text-sm text-mist-dim">Address</p>
            <p className="max-w-sm">{CONTACT.address}</p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-slate-line h-56">
          <iframe
            title="Service area map"
            className="w-full h-full grayscale invert-[0.9] contrast-[1.1]"
            loading="lazy"
            src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-ink-soft border border-slate-line rounded-xl p-8 space-y-5 h-fit">
        <h2 className="font-display font-semibold text-xl mb-2">Send a message</h2>

        <div>
          <label className="block text-sm text-mist-dim mb-1.5" htmlFor="name">Name</label>
          <input
            id="name" required value={form.name} onChange={update('name')}
            className="w-full rounded-md bg-ink border border-slate-line px-3 py-2 focus:border-volt focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-mist-dim mb-1.5" htmlFor="phone">Phone</label>
          <input
            id="phone" type="tel" required value={form.phone} onChange={update('phone')}
            className="w-full rounded-md bg-ink border border-slate-line px-3 py-2 focus:border-volt focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-mist-dim mb-1.5" htmlFor="email">Email</label>
          <input
            id="email" type="email" value={form.email} onChange={update('email')}
            className="w-full rounded-md bg-ink border border-slate-line px-3 py-2 focus:border-volt focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-mist-dim mb-1.5" htmlFor="message">Message</label>
          <textarea
            id="message" rows={4} value={form.message} onChange={update('message')}
            placeholder="Your address and which plan you're interested in helps us respond faster."
            className="w-full rounded-md bg-ink border border-slate-line px-3 py-2 focus:border-volt focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full font-display font-semibold rounded-md bg-signal text-ink py-2.5 hover:bg-white transition-colors"
        >
          Send message
        </button>

        {sent && <p className="text-sm text-signal">Sent. We'll call you back shortly.</p>}
      </form>
    </div>
  )
}