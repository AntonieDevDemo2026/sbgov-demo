import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { showcaseCases } from "@/data/showcase";
import { isShowcaseMode } from "@/lib/demo-mode";
import { prisma } from "@/lib/db";

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = isShowcaseMode
    ? showcaseCases.find((entry) => entry.id === id) ?? null
    : await prisma.incident.findUnique({
        where: { id },
        include: { jurisdiction: true, assessments: true, evidence: true },
      });

  if (!item) {
    notFound();
  }

  return (
    <AppShell
      title={item.title}
      intro="This case page should combine triage output with documented reasoning, assigned ownership, and evidence notes that survive audit scrutiny."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Triage result</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Likely classification</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">{item.assessments[0]?.suggestedClassification ?? item.incidentType}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Potential reportability</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">{item.assessments[0]?.isPotentiallyReportable ? "Yes, requires immediate review" : "No immediate external filing indicated"}</p>
            </div>
          </div>
          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">Recommended next steps</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
              <li>{item.assessments[0]?.nextSteps ?? "Review the incident and document next steps."}</li>
              <li>{item.assessments[0]?.deadlineSummary ?? "Confirm local deadlines."}</li>
              <li>Review local reporting route and internal escalation path</li>
              <li>Capture rationale and evidence before external filing</li>
            </ul>
          </div>
        </section>
        <aside className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-950">Case status</h2>
            <p className="mt-3 text-base text-slate-700">{item.assessments[0]?.isPotentiallyReportable ? "Needs urgent review" : "Under assessment"}</p>
            <p className="mt-2 text-sm text-slate-600">Jurisdiction: {item.jurisdiction.name}</p>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-950">Evidence and rationale</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              {item.assessments[0]?.rationale ?? "No rationale recorded yet."}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {item.evidence.map((entry) => (
                <li key={entry.id} className="rounded-xl bg-white p-3">
                  {entry.note}
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </AppShell>
  );
}
