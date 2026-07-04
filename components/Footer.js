import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const COLUMNS = [
  {
    title: "Платформа",
    links: ["Университеты", "Программы", "Стипендии", "Как это работает"],
  },
  {
    title: "Поддержка",
    links: ["Справочный центр", "Связаться с нами", "Записаться на консультацию", "FAQ"],
  },
  {
    title: "Ресурсы",
    links: ["Блог", "Учебные материалы", "Информация о визах", "Подготовка к экзаменам"],
  },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

const LEGAL = ["Политика конфиденциальности", "Условия использования", "Настройки cookie"];

export default function Footer() {
  return (
    <footer id="about" className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-12">
          {/* Brand + socials */}
          <div className="col-span-2 md:col-span-6 lg:col-span-3">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-base font-bold text-white">
                E
              </span>
              <span className="font-heading text-lg font-bold">EduGlobal</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Глобальное образование. Ваше будущее. Мы помогаем студентам уверенно
              учиться за рубежом.
            </p>
            <ul className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white/80 transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {COLUMNS.map((c) => (
            <div key={c.title} className="md:col-span-2 lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="rounded text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-6 lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Будьте в курсе
            </h3>
            <p className="mt-4 text-sm text-white/60">
              Получайте свежие стипендии и сроки подачи заявок на почту.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; 2026 EduGlobal. Все права защищены.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
