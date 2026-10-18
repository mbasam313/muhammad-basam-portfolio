import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { PageHeader, Card, StatusBadge, Button, TextInput, TextArea, Toggle } from '@/pages/admin/ui/forms';

interface Service {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  icon: string | null;
  content: Record<string, unknown>;
  seo: Record<string, unknown>;
  published: boolean;
  sort_order: number;
}

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Service | null>(null);
  const [form, setForm] = useState({ title: '', summary: '', contentJson: '', sortOrder: 0 });
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    const { data } = await supabase.from('services').select('*').order('sort_order');
    setServices((data ?? []) as Service[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const startEdit = (s: Service) => {
    setEditing(s);
    setForm({
      title: s.title,
      summary: s.summary ?? '',
      contentJson: JSON.stringify(s.content ?? {}, null, 2),
      sortOrder: s.sort_order,
    });
    setError(null);
  };

  const save = async () => {
    if (!supabase || !editing) return;
    let parsed: unknown;
    try {
      parsed = JSON.parse(form.contentJson || '{}');
    } catch {
      setError('Content is not valid JSON. Fix the formatting and try again.');
      return;
    }
    setBusy(true);
    const { error: updErr } = await supabase
      .from('services')
      .update({
        title: form.title,
        summary: form.summary || null,
        content: parsed,
        sort_order: Number(form.sortOrder) || 0,
      })
      .eq('id', editing.id);
    setBusy(false);
    if (updErr) {
      setError(updErr.message);
      return;
    }
    setServices((prev) =>
      prev.map((x) =>
        x.id === editing.id
          ? {
              ...x,
              title: form.title,
              summary: form.summary || null,
              content: parsed as object,
              sort_order: Number(form.sortOrder) || 0,
            }
          : x,
      ),
    );
    setEditing(null);
  };

  const togglePublished = async (s: Service) => {
    if (!supabase) return;
    const next = !s.published;
    await supabase.from('services').update({ published: next }).eq('id', s.id);
    setServices((prev) => prev.map((x) => (x.id === s.id ? { ...x, published: next } : x)));
  };

  return (
    <div>
      <PageHeader title="Services" description="The service pages shown in your site navigation." />
      {loading ? (
        <Card>
          <p className="text-sm text-[#6e6e73]">Loading…</p>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {services.map((s) => (
            <Card key={s.id}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-[#1d1d1f]">{s.title}</p>
                    <StatusBadge status={s.published ? 'published' : 'draft'} />
                  </div>
                  <p className="truncate text-sm text-[#6e6e73]">{s.summary ?? '/services/' + s.slug}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => startEdit(s)}>Edit</Button>
                  <Button variant="secondary" onClick={() => togglePublished(s)}>
                    {s.published ? 'Unpublish' : 'Publish'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setEditing(null)}>
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-lg font-semibold text-[#1d1d1f]">Edit service: {editing.slug}</h2>
            <div className="flex flex-col gap-4">
              <TextInput label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              <TextArea
                label="Summary"
                value={form.summary}
                onChange={(e) => setForm({ ...form, summary: e.target.value })}
              />
              <TextArea
                label="Section content (JSON)"
                hint="Advanced: structured content for the service page."
                value={form.contentJson}
                onChange={(e) => setForm({ ...form, contentJson: e.target.value })}
                className="min-h-64 font-mono text-[13px]"
              />
              <TextInput
                label="Sort order"
                type="number"
                value={form.sortOrder}
                onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) })}
              />
              {error && <p className="rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#c0392b]">{error}</p>}
              <div className="flex gap-2">
                <Button onClick={save} disabled={busy}>{busy ? 'Saving…' : 'Save'}</Button>
                <Button variant="secondary" onClick={() => setEditing(null)}>Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
