import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { PageHeader, Card, Button, TextInput, TextArea, Toggle } from '@/pages/admin/ui/forms';

interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}

interface SettingsForm {
  brand_name: string;
  tagline: string;
  contact_email: string;
  contact_phone: string;
  location: string;
  whatsapp_number: string;
  default_seo_title: string;
  default_seo_description: string;
  socialLinksText: string;
}

export default function AdminSettings() {
  const [form, setForm] = useState<SettingsForm | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    (async () => {
      const { data } = await supabase.from('site_settings').select('*').eq('id', 1).maybeSingle();
      if (data) {
        const links = Array.isArray(data.social_links) ? (data.social_links as unknown as SocialLink[]) : [];
        setForm({
          brand_name: data.brand_name ?? '',
          tagline: data.tagline ?? '',
          contact_email: data.contact_email ?? '',
          contact_phone: data.contact_phone ?? '',
          location: data.location ?? '',
          whatsapp_number: data.whatsapp_number ?? '',
          default_seo_title: data.default_seo_title ?? '',
          default_seo_description: data.default_seo_description ?? '',
          socialLinksText: links.map((l) => `${l.label} | ${l.href}`).join('\n'),
        });
      }
      setLoading(false);
    })();
  }, []);

  const save = async () => {
    if (!supabase || !form) return;
    setBusy(true);
    setMessage(null);
    const social_links = form.socialLinksText
      .split('\n')
      .map((line) => line.split('|'))
      .filter((parts) => parts.length >= 2 && parts[0].trim() && parts[1].trim())
      .map((parts) => ({ label: parts[0].trim(), href: parts[1].trim() }));
    const { error: updErr } = await supabase
      .from('site_settings')
      .update({
        brand_name: form.brand_name,
        tagline: form.tagline || null,
        contact_email: form.contact_email || null,
        contact_phone: form.contact_phone || null,
        location: form.location || null,
        whatsapp_number: form.whatsapp_number || null,
        default_seo_title: form.default_seo_title || null,
        default_seo_description: form.default_seo_description || null,
        social_links,
      })
      .eq('id', 1);
    setBusy(false);
    if (updErr) {
      setMessage({ kind: 'err', text: updErr.message });
      return;
    }
    setMessage({ kind: 'ok', text: 'Settings saved.' });
  };

  const set = (patch: Partial<SettingsForm>) => setForm((prev) => (prev ? { ...prev, ...patch } : prev));

  if (loading) {
    return (
      <div>
        <PageHeader title="Settings" />
        <Card>
          <p className="text-sm text-[#6e6e73]">Loading…</p>
        </Card>
      </div>
    );
  }

  if (!form) {
    return (
      <div>
        <PageHeader title="Settings" />
        <Card>
          <p className="text-sm text-[#c0392b]">Settings could not be loaded.</p>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Settings" description="Brand information, contact details and site-wide defaults." />
      <div className="max-w-2xl">
        <Card>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TextInput label="Brand name" value={form.brand_name} onChange={(e) => set({ brand_name: e.target.value })} />
            <TextInput label="Tagline" value={form.tagline} onChange={(e) => set({ tagline: e.target.value })} />
            <TextInput label="Contact email" type="email" value={form.contact_email} onChange={(e) => set({ contact_email: e.target.value })} />
            <TextInput label="Contact phone" value={form.contact_phone} onChange={(e) => set({ contact_phone: e.target.value })} />
            <TextInput label="Location" value={form.location} onChange={(e) => set({ location: e.target.value })} />
            <TextInput
              label="WhatsApp number"
              hint="Digits only, e.g. 923169526957"
              value={form.whatsapp_number}
              onChange={(e) => set({ whatsapp_number: e.target.value })}
            />
            <div className="sm:col-span-2">
              <TextInput label="Default SEO title" value={form.default_seo_title} onChange={(e) => set({ default_seo_title: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <TextArea
                label="Default SEO description"
                value={form.default_seo_description}
                onChange={(e) => set({ default_seo_description: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2">
              <TextArea
                label="Social links (one per line: Label | https://…)"
                value={form.socialLinksText}
                onChange={(e) => set({ socialLinksText: e.target.value })}
              />
            </div>
          </div>
          {message && (
            <p
              className={`mt-4 rounded-xl px-3 py-2 text-sm ${
                message.kind === 'ok' ? 'bg-[#e8f5e9] text-[#2e7d32]' : 'bg-[#fdecec] text-[#c0392b]'
              }`}
            >
              {message.text}
            </p>
          )}
          <div className="mt-4">
            <Button onClick={save} disabled={busy}>{busy ? 'Saving…' : 'Save Settings'}</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
