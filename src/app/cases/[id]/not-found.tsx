import Link from "next/link";
import { AppShell } from "@/components/app-shell";

export default function CaseNotFound() {
  return (
    <AppShell title="Case not found" intro="That case does not exist in the current dataset.">
      <Link href="/cases" className="text-sm font-medium text-slate-900 underline">
        Back to cases
      </Link>
    </AppShell>
  );
}
