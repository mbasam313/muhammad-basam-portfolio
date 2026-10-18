import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { Lock, Mail } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Seo } from '@/components/Seo';

export default function AdminLogin() {
  const { signIn } = useAdminAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const result = await signIn(email, password);
    setBusy(false);
    if (result.ok) {
      navigate('/admin-dash', { replace: true });
    } else {
      setError(result.error ?? 'Sign in failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f7] px-4">
      <Seo
        title="Admin Sign In"
        description="Administrative sign in."
        path="/admin-dash/login"
        robots="noindex, nofollow"
      />
      <div className="w-full max-w-sm rounded-[28px] bg-white p-8">
        <div className="mb-8 flex flex-col items-center gap-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1d1d1f]">
            <Lock className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-[#1d1d1f]">Admin Sign In</h1>
          <p className="text-sm text-[#6e6e73]">Restricted area for site management</p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-[#1d1d1f]">Email</span>
            <div className="flex items-center gap-2 rounded-xl border border-[#d2d2d7] px-3 py-2.5 focus-within:border-[#0071e3]">
              <Mail className="h-4 w-4 text-[#6e6e73]" />
              <input
                type="email"
                required
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-[15px] text-[#1d1d1f] outline-none"
                placeholder="you@example.com"
              />
            </div>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-[#1d1d1f]">Password</span>
            <div className="flex items-center gap-2 rounded-xl border border-[#d2d2d7] px-3 py-2.5 focus-within:border-[#0071e3]">
              <Lock className="h-4 w-4 text-[#6e6e73]" />
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-[15px] text-[#1d1d1f] outline-none"
                placeholder="••••••••"
              />
            </div>
          </label>
          {error && (
            <p className="rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#c0392b]">{error}</p>
          )}
          <button
            type="submit"
            disabled={busy}
            className="mt-2 rounded-full bg-[#0071e3] py-3 text-[15px] font-medium text-white transition hover:bg-[#0060c9] disabled:opacity-60"
          >
            {busy ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
