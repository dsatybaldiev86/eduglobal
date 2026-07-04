"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, MapPin, Award, BookOpen } from "lucide-react";
import CampusScene from "@/components/CampusScene";

const UNIVERSITIES = [
  {
    id: "northgate",
    name: "Northgate University",
    country: "Великобритания",
    qs: 42,
    programs: 320,
    initials: "NU",
    logoColor: "#0A2540",
  },
  {
    id: "pacific-tech",
    name: "Pacific Tech Institute",
    country: "США",
    qs: 18,
    programs: 410,
    initials: "PT",
    logoColor: "#C8102E",
  },
  {
    id: "maple-crown",
    name: "Maple Crown University",
    country: "Канада",
    qs: 56,
    programs: 280,
    initials: "MC",
    logoColor: "#0A2540",
  },
  {
    id: "harbourfield",
    name: "Harbourfield University",
    country: "Австралия",
    qs: 61,
    programs: 300,
    initials: "HU",
    logoColor: "#C8102E",
  },
  {
    id: "rhineland",
    name: "Rhineland University",
    country: "Германия",
    qs: 48,
    programs: 260,
    initials: "RU",
    logoColor: "#0A2540",
  },
  {
    id: "delta-bay",
    name: "Delta Bay University",
    country: "Нидерланды",
    qs: 73,
    programs: 240,
    initials: "DB",
    logoColor: "#C8102E",
  },
];

export default function TopUniversities() {
  const [favorites, setFavorites] = useState(() => new Set());

  const toggleFavorite = (id) =>
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  return (
    <section id="universities" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
              Лучшие университеты
            </h2>
            <p className="mt-2 text-navy/60">
              Познакомьтесь с высокорейтинговыми вузами, которые выбирают наши
              студенты.
            </p>
          </div>
          <Link
            href="/universities"
            className="focus-ring hidden shrink-0 rounded text-sm font-semibold text-primary hover:underline sm:inline"
          >
            Смотреть все &rarr;
          </Link>
        </div>

        <ul
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
          aria-label="Лучшие университеты"
        >
          {UNIVERSITIES.map((u, index) => {
            const isFav = favorites.has(u.id);
            return (
              <li key={u.id} className="w-72 shrink-0 snap-start">
                <article className="group h-full overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg">
                  <div className="relative h-40 bg-gradient-to-br from-navy to-primary/70">
                    <CampusScene className="h-full w-full" flip={index % 2 === 1} />
                    <button
                      type="button"
                      onClick={() => toggleFavorite(u.id)}
                      aria-pressed={isFav}
                      aria-label={
                        isFav
                          ? `Удалить ${u.name} из избранного`
                          : `Добавить ${u.name} в избранное`
                      }
                      className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      <Heart
                        className={`h-5 w-5 transition-colors ${
                          isFav ? "fill-primary text-primary" : "text-navy/40"
                        }`}
                      />
                    </button>
                    <span
                      className="absolute -bottom-5 left-4 grid h-12 w-12 place-items-center rounded-xl border-2 border-white text-sm font-bold text-white shadow-md"
                      style={{ backgroundColor: u.logoColor }}
                    >
                      {u.initials}
                    </span>
                  </div>

                  <div className="p-4 pt-7">
                    <h3 className="text-base font-bold text-navy">{u.name}</h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-navy/60">
                      <MapPin className="h-4 w-4" />
                      {u.country}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-navy/10 pt-3 text-sm">
                      <span className="flex items-center gap-1.5 text-navy/70">
                        <Award className="h-4 w-4 text-primary" />
                        QS #{u.qs}
                      </span>
                      <span className="flex items-center gap-1.5 text-navy/70">
                        <BookOpen className="h-4 w-4 text-primary" />
                        {u.programs} программ
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
