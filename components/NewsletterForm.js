"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4" noValidate>
      <div className="flex overflow-hidden rounded-lg bg-white/10 ring-1 ring-white/15 focus-within:ring-2 focus-within:ring-primary">
        <span className="grid place-items-center pl-3 text-white/50" aria-hidden="true">
          <Mail className="h-4 w-4" />
        </span>
        <label htmlFor="newsletter-email" className="sr-only">
          Адрес электронной почты
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (subscribed) setSubscribed(false);
          }}
          placeholder="you@example.com"
          className="w-full bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Подписаться на рассылку"
          className="grid place-items-center bg-primary px-4 text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {subscribed && (
        <p
          role="status"
          className="mt-2 flex items-center gap-1 text-xs text-emerald-400"
        >
          <Check className="h-3.5 w-3.5" />
          Спасибо! Вы подписаны.
        </p>
      )}
    </form>
  );
}
