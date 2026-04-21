import { AppShell } from "@/components/app-shell";
import { playbooks } from "@/data/mock";

export default function PlaybooksPage() {
  return (
    <AppShell
      title="Playbooks"
      intro="Playbooks make the product operational. They turn regulation into repeatable action without pretending to replace expert judgment."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {playbooks.map((playbook) => (
          <article key={playbook.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">{playbook.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-700">{playbook.description}</p>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
