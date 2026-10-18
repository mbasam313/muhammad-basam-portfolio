import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { PageHeader, Card, StatusBadge, Button, TextInput, TextArea, Toggle } from '@/pages/admin/ui/forms';

interface Page {
  id: string;
  slug: string;
  title: string;
  content: Record<string, unknown>;
  seo: Record<string, unknown>;
  published: boolean;
}

export default function AdminContent() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Page | null>(null);
  const [title, setTitle] = useState('');
  const [contentJson, setContentJson] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    const { data } = await supabase.from('pages').select('*').order('sort_order');
    setPages((data ?? []) as Page[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const startEdit = (page: Page) => {
    setEditing(page);
    setTitle(page.title);
    setContentJson(JSON.stringify(page.content ?? {}, null, 2));
    setError(null);
  };

  const save = async () => {
    if (!supabase || !editing) return;
    let parsed: unknown;
    try {
      parsed = JSON.parse(contentJson);
    } catch {
      setError('Content is not valid JSON. Fix the formatting and try again.');
      return;
    }
    setBusy(true);
    const { error: updErr } = await supabase
      .from('pages')
      .update({ title, content: parsed })
      .eq('id', editing.id);
    setBusy(false);
    if (updErr) {
      setError(updErr.message);
      return;
    }
    setPages((prev) => prev.map((p) => (p.id === editing.id ? { ...p, title, content: parsed as object } : p)));
    setEditing(null);
  };

  const togglePublished = async (page: Page) => {
    if (!supabase) return;
    const next = !page.published;
    await supabase.from('pages').update({ published: next }).eq('id', page.id);
    setPages((prev) => prev.map((p) => (p.id === page.id ? { ...p, published: next } : p)));
  };

  return (
    <div>
      <PageHeader title="Content" description="Editable pages: titles, section content, and publish state." />
      {loading ? (
        <Card>
          <p className="text-sm text-[#6e6e73]">Loading…</p>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {pages.map((page) => (
            <Card key={page.id}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-[#1d1d1f]">{page.title}</p>
                    <StatusBadge status={page.published ? 'published' : 'draft'} />
                  </div>
                  <p className="text-sm text-[#6e6e73]">/{page.slug}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => startEdit(page)}>Edit</Button>
                  <Button variant="secondary" onClick={() => togglePublished(page)}>
                    {page.published ? 'Unpublish' : 'Publish'}
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
            <h2 className="mb-4 text-lg font-semibold text-[#1d1d1f]">Edit page: {editing.slug}</h2>
            <div className="flex flex-col gap-4">
              <TextInput label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <TextArea
                label="Section content (JSON)"
                hint="Advanced: structured content for each section of the page."
                value={contentJson}
                onChange={(e) => setContentJson(e.target.value)}
                className="min-h-64 font-mono text-[13px]"
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
