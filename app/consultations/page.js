"use client";

import { useState } from "react";
import { CalendarDays, Clock, Sparkles } from "lucide-react";
import AppNavbar from "@/components/AppNavbar";

const TYPES = [
  {
    id: "general",
    label: "General Counselling",
    description: "Get guidance on study options",
    price: "$49",
  },
  {
    id: "shortlisting",
    label: "University Shortlisting",
    description: "Personalized university list",
    price: "$49",
  },
  {
    id: "application",
    label: "Application Review",
    description: "Review your application",
    price: "$79",
  },
  {
    id: "visa",
    label: "Visa Guidance",
    description: "Visa process & documentation",
    price: "$59",
  },
];

const TIMES = [
  "09:00 AM",
  "11:00 AM",
  "01:00 PM",
  "03:00 PM",
  "05:00 PM",
];

export default function ConsultationsPage() {
  const [selectedType, setSelectedType] = useState(TYPES[0].id);
  const [selectedDate, setSelectedDate] = useState("15 May 2026");
  const [selectedTime, setSelectedTime] = useState(TIMES[1]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const activeType = TYPES.find((type) => type.id === selectedType) ?? TYPES[0];
  const paymentStatus = paymentCompleted
    ? "Paid"
    : bookingConfirmed
    ? "Pending"
    : "Awaiting confirmation";

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
  };

  const handlePayment = () => {
    if (!bookingConfirmed) return;
    setPaymentCompleted(true);
  };

  return (
    <div className="min-h-screen bg-light-grey">
      <AppNavbar active="Консультации" />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Book a Consultation
              </p>
              <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
                Choose your consultation type and schedule
              </h1>
            </div>
            <div className="rounded-3xl bg-light-grey p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-14 w-14 place-items-center rounded-3xl bg-navy text-white">
                  <Sparkles className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-navy/70">Consultant</p>
                  <p className="mt-1 text-lg font-semibold text-navy">Sarah Thompson</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 text-sm text-navy/70 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-navy/50">Duration</p>
                  <p className="mt-2 font-semibold text-navy">60 Minutes</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.24em] text-navy/50">Price</p>
                  <p className="mt-2 font-semibold text-navy">From $49</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 xl:grid-cols-[1.35fr_0.65fr] xl:items-start">
            <section className="space-y-6">
              <div className="rounded-3xl border border-navy/10 bg-navy/5 p-6">
                <h2 className="text-xl font-semibold text-navy">Select Consultation Type</h2>
                <div className="mt-5 grid gap-4">
                  {TYPES.map((type) => {
                    const isActive = type.id === selectedType;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`w-full rounded-3xl border p-5 text-left shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                          isActive
                            ? "border-primary bg-primary/10"
                            : "border-navy/10 bg-white hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-base font-semibold text-navy">{type.label}</p>
                            <p className="mt-1 text-sm text-navy/70">{type.description}</p>
                          </div>
                          <span className="rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-white">
                            {type.price}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-navy/10 bg-navy/5 p-6">
                <h2 className="text-xl font-semibold text-navy">Select Date & Time</h2>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-3xl bg-white p-4 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.24em] text-navy/50">Choose a date</p>
                    <div className="mt-4 grid gap-2">
                      <button
                      type="button"
                      onClick={() => setSelectedDate("15 May 2026")}
                      className={`rounded-3xl border px-4 py-3 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        selectedDate === "15 May 2026"
                          ? "border-primary bg-primary/10 text-navy"
                          : "border-navy/10 text-navy hover:border-primary/30"
                      }`}
                    >
                      <span className="font-semibold">15 May 2026</span>
                      <span className="block text-xs text-navy/60">Saturday</span>
                    </button>
                    </div>
                  </div>
                  <div className="rounded-3xl bg-white p-4 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.24em] text-navy/50">Choose a time</p>
                    <div className="mt-4 grid gap-2">
                      {TIMES.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`w-full rounded-3xl border px-4 py-3 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                              isSelected
                                ? "border-primary bg-primary/10 text-navy"
                                : "border-navy/10 text-navy hover:border-primary/30"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-navy">Booking summary</h2>
                <dl className="mt-6 space-y-4 text-sm text-navy/70">
                  <div>
                    <dt className="font-semibold text-navy">Consultation</dt>
                    <dd>{activeType.label}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Date</dt>
                    <dd>{selectedDate}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Time</dt>
                    <dd>{selectedTime}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Consultant</dt>
                    <dd>Sarah Thompson</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Payment status</dt>
                    <dd>{paymentStatus}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Total</dt>
                    <dd>{activeType.price}</dd>
                  </div>
                </dl>
                <div className="mt-6 rounded-3xl bg-navy/5 p-4 text-sm text-navy/75">
                  <p className="font-medium text-navy">Please note:</p>
                  <p className="mt-2">
                    Appointment confirmation and payment functions are now enabled. After you confirm booking, you can complete payment to finalize the appointment.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleConfirmBooking}
                disabled={bookingConfirmed}
                className={`w-full rounded-3xl px-6 py-4 text-sm font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  bookingConfirmed
                    ? "cursor-not-allowed bg-navy/60"
                    : "bg-primary hover:bg-primary-dark"
                }`}
              >
                {bookingConfirmed ? "Booking confirmed" : "Confirm Booking"}
              </button>

              {bookingConfirmed && !paymentCompleted && (
                <button
                  type="button"
                  onClick={handlePayment}
                  className="w-full rounded-3xl border border-primary bg-white px-6 py-4 text-sm font-semibold text-primary transition hover:bg-primary/5"
                >
                  Pay {activeType.price}
                </button>
              )}

              {paymentCompleted && (
                <div className="rounded-3xl border border-primary/30 bg-primary/10 p-4 text-sm text-primary">
                  <p className="font-semibold">Payment complete</p>
                  <p className="mt-1 text-sm text-primary/90">
                    Your booking has been confirmed and payment is processed.
                  </p>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
