import { ButtonHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

const base =
  'inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-route-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-route-600 text-white hover:bg-route-700',
  secondary: 'border border-line bg-white text-ink hover:border-route-600 hover:text-route-700',
  ghost: 'bg-transparent text-ink hover:bg-route-50',
  danger: 'bg-coral text-white hover:bg-[#c75d50]'
};

function getButtonClasses(variant: ButtonVariant = 'primary', className = '') {
  return `${base} ${variants[variant]} ${className}`.trim();
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ className = '', variant = 'primary', type = 'button', ...props }: ButtonProps) {
  return <button className={getButtonClasses(variant, className)} type={type} {...props} />;
}

type ButtonLinkProps = LinkProps & {
  variant?: ButtonVariant;
};

export function ButtonLink({ className = '', variant = 'primary', ...props }: ButtonLinkProps) {
  return <Link className={getButtonClasses(variant, className)} {...props} />;
}
