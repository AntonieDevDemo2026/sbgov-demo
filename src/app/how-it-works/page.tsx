import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const steps = [
  "Capture the incident with structured intake fields",
  "Apply jurisdiction-specific reporting logic",
  "Review classification, deadline cues, and next actions",
  "Save rationale, evidence, and ownership in the case workspace",
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">How it works</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950">From messy incident details to a defensible next step.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            The best first version of SBgov is not a giant compliance suite. It is a clean decision-support workflow that removes ambiguity at the exact moment a team needs clarity.
          </p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-500">Step {index + 1}</p>
              <p className="mt-3 text-xl font-semibold text-slate-950">{step}</p>
            </li>
          ))}
        </ol>
      </main>
      <SiteFooter />
    </div>
  );
}
