import { Link } from 'react-router-dom';
const base = 'inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-route-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';
const variants = {
    primary: 'bg-route-600 text-white hover:bg-route-700',
    secondary: 'border border-line bg-white text-ink hover:border-route-600 hover:text-route-700',
    ghost: 'bg-transparent text-ink hover:bg-route-50',
    danger: 'bg-coral text-white hover:bg-[#c75d50]'
};
function getButtonClasses(variant = 'primary', className = '') {
    return `${base} ${variants[variant]} ${className}`.trim();
}
export function Button({ className = '', variant = 'primary', type = 'button', ...props }) {
    return <button className={getButtonClasses(variant, className)} type={type} {...props}/>;
}
export function ButtonLink({ className = '', variant = 'primary', ...props }) {
    return <Link className={getButtonClasses(variant, className)} {...props}/>;
}
