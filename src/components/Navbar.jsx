import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-slate-line">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="text-signal">Ai</span>
          <span>Broadband</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-mist-dim hover:text-mist">Home</Link>
          <Link to="/services" className="text-mist-dim hover:text-mist">Plans</Link>
          <Link to="/contact" className="text-mist-dim hover:text-mist">Contact</Link>
        </div>
        <Link
          to="/register"
          className="text-sm font-display font-semibold px-4 py-2 rounded-md bg-signal text-ink hover:bg-white transition-colors"
        >
          Get Connected
        </Link>
      </nav>
    </header>
  )
}
