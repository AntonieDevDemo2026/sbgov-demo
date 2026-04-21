import { AppShell } from "@/components/app-shell";
import { prisma } from "@/lib/db";
import { createIncident } from "@/app/actions";

export default async function NewIncidentPage() {
  const jurisdictions = await prisma.jurisdiction.findMany({ orderBy: { name: "asc" } });

  return (
    <AppShell
      title="New incident"
      intro="The intake form is the heart of the MVP. It should help teams gather enough structure to support consistent triage without turning into a monster workflow."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form action={createIncident} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-900 sm:col-span-2">
              Incident title
              <input name="title" className="rounded-xl border border-slate-300 px-4 py-3" placeholder="e.g. Consent form mismatch at two sites" required />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Trial reference
              <input name="trialReference" className="rounded-xl border border-slate-300 px-4 py-3" placeholder="e.g. CT-2041" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Country or region
              <select name="jurisdictionCode" className="rounded-xl border border-slate-300 px-4 py-3" defaultValue="uk">
                {jurisdictions.map((jurisdiction) => (
                  <option key={jurisdiction.code} value={jurisdiction.code}>
                    {jurisdiction.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Incident type
              <select name="incidentType" className="rounded-xl border border-slate-300 px-4 py-3" defaultValue="Potential serious breach">
                <option>Potential serious breach</option>
                <option>Protocol deviation</option>
                <option>Safety-linked event</option>
                <option>Operational noncompliance</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-900">
              Date awareness started
              <input name="dateAwareness" type="date" className="rounded-xl border border-slate-300 px-4 py-3" />
            </label>
          </div>
          <label className="mt-6 grid gap-2 text-sm font-medium text-slate-900">
            What happened?
            <textarea
              name="narrative"
              className="min-h-40 rounded-xl border border-slate-300 px-4 py-3"
              placeholder="Summarise the event, affected sites, participant risk, scientific impact, and what is already known."
              required
            />
          </label>
          <div className="mt-6 flex flex-wrap gap-4">
            <button type="submit" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
              Generate triage preview
            </button>
          </div>
        </form>
        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-950">What the system should output</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
            <li>Likely incident classification</li>
            <li>Potential reportability status</li>
            <li>Timeline and deadline cues</li>
            <li>Recommended next steps</li>
            <li>Prompt to document rationale and evidence</li>
          </ul>
        </aside>
      </div>
    </AppShell>
  );
}
