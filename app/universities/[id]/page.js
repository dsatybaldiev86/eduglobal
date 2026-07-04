import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowLeft } from "lucide-react";
import AppNavbar from "@/components/AppNavbar";
import { getUniversityById, formatTuition } from "@/lib/universities";

export default function UniversityDetailPage({ params }) {
  const u = getUniversityById(params.id);
  if (!u) notFound();

  const facts = [
    { label: "Рейтинг QS", value: `#${u.qsRank}` },
    { label: "Программы", value: `${u.programs}+` },
    { label: "Средняя стоимость/год", value: formatTuition(u) },
    { label: "Тип программы", value: u.programType },
    { label: "Уровень обучения", value: u.level },
    { label: "Язык обучения", value: u.language },
  ];

  return (
    <div className="min-h-screen bg-light-grey">
      <AppNavbar active="Университеты" />

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <nav aria-label="Хлебные крошки" className="mb-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-navy/70">
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
            <li>
              <Link
                href="/universities"
                className="rounded hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Университеты
              </Link>
            </li>
            <li aria-hidden="true" className="text-navy/40">
              ›
            </li>
            <li aria-current="page" className="font-medium text-navy">
              {u.name}
            </li>
          </ol>
        </nav>

        <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <span
              className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl text-lg font-bold text-white"
              style={{ backgroundColor: u.logoColor }}
              aria-hidden="true"
            >
              {u.initials}
            </span>
            <div>
              <h1 className="font-heading text-3xl font-bold text-navy">{u.name}</h1>
              <p className="mt-1 flex items-center gap-1 text-navy/70">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {u.country}
              </p>
              {u.hasScholarship && (
                <span className="mt-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Доступны стипендии
                </span>
              )}
            </div>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-navy/10 bg-light-grey p-4"
              >
                <dt className="text-xs text-navy/70">{f.label}</dt>
                <dd className="mt-1 text-lg font-bold text-navy">{f.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-navy/70">
            Это демонстрационная страница университета. Здесь появятся подробное
            описание программ, требования к поступлению, сроки подачи заявок и
            отзывы студентов.
          </p>

          <div className="mt-8">
            <Link href="/universities" className="btn-outline-navy sm:w-auto">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Назад к каталогу
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
