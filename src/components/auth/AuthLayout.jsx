import { Link } from 'react-router-dom';
import { Navbar } from '../layout/Navbar';
import { Card } from '../ui/Card';
export function AuthLayout({ title, subtitle, children }) {
    return (<div className="min-h-screen bg-surface">
      <Navbar />
      <main className="auth-shell app-shell grid items-center gap-8 py-10 lg:grid-cols-[1fr_420px]">
        <section className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-route-600">Secure access</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg leading-8 text-muted">{subtitle}</p>
          <Link className="mt-6 inline-block text-sm font-bold text-route-700" to="/">
            Back to landing page
          </Link>
        </section>
        <Card className="p-5 sm:p-6">{children}</Card>
      </main>
    </div>);
}
