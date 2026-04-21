import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const commitments = [
  "Semantic page structure and landmarks",
  "Full keyboard operability",
  "Clear focus states and error summaries",
  "Readable contrast and scalable typography",
  "Structured content instead of buried PDF-only logic",
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Accessibility</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950">Accessibility is part of the product, not a cleanup task.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            If SBgov is supposed to reduce compliance risk, the interface itself needs to be dependable. That means clear form behaviour, accessible navigation, and content that is structured for real use.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {commitments.map((item) => (
            <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-lg font-medium text-slate-900">
              {item}
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
