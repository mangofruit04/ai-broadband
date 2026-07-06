import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    navigate('/')
  }

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

        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-mist-dim hidden sm:inline">{user.displayName || user.email}</span>
            <button
              onClick={handleLogout}
              className="text-sm font-display font-semibold px-4 py-2 rounded-md border border-slate-line hover:border-pulse hover:text-pulse transition-colors"
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm text-mist-dim hover:text-mist">Log in</Link>
            <Link
              to="/register"
              className="text-sm font-display font-semibold px-4 py-2 rounded-md bg-signal text-ink hover:bg-white transition-colors"
            >
              Get Connected
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}