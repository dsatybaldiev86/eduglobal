import Link from "next/link";
import FlightPathSvg from "@/components/FlightPathSvg";

// Split-screen shell shared by the /login and /signup pages.
// Left: navy panel (compact header on mobile). Right: white form area.
export default function AuthShell({ heading, subtext, children }) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left navy panel */}
      <section className="relative isolate flex flex-col overflow-hidden bg-navy px-6 py-8 text-white lg:min-h-screen lg:w-1/2 lg:px-16 lg:py-16">
        {/* Dotted world-map texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:22px_22px]"
        />
        {/* Soft red glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/4 hidden h-96 w-96 rounded-full bg-primary/20 blur-3xl lg:block"
        />

        {/* Logo + tagline (top-left) */}
        <Link
          href="/"
          className="relative z-10 inline-flex items-center gap-3 self-start rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-lg font-bold text-white">
            E
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-xl font-bold">EduGlobal</span>
            <span className="hidden text-sm text-white/60 lg:block">
              Мировое образование. Ваше будущее.
            </span>
          </span>
        </Link>

        {/* Heading + subtext (vertically centered on desktop) */}
        <div className="relative z-10 mt-8 max-w-lg lg:my-auto lg:mt-0">
          <h1 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl xl:text-6xl">
            {heading}
          </h1>
          <p className="mt-4 hidden text-lg text-white/70 lg:block">{subtext}</p>
        </div>

        {/* Flight paths + pins in the lower area (desktop only) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 -right-8 z-0 hidden h-[26rem] w-[26rem] lg:block xl:h-[32rem] xl:w-[32rem]"
        >
          <FlightPathSvg className="h-full w-full text-white/25" />
        </div>
      </section>

      {/* Right white form panel */}
      <main className="flex flex-1 items-center justify-center bg-white px-6 py-10 sm:px-8 lg:w-1/2 lg:px-14">
        {children}
      </main>
    </div>
  );
}
