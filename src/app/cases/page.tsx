import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { prisma } from "@/lib/db";

export default async function CasesPage() {
  return (
    <AppShell
      title="Cases"
      intro="A simple case workspace is enough for v1. It gives teams somewhere to store rationale, status, and evidence instead of losing the decision trail."
    >
      <div className="space-y-4">
        {(await prisma.incident.findMany({ orderBy: { id: "desc" }, include: { jurisdiction: true, assessments: true } })).map((item) => (
          <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-700">{item.jurisdiction.name}</p>
              </div>
              <div className="text-sm text-slate-600">
                <p>Status: {item.assessments[0]?.isPotentiallyReportable ? "Needs urgent review" : "Under assessment"}</p>
                <p>Type: {item.incidentType}</p>
              </div>
            </div>
            <Link href={`/cases/${item.id}`} className="mt-5 inline-block text-sm font-medium text-slate-900 underline">
              Open case
            </Link>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
