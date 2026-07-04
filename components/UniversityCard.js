import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import { formatTuition } from "@/lib/universities";

function Stat({ value, label }) {
  return (
    <div className="sm:min-w-[7rem] sm:text-center">
      <p className="text-lg font-bold text-navy">{value}</p>
      <p className="text-xs text-navy/70">{label}</p>
    </div>
  );
}

// A single result row. The whole row links to the detail page; the heart
// toggle is a sibling of the link (not nested) so it stays independently
// operable and keyboard-focusable.
export default function UniversityCard({ university: u, isFavorite, onToggleFavorite }) {
  return (
    <li className="relative flex items-stretch overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link
        href={`/universities/${u.id}`}
        className="flex flex-1 flex-col gap-4 rounded-2xl p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:flex-row sm:items-center sm:gap-6"
      >
        {/* Logo + name */}
        <div className="flex items-center gap-4">
          <span
            className="grid h-16 w-16 shrink-0 place-items-center rounded-xl text-sm font-bold text-white"
            style={{ backgroundColor: u.logoColor }}
            aria-hidden="true"
          >
            {u.initials}
          </span>
          <div>
            <h3 className="text-base font-bold text-navy">{u.name}</h3>
            <p className="mt-0.5 flex items-center gap-1 text-sm text-navy/70">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {u.country}
            </p>
            {u.hasScholarship && (
              <span className="mt-2 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                Стипендии
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-3 border-t border-navy/10 pt-4 sm:ml-auto sm:flex-row sm:items-center sm:gap-6 sm:border-t-0 sm:pt-0">
          <Stat value={`#${u.qsRank}`} label="Рейтинг QS" />
          <Stat value={`${u.programs}+`} label="Программы" />
          <Stat value={formatTuition(u)} label="Средняя стоимость/год" />
        </div>
      </Link>

      {/* Favorite toggle (outside the link) */}
      <div className="flex items-center pr-4 sm:pr-5">
        <button
          type="button"
          onClick={() => onToggleFavorite(u.id)}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Убрать из избранного: ${u.name}`
              : `Добавить в избранное: ${u.name}`
          }
          className="grid h-10 w-10 place-items-center rounded-full text-navy/50 transition-colors hover:bg-light-grey hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Heart
            className={`h-5 w-5 ${isFavorite ? "fill-primary text-primary" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>
    </li>
  );
}
