import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const pillars = [
  {
    title: "Jurisdiction intelligence",
    text: "Make market-by-market reporting logic searchable, comparable, and usable during real incident review.",
  },
  {
    title: "Structured incident intake",
    text: "Capture awareness dates, event facts, impact, and affected sites consistently before classification drifts.",
  },
  {
    title: "Defensible triage",
    text: "Show likely classification, reporting considerations, and the rationale teams need to support their decisions.",
  },
  {
    title: "Audit-ready documentation",
    text: "Keep evidence notes, ownership, status, and next steps in one place instead of scattered threads.",
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Product</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950">A sharper way to handle clinical trial incident decisions.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            SBgov is built for teams that need to move from incident ambiguity to a well-documented decision. It focuses on reportability, jurisdiction obligations, and practical follow-through.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">{pillar.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-700">{pillar.text}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
