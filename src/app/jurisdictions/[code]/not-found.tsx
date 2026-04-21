import Link from "next/link";
import { AppShell } from "@/components/app-shell";

export default function JurisdictionNotFound() {
  return (
    <AppShell
      title="Jurisdiction not found"
      intro="That jurisdiction code is not in the current MVP dataset yet."
    >
      <Link href="/jurisdictions" className="text-sm font-medium text-slate-900 underline">
        Back to jurisdiction library
      </Link>
    </AppShell>
  );
}
