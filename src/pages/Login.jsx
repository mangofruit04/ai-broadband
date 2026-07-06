import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(form.email, form.password)
      navigate('/')
    } catch (err) {
      setError('Could not log in. Check your email and password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto px-5 py-20">
      <h1 className="font-display font-bold text-3xl mb-2">Log in</h1>
      <p className="text-mist-dim mb-8 text-sm">Welcome back.</p>

      <form onSubmit={handleSubmit} className="space-y-5 bg-ink-soft border border-slate-line rounded-xl p-8">
        <div>
          <label className="block text-sm text-mist-dim mb-1.5" htmlFor="email">Email</label>
          <input
            id="email" type="email" required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full rounded-md bg-ink border border-slate-line px-3 py-2 focus:border-volt focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-mist-dim mb-1.5" htmlFor="password">Password</label>
          <input
            id="password" type="password" required
            value={form.password}
            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
            className="w-full rounded-md bg-ink border border-slate-line px-3 py-2 focus:border-volt focus:outline-none"
          />
        </div>

        {error && <p className="text-sm text-pulse">{error}</p>}

        <button
          type="submit" disabled={loading}
          className="w-full font-display font-semibold rounded-md bg-signal text-ink py-2.5 hover:bg-white transition-colors disabled:opacity-60"
        >
          {loading ? 'Logging in…' : 'Log in'}
        </button>
      </form>

      <p className="text-sm text-mist-dim mt-6 text-center">
        New here? <Link to="/register" className="text-volt hover:underline">Create an account</Link>
      </p>
    </div>
  )
}