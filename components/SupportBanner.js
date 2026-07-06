import CampusScene from "@/components/CampusScene";

const STATS = [
  { value: "98%", label: "Успешных поступлений" },
  { value: "25K+", label: "Сопровождённых студентов" },
  { value: "50+", label: "Охваченных стран" },
];

export default function SupportBanner() {
  return (
    <section id="consulting" className="bg-navy py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Advisor image */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-primary/20">
            <img
              src="/images/u4.jpg"
              alt="Consulting support"
              className="aspect-[9/6] h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 right-6 hidden rounded-2xl bg-primary px-5 py-3 text-white shadow-xl sm:block">
            <p className="font-heading text-lg font-bold">Бесплатный звонок консультанту</p>
            <p className="text-xs text-white/80">Запись меньше чем за 2 минуты</p>
          </div>
        </div>

        {/* Copy + stats */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Консалтинг и поддержка
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Поддержка, на которую можно положиться на каждом этапе
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            Наши консультанты помогли тысячам студентов превратить амбиции в
            письма о зачислении. Вот результат нашей совместной работы.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <dt className="font-heading text-3xl font-bold sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>

          <a href="#" className="btn-primary mt-8">
            Записаться на бесплатную консультацию
          </a>
        </div>
      </div>
    </section>
  );
}
