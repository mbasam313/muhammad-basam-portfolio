import {
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type SelectHTMLAttributes,
  type ReactNode,
} from 'react';

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-[#1d1d1f]">{label}</span>
      {children}
      {hint && <span className="text-xs text-[#6e6e73]">{hint}</span>}
    </label>
  );
}

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
}

export function TextInput({ label, hint, ...props }: TextInputProps) {
  return (
    <Field label={label} hint={hint}>
      <input
        {...props}
        className="rounded-xl border border-[#d2d2d7] bg-white px-3 py-2.5 text-[15px] text-[#1d1d1f] outline-none transition focus:border-[#0071e3]"
      />
    </Field>
  );
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
}

export function TextArea({ label, hint, ...props }: TextAreaProps) {
  return (
    <Field label={label} hint={hint}>
      <textarea
        {...props}
        className="min-h-24 rounded-xl border border-[#d2d2d7] bg-white px-3 py-2.5 text-[15px] text-[#1d1d1f] outline-none transition focus:border-[#0071e3]"
      />
    </Field>
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  hint?: string;
  options: { value: string; label: string }[];
}

export function SelectInput({ label, hint, options, ...props }: SelectProps) {
  return (
    <Field label={label} hint={hint}>
      <select
        {...props}
        className="rounded-xl border border-[#d2d2d7] bg-white px-3 py-2.5 text-[15px] text-[#1d1d1f] outline-none transition focus:border-[#0071e3]"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </Field>
  );
}

export function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-[#d2d2d7] bg-white px-3 py-2.5">
      <span className="text-sm font-medium text-[#1d1d1f]">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${checked ? 'bg-[#0071e3]' : 'bg-[#d2d2d7]'}`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
            checked ? 'left-[22px]' : 'left-0.5'
          }`}
        />
      </button>
    </label>
  );
}

export function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}) {
  const styles: Record<string, string> = {
    primary: 'bg-[#0071e3] text-white hover:bg-[#0060c9]',
    secondary: 'border border-[#d2d2d7] text-[#1d1d1f] hover:border-[#0071e3] hover:text-[#0071e3]',
    danger: 'bg-[#c0392b] text-white hover:bg-[#a93226]',
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full px-5 py-2.5 text-[15px] font-medium transition disabled:opacity-60 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded-[28px] bg-white p-6">{children}</div>;
}

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-[#1d1d1f]">{title}</h1>
        {description && <p className="mt-1 text-sm text-[#6e6e73]">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    published: 'bg-[#e8f5e9] text-[#2e7d32]',
    draft: 'bg-[#f5f5f7] text-[#6e6e73]',
    new: 'bg-[#e3f2fd] text-[#1565c0]',
    in_progress: 'bg-[#fff3e0] text-[#ef6c00]',
    replied: 'bg-[#e8f5e9] text-[#2e7d32]',
    archived: 'bg-[#f5f5f7] text-[#6e6e73]',
    spam: 'bg-[#fdecec] text-[#c0392b]',
  };
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${map[status] ?? 'bg-[#f5f5f7] text-[#6e6e73]'}`}>
      {status.replace('_', ' ')}
    </span>
  );
}
