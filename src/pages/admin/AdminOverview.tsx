import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FileText, LayoutGrid, Images, DollarSign, Inbox, Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { PageHeader, Card } from '@/pages/admin/ui/forms';

interface Counts {
  pages: number;
  services: number;
  projects: number;
  plans: number;
  messagesNew: number;
  messagesTotal: number;
}

export default function AdminOverview() {
  const [counts, setCounts] = useState<Counts | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!supabase) {
      setFailed(true);
      return;
    }
    (async () => {
      const [pages, services, projects, plans, msgNew, msgAll] = await Promise.all([
        supabase.from('pages').select('*', { count: 'exact', head: true }),
        supabase.from('services').select('*', { count: 'exact', head: true }),
        supabase.from('projects').select('*', { count: 'exact', head: true }),
        supabase.from('pricing_plans').select('*', { count: 'exact', head: true }),
        supabase.from('contact_messages').select('*', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('contact_messages').select('*', { count: 'exact', head: true }),
      ]);
      setCounts({
        pages: pages.count ?? 0,
        services: services.count ?? 0,
        projects: projects.count ?? 0,
        plans: plans.count ?? 0,
        messagesNew: msgNew.count ?? 0,
        messagesTotal: msgAll.count ?? 0,
      });
    })();
  }, []);

  const tiles = [
    { to: '/admin-dash/content', label: 'Pages', value: counts?.pages, icon: FileText },
    { to: '/admin-dash/services', label: 'Services', value: counts?.services, icon: LayoutGrid },
    { to: '/admin-dash/portfolio', label: 'Projects', value: counts?.projects, icon: Images },
    { to: '/admin-dash/pricing', label: 'Pricing Plans', value: counts?.plans, icon: DollarSign },
    {
      to: '/admin-dash/inbox',
      label: 'New Messages',
      value: counts?.messagesNew,
      icon: Inbox,
      accent: (counts?.messagesNew ?? 0) > 0,
    },
    { to: '/admin-dash/inbox', label: 'Total Messages', value: counts?.messagesTotal, icon: Eye },
  ];

  return (
    <div>
      <PageHeader title="Overview" description="A quick look at your site's content and messages." />
      {failed && (
        <Card>
          <p className="text-sm text-[#c0392b]">Database is not connected. Content management is unavailable.</p>
        </Card>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t) => (
          <Link key={t.label} to={t.to}>
            <Card>
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                    t.accent ? 'bg-[#e3f2fd]' : 'bg-[#f5f5f7]'
                  }`}
                >
                  <t.icon className={`h-5 w-5 ${t.accent ? 'text-[#1565c0]' : 'text-[#1d1d1f]'}`} />
                </div>
                <div>
                  <p className="text-sm text-[#6e6e73]">{t.label}</p>
                  <p className="text-2xl font-semibold text-[#1d1d1f]">
                    {t.value === undefined ? '—' : t.value}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
