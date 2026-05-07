import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { Button, ButtonLink } from '../ui/Button';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm font-semibold transition ${
    isActive ? 'bg-route-50 text-route-700' : 'text-muted hover:bg-white hover:text-ink'
  }`;

export function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    await logout();
    navigate('/');
  }

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
      <nav className="app-shell flex min-h-[74px] items-center justify-between gap-4 py-3">
        <Link className="flex items-center gap-3 text-xl font-black text-ink" to="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-route-600 text-base font-black text-white">
            PR
          </span>
          <span>ProspectRoute</span>
        </Link>

        <button
          className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          Menu
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {user ? (
            <>
              <NavLink className={navLinkClass} to="/dashboard">
                My Tasks
              </NavLink>
              <NavLink className={navLinkClass} to="/users">
                Users
              </NavLink>
              <Button onClick={handleLogout} variant="secondary">
                Logout
              </Button>
            </>
          ) : (
            <>
              <NavLink className={navLinkClass} to="/login">
                Login
              </NavLink>
              <ButtonLink to="/signup">Sign up</ButtonLink>
            </>
          )}
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line bg-surface md:hidden">
          <div className="app-shell flex flex-col gap-2 py-4">
            {user ? (
              <>
                <NavLink className={navLinkClass} onClick={() => setOpen(false)} to="/dashboard">
                  My Tasks
                </NavLink>
                <NavLink className={navLinkClass} onClick={() => setOpen(false)} to="/users">
                  Users
                </NavLink>
                <Button onClick={handleLogout} variant="secondary">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink className={navLinkClass} onClick={() => setOpen(false)} to="/login">
                  Login
                </NavLink>
                <ButtonLink onClick={() => setOpen(false)} to="/signup">
                  Sign up
                </ButtonLink>
              </>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
