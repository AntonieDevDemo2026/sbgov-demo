import Link from "next/link";
import type { ReactNode } from "react";

const appNav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/new-incident", label: "New incident" },
  { href: "/jurisdictions", label: "Jurisdictions" },
  { href: "/cases", label: "Cases" },
  { href: "/playbooks", label: "Playbooks" },
];

export function AppShell({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
              SBgov
            </Link>
            <p className="mt-1 text-sm text-slate-600">Compliance intelligence for clinical trial incident handling</p>
          </div>
          <nav aria-label="Application" className="flex flex-wrap gap-3 text-sm">
            {appNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-300 px-3 py-2 text-slate-700 transition hover:border-slate-900 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h1>
          <p className="mt-3 text-lg leading-8 text-slate-700">{intro}</p>
        </div>
        {children}
      </main>
    </div>
  );
}
