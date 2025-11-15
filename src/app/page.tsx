import Image from "next/image";
import type { ReactNode } from "react";

const adCreative = {
  brand: "Catalyst Run",
  verification: "Official",
  headline: "Run faster. Recover quicker.",
  primaryText:
    "Catalyst Run trainers pack responsive cushioning into a 7oz frame so you can push tempo runs without the post-run fatigue.",
  supportingPoints: [
    "Featherlight knit upper adapts to every stride.",
    "Graphene outsole grips in any weather.",
    "Biomechanic footbed reduces impact by 32%.",
  ],
  cta: "Shop the drop",
  destination: "catalystrun.com/drop2",
  testimonial: {
    quote:
      "The only shoe that lets me double up long runs without ice baths. Instant add to cart.",
    author: "Jess M., Boston qualifier",
  },
  asset: {
    src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    alt: "Catalyst Run lightweight trainers resting on a track",
  },
  socialProof: [
    { label: "1.2K", descriptor: "likes" },
    { label: "482", descriptor: "comments" },
    { label: "98", descriptor: "shares" },
  ],
};

const FormatBadge = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-sky-700 shadow-sm ring-1 ring-white/60 backdrop-blur">
    {children}
  </span>
);

const StatPill = ({
  label,
  descriptor,
}: {
  label: string;
  descriptor: string;
}) => (
  <span className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500 backdrop-blur">
    <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
    {label} {descriptor}
  </span>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-14 sm:px-10 lg:flex-row">
        <section className="flex flex-1 flex-col justify-between gap-10">
          <header className="flex flex-col gap-6">
            <FormatBadge>Facebook Feed • Conversion objective</FormatBadge>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Ready-to-run Facebook ad creative for your next product drop
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Launch with clarity. This concept packages hero copy, product
              positioning, and social proof into a thumb-stopping feed ad primed
              for traffic or sales campaigns on Meta.
            </p>
          </header>

          <div className="flex flex-wrap gap-3">
            <StatPill label="CTR 3.8%" descriptor="last 7 days" />
            <StatPill label="CPR ↓22%" descriptor="vs. account avg." />
            <StatPill label="ROAS 4.3x" descriptor="simulated" />
          </div>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white">
              Creative breakdown
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Hook
                </p>
                <p className="text-lg text-slate-200">{adCreative.headline}</p>
                <p className="text-sm leading-relaxed text-slate-300">
                  {adCreative.primaryText}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Key proof points
                </p>
                <ul className="space-y-3 text-sm text-slate-200">
                  {adCreative.supportingPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth={2}
                        className="mt-1 h-4 w-4 stroke-sky-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <blockquote className="mt-8 rounded-2xl border border-slate-400/20 bg-slate-900/30 p-6 text-sm leading-relaxed text-slate-200">
              <p className="italic text-slate-100">“{adCreative.testimonial.quote}”</p>
              <footer className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-slate-400">
                <span className="inline-block h-px w-8 bg-slate-600" />
                {adCreative.testimonial.author}
              </footer>
            </blockquote>
          </article>
        </section>

        <aside className="flex flex-1 flex-col items-center">
          <div className="w-full max-w-md rounded-[32px] border border-slate-300/20 bg-slate-950/80 shadow-2xl shadow-sky-900/40 backdrop-blur-xl">
            <header className="flex items-center gap-3 border-b border-slate-700/40 px-6 py-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 font-semibold text-lg text-white">
                CR
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">
                  {adCreative.brand}
                </span>
                <span className="text-xs text-slate-400">
                  Sponsored • {adCreative.verification}
                </span>
              </div>
            </header>

            <div className="space-y-4 px-6 py-5">
              <p className="text-base font-semibold text-white">
                {adCreative.headline}
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                {adCreative.primaryText}
              </p>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={adCreative.asset.src}
                alt={adCreative.asset.alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-slate-700 shadow-lg">
                NEW DROP
              </div>
            </div>

            <footer className="space-y-4 border-t border-slate-700/40 px-6 py-5">
              <div className="flex items-center justify-between rounded-2xl border border-slate-700/40 bg-slate-900/60 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    Destination
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {adCreative.destination}
                  </p>
                </div>
                <button className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-400">
                  {adCreative.cta}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {adCreative.socialProof.map((stat) => (
                  <span className="flex items-center gap-2" key={stat.descriptor}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth={2}
                      className="h-4 w-4 stroke-sky-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {stat.label} {stat.descriptor}
                  </span>
                ))}
              </div>
            </footer>
          </div>

          <p className="mt-6 text-center text-xs uppercase tracking-[0.4em] text-slate-400">
            Ready to export for Ads Manager
          </p>
        </aside>
      </div>
    </div>
  );
}
