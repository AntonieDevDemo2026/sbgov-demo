export type Jurisdiction = {
  code: string;
  name: string;
  region: string;
  authority: string;
  timeline: string;
  summary: string;
  rule: string;
};

export type CaseItem = {
  id: string;
  title: string;
  jurisdiction: string;
  status: "Needs review" | "In progress" | "Draft filed";
  updatedAt: string;
};

export const jurisdictions: Jurisdiction[] = [
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

export const cases: CaseItem[] = [
  {
    id: "case-1042",
    title: "Unreported protocol deviation across two UK sites",
    jurisdiction: "United Kingdom",
    status: "Needs review",
    updatedAt: "2 hours ago",
  },
  {
    id: "case-1038",
    title: "Consent form version mismatch in US oncology study",
    jurisdiction: "United States",
    status: "In progress",
    updatedAt: "Today",
  },
  {
    id: "case-1031",
    title: "Late reporting concern for AU device trial",
    jurisdiction: "Australia",
    status: "Draft filed",
    updatedAt: "Yesterday",
  },
];

export const playbooks = [
  {
    title: "Initial incident triage",
    description: "Standardise intake, awareness date capture, and early classification before anyone improvises.",
  },
  {
    title: "Serious breach assessment",
    description: "Evaluate participant safety, rights, and scientific integrity impact with documented rationale.",
  },
  {
    title: "Mitigation and follow-through",
    description: "Assign owners, capture containment actions, and preserve an audit-ready decision trail.",
  },
];
