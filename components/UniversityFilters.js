import { formatNumber, TUITION_MAX } from "@/lib/universities";

const selectClass =
  "mt-1.5 w-full cursor-pointer rounded-lg border border-navy/15 bg-light-grey px-3 py-2.5 text-sm text-navy transition-colors hover:border-navy/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
const labelClass = "block text-sm font-medium text-navy";

// Presentational filters panel. All state lives in the parent page; this
// component is rendered twice (desktop sidebar + mobile drawer), so every
// control id is namespaced with `idPrefix` to keep ids unique.
export default function UniversityFilters({
  idPrefix,
  values,
  onChange,
  onApply,
  onReset,
  countries,
  programTypes,
  levels,
  languages,
  scholarshipCount = 132,
}) {
  const id = (name) => `${idPrefix}-${name}`;
  const pct = (v) => (v / TUITION_MAX) * 100;

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-lg font-bold text-navy">Фильтры</h2>
        <button
          type="button"
          onClick={onReset}
          className="rounded text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Сбросить всё
        </button>
      </div>

      <div className="mt-5 space-y-5">
        {/* Country */}
        <div>
          <label htmlFor={id("country")} className={labelClass}>
            Направление обучения
          </label>
          <select
            id={id("country")}
            value={values.country}
            onChange={(e) => onChange("country", e.target.value)}
            className={selectClass}
          >
            <option value="">Все страны</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Tuition range (dual-handle slider) */}
        <div>
          <span id={id("tuition-label")} className={labelClass}>
            Стоимость обучения (в год)
          </span>
          <div className="relative mt-5 h-1.5">
            <div className="absolute inset-0 rounded-full bg-navy/15" />
            <div
              className="absolute inset-y-0 rounded-full bg-primary"
              style={{
                left: `${pct(values.tuitionMin)}%`,
                right: `${100 - pct(values.tuitionMax)}%`,
              }}
            />
            <label htmlFor={id("tuition-min")} className="sr-only">
              Минимальная стоимость обучения в год
            </label>
            <input
              id={id("tuition-min")}
              type="range"
              min={0}
              max={TUITION_MAX}
              step={1000}
              value={values.tuitionMin}
              onChange={(e) =>
                onChange("tuitionMin", Math.min(Number(e.target.value), values.tuitionMax))
              }
              aria-describedby={id("tuition-values")}
              className="range-input"
            />
            <label htmlFor={id("tuition-max")} className="sr-only">
              Максимальная стоимость обучения в год
            </label>
            <input
              id={id("tuition-max")}
              type="range"
              min={0}
              max={TUITION_MAX}
              step={1000}
              value={values.tuitionMax}
              onChange={(e) =>
                onChange("tuitionMax", Math.max(Number(e.target.value), values.tuitionMin))
              }
              aria-describedby={id("tuition-values")}
              className="range-input"
            />
          </div>
          <div
            id={id("tuition-values")}
            className="mt-3 flex items-center justify-between text-sm text-navy/70"
          >
            <span>${formatNumber(values.tuitionMin)}</span>
            <span>
              {values.tuitionMax >= TUITION_MAX
                ? `$${formatNumber(TUITION_MAX)}+`
                : `$${formatNumber(values.tuitionMax)}`}
            </span>
          </div>
        </div>

        {/* Program type */}
        <div>
          <label htmlFor={id("programType")} className={labelClass}>
            Тип программы
          </label>
          <select
            id={id("programType")}
            value={values.programType}
            onChange={(e) => onChange("programType", e.target.value)}
            className={selectClass}
          >
            <option value="">Все типы</option>
            {programTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Level */}
        <div>
          <label htmlFor={id("level")} className={labelClass}>
            Уровень обучения
          </label>
          <select
            id={id("level")}
            value={values.level}
            onChange={(e) => onChange("level", e.target.value)}
            className={selectClass}
          >
            <option value="">Любой уровень</option>
            {levels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        {/* Language */}
        <div>
          <label htmlFor={id("language")} className={labelClass}>
            Язык
          </label>
          <select
            id={id("language")}
            value={values.language}
            onChange={(e) => onChange("language", e.target.value)}
            className={selectClass}
          >
            <option value="">Все языки</option>
            {languages.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        {/* Scholarships */}
        <div className="flex items-center gap-2.5">
          <input
            id={id("scholarship")}
            type="checkbox"
            checked={values.scholarship}
            onChange={(e) => onChange("scholarship", e.target.checked)}
            className="h-4 w-4 shrink-0 rounded border-navy/30 accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
          <label htmlFor={id("scholarship")} className="text-sm text-navy">
            Только со стипендиями ({scholarshipCount})
          </label>
        </div>

        {/* Apply */}
        <button
          type="button"
          onClick={onApply}
          className="w-full rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          Применить фильтры
        </button>
      </div>
    </div>
  );
}
