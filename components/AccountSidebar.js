import Link from "next/link";
import {
  LayoutDashboard,
  User,
  FileText,
  ClipboardList,
  Heart,
  Headset,
  MessageSquare,
  Settings,
} from "lucide-react";

const ACCOUNT_LINKS = [
  { label: "Панель", href: "#", icon: LayoutDashboard },
  { label: "Мой профиль", href: "/profile", icon: User },
  { label: "Мои документы", href: "#", icon: FileText },
  { label: "Заявки", href: "#", icon: ClipboardList },
  { label: "Избранное", href: "#", icon: Heart },
  { label: "Консультации", href: "#", icon: Headset },
  { label: "Сообщения", href: "#", icon: MessageSquare, unread: true },
  { label: "Настройки", href: "#", icon: Settings },
];

// Vertical navy account navigation. Rendered both as the desktop sidebar
// and inside the mobile drawer (the wrapper supplies the navy background).
export default function AccountSidebar({ active = "Мой профиль", onNavigate }) {
  return (
    <nav aria-label="Меню аккаунта" className="flex flex-col gap-1 p-4">
      {ACCOUNT_LINKS.map((item) => {
        const isActive = item.label === active;
        const Icon = item.icon;
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy ${
              isActive
                ? "bg-primary text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span className="relative shrink-0">
              <Icon className="h-5 w-5" aria-hidden="true" />
              {item.unread && (
                <span
                  aria-hidden="true"
                  className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary ring-2 ring-navy"
                />
              )}
            </span>
            <span>{item.label}</span>
            {item.unread && <span className="sr-only">(есть непрочитанные)</span>}
          </Link>
        );
      })}
    </nav>
  );
}
