import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  ArrowLeft,
  Award,
  Globe2,
  BookOpen,
  Sparkles,
  Users,
  Star,
} from "lucide-react";
import AppNavbar from "@/components/AppNavbar";
import { getUniversityById, formatTuition } from "@/lib/universities";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "programs", label: "Programs" },
  { id: "admission", label: "Admission" },
  { id: "tuition", label: "Tuition & Fees" },
  { id: "scholarships", label: "Scholarships" },
  { id: "campus", label: "Campus Life" },
  { id: "reviews", label: "Reviews" },
];

export default function UniversityDetailPage({ params }) {
  const u = getUniversityById(params.id);
  if (!u) notFound();

  const facts = [
    { label: "QS ranking", value: `#${u.qsRank}` },
    { label: "Programs", value: `${u.programs}+` },
    { label: "Tuition per year", value: formatTuition(u) },
    { label: "Program type", value: u.programType },
    { label: "Level", value: u.level },
    { label: "Language", value: u.language },
  ];

  return (
    <div className="min-h-screen bg-light-grey">
      <AppNavbar active="Университеты" />

      <div className="relative overflow-hidden bg-navy text-white min-h-[14rem] sm:min-h-[16rem] lg:min-h-[18rem]">
        <div className="absolute inset-0 opacity-60 bg-black" />
        <img
          src={u.bannerImage}
          alt={`${u.name} campus`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-6 lg:py-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/80">
              University profile
            </p>
            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {u.name}
            </h1>
            <p className="mt-5 max-w-2xl text-sm text-white/75 sm:text-base">
              {u.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#programs"
                className="btn-primary inline-flex items-center gap-2 px-5 py-3"
              >
                <BookOpen className="h-4 w-4" />
                View programs
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-3xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white transition hover:bg-white/15"
              >
                <Sparkles className="h-4 w-4" />
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="-mt-12 rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-center gap-4">
              <span
                className="grid h-16 w-16 place-items-center rounded-3xl text-xl font-bold text-white"
                style={{ backgroundColor: u.logoColor }}
                aria-hidden="true"
              >
                {u.initials}
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-navy/50">
                  {u.country}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
                  {u.name}
                </h2>
              </div>
            </div>

            <Link href="/universities" className="btn-outline-navy inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold">
              <ArrowLeft className="h-4 w-4" />
              Back to catalog
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-3xl border border-navy/10 bg-light-grey p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">
                  {fact.label}
                </p>
                <p className="mt-2 text-xl font-bold text-navy">{fact.value}</p>
              </div>
            ))}
          </div>

          <nav className="mt-8 flex flex-wrap gap-2 border-b border-navy/10 pb-4 text-sm text-navy/70">
            {TABS.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="rounded-full border border-navy/10 bg-white px-4 py-2 transition hover:border-primary hover:text-primary"
              >
                {tab.label}
              </a>
            ))}
          </nav>

          <div className="mt-10 space-y-12">
            <section id="overview">
              <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-navy">About University</h3>
                  <p className="text-sm leading-7 text-navy/75">{u.description}</p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-navy/10 bg-light-grey p-6">
                      <p className="text-sm font-semibold text-navy/70">Location</p>
                      <p className="mt-2 text-lg font-bold text-navy">{u.country}</p>
                    </div>
                    <div className="rounded-3xl border border-navy/10 bg-light-grey p-6">
                      <p className="text-sm font-semibold text-navy/70">Type</p>
                      <p className="mt-2 text-lg font-bold text-navy">{u.type}</p>
                    </div>
                    <div className="rounded-3xl border border-navy/10 bg-light-grey p-6">
                      <p className="text-sm font-semibold text-navy/70">Students</p>
                      <p className="mt-2 text-lg font-bold text-navy">{u.students}</p>
                    </div>
                    <div className="rounded-3xl border border-navy/10 bg-light-grey p-6">
                      <p className="text-sm font-semibold text-navy/70">International students</p>
                      <p className="mt-2 text-lg font-bold text-navy">{u.internationalStudents}</p>
                    </div>
                  </div>
                </div>

                <aside className="space-y-4">
                  <div className="rounded-3xl border border-navy/10 bg-light-grey p-6">
                    <p className="text-sm font-semibold text-navy/70">Key highlights</p>
                    <ul className="mt-4 space-y-3 text-sm text-navy/75">
                      {u.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Star className="mt-1 h-4 w-4 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-3xl border border-navy/10 bg-light-grey p-6">
                    <p className="text-sm font-semibold text-navy/70">Campus overview</p>
                    <p className="mt-3 text-sm leading-7 text-navy/75">{u.campusLife}</p>
                  </div>
                </aside>
              </div>
            </section>

            <section id="programs">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold text-navy">Programs</h3>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {u.programsList.map((program) => (
                  <div
                    key={program}
                    className="rounded-3xl border border-navy/10 bg-light-grey p-5"
                  >
                    <p className="text-sm text-navy/70">Program</p>
                    <p className="mt-2 font-semibold text-navy">{program}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="admission">
              <div className="flex items-center gap-3">
                <Globe2 className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold text-navy">Admission</h3>
              </div>
              <ul className="mt-4 grid gap-3 text-sm text-navy/75 sm:grid-cols-2">
                {u.admission.map((item) => (
                  <li key={item} className="rounded-3xl border border-navy/10 bg-light-grey p-5">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="tuition">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold text-navy">Tuition & Fees</h3>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-navy/10 bg-light-grey p-6">
                  <p className="text-sm text-navy/70">Average annual tuition</p>
                  <p className="mt-3 text-2xl font-semibold text-navy">{formatTuition(u)}</p>
                </div>
                <div className="rounded-3xl border border-navy/10 bg-light-grey p-6">
                  <p className="text-sm text-navy/70">Tuition notes</p>
                  <p className="mt-3 text-sm leading-7 text-navy/75">
                    Tuition varies by faculty and program; the indicated value is the estimated average yearly cost.
                  </p>
                </div>
              </div>
            </section>

            <section id="scholarships">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold text-navy">Scholarships</h3>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-navy/75">
                {u.scholarships.map((item) => (
                  <li key={item} className="rounded-3xl border border-navy/10 bg-light-grey p-5">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="campus">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold text-navy">Campus Life</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-navy/75">{u.campusLife}</p>
            </section>

            <section id="reviews">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-semibold text-navy">Reviews</h3>
              </div>
              <div className="mt-4 space-y-4">
                <div className="rounded-3xl border border-navy/10 bg-light-grey p-6">
                  <p className="text-sm font-semibold text-navy">Student feedback</p>
                  <p className="mt-3 text-sm leading-7 text-navy/75">
                    Студенты отмечают высокий уровень преподавания, сильную академическую среду и активную студенческую жизнь.
                  </p>
                </div>
                <div className="rounded-3xl border border-navy/10 bg-light-grey p-6">
                  <p className="text-sm font-semibold text-navy">Alumni rating</p>
                  <p className="mt-3 text-sm leading-7 text-navy/75">
                    Выпускники особенно ценят возможности трудоустройства и международные связи университета.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
