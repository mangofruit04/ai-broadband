import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    setLoading(true)
    try {
      await register(form)
      navigate('/')
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists.')
      } else {
        setError('Could not create your account. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto px-5 py-20">
      <h1 className="font-display font-bold text-3xl mb-2">Create an account</h1>
      <p className="text-mist-dim mb-8 text-sm">Sign up to manage your connection.</p>

      <form onSubmit={handleSubmit} className="space-y-5 bg-ink-soft border border-slate-line rounded-xl p-8">
        <div>
          <label className="block text-sm text-mist-dim mb-1.5" htmlFor="name">Full name</label>
          <input
            id="name" required value={form.name} onChange={update('name')}
            className="w-full rounded-md bg-ink border border-slate-line px-3 py-2 focus:border-volt focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-mist-dim mb-1.5" htmlFor="email">Email</label>
          <input
            id="email" type="email" required value={form.email} onChange={update('email')}
            className="w-full rounded-md bg-ink border border-slate-line px-3 py-2 focus:border-volt focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-mist-dim mb-1.5" htmlFor="password">Password</label>
          <input
            id="password" type="password" required value={form.password} onChange={update('password')}
            className="w-full rounded-md bg-ink border border-slate-line px-3 py-2 focus:border-volt focus:outline-none"
          />
        </div>

        {error && <p className="text-sm text-pulse">{error}</p>}

        <button
          type="submit" disabled={loading}
          className="w-full font-display font-semibold rounded-md bg-signal text-ink py-2.5 hover:bg-white transition-colors disabled:opacity-60"
        >
          {loading ? 'Creating account…' : 'Create account'}
        </button>
      </form>

      <p className="text-sm text-mist-dim mt-6 text-center">
        Already have an account? <Link to="/login" className="text-volt hover:underline">Log in</Link>
      </p>
    </div>
  )
}