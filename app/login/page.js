"use client";

import { useState } from "react";
import Link from "next/link";
import AuthShell from "@/components/AuthShell";
import InputField from "@/components/InputField";
import PasswordField from "@/components/PasswordField";
import SocialButtons from "@/components/SocialButtons";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => {
    const { value } = e.target;
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const validate = () => {
    const next = {};
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
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // No real auth — stubbed.
    console.log("[stub] Вход:", values);
  };

  return (
    <AuthShell heading="С возвращением" subtext="Войдите, чтобы продолжить свой путь">
      <div className="w-full max-w-[420px]">
        <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">Вход</h2>

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
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
            autoComplete="current-password"
            value={values.password}
            onChange={update("password")}
            error={errors.password}
            labelRight={
              <Link
                href="#"
                className="rounded text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Забыли пароль?
              </Link>
            }
          />

          <button type="submit" className="btn-primary w-full">
            Войти
          </button>
        </form>

        <SocialButtons />

        <p className="mt-6 text-center text-sm text-navy/70">
          Нет аккаунта?{" "}
          <Link
            href="/signup"
            className="rounded font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
