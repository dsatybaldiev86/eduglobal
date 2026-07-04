// Sample catalog data + option lists for the /universities page.
// English university names are proper nouns kept as-is; countries are in Russian.

export const TUITION_MAX = 100000;

// Sample "total catalog size" shown when no filters/search are active.
export const CATALOG_TOTAL = 1248;

export const COUNTRIES = [
  "Канада",
  "Австралия",
  "Великобритания",
  "Сингапур",
  "США",
  "Германия",
  "Нидерланды",
  "Франция",
];

export const PROGRAM_TYPES = [
  "Бизнес",
  "Инженерное дело",
  "Информатика",
  "Медицина",
  "Право",
  "Искусство и гуманитарные науки",
];

export const LEVELS = ["Бакалавриат", "Магистратура", "Докторантура"];

export const LANGUAGES = ["Английский", "Немецкий", "Французский"];

export const universities = [
  {
    id: "toronto",
    name: "University of Toronto",
    country: "Канада",
    qsRank: 21,
    programs: 350,
    tuition: 29000,
    currency: "CAD",
    hasScholarship: true,
    programType: "Инженерное дело",
    language: "Английский",
    level: "Бакалавриат",
    initials: "UT",
    logoColor: "#0A2540",
  },
  {
    id: "melbourne",
    name: "The University of Melbourne",
    country: "Австралия",
    qsRank: 14,
    programs: 400,
    tuition: 32000,
    currency: "AUD",
    hasScholarship: true,
    programType: "Бизнес",
    language: "Английский",
    level: "Магистратура",
    initials: "UM",
    logoColor: "#C8102E",
  },
  {
    id: "ucl",
    name: "University College London",
    country: "Великобритания",
    qsRank: 9,
    programs: 250,
    tuition: 28000,
    currency: "GBP",
    hasScholarship: false,
    programType: "Медицина",
    language: "Английский",
    level: "Магистратура",
    initials: "UCL",
    logoColor: "#0A2540",
  },
  {
    id: "nus",
    name: "National University of Singapore",
    country: "Сингапур",
    qsRank: 8,
    programs: 300,
    tuition: 31000,
    currency: "SGD",
    hasScholarship: true,
    programType: "Информатика",
    language: "Английский",
    level: "Бакалавриат",
    initials: "NUS",
    logoColor: "#C8102E",
  },
  {
    id: "tum",
    name: "Technical University of Munich",
    country: "Германия",
    qsRank: 37,
    programs: 180,
    tuition: 3000,
    currency: "EUR",
    hasScholarship: true,
    programType: "Инженерное дело",
    language: "Немецкий",
    level: "Магистратура",
    initials: "TUM",
    logoColor: "#0A2540",
  },
  {
    id: "amsterdam",
    name: "University of Amsterdam",
    country: "Нидерланды",
    qsRank: 53,
    programs: 220,
    tuition: 15000,
    currency: "EUR",
    hasScholarship: false,
    programType: "Искусство и гуманитарные науки",
    language: "Английский",
    level: "Бакалавриат",
    initials: "UvA",
    logoColor: "#C8102E",
  },
  {
    id: "sorbonne",
    name: "Sorbonne University",
    country: "Франция",
    qsRank: 59,
    programs: 200,
    tuition: 4000,
    currency: "EUR",
    hasScholarship: true,
    programType: "Право",
    language: "Французский",
    level: "Магистратура",
    initials: "SU",
    logoColor: "#0A2540",
  },
  {
    id: "berkeley",
    name: "University of California, Berkeley",
    country: "США",
    qsRank: 12,
    programs: 380,
    tuition: 44000,
    currency: "USD",
    hasScholarship: false,
    programType: "Информатика",
    language: "Английский",
    level: "Докторантура",
    initials: "UCB",
    logoColor: "#C8102E",
  },
  {
    id: "mcgill",
    name: "McGill University",
    country: "Канада",
    qsRank: 29,
    programs: 300,
    tuition: 24000,
    currency: "CAD",
    hasScholarship: true,
    programType: "Бизнес",
    language: "Английский",
    level: "Бакалавриат",
    initials: "MG",
    logoColor: "#0A2540",
  },
  {
    id: "anu",
    name: "Australian National University",
    country: "Австралия",
    qsRank: 30,
    programs: 260,
    tuition: 30000,
    currency: "AUD",
    hasScholarship: false,
    programType: "Право",
    language: "Английский",
    level: "Магистратура",
    initials: "ANU",
    logoColor: "#C8102E",
  },
];

// 1248 -> "1 248" (non-breaking thin spaces as thousands separators).
export function formatNumber(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function formatTuition(u) {
  return `${u.currency} ${formatNumber(u.tuition)}`;
}

// Russian plural for "университет".
export function pluralUniversities(n) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "университет";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "университета";
  return "университетов";
}

export function getUniversityById(id) {
  return universities.find((u) => u.id === id) || null;
}
