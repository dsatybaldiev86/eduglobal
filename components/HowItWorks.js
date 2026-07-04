import {
  Search,
  FileText,
  Send,
  GraduationCap,
  Plane,
  ArrowRight,
  Headset,
} from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Изучение",
    text: "Изучайте университеты и программы, соответствующие вашим целям.",
  },
  {
    icon: FileText,
    title: "Подготовка",
    text: "Заполните профиль и соберите необходимые документы.",
  },
  {
    icon: Send,
    title: "Подача заявки",
    text: "Отправляйте несколько заявок всего в пару кликов.",
  },
  {
    icon: GraduationCap,
    title: "Зачисление",
    text: "Получайте предложения и выбирайте подходящий университет.",
  },
  {
    icon: Plane,
    title: "Отъезд",
    text: "Оформите визу, спланируйте поездку и обустройтесь на новом месте.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-light-grey py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Как это работает
          </h2>
          <p className="mt-2 text-navy/60">
            Пять простых шагов — от мечты до отъезда.
          </p>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_20rem]">
          {/* Numbered steps */}
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative">
                <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                      <step.icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <span className="font-heading text-3xl font-bold text-navy/10">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-navy/60">{step.text}</p>
                </div>

                {/* Connector arrow between steps (single row on large screens) */}
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-[1.15rem] top-1/2 z-10 hidden -translate-y-1/2 text-navy/25 lg:block"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </span>
                )}
              </li>
            ))}
          </ol>

          {/* Need Expert Help side card */}
          <aside className="flex flex-col justify-center rounded-2xl bg-navy p-6 text-white xl:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary">
              <Headset className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-heading text-xl font-bold">Нужна помощь эксперта?</h3>
            <p className="mt-2 text-sm text-white/70">
              Поговорите с сертифицированным консультантом по образованию и
              получите персональный план — совершенно бесплатно.
            </p>
            <a href="#consulting" className="btn-primary mt-6">
              <Headset className="h-4 w-4" />
              Записаться на консультацию
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
