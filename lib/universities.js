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
    bannerImage: "/images/u1.jpg",
    type: "Public",
    students: "90 000+",
    internationalStudents: "17 000+",
    description:
      "The University of Toronto is a public research university whose roots trace back to 1827. It is Canada's top-ranked university and one of the world's leading research institutions.",
    highlights: [
      "350+ Programs",
      "16 Faculties & Schools",
      "Strong Research Output",
      "Global Partnerships",
      "Vibrant Student Life",
    ],
    programsList: [
      "Computer Science",
      "Engineering",
      "Business Administration",
      "Medicine",
      "Law",
    ],
    admission: [
      "Competitive GPA and academic record",
      "IELTS / TOEFL requirement",
      "Personal statement and references",
      "Application deadline in May",
    ],
    scholarships: [
      "Merit-based awards",
      "International excellence scholarships",
      "Research funding opportunities",
    ],
    campusLife:
      "Toronto offers a vibrant campus experience with over 1,000 student organizations, cultural events, and easy access to the city’s professional and cultural hubs.",
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
    bannerImage: "/images/u2.jpg",
    type: "Public",
    students: "80 000+",
    internationalStudents: "20 000+",
    description:
      "The University of Melbourne is a top Australian institution known for academic excellence, global research collaborations, and a strong student support network.",
    highlights: [
      "400+ Programs",
      "Top-ranked business faculty",
      "Industry connections",
      "Campus research centers",
      "Diverse international student body",
    ],
    programsList: [
      "Business",
      "Economics",
      "Law",
      "Engineering",
      "Arts",
    ],
    admission: [
      "Strong academic performance",
      "English language proficiency",
      "Statement of purpose",
      "Interview for selected programs",
    ],
    scholarships: [
      "Academic merit scholarships",
      "Faculty-specific awards",
      "International student bursaries",
    ],
    campusLife:
      "Students enjoy a lively campus with cafés, sports facilities, partner universities, and easy access to Melbourne’s cultural districts.",
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
    bannerImage: "/images/u3.jpg",
    type: "Public",
    students: "75 000+",
    internationalStudents: "25 000+",
    description:
      "University College London is a world-leading research university located in the heart of London, with strong programs in medicine, science, and the humanities.",
    highlights: [
      "Top 10 global ranking",
      "Leading medical campus",
      "London city access",
      "Research-driven education",
      "International alumni network",
    ],
    programsList: [
      "Medicine",
      "Architecture",
      "Law",
      "Social Sciences",
      "Life Sciences",
    ],
    admission: [
      "High academic standards",
      "English proficiency requirement",
      "Portfolio for design programs",
      "Academic references",
    ],
    scholarships: [
      "Research scholarships",
      "Departmental awards",
      "International student support",
    ],
    campusLife:
      "UCL students benefit from London’s cultural scene, museums, research labs, and fast transport links across the UK and Europe.",
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
    bannerImage: "/images/u4.jpg",
    type: "Public",
    students: "40 000+",
    internationalStudents: "10 000+",
    description:
      "The National University of Singapore is Asia’s leading research university, offering strong STEM and business programs with global industry ties.",
    highlights: [
      "Asia’s top-ranked university",
      "Innovation and entrepreneurship",
      "Strong STEM focus",
      "Global exchange options",
      "Modern campus life",
    ],
    programsList: [
      "Computer Science",
      "Engineering",
      "Business Analytics",
      "Life Sciences",
      "Design",
    ],
    admission: [
      "Competitive GPA",
      "English language test",
      "Interview for some faculties",
      "Certificate translation",
    ],
    scholarships: [
      "Merit scholarships",
      "Athletic awards",
      "Innovation grants",
    ],
    campusLife:
      "NUS has an active campus culture with research groups, entrepreneurship hubs, sports facilities, and Singapore’s multicultural lifestyle.",
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
    bannerImage: "/images/u1.jpg",
    type: "Public",
    students: "50 000+",
    internationalStudents: "14 000+",
    description:
      "The Technical University of Munich is Germany’s leading technical university, known for engineering, applied sciences, and strong industry partnerships.",
    highlights: [
      "Leading engineering university",
      "Strong industry links",
      "Research clusters",
      "Affordable tuition",
      "Innovative campus",
    ],
    programsList: [
      "Mechanical Engineering",
      "Computer Engineering",
      "Data Science",
      "Physics",
      "Economics",
    ],
    admission: [
      "German language requirement",
      "Strong STEM grades",
      "Academic references",
      "Study plan submission",
    ],
    scholarships: [
      "DAAD scholarships",
      "Research fellowships",
      "International study support",
    ],
    campusLife:
      "TUM students benefit from Munich’s technology ecosystem, student associations, sports clubs, and Germany’s low-cost tuition model.",
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
    bannerImage: "/images/u2.jpg",
    type: "Public",
    students: "55 000+",
    internationalStudents: "20 000+",
    description:
      "The University of Amsterdam is a dynamic European university famous for arts, social sciences, and strong international campus life.",
    highlights: [
      "English-taught bachelor’s programs",
      "Creative arts focus",
      "International atmosphere",
      "Research excellence",
      "Central Amsterdam location",
    ],
    programsList: [
      "Arts",
      "Humanities",
      "Social Sciences",
      "Business",
      "Psychology",
    ],
    admission: [
      "Academic transcript review",
      "English language test",
      "Motivation letter",
      "Portfolio for creative programs",
    ],
    scholarships: [
      "Study grants",
      "Cultural student awards",
      "Exchange funding",
    ],
    campusLife:
      "Students enjoy Amsterdam’s museums, creative events, cafés, and a highly international student community.",
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
    bannerImage: "/images/u3.jpg",
    type: "Public",
    students: "45 000+",
    internationalStudents: "15 000+",
    description:
      "Sorbonne University combines historic academic tradition with today’s modern research facilities across Paris, with a strong focus on law, humanities, and sciences.",
    highlights: [
      "Historic Paris campus",
      "Strong law faculty",
      "Research excellence",
      "Cultural heritage",
      "International exchange",
    ],
    programsList: [
      "Law",
      "Humanities",
      "Natural Sciences",
      "Philosophy",
      "History",
    ],
    admission: [
      "French language proficiency",
      "Academic transcript",
      "Motivation letter",
      "Interview for select programs",
    ],
    scholarships: [
      "Government-supported grants",
      "International student awards",
      "Faculty scholarships",
    ],
    campusLife:
      "Campus life in Paris includes cultural events, historic architecture, student associations, and easy travel across Europe.",
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
    bannerImage: "/images/u4.jpg",
    type: "Public",
    students: "45 000+",
    internationalStudents: "15 000+",
    description:
      "UC Berkeley is a world-renowned public university with standout STEM and business programs, strong innovation culture, and vibrant campus life.",
    highlights: [
      "Top engineering school",
      "Silicon Valley connections",
      "Entrepreneurship culture",
      "Research-driven learning",
      "Diverse student body",
    ],
    programsList: [
      "Computer Science",
      "Engineering",
      "Business",
      "Data Science",
      "Environmental Science",
    ],
    admission: [
      "High GPA requirement",
      "Standardized test scores",
      "Personal insight questions",
      "Letters of recommendation",
    ],
    scholarships: [
      "Need-based aid",
      "Research assistantships",
      "External awards",
    ],
    campusLife:
      "Berkeley students enjoy a bustling campus with tech meetups, startups, outdoor activities, and a strong activist community.",
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
    bannerImage: "/images/u1.jpg",
    type: "Public",
    students: "46 000+",
    internationalStudents: "14 000+",
    description:
      "McGill University is a top Canadian research university located in Montreal, offering strong business and science programs in a multicultural environment.",
    highlights: [
      "Leading Canadian university",
      "Strong business school",
      "Research opportunities",
      "Bilingual city life",
      "International community",
    ],
    programsList: [
      "Business",
      "Economics",
      "Biological Sciences",
      "Psychology",
      "Engineering",
    ],
    admission: [
      "High school transcripts",
      "English proficiency",
      "Personal statement",
      "Supplementary application for some programs",
    ],
    scholarships: [
      "Entrance scholarships",
      "Faculty prizes",
      "International awards",
    ],
    campusLife:
      "Montreal’s campus life includes festivals, arts, sports, and a lively student scene in one of Canada’s most vibrant cities.",
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
    bannerImage: "/images/u2.jpg",
    type: "Public",
    students: "28 000+",
    internationalStudents: "10 000+",
    description:
      "Australian National University is Australia’s national research university with a strong academic reputation and close ties to government and industry.",
    highlights: [
      "National research university",
      "Strong law faculty",
      "Academic excellence",
      "Capital city location",
      "Global research networks",
    ],
    programsList: [
      "Law",
      "Political Science",
      "International Relations",
      "Public Policy",
      "Environmental Science",
    ],
    admission: [
      "Competitive academic scores",
      "English language proof",
      "Statement of intent",
      "Relevant work experience for graduate programs",
    ],
    scholarships: [
      "ANU scholarships",
      "Research and travel grants",
      "Faculty awards",
    ],
    campusLife:
      "ANU offers a lively campus in Canberra with academic talks, networking events, student clubs, and national-level research facilities.",
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
