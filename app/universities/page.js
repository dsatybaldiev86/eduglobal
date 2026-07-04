"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, Bookmark, SlidersHorizontal, X } from "lucide-react";
import AppNavbar from "@/components/AppNavbar";
import UniversityFilters from "@/components/UniversityFilters";
import UniversityCard from "@/components/UniversityCard";
import {
  universities,
  COUNTRIES,
  PROGRAM_TYPES,
  LEVELS,
  LANGUAGES,
  TUITION_MAX,
  CATALOG_TOTAL,
  formatNumber,
  pluralUniversities,
} from "@/lib/universities";

const DEFAULT_FILTERS = {
  country: "",
  programType: "",
  level: "",
  language: "",
  scholarship: false,
  tuitionMin: 0,
  tuitionMax: TUITION_MAX,
};

const SORT_OPTIONS = [
  { value: "recommended", label: "Рекомендуемые" },
  { value: "qs", label: "Рейтинг QS" },
  { value: "priceAsc", label: "Стоимость (по возрастанию)" },
  { value: "priceDesc", label: "Стоимость (по убыванию)" },
  { value: "name", label: "Название (А–Я)" },
];

export default function UniversitiesPage() {
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState(DEFAULT_FILTERS);
  const [applied, setApplied] = useState(DEFAULT_FILTERS);
  const [sort, setSort] = useState("recommended");
  const [favorites, setFavorites] = useState(() => new Set());
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawerRef = useRef(null);

  useEffect(() => {
    if (drawerOpen && closeDrawerRef.current) closeDrawerRef.current.focus();
  }, [drawerOpen]);

  const updateDraft = (field, value) => setDraft((d) => ({ ...d, [field]: value }));

  const applyFilters = () => {
    setApplied(draft);
    setDrawerOpen(false);
  };

  const resetFilters = () => {
    setDraft(DEFAULT_FILTERS);
    setApplied(DEFAULT_FILTERS);
  };

  const toggleFavorite = (id) =>
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = universities.filter((u) => {
      if (q && !u.name.toLowerCase().includes(q)) return false;
      if (applied.country && u.country !== applied.country) return false;
      if (applied.programType && u.programType !== applied.programType) return false;
      if (applied.level && u.level !== applied.level) return false;
      if (applied.language && u.language !== applied.language) return false;
      if (applied.scholarship && !u.hasScholarship) return false;
      if (u.tuition < applied.tuitionMin) return false;
      if (applied.tuitionMax < TUITION_MAX && u.tuition > applied.tuitionMax) return false;
      return true;
    });

    const sorted = [...list];
    if (sort === "qs") sorted.sort((a, b) => a.qsRank - b.qsRank);
    else if (sort === "priceAsc") sorted.sort((a, b) => a.tuition - b.tuition);
    else if (sort === "priceDesc") sorted.sort((a, b) => b.tuition - a.tuition);
    else if (sort === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }, [query, applied, sort]);

  const isDefaultView =
    query.trim() === "" &&
    JSON.stringify(applied) === JSON.stringify(DEFAULT_FILTERS);
  const displayCount = isDefaultView ? CATALOG_TOTAL : results.length;

  const filterProps = {
    values: draft,
    onChange: updateDraft,
    onApply: applyFilters,
    onReset: resetFilters,
    countries: COUNTRIES,
    programTypes: PROGRAM_TYPES,
    levels: LEVELS,
    languages: LANGUAGES,
  };

  return (
    <div className="min-h-screen bg-light-grey">
      <AppNavbar active="Университеты" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page header */}
        <header>
          <h1 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Поиск университетов
          </h1>
          <nav aria-label="Хлебные крошки" className="mt-2">
            <ol className="flex items-center gap-2 text-sm text-navy/70">
              <li>
                <Link
                  href="/"
                  className="rounded hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Главная
                </Link>
              </li>
              <li aria-hidden="true" className="text-navy/40">
                ›
              </li>
              <li aria-current="page" className="font-medium text-navy">
                Университеты
              </li>
            </ol>
          </nav>
        </header>

        {/* Search row */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/50"
              aria-hidden="true"
            />
            <label htmlFor="uni-search" className="sr-only">
              Поиск по названию университета
            </label>
            <input
              id="uni-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск по названию университета"
              className="w-full rounded-lg border border-navy/15 bg-white py-3 pl-11 pr-4 text-sm text-navy placeholder:text-navy/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            />
          </div>
          <button type="submit" className="btn-primary sm:px-8">
            <Search className="h-4 w-4" aria-hidden="true" />
            Поиск
          </button>
          <button
            type="button"
            onClick={() =>
              console.log("[stub] Сохранить поиск:", { query, applied, sort })
            }
            className="btn-outline-navy sm:w-auto"
          >
            <Bookmark className="h-4 w-4" aria-hidden="true" />
            Сохранить поиск
          </button>
        </form>

        {/* Mobile filters toggle */}
        <div className="mt-4 lg:hidden">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={drawerOpen}
            className="inline-flex items-center gap-2 rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            Фильтры
          </button>
        </div>

        {/* Body: sidebar + results */}
        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[18rem_1fr]">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:sticky lg:top-20 lg:block">
            <UniversityFilters idPrefix="desktop" {...filterProps} />
          </aside>

          {/* Results */}
          <section aria-label="Результаты поиска">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p aria-live="polite" className="text-sm text-navy sm:text-base">
                Найдено{" "}
                <strong className="font-bold">{formatNumber(displayCount)}</strong>{" "}
                {pluralUniversities(displayCount)}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="shrink-0 text-sm text-navy/70">
                  Сортировать:
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="cursor-pointer rounded-lg border border-navy/15 bg-white px-3 py-2 text-sm text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {results.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {results.map((u) => (
                  <UniversityCard
                    key={u.id}
                    university={u}
                    isFavorite={favorites.has(u.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </ul>
            ) : (
              <div className="mt-4 rounded-2xl border border-navy/10 bg-white p-10 text-center">
                <p className="font-medium text-navy">Ничего не найдено</p>
                <p className="mt-1 text-sm text-navy/70">
                  Попробуйте изменить параметры поиска или сбросить фильтры.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Фильтры"
          onKeyDown={(e) => {
            if (e.key === "Escape") setDrawerOpen(false);
          }}
        >
          <div
            className="absolute inset-0 bg-navy/50"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-[85%] max-w-sm flex-col overflow-y-auto bg-light-grey p-4 shadow-xl">
            <div className="mb-3 flex justify-end">
              <button
                type="button"
                ref={closeDrawerRef}
                onClick={() => setDrawerOpen(false)}
                aria-label="Закрыть фильтры"
                className="grid h-9 w-9 place-items-center rounded-md text-navy hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <UniversityFilters idPrefix="mobile" {...filterProps} />
          </div>
        </div>
      )}
    </div>
  );
}
