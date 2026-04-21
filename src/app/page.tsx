import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { jurisdictions, playbooks } from "@/data/mock";

const valueProps = [
  "Assess whether an incident may be reportable",
  "Compare obligations across jurisdictions",
  "Capture rationale and evidence for audit readiness",
  "Guide next steps instead of leaving teams in PDF chaos",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
          <div className="absolute inset-0">
            <Image
              src="/lab-photo-hero.svg"
              alt=""
              fill
              priority
              className="object-cover object-center opacity-75"
            />
            <div className="absolute inset-0 bg-white/58" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Clinical trial compliance intelligence</p>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Global trial incident triage, without the regulatory fog.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                SBgov helps clinical trial teams assess incidents, understand jurisdiction-specific reporting obligations, and document defensible next steps in one accessible workflow.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
                  Book a demo
                </Link>
                <Link href="/dashboard" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-900">
                  Open dashboard
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">Best first use case</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                “Tell me what this incident likely is, whether it may be reportable, and what I need to do next.”
              </h2>
              <dl className="mt-8 space-y-5 text-sm text-slate-700">
                <div>
                  <dt className="font-medium text-slate-900">Early markets</dt>
                  <dd>UK, EU, US, Australia, Singapore</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-900">Primary users</dt>
                  <dd>Sponsors, CROs, QA leads, compliance and regulatory teams</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-900">V1 wedge</dt>
                  <dd>Jurisdiction library plus structured incident triage and case logging</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Why teams would actually use this</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Trial incident handling is messy because obligations differ by market, terminology is inconsistent, and the decision trail usually lives across email, SOPs, and PDFs. SBgov turns that into a clearer workflow.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {valueProps.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-lg font-medium text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Initial jurisdiction coverage</h2>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Start narrow, credible, and useful. Five jurisdictions are enough to prove value before broadening globally.
                </p>
              </div>
              <Link href="/jurisdictions" className="text-sm font-medium text-slate-900 underline">
                Explore jurisdictions
              </Link>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {jurisdictions.map((item) => (
                <div key={item.code} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">{item.region}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Playbooks that reduce improvisation</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Instead of giving teams a wall of regulation, SBgov can pair obligations with practical response patterns.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {playbooks.map((playbook) => (
              <article key={playbook.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{playbook.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{playbook.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
