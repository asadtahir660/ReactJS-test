import { HTMLAttributes } from 'react';

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-lg border border-line bg-white shadow-[0_8px_30px_rgba(23,32,38,0.06)] ${className}`}
      {...props}
    />
  );
}
