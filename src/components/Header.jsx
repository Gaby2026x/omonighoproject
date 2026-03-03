import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Who we are', href: 'https://www.baesystems.com/en-us/our-company' },
  { label: 'What we do', href: 'https://www.baesystems.com/en-us/what-we-do' },
  { label: 'Our businesses', href: 'https://www.baesystems.com/en-us/our-businesses' },
  { label: 'Newsroom', href: 'https://www.baesystems.com/en-us/newsroom' },
  { label: 'Careers', to: '/careers/jobs' },
  { label: 'Contact', href: 'https://www.baesystems.com/en-us/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [searchOpen]);

  const linkClass = ({ isActive }) =>
    `relative px-1 py-4 text-sm font-medium tracking-wide transition-colors hover:text-accent-500 ${
      isActive
        ? 'text-accent-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-accent-500'
        : 'text-[#1E1E1E]'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md shadow-black/10' : ''
      }`}
    >
      {/* Thin red accent line at the very top */}
      <div className="h-1 bg-accent-500" aria-hidden="true" />

      {/* Main nav bar — white background */}
      <nav
        className="bg-white border-b border-steel-100"
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 whitespace-nowrap"
            aria-label="BAE Systems home"
          >
            <img
              src="https://www.baesystems.com/.resources/bae-systems-theme/img/logo-red.svg"
              alt="BAE Systems"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 xl:flex">
            <ul className="flex items-center gap-5" role="list">
              {navItems.map(({ label, to, href }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-1 py-4 text-sm font-medium tracking-wide transition-colors hover:text-accent-500 text-[#1E1E1E]"
                    >
                      {label}
                    </a>
                  ) : (
                    <NavLink to={to} className={linkClass}>
                      {label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            {/* Search icon */}
            <button
              type="button"
              className="ml-2 flex items-center justify-center rounded-full p-2 text-steel-500 hover:text-accent-500 transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile: search + hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              className="p-2 text-steel-500 hover:text-accent-500 transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#1E1E1E] hover:bg-steel-50 focus:ring-2 focus:ring-accent-500 focus:outline-none"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul
            id="mobile-menu"
            className="space-y-1 border-t border-steel-100 px-4 pb-4 pt-2 xl:hidden bg-white"
            role="list"
          >
            {navItems.map(({ label, to, href }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-steel-50 text-[#1E1E1E]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                ) : (
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-steel-50 ${
                        isActive ? 'text-accent-500 bg-steel-50' : 'text-[#1E1E1E]'
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Search overlay */}
      {searchOpen && (
        <div className="bg-white border-b border-steel-200 shadow-sm">
          <div className="mx-auto max-w-3xl px-4 py-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-steel-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search BAE Systems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-[#1E1E1E] placeholder-steel-400 text-lg focus:outline-none"
                autoFocus
              />
              <button
                type="button"
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                className="text-steel-400 hover:text-accent-500 transition-colors"
                aria-label="Close search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
