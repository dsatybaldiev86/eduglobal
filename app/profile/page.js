"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Menu,
  X,
} from "lucide-react";
import AppNavbar from "@/components/AppNavbar";
import AccountSidebar from "@/components/AccountSidebar";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import {
  COUNTRIES,
  PROGRAM_TYPES,
  LANGUAGES,
  TUITION_MAX,
  formatNumber,
} from "@/lib/universities";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CURRENT_LEVELS = [
  "Среднее образование",
  "Бакалавриат",
  "Магистратура",
  "Докторантура",
];
const INTENDED_LEVELS = [
  "Бакалавриат",
  "Магистратура",
  "Аспирантура",
  "Докторантура",
];
const FIELDS = [
  "Информатика",
  "Инженерия",
  "Бизнес",
  "Медицина",
  "Право",
  "Искусство и гуманитарные науки",
];
const TEST_TYPES = ["IELTS", "TOEFL", "SAT", "GRE", "GMAT"];

const TABS = [
  { id: "personal", label: "Личная информация" },
  { id: "education", label: "Образование" },
  { id: "tests", label: "Результаты тестов" },
  { id: "preferences", label: "Предпочтения" },
];

const INITIAL_PROFILE = {
  personal: {
    fullName: "Emma Johnson",
    email: "emma.johnson@email.com",
    dateOfBirth: "2001-05-15",
    citizenship: "Канада",
    phone: "+1 (416) 123-4567",
    address: "123 Maple Street, Toronto, Ontario, Canada",
    currentLevel: "Бакалавриат",
    intendedLevel: "Магистратура",
    fieldOfInterest: "Информатика",
  },
  education: [
    {
      id: "edu-1",
      institution: "University of Toronto",
      major: "Информатика",
      gpa: "3.8",
      graduationYear: "2023",
    },
  ],
  testScores: [
    { id: "test-1", test: "IELTS", score: "7.5", date: "2023-09-10" },
  ],
  preferences: {
    countries: ["Канада", "Великобритания"],
    budgetMin: 0,
    budgetMax: 50000,
    language: "Английский",
    programType: "Информатика",
    scholarship: true,
  },
};

