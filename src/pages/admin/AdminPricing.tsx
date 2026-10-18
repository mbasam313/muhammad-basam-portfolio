import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { PageHeader, Card, StatusBadge, Button, TextInput, TextArea, SelectInput, Toggle } from '@/pages/admin/ui/forms';

interface Plan {
  id: string;
  name: string;
  category: string;
  service_name: string | null;
  price: string | null;
  period: string | null;
  description: string | null;
  features: string[];
  cta_label: string | null;
  cta_url: string | null;
  featured: boolean;
  status: string;
  sort_order: number;
}

interface PlanForm {
  name: string;
  category: string;
  service_name: string;
  price: string;
  period: string;
  description: string;
  featuresText: string;
  cta_label: string;
  cta_url: string;
  featured: boolean;
  status: string;
  sort_order: number;
}

const EMPTY: PlanForm = {
  name: '',
  category: 'per-project',
  service_name: '',
  price: '',
  period: '',
  description: '',
  featuresText: '',
  cta_label: '',
  cta_url: '',
  featured: false,
  status: 'draft',
  sort_order: 0,
};

function toForm(p: Plan): PlanForm {
  return {
    name: p.name,
    category: p.category,
    service_name: p.service_name ?? '',
    price: p.price ?? '',
    period: p.period ?? '',
    description: p.description ?? '',
    featuresText: (p.features ?? []).join('\n'),
    cta_label: p.cta_label ?? '',
    cta_url: p.cta_url ?? '',
    featured: p.featured,
    status: p.status,
    sort_order: p.sort_order,
  };
}

export default function AdminPricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<{ id: string | null; data: PlanForm } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const load = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    const { data } = await supabase.from('pricing_plans').select('*').order('sort_order');
    setPlans((data ?? []) as Plan[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const startCreate = () => setEditing({ id: null, data: { ...EMPTY } });

  const startEdit = (p: Plan) => {
    setError(null);
    setEditing({ id: p.id, data: toForm(p) });
  };

  const save = async () => {
    if (!supabase || !editing) return;
    const d = editing.data;
    if (!d.name.trim()) {
      setError('Name is required.');
      return;
    }
    setBusy(true);
    const payload = {
      name: d.name.trim(),
      category: d.category,
      service_name: d.service_name || null,
      price: d.price || null,
      period: d.period || null,
      description: d.description || null,
      features: d.featuresText.split('\n').map((f) => f.trim()).filter(Boolean),
      cta_label: d.cta_label || null,
      cta_url: d.cta_url || null,
      featured: d.featured,
      status: d.status,
      sort_order: Number(d.sort_order) || 0,
    };
    const query = editing.id
      ? supabase.from('pricing_plans').update(payload).eq('id', editing.id)
      : supabase.from('pricing_plans').insert(payload);
    const { error: qErr } = await query;
    setBusy(false);
    if (qErr) {
      setError(qErr.message);
      return;
    }
    await load();
    setEditing(null);
  };

  const remove = async (p: Plan) => {
    if (!supabase) return;
    await supabase.from('pricing_plans').delete().eq('id', p.id);
    setPlans((prev) => prev.filter((x) => x.id !== p.id));
  };

  const set = (patch: Partial<PlanForm>) =>
    setEditing((prev) => (prev ? { ...prev, data: { ...prev.data, ...patch } } : prev));

  return (
    <div>
      <PageHeader
        title="Pricing"
        description="Plans shown on the public pricing page."
        actions={<Button onClick={startCreate}>Add Plan</Button>}
      />
      {loading ? (
        <Card>
          <p className="text-sm text-[#6e6e73]">Loading…</p>
        </Card>
      ) : plans.length === 0 ? (
        <Card>
          <p className="text-sm text-[#6e6e73]">No plans yet. Add your first one.</p>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {plans.map((p) => (
            <Card key={p.id}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium text-[#1d1d1f]">{p.name}</p>
                    <StatusBadge status={p.status} />
                    {p.featured && (
                      <span className="rounded-full bg-[#fff8e1] px-2 py-0.5 text-xs font-medium text-[#b28904]">
                        featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#6e6e73]">
                    {[p.service_name, p.price, p.period].filter(Boolean).join(' • ')}
                  </p>
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
              {editing.id ? 'Edit plan' : 'New plan'}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextInput label="Name" value={editing.data.name} onChange={(e) => set({ name: e.target.value })} />
              <SelectInput
                label="Category"
                value={editing.data.category}
                onChange={(e) => set({ category: e.target.value })}
                options={[
                  { value: 'per-project', label: 'Per-project' },
                  { value: 'monthly', label: 'Monthly' },
                ]}
              />
              <TextInput
                label="Service name"
                value={editing.data.service_name}
                onChange={(e) => set({ service_name: e.target.value })}
              />
              <TextInput label="Price" value={editing.data.price} onChange={(e) => set({ price: e.target.value })} />
              <TextInput label="Period" hint="e.g. per project / per month" value={editing.data.period} onChange={(e) => set({ period: e.target.value })} />
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
                <TextArea
                  label="Description"
                  value={editing.data.description}
                  onChange={(e) => set({ description: e.target.value })}
                />
              </div>
              <div className="sm:col-span-2">
                <TextArea
                  label="Features (one per line)"
                  value={editing.data.featuresText}
                  onChange={(e) => set({ featuresText: e.target.value })}
                />
              </div>
              <TextInput label="Button label" value={editing.data.cta_label} onChange={(e) => set({ cta_label: e.target.value })} />
              <TextInput label="Button link" value={editing.data.cta_url} onChange={(e) => set({ cta_url: e.target.value })} />
              <TextInput
                label="Sort order"
                type="number"
                value={editing.data.sort_order}
                onChange={(e) => set({ sort_order: Number(e.target.value) })}
              />
              <div className="flex items-end">
                <Toggle label="Featured" checked={editing.data.featured} onChange={(v) => set({ featured: v })} />
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
