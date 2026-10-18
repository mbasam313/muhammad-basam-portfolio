import { useEffect, useRef, useState } from 'react';
import { Upload, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { PageHeader, Card, Button } from '@/pages/admin/ui/forms';

interface MediaItem {
  id: string;
  storage_path: string;
  file_name: string;
  mime_type: string;
  file_size: number | null;
  alt_text: string | null;
  created_at: string;
}

export function mediaPublicUrl(storagePath: string): string {
  if (!supabase) return storagePath;
  return supabase.storage.from('media').getPublicUrl(storagePath).data.publicUrl;
}

export default function AdminMedia() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    const { data } = await supabase.from('media').select('*').order('created_at', { ascending: false });
    setItems((data ?? []) as MediaItem[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const upload = async (files: FileList) => {
    if (!supabase) return;
    setError(null);
    setUploading(true);
    for (const file of Array.from(files)) {
      if (!['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml'].includes(file.type)) {
        setError(`Unsupported file type: ${file.type || 'unknown'}`);
        continue;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError(`File too large (max 5 MB): ${file.name}`);
        continue;
      }
      const ext = file.name.split('.').pop() ?? 'bin';
      const path = `uploads/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error: upErr } = await supabase.storage.from('media').upload(path, file, {
        contentType: file.type,
        upsert: false,
      });
      if (upErr) {
        setError(upErr.message);
        continue;
      }
      await supabase.from('media').insert({
        storage_path: path,
        file_name: file.name,
        mime_type: file.type,
        file_size: file.size,
      });
    }
    setUploading(false);
    await load();
  };

  const saveAlt = async (item: MediaItem, altText: string) => {
    if (!supabase) return;
    await supabase.from('media').update({ alt_text: altText }).eq('id', item.id);
    setItems((prev) => prev.map((x) => (x.id === item.id ? { ...x, alt_text: altText } : x)));
  };

  const remove = async (item: MediaItem) => {
    if (!supabase) return;
    await supabase.storage.from('media').remove([item.storage_path]);
    await supabase.from('media').delete().eq('id', item.id);
    setItems((prev) => prev.filter((x) => x.id !== item.id));
  };

  return (
    <div>
      <PageHeader
        title="Media"
        description="Images used across your site (PNG, JPEG, WebP, SVG — max 5 MB)."
        actions={
          <Button onClick={() => inputRef.current?.click()} disabled={uploading}>
            {uploading ? 'Uploading…' : 'Upload Images'}
          </Button>
        }
      />
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/svg+xml"
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.length) upload(e.target.files);
          e.target.value = '';
        }}
      />
      {error && (
        <div className="mb-4 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#c0392b]">{error}</div>
      )}
      {loading ? (
        <Card>
          <p className="text-sm text-[#6e6e73]">Loading…</p>
        </Card>
      ) : items.length === 0 ? (
        <Card>
          <div className="flex flex-col items-center gap-2 py-8 text-center">
            <Upload className="h-8 w-8 text-[#86868b]" />
            <p className="text-sm text-[#6e6e73]">No images yet. Upload your first one.</p>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.id}>
              <img
                src={mediaPublicUrl(item.storage_path)}
                alt={item.alt_text ?? item.file_name}
                className="mb-3 h-32 w-full rounded-xl object-cover"
              />
              <p className="truncate text-sm font-medium text-[#1d1d1f]" title={item.file_name}>
                {item.file_name}
              </p>
              <p className="text-xs text-[#86868b]">
                {item.file_size ? `${Math.round(item.file_size / 1024)} KB` : item.mime_type}
              </p>
              <input
                defaultValue={item.alt_text ?? ''}
                placeholder="Alt text"
                onBlur={(e) => {
                  if (e.target.value !== (item.alt_text ?? '')) saveAlt(item, e.target.value);
                }}
                className="mt-2 w-full rounded-lg border border-[#d2d2d7] px-2 py-1.5 text-xs text-[#1d1d1f] outline-none focus:border-[#0071e3]"
              />
              <button
                onClick={() => remove(item)}
                className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#fdecec] py-1.5 text-xs text-[#c0392b] transition hover:bg-[#fdecec]"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Delete
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
