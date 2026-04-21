"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { isShowcaseMode } from "@/lib/demo-mode";
import { getTriageSummary } from "@/lib/triage";

const incidentSchema = z.object({
  title: z.string().min(5),
  trialReference: z.string().optional(),
  jurisdictionCode: z.string().min(2),
  incidentType: z.string().min(3),
  dateAwareness: z.string().optional(),
  narrative: z.string().min(20),
});

export async function createIncident(formData: FormData) {
  const parsed = incidentSchema.parse({
    title: formData.get("title"),
    trialReference: formData.get("trialReference") || undefined,
    jurisdictionCode: formData.get("jurisdictionCode"),
    incidentType: formData.get("incidentType"),
    dateAwareness: formData.get("dateAwareness") || undefined,
    narrative: formData.get("narrative"),
  });

  if (isShowcaseMode) {
    redirect("/cases/case-1042");
  }

  const jurisdiction = await prisma.jurisdiction.findUniqueOrThrow({
    where: { code: parsed.jurisdictionCode },
  });

  const triage = getTriageSummary({
    incidentType: parsed.incidentType,
    narrative: parsed.narrative,
    jurisdictionName: jurisdiction.name,
  });

  const incident = await prisma.incident.create({
    data: {
      title: parsed.title,
      trialReference: parsed.trialReference,
      jurisdictionId: jurisdiction.id,
      incidentType: parsed.incidentType,
      dateAwareness: parsed.dateAwareness ? new Date(parsed.dateAwareness) : undefined,
      narrative: parsed.narrative,
      createdBy: "demo-user",
      assessments: {
        create: triage,
      },
      evidence: {
        create: {
          note: "Case created through the initial triage intake form.",
          kind: "system-note",
          createdBy: "demo-user",
        },
      },
    },
    select: {
      id: true,
    },
  });

  revalidatePath("/cases");
  revalidatePath("/new-incident");
  redirect(`/cases/${incident.id}`);
}
