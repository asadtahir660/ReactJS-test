import { Link } from 'react-router-dom';
export function Footer() {
    return (<footer className="border-t border-line bg-ink text-white">
      <div className="app-shell grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link className="text-xl font-black" to="/">
            ProspectRoute
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/72">
            A focused React dashboard for prospect follow-up, user lookup, and task ownership.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white/55">Product</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/75">
            <Link to="/dashboard">My Tasks</Link>
            <Link to="/users">Users</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white/55">Build</h3>
          <p className="mt-3 text-sm leading-6 text-white/72">React, Tailwind CSS, Firebase Authentication, and localStorage.</p>
        </div>
      </div>
    </footer>);
}
