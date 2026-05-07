import { ButtonHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const buttonClasses =
  'inline-flex min-h-11 items-center justify-center rounded-[14px_0_14px_0] border-2 border-[#ffe500] bg-[#ffe500] px-7 py-3 text-[15px] font-black leading-none text-black shadow-[0_12px_24px_rgba(255,229,0,0.22)] transition duration-300 hover:border-black hover:bg-black hover:text-white hover:shadow-[0_16px_32px_rgba(0,0,0,0.32)] focus:outline-none focus:ring-2 focus:ring-[#ffe500] focus:ring-offset-2 focus:ring-offset-black';

export function EnergyButton({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`${buttonClasses} ${className}`} type="button" {...props} />;
}

export function EnergyButtonLink({ className = '', ...props }: LinkProps) {
  return <Link className={`${buttonClasses} ${className}`} {...props} />;
}
