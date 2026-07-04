import { Search } from "lucide-react";

const FILTERS = [
  {
    id: "study-level",
    label: "Уровень обучения",
    options: [
      "Бакалавриат",
      "Магистратура",
      "Докторантура",
      "Диплом",
      "Подготовительная программа",
    ],
  },
  {
    id: "destination",
    label: "Страна обучения",
    options: [
      "США",
      "Великобритания",
      "Канада",
      "Австралия",
      "Германия",
      "Нидерланды",
    ],
  },
  {
    id: "program-type",
    label: "Тип программы",
    options: [
      "Бизнес",
      "Инженерное дело",
      "Информатика",
      "Медицина",
      "Искусство и гуманитарные науки",
      "Право",
    ],
  },
  {
    id: "tuition-range",
    label: "Стоимость обучения",
    options: ["До $10 тыс.", "$10–20 тыс.", "$20–35 тыс.", "$35–50 тыс.", "$50 тыс.+"],
  },
  {
    id: "language",
    label: "Язык обучения",
    options: ["Английский", "Немецкий", "Французский", "Испанский", "Нидерландский"],
  },
];

const POPULAR = [
  "MBA в Канаде",
  "Информатика в Великобритании",
  "Медицина в Германии",
  "Стипендии 2026",
  "Инженерное дело в США",
];

export default function SearchCard() {
  return (
    <section
      id="programs"
      className="relative z-20 mx-auto -mt-24 max-w-6xl px-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-2xl border border-navy/5 bg-white p-6 shadow-xl shadow-navy/10 sm:p-8">
        <h2 className="font-heading text-xl font-bold text-navy sm:text-2xl">
          Найдите свою идеальную программу
        </h2>
        <p className="mt-1 text-sm text-navy/60">
          Фильтруйте тысячи программ по всему миру.
        </p>

        <form className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {FILTERS.map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="sr-only">
                {f.label}
              </label>
              <select
                id={f.id}
                defaultValue=""
                className="focus-ring w-full cursor-pointer rounded-lg border border-navy/15 bg-light-grey px-3 py-3 text-sm text-navy transition-colors hover:border-navy/30 focus-visible:border-primary"
              >
                <option value="" disabled>
                  {f.label}
                </option>
                {f.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button type="submit" className="btn-primary py-3">
            <Search className="h-4 w-4" />
            Найти
          </button>
        </form>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
          <span className="font-medium text-navy/60">Популярные запросы:</span>
          {POPULAR.map((p) => (
            <a
              key={p}
              href="#"
              className="focus-ring rounded-full bg-light-grey px-3 py-1 text-navy/70 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {p}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
