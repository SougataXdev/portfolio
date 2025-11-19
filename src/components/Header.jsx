import React from 'react';
import { Button } from "@/components/ui/button";

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About me' },
  { href: '#works', label: 'My works' },
];

const Header = () => {
  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full border border-white/10 bg-[#030304]/60 px-6 py-4 text-white shadow-[0_12px_45px_rgba(0,0,0,0.4)] backdrop-blur-lg">
        <a
          href="#home"
          className="flex items-center gap-2 font-['Syne'] text-lg tracking-[0.4em]"
        >
          <span className="inline-flex items-center">SOU</span>
          <span className="relative inline-flex items-center justify-center text-base tracking-normal">
            <span className="px-1">O</span>
            <span className="pointer-events-none absolute inset-0 rounded-full border border-white/30 opacity-80" />
            <span className="pointer-events-none absolute inset-1 rounded-full border border-white/15 opacity-80" />
          </span>
          <span>GATA</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center md:flex">
          <ul className="flex items-center gap-8 text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-white/60">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-white focus-visible:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="rounded-full border border-white/30 bg-[rgba(3,3,4,0.5)] px-6 py-2 text-[0.65rem] font-bold uppercase tracking-[0.45em] text-white/90 transition-colors hover:border-white/60 hover:text-white"
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
