"use client";

import { Apple } from "lucide-react";

// Placeholder mark for Google — a neutral monochrome glyph, NOT the brand logo.
function GoogleMark({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 12 H17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Divider + social sign-in buttons, shared by /login and /signup.
export default function SocialButtons() {
  const handleProvider = (provider) => () => {
    // No real OAuth — stubbed.
    console.log(`[stub] Продолжить с ${provider}`);
  };

  return (
    <>
      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-navy/10" />
        <span className="shrink-0 text-xs text-navy/50">или войдите через</span>
        <span className="h-px flex-1 bg-navy/10" />
      </div>
      <div className="grid gap-3">
        <button
          type="button"
          onClick={handleProvider("Google")}
          className="btn-outline-navy"
        >
          <GoogleMark className="h-5 w-5" />
          Продолжить с Google
        </button>
        <button
          type="button"
          onClick={handleProvider("Apple")}
          className="btn-outline-navy"
        >
          <Apple className="h-5 w-5" strokeWidth={1.75} />
          Продолжить с Apple
        </button>
      </div>
    </>
  );
}