export default function ProfilePage() {
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [toast, setToast] = useState(null);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const tabRefs = useRef([]);
  const idCounter = useRef(100);
  const drawerCloseRef = useRef(null);

  const nextId = (prefix) => `${prefix}-${idCounter.current++}`;

  // Auto-dismiss the toast.
  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  // Move focus into the mobile drawer when it opens.
  useEffect(() => {
    if (accountMenuOpen && drawerCloseRef.current) drawerCloseRef.current.focus();
  }, [accountMenuOpen]);

  // ---- state updaters -------------------------------------------------
  const updatePersonal = (field, value) => {
    setProfile((p) => ({ ...p, personal: { ...p.personal, [field]: value } }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const updatePreferences = (field, value) =>
    setProfile((p) => ({ ...p, preferences: { ...p.preferences, [field]: value } }));

  const toggleCountry = (country) =>
    setProfile((p) => {
      const list = p.preferences.countries;
      const nextList = list.includes(country)
        ? list.filter((c) => c !== country)
        : [...list, country];
      return { ...p, preferences: { ...p.preferences, countries: nextList } };
    });

  const addEducation = () =>
    setProfile((p) => ({
      ...p,
      education: [
        ...p.education,
        { id: nextId("edu"), institution: "", major: "", gpa: "", graduationYear: "" },
      ],
    }));

  const updateEducation = (id, field, value) =>
    setProfile((p) => ({
      ...p,
      education: p.education.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }));

  const removeEducation = (id) =>
    setProfile((p) => ({
      ...p,
      education: p.education.filter((e) => e.id !== id),
    }));

  const addTest = () =>
    setProfile((p) => ({
      ...p,
      testScores: [...p.testScores, { id: nextId("test"), test: "", score: "", date: "" }],
    }));

  const updateTest = (id, field, value) =>
    setProfile((p) => ({
      ...p,
      testScores: p.testScores.map((t) => (t.id === id ? { ...t, [field]: value } : t)),
    }));

  const removeTest = (id) =>
    setProfile((p) => ({
      ...p,
      testScores: p.testScores.filter((t) => t.id !== id),
    }));

  // ---- validation + save ---------------------------------------------
  const validate = () => {
    const p = profile.personal;
    const e = {};
    if (!p.fullName.trim()) e.fullName = "Введите полное имя";
    if (!p.dateOfBirth) e.dateOfBirth = "Укажите дату рождения";
    if (!p.citizenship) e.citizenship = "Выберите гражданство";
    if (!p.email.trim()) e.email = "Введите электронную почту";
    else if (!EMAIL_RE.test(p.email.trim())) e.email = "Введите корректный email";
    return e;
  };

  const handleSave = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setActiveTab(0);
      setToast({ type: "error", message: "Проверьте обязательные поля" });
      return;
    }
    // Structured payload, shaped so it can later be POSTed to an API.
    console.log("[stub] Профиль сохранён:", JSON.parse(JSON.stringify(profile)));
    setToast({ type: "success", message: "Изменения сохранены" });
  };

  const onTabKeyDown = (e) => {
    let next = activeTab;
    if (e.key === "ArrowRight") next = (activeTab + 1) % TABS.length;
    else if (e.key === "ArrowLeft") next = (activeTab - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    else return;
    e.preventDefault();
    setActiveTab(next);
    tabRefs.current[next]?.focus();
  };

  const p = profile.personal;
  const prefs = profile.preferences;
  const pct = (v) => (v / TUITION_MAX) * 100;

  const saveBar = (
    <div className="mt-6 flex justify-end">
      <button type="button" onClick={handleSave} className="btn-primary">
        Сохранить изменения
      </button>
    </div>
  );

  // ---- tab panels -----------------------------------------------------
  const renderPersonal = () => (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <InputField
          id="fullName"
          label="Полное имя"
          value={p.fullName}
          onChange={(e) => updatePersonal("fullName", e.target.value)}
          error={errors.fullName}
          autoComplete="name"
        />
        <InputField
          id="dateOfBirth"
          label="Дата рождения"
          type="date"
          value={p.dateOfBirth}
          onChange={(e) => updatePersonal("dateOfBirth", e.target.value)}
          error={errors.dateOfBirth}
        />
        <SelectField
          id="citizenship"
          label="Гражданство"
          value={p.citizenship}
          onChange={(e) => updatePersonal("citizenship", e.target.value)}
          error={errors.citizenship}
        >
          <option value="">Выберите страну</option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </SelectField>
        <InputField
          id="phone"
          label="Номер телефона"
          type="tel"
          value={p.phone}
          onChange={(e) => updatePersonal("phone", e.target.value)}
          autoComplete="tel"
        />
        <InputField
          id="email"
          label="Электронная почта"
          type="email"
          value={p.email}
          onChange={(e) => updatePersonal("email", e.target.value)}
          error={errors.email}
          autoComplete="email"
          className="sm:col-span-2"
        />
        <InputField
          id="address"
          label="Адрес"
          value={p.address}
          onChange={(e) => updatePersonal("address", e.target.value)}
          autoComplete="street-address"
          className="sm:col-span-2"
        />
        <SelectField
          id="currentLevel"
          label="Текущий уровень образования"
          value={p.currentLevel}
          onChange={(e) => updatePersonal("currentLevel", e.target.value)}
        >
          <option value="">Выберите уровень</option>
          {CURRENT_LEVELS.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </SelectField>
        <SelectField
          id="intendedLevel"
          label="Желаемый уровень обучения"
          value={p.intendedLevel}
          onChange={(e) => updatePersonal("intendedLevel", e.target.value)}
        >
          <option value="">Выберите уровень</option>
          {INTENDED_LEVELS.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </SelectField>
        <SelectField
          id="fieldOfInterest"
          label="Область интересов"
          value={p.fieldOfInterest}
          onChange={(e) => updatePersonal("fieldOfInterest", e.target.value)}
          className="sm:col-span-2"
        >
          <option value="">Выберите область</option>
          {FIELDS.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </SelectField>
      </div>
      {saveBar}
    </div>
  );

  const renderEducation = () => (
    <div>
      <p className="text-sm text-navy/70">
        Укажите ваше образование, включая средний балл (GPA).
      </p>
      <div className="mt-4 space-y-4">
        {profile.education.map((edu, index) => (
          <div key={edu.id} className="rounded-xl border border-navy/10 bg-light-grey p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-navy">
                Учебное заведение {index + 1}
              </h3>
              <button
                type="button"
                onClick={() => removeEducation(edu.id)}
                aria-label={`Удалить учебное заведение ${index + 1}`}
                className="grid h-9 w-9 place-items-center rounded-md text-navy/60 transition-colors hover:bg-navy/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Trash2 className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField
                id={`${edu.id}-institution`}
                label="Учебное заведение"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                placeholder="Например, University of Toronto"
              />
              <InputField
                id={`${edu.id}-major`}
                label="Специальность"
                value={edu.major}
                onChange={(e) => updateEducation(edu.id, "major", e.target.value)}
              />
              <InputField
                id={`${edu.id}-gpa`}
                label="Средний балл (GPA)"
                value={edu.gpa}
                onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                inputMode="decimal"
                placeholder="Например, 3.8"
              />
              <InputField
                id={`${edu.id}-year`}
                label="Год окончания"
                value={edu.graduationYear}
                onChange={(e) => updateEducation(edu.id, "graduationYear", e.target.value)}
                inputMode="numeric"
                placeholder="Например, 2023"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addEducation}
        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-dashed border-navy/25 px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <Plus className="h-4 w-4" aria-hidden="true" />
        Добавить учебное заведение
      </button>
      {saveBar}
    </div>
  );

  const renderTests = () => (
    <div>
      <p className="text-sm text-navy/70">
        Добавьте результаты языковых и стандартизированных тестов (IELTS,
        TOEFL, SAT, GRE, GMAT).
      </p>
      <div className="mt-4 space-y-4">
        {profile.testScores.map((test, index) => (
          <div key={test.id} className="rounded-xl border border-navy/10 bg-light-grey p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-navy">Тест {index + 1}</h3>
              <button
                type="button"
                onClick={() => removeTest(test.id)}
                aria-label={`Удалить тест ${index + 1}`}
                className="grid h-9 w-9 place-items-center rounded-md text-navy/60 transition-colors hover:bg-navy/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Trash2 className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <SelectField
                id={`${test.id}-type`}
                label="Тест"
                value={test.test}
                onChange={(e) => updateTest(test.id, "test", e.target.value)}
              >
                <option value="">Выберите тест</option>
                {TEST_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </SelectField>
              <InputField
                id={`${test.id}-score`}
                label="Балл"
                value={test.score}
                onChange={(e) => updateTest(test.id, "score", e.target.value)}
                placeholder="Например, 7.5"
              />
              <InputField
                id={`${test.id}-date`}
                label="Дата"
                type="date"
                value={test.date}
                onChange={(e) => updateTest(test.id, "date", e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addTest}
        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-dashed border-navy/25 px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <Plus className="h-4 w-4" aria-hidden="true" />
        Добавить тест
      </button>
      {saveBar}
    </div>
  );

  const renderPreferences = () => (
    <div>
      <p className="text-sm text-navy/70">
        Эти предпочтения используются системой персональных рекомендаций.
      </p>

      <div className="mt-5 space-y-6">
        {/* Preferred countries (multi-select) */}
        <fieldset>
          <legend className="text-sm font-medium text-navy">
            Предпочитаемые страны
          </legend>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {COUNTRIES.map((c, i) => {
              const cid = `pref-country-${i}`;
              return (
                <div key={c} className="flex items-center gap-2">
                  <input
                    id={cid}
                    type="checkbox"
                    checked={prefs.countries.includes(c)}
                    onChange={() => toggleCountry(c)}
                    className="h-4 w-4 shrink-0 rounded border-navy/30 accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  />
                  <label htmlFor={cid} className="text-sm text-navy">
                    {c}
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>

        {/* Budget range */}
        <div>
          <span className="text-sm font-medium text-navy">
            Бюджет на обучение (в год)
          </span>
          <div className="relative mt-5 h-1.5">
            <div className="absolute inset-0 rounded-full bg-navy/15" />
            <div
              className="absolute inset-y-0 rounded-full bg-primary"
              style={{
                left: `${pct(prefs.budgetMin)}%`,
                right: `${100 - pct(prefs.budgetMax)}%`,
              }}
            />
            <label htmlFor="budget-min" className="sr-only">
              Минимальный бюджет на обучение в год
            </label>
            <input
              id="budget-min"
              type="range"
              min={0}
              max={TUITION_MAX}
              step={1000}
              value={prefs.budgetMin}
              onChange={(e) =>
                updatePreferences(
                  "budgetMin",
                  Math.min(Number(e.target.value), prefs.budgetMax)
                )
              }
              aria-describedby="budget-values"
              className="range-input"
            />
            <label htmlFor="budget-max" className="sr-only">
              Максимальный бюджет на обучение в год
            </label>
            <input
              id="budget-max"
              type="range"
              min={0}
              max={TUITION_MAX}
              step={1000}
              value={prefs.budgetMax}
              onChange={(e) =>
                updatePreferences(
                  "budgetMax",
                  Math.max(Number(e.target.value), prefs.budgetMin)
                )
              }
              aria-describedby="budget-values"
              className="range-input"
            />
          </div>
          <div
            id="budget-values"
            className="mt-3 flex items-center justify-between text-sm text-navy/70"
          >
            <span>${formatNumber(prefs.budgetMin)}</span>
            <span>
              {prefs.budgetMax >= TUITION_MAX
                ? `$${formatNumber(TUITION_MAX)}+`
                : `$${formatNumber(prefs.budgetMax)}`}
            </span>
          </div>
        </div>

        {/* Language + program type */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SelectField
            id="pref-language"
            label="Язык обучения"
            value={prefs.language}
            onChange={(e) => updatePreferences("language", e.target.value)}
          >
            <option value="">Любой язык</option>
            {LANGUAGES.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </SelectField>
          <SelectField
            id="pref-programType"
            label="Тип программы"
            value={prefs.programType}
            onChange={(e) => updatePreferences("programType", e.target.value)}
          >
            <option value="">Любой тип</option>
            {PROGRAM_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </SelectField>
        </div>

        {/* Scholarship */}
        <div className="flex items-center gap-2.5">
          <input
            id="pref-scholarship"
            type="checkbox"
            checked={prefs.scholarship}
            onChange={(e) => updatePreferences("scholarship", e.target.checked)}
            className="h-4 w-4 shrink-0 rounded border-navy/30 accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
          <label htmlFor="pref-scholarship" className="text-sm text-navy">
            Только программы со стипендиями
          </label>
        </div>
      </div>
      {saveBar}
    </div>
  );

  return (
    <div className="min-h-screen bg-light-grey">
      <AppNavbar active="" />

      <div className="lg:flex">
        {/* Desktop account sidebar */}
        <aside className="hidden w-64 shrink-0 bg-navy lg:block">
          <div className="sticky top-16">
            <AccountSidebar active="Мой профиль" />
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          {/* Mobile account menu trigger */}
          <button
            type="button"
            onClick={() => setAccountMenuOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={accountMenuOpen}
            className="mb-4 inline-flex items-center gap-2 rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:hidden"
          >
            <Menu className="h-4 w-4" aria-hidden="true" />
            Меню аккаунта
          </button>

          <main className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <h1 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
              Мой профиль
            </h1>

            {/* Tab bar */}
            <div
              role="tablist"
              aria-label="Разделы профиля"
              className="mt-5 flex gap-1 overflow-x-auto border-b border-navy/10"
            >
              {TABS.map((t, i) => (
                <button
                  key={t.id}
                  id={`tab-${t.id}`}
                  ref={(el) => (tabRefs.current[i] = el)}
                  role="tab"
                  type="button"
                  aria-selected={activeTab === i}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={activeTab === i ? 0 : -1}
                  onClick={() => setActiveTab(i)}
                  onKeyDown={onTabKeyDown}
                  className={`-mb-px shrink-0 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary ${
                    activeTab === i
                      ? "border-primary text-navy"
                      : "border-transparent text-navy/70 hover:text-navy"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Two columns: profile card + active tab content */}
            <div className="mt-6 grid gap-6 lg:grid-cols-[16rem_1fr]">
              {/* Profile card */}
              <aside>
                <div className="rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm">
                  <div
                    className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-navy to-primary text-2xl font-bold text-white"
                    aria-hidden="true"
                  >
                    EJ
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-navy">
                    {p.fullName || "Emma Johnson"}
                  </h2>
                  <p className="mt-1 break-words text-sm text-navy/70">{p.email}</p>
                  <p className="mt-2 flex items-center justify-center gap-1 text-sm text-navy/70">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {p.citizenship || "—"}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab(0)}
                    className="btn-outline-navy mt-5"
                  >
                    Редактировать профиль
                  </button>
                </div>
              </aside>

              {/* Tab panels */}
              <div className="min-w-0">
                {TABS.map((t, i) => (
                  <div
                    key={t.id}
                    id={`panel-${t.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${t.id}`}
                    hidden={activeTab !== i}
                  >
                    {i === 0 && renderPersonal()}
                    {i === 1 && renderEducation()}
                    {i === 2 && renderTests()}
                    {i === 3 && renderPreferences()}
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile account drawer */}
      {accountMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Меню аккаунта"
          onKeyDown={(e) => {
            if (e.key === "Escape") setAccountMenuOpen(false);
          }}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setAccountMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-72 max-w-[85%] flex-col overflow-y-auto bg-navy">
            <div className="flex justify-end p-3">
              <button
                type="button"
                ref={drawerCloseRef}
                onClick={() => setAccountMenuOpen(false)}
                aria-label="Закрыть меню аккаунта"
                className="grid h-9 w-9 place-items-center rounded-md text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <AccountSidebar
              active="Мой профиль"
              onNavigate={() => setAccountMenuOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div
          role={toast.type === "error" ? "alert" : "status"}
          aria-live={toast.type === "error" ? "assertive" : "polite"}
          className="fixed bottom-4 right-4 z-[60] flex items-center gap-2 rounded-lg border bg-white px-4 py-3 text-sm font-medium text-navy shadow-lg"
        >
          {toast.type === "error" ? (
            <AlertCircle className="h-5 w-5 text-primary" aria-hidden="true" />
          ) : (
            <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
          )}
          {toast.message}
        </div>
      )}
    </div>
  );
}
