import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { prisma } from "@/lib/db";

export default async function JurisdictionDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const jurisdiction = await prisma.jurisdiction.findUnique({ where: { code } });

  if (!jurisdiction) {
    notFound();
  }

  return (
    <AppShell
      title={jurisdiction.name}
      intro="This is where SBgov gets practical. Each jurisdiction page should combine obligation summaries, local interpretation notes, and source traceability."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Regulatory summary</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">{jurisdiction.summary}</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-slate-500">Authority</dt>
              <dd className="mt-1 text-base text-slate-900">{jurisdiction.authority}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-500">Timeline cue</dt>
              <dd className="mt-1 text-base text-slate-900">{jurisdiction.timeline}</dd>
            </div>
          </dl>
        </section>
        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-950">Assessment rule of thumb</h2>
          <p className="mt-3 text-base leading-7 text-slate-700">{jurisdiction.rule}</p>
        </aside>
      </div>
    </AppShell>
  );
}
