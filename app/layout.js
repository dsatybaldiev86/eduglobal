import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "EduGlobal — Глобальное образование. Ваше будущее.",
  description:
    "EduGlobal помогает целеустремлённым студентам подбирать университеты, сравнивать программы и поступать в зарубежные вузы при экспертной консультационной поддержке.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-light-grey text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
