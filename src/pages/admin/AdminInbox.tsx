import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { PageHeader, Card, StatusBadge, Button } from '@/pages/admin/ui/forms';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  status: string;
  admin_notes: string | null;
  created_at: string;
}

const STATUS_OPTIONS = ['new', 'in_progress', 'replied', 'archived', 'spam'];

export default function AdminInbox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [selected, setSelected] = useState<Message | null>(null);
  const [notes, setNotes] = useState('');

  const load = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200);
    setMessages((data ?? []) as Message[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const setStatus = async (msg: Message, status: string) => {
    if (!supabase) return;
    await supabase.from('contact_messages').update({ status }).eq('id', msg.id);
    setMessages((prev) => prev.map((m) => (m.id === msg.id ? { ...m, status } : m)));
    if (selected?.id === msg.id) setSelected({ ...selected, status });
  };

  const saveNotes = async () => {
    if (!supabase || !selected) return;
    await supabase.from('contact_messages').update({ admin_notes: notes }).eq('id', selected.id);
    setMessages((prev) => prev.map((m) => (m.id === selected.id ? { ...m, admin_notes: notes } : m)));
  };

  const remove = async (msg: Message) => {
    if (!supabase) return;
    await supabase.from('contact_messages').delete().eq('id', msg.id);
    setMessages((prev) => prev.filter((m) => m.id !== msg.id));
    if (selected?.id === msg.id) setSelected(null);
  };

  const visible = filter === 'all' ? messages : messages.filter((m) => m.status === filter);

  return (
    <div>
      <PageHeader title="Inbox" description="Messages submitted through the contact form." />
      <div className="mb-4 flex flex-wrap gap-2">
        {['all', ...STATUS_OPTIONS].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              filter === s ? 'bg-[#1d1d1f] text-white' : 'bg-white text-[#1d1d1f] hover:bg-[#e5e5ea]'
            }`}
          >
            {s.replace('_', ' ')}
          </button>
        ))}
      </div>
      {loading ? (
        <Card>
          <p className="text-sm text-[#6e6e73]">Loading…</p>
        </Card>
      ) : visible.length === 0 ? (
        <Card>
          <p className="text-sm text-[#6e6e73]">No messages here yet.</p>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {visible.map((m) => (
            <Card key={m.id}>
              <button className="w-full text-left" onClick={() => { setSelected(m); setNotes(m.admin_notes ?? ''); }}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-medium text-[#1d1d1f]">{m.name}</p>
                    <p className="truncate text-sm text-[#6e6e73]">{m.email}</p>
                  </div>
                  <StatusBadge status={m.status} />
                </div>
                {m.subject && <p className="mt-2 text-sm font-medium text-[#1d1d1f]">{m.subject}</p>}
                <p className="mt-1 line-clamp-2 text-sm text-[#6e6e73]">{m.message}</p>
                <p className="mt-2 text-xs text-[#86868b]">{new Date(m.created_at).toLocaleString()}</p>
              </button>
              <div className="mt-3 flex flex-wrap gap-2 border-t border-[#f5f5f7] pt-3">
                {STATUS_OPTIONS.filter((s) => s !== m.status).map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(m, s)}
                    className="rounded-full border border-[#d2d2d7] px-3 py-1 text-xs text-[#1d1d1f] transition hover:border-[#0071e3] hover:text-[#0071e3]"
                  >
                    Mark {s.replace('_', ' ')}
                  </button>
                ))}
                <button
                  onClick={() => remove(m)}
                  className="rounded-full border border-[#fdecec] px-3 py-1 text-xs text-[#c0392b] transition hover:bg-[#fdecec]"
                >
                  Delete
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelected(null)}>
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[28px] bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-[#1d1d1f]">{selected.name}</h2>
                <a href={`mailto:${selected.email}`} className="text-sm text-[#0071e3]">
                  {selected.email}
                </a>
              </div>
              <StatusBadge status={selected.status} />
            </div>
            {selected.subject && <p className="mt-3 font-medium text-[#1d1d1f]">{selected.subject}</p>}
            <p className="mt-2 whitespace-pre-wrap text-[15px] text-[#1d1d1f]">{selected.message}</p>
            <p className="mt-3 text-xs text-[#86868b]">{new Date(selected.created_at).toLocaleString()}</p>
            <div className="mt-4 border-t border-[#f5f5f7] pt-4">
              <label className="mb-1.5 block text-sm font-medium text-[#1d1d1f]">Private notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-24 w-full rounded-xl border border-[#d2d2d7] px-3 py-2.5 text-[15px] text-[#1d1d1f] outline-none focus:border-[#0071e3]"
              />
              <div className="mt-3 flex gap-2">
                <Button onClick={saveNotes}>Save Notes</Button>
                <Button variant="secondary" onClick={() => setSelected(null)}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
