"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Университеты", href: "#universities" },
  { label: "Программы", href: "#programs" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Консультации", href: "#consulting" },
  { label: "Ресурсы", href: "#resources" },
  { label: "О нас", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
      <nav
        aria-label="Основная навигация"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-base font-bold text-white">
            E
          </span>
          <span className="font-heading text-lg font-bold text-navy">EduGlobal</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/login" className="nav-link">
            Войти
          </Link>
          <Link href="/signup" className="btn-primary px-5 py-2">
            Регистрация
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню навигации" : "Открыть меню навигации"}
          className="inline-flex items-center justify-center rounded-md p-2 text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="border-t border-navy/10 bg-white lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-navy/80 transition-colors hover:bg-light-grey hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 pt-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg border border-navy/15 px-4 py-2.5 text-center text-sm font-semibold text-navy transition-colors hover:bg-light-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Войти
              </Link>
              <Link href="/signup" onClick={() => setOpen(false)} className="btn-primary flex-1">
                Регистрация
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
