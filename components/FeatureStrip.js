import {
  Globe,
  Layers,
  ShieldCheck,
  Compass,
  LineChart,
  MessagesSquare,
} from "lucide-react";

const FEATURES = [
  {
    icon: Globe,
    title: "Глобальная сеть университетов",
    caption: "Доступ к более чем 1 000 партнёрских вузов по всему миру.",
  },
  {
    icon: Layers,
    title: "Несколько заявок сразу",
    caption: "Подавайте документы в несколько университетов из одного кабинета.",
  },
  {
    icon: ShieldCheck,
    title: "Безопасно и надёжно",
    caption: "Защита ваших документов и данных на банковском уровне.",
  },
  {
    icon: Compass,
    title: "Экспертное сопровождение",
    caption: "Индивидуальная поддержка от сертифицированных консультантов.",
  },
  {
    icon: LineChart,
    title: "Отслеживание прогресса",
    caption: "Следите за статусом каждой заявки в реальном времени.",
  },
  {
    icon: MessagesSquare,
    title: "Консультации и общение",
    caption: "Общайтесь с наставниками и другими студентами.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
        {FEATURES.map((f) => (
          <div key={f.title} className="group flex flex-col items-center text-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
              <f.icon className="h-7 w-7" strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-sm font-semibold text-navy">{f.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-navy/60">{f.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
