import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FlightPathSvg from "@/components/FlightPathSvg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      {/* Decorative dotted "world map" texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:22px_22px]"
      />
      {/* Soft red glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-36 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-44 lg:pt-24">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80">
            Глобальное образование. Ваше будущее.
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Study Abroad.
            <br />
            Achieve Your Future.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            От выбора подходящего университета до подачи выигрышной заявки —
            EduGlobal сопровождает целеустремлённых студентов на пути в ведущие
            вузы более чем в 50 странах.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/universities" className="btn-primary px-7 py-3.5 text-base">
              Подобрать университеты
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="#consulting" className="btn-outline-light px-7 py-3.5 text-base">
              Записаться на бесплатную консультацию
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {[
              ["50+", "Стран"],
              ["1,000+", "Университетов"],
              ["25K+", "Поступивших студентов"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-heading text-2xl font-bold">{value}</dt>
                <dd className="text-sm text-white/60">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Student image + flight-path decoration */}
        <div className="relative">
          {/* Dotted flight-path decoration (shared with the auth pages) */}
          <FlightPathSvg className="pointer-events-none absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] text-white/40" />

          <div className="relative mx-auto max-w-md">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-primary/20 shadow-2xl">
              <img
                src="/images/University1.jpg"
                alt="University campus"
                className="aspect-[6/7] h-full w-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 text-navy shadow-xl sm:block">
              <p className="font-heading text-2xl font-bold text-primary">98%</p>
              <p className="text-xs font-medium text-navy/60">Успешных виз</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
