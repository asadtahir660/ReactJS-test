import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, id, className = '', ...props }: InputProps) {
  const inputId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, '-');

  return (
    <label className="block" htmlFor={inputId}>
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      <input
        className={`min-h-11 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-route-600 focus:ring-2 focus:ring-route-100 ${className}`}
        id={inputId}
        {...props}
      />
      {error ? <span className="mt-1.5 block text-sm text-coral">{error}</span> : null}
    </label>
  );
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function TextArea({ label, error, id, className = '', ...props }: TextAreaProps) {
  const inputId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, '-');

  return (
    <label className="block" htmlFor={inputId}>
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      <textarea
        className={`min-h-28 w-full resize-y rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-route-600 focus:ring-2 focus:ring-route-100 ${className}`}
        id={inputId}
        {...props}
      />
      {error ? <span className="mt-1.5 block text-sm text-coral">{error}</span> : null}
    </label>
  );
}
