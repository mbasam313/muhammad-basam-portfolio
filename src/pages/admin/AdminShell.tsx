import { useState, type ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import {
  BarChart3,
  FileText,
  LayoutGrid,
  Images,
  DollarSign,
  Inbox,
  Search,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';

interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

const NAV_ITEMS: NavItem[] = [
  { to: '/admin-dash', exact: true, label: 'Overview', icon: BarChart3 },
  { to: '/admin-dash/content', label: 'Content', icon: FileText },
  { to: '/admin-dash/services', label: 'Services', icon: LayoutGrid },
  { to: '/admin-dash/portfolio', label: 'Portfolio', icon: Images },
  { to: '/admin-dash/media', label: 'Media', icon: Images },
  { to: '/admin-dash/pricing', label: 'Pricing', icon: DollarSign },
  { to: '/admin-dash/inbox', label: 'Inbox', icon: Inbox },
  { to: '/admin-dash/seo', label: 'SEO', icon: Search },
  { to: '/admin-dash/settings', label: 'Settings', icon: Settings },
];

const LABELS: Record<string, string> = {
  'admin-dash': 'Admin',
  content: 'Content',
  services: 'Services',
  portfolio: 'Portfolio',
  media: 'Media',
  pricing: 'Pricing',
  inbox: 'Inbox',
  seo: 'SEO',
  settings: 'Settings',
  login: 'Sign In',
  new: 'New',
  edit: 'Edit',
};

export function AdminShell({ children }: { children: ReactNode }) {
  const { signOut } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const segments = location.pathname.split('/').filter(Boolean);
  const crumbs = segments.map((seg, i) => ({
    label: LABELS[seg] ?? seg,
    path: '/' + segments.slice(0, i + 1).join('/'),
  }));

  const isActive = (item: NavItem) =>
    'exact' in item && item.exact ? location.pathname === item.to : location.pathname.startsWith(item.to);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin-dash/login');
  };

  const nav = (
    <nav className="flex flex-col gap-1">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          end={'exact' in item}
          onClick={() => setMobileOpen(false)}
          className={[
            'flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] transition',
            isActive(item)
              ? 'bg-[#0071e3] text-white'
              : 'text-[#d2d2d7] hover:bg-white/10 hover:text-white',
          ].join(' ')}
        >
          <item.icon className="h-4.5 w-4.5" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="flex min-h-screen bg-[#f5f5f7]">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col bg-[#1d1d1f] px-4 py-6 lg:flex">
        <Link to="/admin-dash" className="mb-8 px-3 text-lg font-semibold text-white">
          Muhammad Basam
          <span className="mt-0.5 block text-xs font-normal text-[#6e6e73]">Admin Dashboard</span>
        </Link>
        {nav}
        <button
          onClick={handleSignOut}
          className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] text-[#d2d2d7] transition hover:bg-white/10 hover:text-white"
        >
          <LogOut className="h-4.5 w-4.5" />
          Sign Out
        </button>
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-64 flex-col bg-[#1d1d1f] px-4 py-6">
            <div className="mb-8 flex items-center justify-between px-3">
              <span className="text-lg font-semibold text-white">Admin</span>
              <button onClick={() => setMobileOpen(false)} className="text-[#d2d2d7]">
                <X className="h-5 w-5" />
              </button>
            </div>
            {nav}
            <button
              onClick={handleSignOut}
              className="mt-auto flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] text-[#d2d2d7] transition hover:bg-white/10 hover:text-white"
            >
              <LogOut className="h-4.5 w-4.5" />
              Sign Out
            </button>
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
        <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-[#e5e5ea] bg-white/90 px-4 py-3 backdrop-blur lg:px-8">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-[#1d1d1f] hover:bg-[#f5f5f7] lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <nav className="flex min-w-0 items-center gap-1.5 text-sm">
            {crumbs.map((c, i) => (
              <span key={c.path} className="flex min-w-0 items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#6e6e73]" />}
                {i < crumbs.length - 1 ? (
                  <Link to={c.path} className="truncate text-[#6e6e73] hover:text-[#0071e3]">
                    {c.label}
                  </Link>
                ) : (
                  <span className="truncate font-medium text-[#1d1d1f]">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <Link
            to="/"
            className="ml-auto hidden shrink-0 rounded-full border border-[#d2d2d7] px-4 py-1.5 text-sm text-[#1d1d1f] transition hover:border-[#0071e3] hover:text-[#0071e3] sm:block"
          >
            View Site
          </Link>
        </header>
        <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
