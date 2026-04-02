import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const ADMIN_EMAIL = 'panha@69.com';
    const ADMIN_PASSWORD = '123456';

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem('adminToken', 'demo-token-' + Date.now());
      localStorage.setItem('adminEmail', email);
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0d0a] px-4 text-[#f5efe6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,31,46,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(212,163,115,0.12),transparent_24%)]" />
      <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-[#15110d] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <FaLock className="text-2xl text-[#d4a373]" />
          </div>
          <h1 className="text-3xl font-black text-white">Admin Login</h1>
          <p className="mt-2 text-sm text-[#b9afa3]">Manage your portfolio</p>
        </div>

        {error && (
          <div className="mb-6 flex items-center gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-red-100">
            <span>⚠️</span>
            <p>{error}</p>
          </div>
        )}

        <div className="mb-6 rounded-2xl border border-[#3b3128] bg-white/5 p-4 text-sm text-[#f2e9dd]">
          <p className="font-semibold">Admin Login:</p>
          <p>📧 panha@69.com</p>
          <p>🔑 123456</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-white">
              <FaUser className="mr-2 inline" />
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@portfolio.com"
              className="dark-input"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-white">
              <FaLock className="mr-2 inline" />
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="dark-input"
              required
            />
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
            {loading ? 'Logging in...' : 'Login to Dashboard'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#8a7f75]">
          Secure admin access for portfolio management.
        </p>
      </div>
    </div>
  );
}
