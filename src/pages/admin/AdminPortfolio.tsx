import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { PageHeader, Card, StatusBadge, Button, TextInput, TextArea, SelectInput, Toggle } from '@/pages/admin/ui/forms';

interface Project {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  description: string | null;
  cover_image: string | null;
  featured: boolean;
  status: string;
  sort_order: number;
}

interface ProjectForm {
  slug: string;
  title: string;
  category: string;
  description: string;
  cover_image: string;
  featured: boolean;
  status: string;
  sort_order: number;
}

const EMPTY: ProjectForm = {
  slug: '',
  title: '',
  category: 'business',
  description: '',
  cover_image: '',
  featured: false,
  status: 'draft',
  sort_order: 0,
};

export default function AdminPortfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<{ id: string | null; data: ProjectForm } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    const { data } = await supabase.from('projects').select('*').order('sort_order');
    setProjects((data ?? []) as Project[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const startCreate = () => {
    setError(null);
    setEditing({ id: null, data: { ...EMPTY } });
  };

  const startEdit = (p: Project) => {
    setError(null);
    setEditing({
      id: p.id,
      data: {
        slug: p.slug,
        title: p.title,
        category: p.category ?? 'business',
        description: p.description ?? '',
        cover_image: p.cover_image ?? '',
        featured: p.featured,
        status: p.status,
        sort_order: p.sort_order,
      },
    });
  };

  const save = async () => {
    if (!supabase || !editing) return;
    const d = editing.data;
    if (!d.title.trim()) {
      setError('Title is required.');
      return;
    }
    if (!d.slug.trim()) {
      setError('URL slug is required.');
      return;
    }
    setBusy(true);
    const payload = {
      slug: d.slug.trim(),
      title: d.title.trim(),
      category: d.category,
      description: d.description || null,
      cover_image: d.cover_image || null,
      featured: d.featured,
      status: d.status,
      sort_order: Number(d.sort_order) || 0,
    };
    const query = editing.id
      ? supabase.from('projects').update(payload).eq('id', editing.id)
      : supabase.from('projects').insert(payload);
    const { error: qErr } = await query;
    setBusy(false);
    if (qErr) {
      setError(qErr.message);
      return;
    }
    await load();
    setEditing(null);
  };

  const remove = async (p: Project) => {
    if (!supabase) return;
    await supabase.from('projects').delete().eq('id', p.id);
    setProjects((prev) => prev.filter((x) => x.id !== p.id));
  };

  const set = (patch: Partial<ProjectForm>) =>
    setEditing((prev) => (prev ? { ...prev, data: { ...prev.data, ...patch } } : prev));

  return (
    <div>
      <PageHeader
        title="Portfolio"
        description="Your showcased projects."
        actions={<Button onClick={startCreate}>Add Project</Button>}
      />
      {loading ? (
        <Card>
          <p className="text-sm text-[#6e6e73]">Loading…</p>
        </Card>
      ) : projects.length === 0 ? (
        <Card>
          <p className="text-sm text-[#6e6e73]">No projects yet. Add your first one.</p>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {projects.map((p) => (
            <Card key={p.id}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  {p.cover_image && (
                    <img src={p.cover_image} alt="" className="h-14 w-20 shrink-0 rounded-xl object-cover" />
                  )}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-[#1d1d1f]">{p.title}</p>
                      <StatusBadge status={p.status} />
                      {p.featured && (
                        <span className="rounded-full bg-[#fff8e1] px-2 py-0.5 text-xs font-medium text-[#b28904]">
                          featured
                        </span>
                      )}
                    </div>
                    <p className="truncate text-sm text-[#6e6e73]">{p.description ?? p.category}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => startEdit(p)}>Edit</Button>
                  <Button variant="danger" onClick={() => remove(p)}>Delete</Button>
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
            <h2 className="mb-4 text-lg font-semibold text-[#1d1d1f]">
              {editing.id ? 'Edit project' : 'New project'}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextInput label="Title" value={editing.data.title} onChange={(e) => set({ title: e.target.value })} />
              <TextInput
                label="URL slug"
                hint="Used in the page address, e.g. my-project"
                value={editing.data.slug}
                onChange={(e) => set({ slug: e.target.value })}
              />
              <SelectInput
                label="Category"
                value={editing.data.category}
                onChange={(e) => set({ category: e.target.value })}
                options={[
                  { value: 'business', label: 'Business' },
                  { value: 'ecommerce', label: 'E-commerce' },
                ]}
              />
              <SelectInput
                label="Status"
                value={editing.data.status}
                onChange={(e) => set({ status: e.target.value })}
                options={[
                  { value: 'draft', label: 'Draft' },
                  { value: 'published', label: 'Published' },
                ]}
              />
              <div className="sm:col-span-2">
                <TextInput
                  label="Cover image URL"
                  hint="Direct link to the project thumbnail image."
                  value={editing.data.cover_image}
                  onChange={(e) => set({ cover_image: e.target.value })}
                />
              </div>
              <div className="sm:col-span-2">
                <TextArea
                  label="Description"
                  value={editing.data.description}
                  onChange={(e) => set({ description: e.target.value })}
                />
              </div>
              <TextInput
                label="Sort order"
                type="number"
                value={editing.data.sort_order}
                onChange={(e) => set({ sort_order: Number(e.target.value) })}
              />
              <div className="flex items-end">
                <Toggle
                  label="Featured"
                  checked={editing.data.featured}
                  onChange={(v) => set({ featured: v })}
                />
              </div>
            </div>
            {error && <p className="mt-4 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#c0392b]">{error}</p>}
            <div className="mt-4 flex gap-2">
              <Button onClick={save} disabled={busy}>{busy ? 'Saving…' : 'Save'}</Button>
              <Button variant="secondary" onClick={() => setEditing(null)}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
