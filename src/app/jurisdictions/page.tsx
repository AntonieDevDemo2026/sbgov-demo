import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { showcaseJurisdictions } from "@/data/showcase";
import { isShowcaseMode } from "@/lib/demo-mode";
import { prisma } from "@/lib/db";

export default async function JurisdictionsPage() {
  return (
    <AppShell
      title="Jurisdiction library"
      intro="Searchable country-level guidance is one of the strongest reasons this product should exist. Start with a small set of high-priority markets and make the logic usable."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {(isShowcaseMode
          ? showcaseJurisdictions
          : await prisma.jurisdiction.findMany({ orderBy: { name: "asc" } })).map((item) => (
          <article key={item.code} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">{item.region}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">{item.name}</h2>
            <p className="mt-3 text-sm font-medium text-slate-700">Authority: {item.authority}</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">{item.summary}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">Timeline: {item.timeline}</p>
            <Link href={`/jurisdictions/${item.code}`} className="mt-5 inline-block text-sm font-medium text-slate-900 underline">
              View detail
            </Link>
          </article>
        ))}
      </div>
    </AppShell>
  );
}
