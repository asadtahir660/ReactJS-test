import { useState } from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../../assets/landing/brand-logo.svg';
import { navItems } from '../landingData';

function navTarget(item: string) {
  return `#${item.toLowerCase().replace(/\s+/g, '-')}`;
}

export function EnergyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-40 px-3 py-4 sm:px-5">
      <nav className="mx-auto w-full max-w-[1780px] overflow-hidden rounded-[8px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
        <div className="flex min-h-[64px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] border border-black/10 text-black transition hover:bg-black hover:text-white md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            <span className="grid gap-1">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>

          <Link className="flex shrink-0 items-center" to="/">
            <img alt="5-hour ENERGY" className="h-[67px] w-[100%] object-contain sm:w-[100%]" src={brandLogo} />
          </Link>

          <div className="hidden items-center gap-8 text-sm font-semibold text-[#222] xl:flex">
            {navItems.map((item) => (
              <a className="transition hover:text-[#d8cc00]" href={navTarget(item)} key={item}>
                {item}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Link aria-label="Account" className="energy-nav-icon icon-user" to="/login" />
            <Link aria-label="Cart" className="energy-nav-icon icon-bag" to="/dashboard" />
            <a aria-label="Search" className="energy-nav-icon icon-search" href="#shop" />
          </div>

          <span className="h-11 w-11 shrink-0 md:hidden" aria-hidden="true" />
        </div>

        {menuOpen ? (
          <div className="grid gap-1 border-t border-black/10 px-4 pb-4 pt-2 text-sm font-bold text-[#222] md:hidden">
            {navItems.map((item) => (
              <a className="rounded-[8px] px-3 py-3 transition hover:bg-black hover:text-white" href={navTarget(item)} key={item} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-3 gap-2">
              <Link className="rounded-[8px] bg-[#f2f2f2] px-3 py-3 text-center transition hover:bg-black hover:text-white" to="/login">
                Account
              </Link>
              <Link className="rounded-[8px] bg-[#f2f2f2] px-3 py-3 text-center transition hover:bg-black hover:text-white" to="/dashboard">
                Cart
              </Link>
              <a className="rounded-[8px] bg-[#f2f2f2] px-3 py-3 text-center transition hover:bg-black hover:text-white" href="#shop" onClick={() => setMenuOpen(false)}>
                Search
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
