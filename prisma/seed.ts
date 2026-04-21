import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const jurisdictionData = [
    {
      code: "uk",
      name: "United Kingdom",
      region: "Europe",
      authority: "MHRA / REC",
      timeline: "Urgent, jurisdiction-specific serious breach timelines apply",
      summary:
        "Use when trial conduct, participant safety, or scientific value may have been materially affected.",
      rule:
        "Assess seriousness, causality, and impact. Document awareness date, affected sites, and mitigation taken.",
    },
    {
      code: "eu",
      name: "European Union",
      region: "Europe",
      authority: "National Competent Authorities / Ethics Committees",
      timeline: "Varies by member state and trial framework",
      summary:
        "Cross-border assessment needs local interpretation layered on top of broader EU trial obligations.",
      rule:
        "Route through member-state logic and record the basis for each local reporting decision.",
    },
    {
      code: "us",
      name: "United States",
      region: "North America",
      authority: "FDA / IRB",
      timeline: "Depends on event category and sponsor obligations",
      summary:
        "Distinguish protocol deviation, noncompliance, and safety-linked events before filing.",
      rule:
        "Capture study impact, subject impact, and whether the event indicates systemic process failure.",
    },
    {
      code: "au",
      name: "Australia",
      region: "APAC",
      authority: "TGA / HREC",
      timeline: "Check local sponsor and ethics timelines",
      summary:
        "Map sponsor awareness and local site handling carefully to avoid inconsistent reporting.",
      rule:
        "Confirm whether the event triggers breach reporting, safety escalation, or site remediation only.",
    },
    {
      code: "sg",
      name: "Singapore",
      region: "APAC",
      authority: "HSA / IRB",
      timeline: "Jurisdiction-specific timeline based on event type",
      summary:
        "Useful early market for an MVP because obligations are meaningful but still manageable in scope.",
      rule:
        "Classify incident first, then align reportability with local authority and institutional requirements.",
    },
  ];

  for (const item of jurisdictionData) {
    await prisma.jurisdiction.upsert({
      where: { code: item.code },
      update: item,
      create: item,
    });
  }

  const uk = await prisma.jurisdiction.findUniqueOrThrow({ where: { code: "uk" } });
  const us = await prisma.jurisdiction.findUniqueOrThrow({ where: { code: "us" } });
  const au = await prisma.jurisdiction.findUniqueOrThrow({ where: { code: "au" } });

  const incidents = [
    {
      title: "Unreported protocol deviation across two UK sites",
      trialReference: "CT-1042",
      jurisdictionId: uk.id,
      incidentType: "Potential serious breach",
      narrative:
        "A protocol deviation affecting visit timing was not escalated consistently across two sites. Safety and data integrity impact still under review.",
      createdBy: "system",
      assessment: {
        suggestedClassification: "Potential serious breach",
        isPotentiallyReportable: true,
        rationale:
          "Multi-site impact and possible effect on participant safety or scientific integrity justify urgent review.",
        nextSteps:
          "Confirm awareness date, assess site-level impact, and review local filing route.",
        deadlineSummary: "Urgent review required.",
      },
    },
    {
      title: "Consent form version mismatch in US oncology study",
      trialReference: "US-8831",
      jurisdictionId: us.id,
      incidentType: "Protocol deviation",
      narrative:
        "A superseded consent form version was used with a limited number of participants before discovery by site QA.",
      createdBy: "system",
      assessment: {
        suggestedClassification: "Protocol deviation requiring review",
        isPotentiallyReportable: true,
        rationale:
          "Subject rights may have been affected and the scope of impact should be documented immediately.",
        nextSteps:
          "Review participant impact, document remediation, and confirm whether IRB or sponsor reporting is required.",
        deadlineSummary: "Review internal escalation path today.",
      },
    },
    {
      title: "Late reporting concern for AU device trial",
      trialReference: "AU-2204",
      jurisdictionId: au.id,
      incidentType: "Operational noncompliance",
      narrative:
        "Site identified a delay between incident awareness and sponsor escalation in an Australian device study.",
      createdBy: "system",
      assessment: {
        suggestedClassification: "Operational noncompliance with reporting implications",
        isPotentiallyReportable: false,
        rationale:
          "Likely requires documented remediation first, but local ethics and sponsor timelines must be checked.",
        nextSteps:
          "Verify local obligations and capture the reason for the reporting delay.",
        deadlineSummary: "Check local sponsor and ethics timelines.",
      },
    },
  ];

  for (const item of incidents) {
    const existing = await prisma.incident.findFirst({ where: { title: item.title } });

    if (existing) {
      continue;
    }

    await prisma.incident.create({
      data: {
        title: item.title,
        trialReference: item.trialReference,
        jurisdictionId: item.jurisdictionId,
        incidentType: item.incidentType,
        narrative: item.narrative,
        createdBy: item.createdBy,
        assessments: {
          create: item.assessment,
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
