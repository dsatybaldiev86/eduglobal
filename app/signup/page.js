"use client";

import { useState } from "react";
import Link from "next/link";
import AuthShell from "@/components/AuthShell";
import InputField from "@/components/InputField";
import PasswordField from "@/components/PasswordField";
import SocialButtons from "@/components/SocialButtons";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => {
    const { value } = e.target;
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleAgree = (e) => {
    setAgree(e.target.checked);
    setErrors((prev) => (prev.agree ? { ...prev, agree: undefined } : prev));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) {
      next.name = "Введите имя";
    }
    if (!values.email.trim()) {
      next.email = "Введите электронную почту";
    } else if (!EMAIL_RE.test(values.email.trim())) {
      next.email = "Введите корректный email";
    }
    if (!values.password) {
      next.password = "Введите пароль";
    } else if (values.password.length < 8) {
      next.password = "Пароль должен содержать не менее 8 символов";
    }
    if (!values.confirmPassword) {
      next.confirmPassword = "Подтвердите пароль";
    } else if (values.confirmPassword !== values.password) {
      next.confirmPassword = "Пароли не совпадают";
    }
    if (!agree) {
      next.agree = "Необходимо принять условия использования";
    }
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // No real auth — stubbed.
    console.log("[stub] Регистрация:", { ...values, agree });
  };

  return (
    <AuthShell
      heading="Начните свой путь"
      subtext="Создайте аккаунт, чтобы двигаться дальше"
    >
      <div className="w-full max-w-[420px]">
        <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
          Регистрация
        </h2>

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          <InputField
            id="name"
            label="Имя"
            placeholder="Введите имя"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            error={errors.name}
          />

          <InputField
            id="email"
            label="Электронная почта"
            type="email"
            placeholder="Введите email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            error={errors.email}
          />

          <PasswordField
            id="password"
            label="Пароль"
            placeholder="Введите пароль"
            autoComplete="new-password"
            value={values.password}
            onChange={update("password")}
            error={errors.password}
          />

          <PasswordField
            id="confirmPassword"
            label="Подтвердите пароль"
            placeholder="Повторите пароль"
            autoComplete="new-password"
            value={values.confirmPassword}
            onChange={update("confirmPassword")}
            error={errors.confirmPassword}
          />

          <div>
            <div className="flex items-start gap-2.5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={agree}
                onChange={handleAgree}
                aria-invalid={errors.agree ? true : undefined}
                aria-describedby={errors.agree ? "terms-error" : undefined}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy/30 accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              />
              <label htmlFor="terms" className="text-sm text-navy/70">
                Я принимаю{" "}
                <Link href="#" className="font-medium text-primary hover:underline">
                  условия использования
                </Link>{" "}
                и{" "}
                <Link href="#" className="font-medium text-primary hover:underline">
                  политику конфиденциальности
                </Link>
              </label>
            </div>
            {errors.agree ? (
              <p id="terms-error" className="mt-1.5 text-xs text-primary">
                {errors.agree}
              </p>
            ) : null}
          </div>

          <button type="submit" className="btn-primary w-full">
            Создать аккаунт
          </button>
        </form>

        <SocialButtons />

        <p className="mt-6 text-center text-sm text-navy/70">
          Уже есть аккаунт?{" "}
          <Link
            href="/login"
            className="rounded font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Войти
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
