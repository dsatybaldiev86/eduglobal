"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, MessageSquare, User, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Панель", href: "#" },
  { label: "Университеты", href: "/universities" },
  { label: "Программы", href: "#" },
  { label: "Заявки", href: "#" },
  { label: "Консультации", href: "#" },
  { label: "Ресурсы", href: "#" },
];

export default function AppNavbar({ active = "Университеты" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-navy text-white">
      <nav
        aria-label="Основная навигация"
        className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-base font-bold text-white">
            E
          </span>
          <span className="font-heading text-lg font-bold">EduGlobal</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="ml-4 hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => {
            const isActive = l.label === active;
            return (
              <li key={l.label}>
                <Link
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right-side actions */}
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            aria-label="Уведомления"
            className="grid h-10 w-10 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            <Bell className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Сообщения (есть непрочитанные)"
            className="relative grid h-10 w-10 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            <MessageSquare className="h-5 w-5" aria-hidden="true" />
            {/* Unread indicator — conveyed to AT via the button's aria-label, not colour alone */}
            <span
              aria-hidden="true"
              className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary ring-2 ring-navy"
            />
          </button>

          <button
            type="button"
            aria-label="Меню пользователя"
            className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            <User className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="app-mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="grid h-10 w-10 place-items-center rounded-md text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div id="app-mobile-menu" className="border-t border-white/10 bg-navy lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((l) => {
              const isActive = l.label === active;
              return (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
