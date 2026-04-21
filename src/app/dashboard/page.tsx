import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { showcaseCases, showcaseMetrics } from "@/data/showcase";
import { isShowcaseMode } from "@/lib/demo-mode";
import { prisma } from "@/lib/db";

export default async function DashboardPage() {
  const [jurisdictionCount, incidentCount, reportableCount, latestIncidents] = isShowcaseMode
    ? [
        showcaseMetrics.jurisdictions,
        showcaseMetrics.incidents,
        showcaseMetrics.reportable,
        showcaseCases,
      ]
    : await Promise.all([
        prisma.jurisdiction.count(),
        prisma.incident.count(),
        prisma.incidentAssessment.count({ where: { isPotentiallyReportable: true } }),
        prisma.incident.findMany({
          orderBy: { id: "desc" },
          include: { jurisdiction: true, assessments: true },
          take: 5,
        }),
      ]);

  return (
    <AppShell
      title="Dashboard"
      intro="This is the operating view. For the MVP, it should quickly show current case volume, likely reportable items, and the most recent incidents needing attention."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Jurisdictions in scope</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">{jurisdictionCount}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Open incidents</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">{incidentCount}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Potentially reportable</p>
          <p className="mt-2 text-3xl font-semibold text-slate-950">{reportableCount}</p>
        </div>
      </div>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-950">Recent incidents</h2>
          <Link href="/new-incident" className="text-sm font-medium text-slate-900 underline">
            Create new incident
          </Link>
        </div>
        <div className="mt-6 space-y-4">
          {latestIncidents.map((incident) => (
            <article key={incident.id} className="rounded-2xl bg-slate-50 p-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{incident.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{incident.jurisdiction.name}</p>
                </div>
                <p className="text-sm font-medium text-slate-700">
                  {incident.assessments[0]?.isPotentiallyReportable ? "Potentially reportable" : "Needs review"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
