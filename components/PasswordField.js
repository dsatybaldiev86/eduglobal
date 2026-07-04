"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Password input with a show/hide eye toggle and inline error message.
export default function PasswordField({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
  labelRight,
}) {
  const [show, setShow] = useState(false);
  const errorId = `${id}-error`;

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-navy">
          {label}
        </label>
        {labelRight}
      </div>
      <div className="relative mt-1.5">
        <input
          id={id}
          name={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`w-full rounded-lg border bg-light-grey px-3.5 py-2.5 pr-11 text-sm text-navy transition-colors placeholder:text-navy/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
            error ? "border-primary" : "border-navy/15"
          }`}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Скрыть пароль" : "Показать пароль"}
          aria-pressed={show}
          className="absolute inset-y-0 right-0 grid w-11 place-items-center rounded-r-lg text-navy/50 transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        >
          {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-primary">
          {error}
        </p>
      ) : null}
    </div>
  );
}
