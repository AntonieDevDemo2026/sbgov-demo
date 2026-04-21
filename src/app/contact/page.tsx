import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Book a demo</h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            SBgov is designed for teams handling multi-jurisdiction clinical trial incidents and reportability decisions. Early conversations should focus on real workflows, current pain points, and initial jurisdiction priorities.
          </p>
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-slate-700">
            Demo request form placeholder. Next step: wire a real contact form or CRM endpoint.
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
