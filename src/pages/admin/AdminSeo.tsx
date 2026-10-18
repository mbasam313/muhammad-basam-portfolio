import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { PageHeader, Card, Button, TextInput, TextArea, StatusBadge } from '@/pages/admin/ui/forms';

interface SeoRow {
  id: string;
  kind: 'page' | 'service';
  slug: string;
  title: string;
  seo: Record<string, unknown>;
}

interface SeoForm {
  title: string;
  description: string;
  keywords: string;
}

export default function AdminSeo() {
  const [rows, setRows] = useState<SeoRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<{ kind: 'page' | 'service'; id: string; slug: string; data: SeoForm } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    const [pagesRes, servicesRes] = await Promise.all([
      supabase.from('pages').select('id, slug, title, seo').order('sort_order'),
      supabase.from('services').select('id, slug, title, seo').order('sort_order'),
    ]);
    const combined: SeoRow[] = [
      ...((pagesRes.data ?? []) as Omit<SeoRow, 'kind'>[]).map((r) => ({ ...r, kind: 'page' as const })),
      ...((servicesRes.data ?? []) as Omit<SeoRow, 'kind'>[]).map((r) => ({ ...r, kind: 'service' as const })),
    ];
    setRows(combined);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const startEdit = (row: SeoRow) => {
    setError(null);
    const seo = row.seo ?? {};
    setEditing({
      kind: row.kind,
      id: row.id,
      slug: row.slug,
      data: {
        title: String(seo.title ?? ''),
        description: String(seo.description ?? ''),
        keywords: Array.isArray(seo.keywords) ? (seo.keywords as string[]).join(', ') : String(seo.keywords ?? ''),
      },
    });
  };

  const save = async () => {
    if (!supabase || !editing) return;
    const table = editing.kind === 'page' ? 'pages' : 'services';
    const keywords = editing.data.keywords
      .split(',')
      .map((k) => k.trim())
      .filter(Boolean);
    setBusy(true);
    const { error: updErr } = await supabase
      .from(table)
      .update({
        seo: {
          title: editing.data.title || null,
          description: editing.data.description || null,
          keywords,
        },
      })
      .eq('id', editing.id);
    setBusy(false);
    if (updErr) {
      setError(updErr.message);
      return;
    }
    await load();
    setEditing(null);
  };

  const filledCount = (seo: Record<string, unknown> | null | undefined) => {
    if (!seo) return 0;
    return ['title', 'description'].filter((k) => Boolean(seo[k])).length;
  };

  return (
    <div>
      <PageHeader title="SEO" description="Search titles and descriptions for each page and service." />
      {loading ? (
        <Card>
          <p className="text-sm text-[#6e6e73]">Loading…</p>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {rows.map((row) => {
            const filled = filledCount(row.seo);
            return (
              <Card key={`${row.kind}-${row.id}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium text-[#1d1d1f]">{row.title}</p>
                      <span className="rounded-full bg-[#f5f5f7] px-2 py-0.5 text-xs text-[#6e6e73]">{row.kind}</span>
                      <StatusBadge status={filled === 2 ? 'published' : 'draft'} />
                    </div>
                    <p className="text-sm text-[#6e6e73]">
                      {filled === 2 ? 'Title and description set' : filled === 1 ? 'Partially set' : 'Not set'}
                    </p>
                  </div>
                  <Button variant="secondary" onClick={() => startEdit(row)}>Edit</Button>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setEditing(null)}>
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[28px] bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-lg font-semibold text-[#1d1d1f]">SEO for {editing.slug}</h2>
            <div className="flex flex-col gap-4">
              <TextInput
                label="Search title"
                hint="Around 50-60 characters works best."
                value={editing.data.title}
                onChange={(e) => setEditing({ ...editing, data: { ...editing.data, title: e.target.value } })}
              />
              <TextArea
                label="Search description"
                hint="Around 150-160 characters works best."
                value={editing.data.description}
                onChange={(e) => setEditing({ ...editing, data: { ...editing.data, description: e.target.value } })}
              />
              <TextInput
                label="Keywords (comma separated)"
                value={editing.data.keywords}
                onChange={(e) => setEditing({ ...editing, data: { ...editing.data, keywords: e.target.value } })}
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
