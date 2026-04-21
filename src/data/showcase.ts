export const showcaseMetrics = {
  jurisdictions: 5,
  incidents: 12,
  reportable: 4,
};

export const showcaseJurisdictions = [
  {
    code: "uk",
    name: "United Kingdom",
    region: "Europe",
    authority: "MHRA / REC",
    timeline: "Urgent serious breach review timeline",
    summary:
      "Use when trial conduct, participant safety, or scientific value may have been materially affected.",
    rule:
      "Assess seriousness, impact, and awareness date, then document mitigation and reporting rationale.",
  },
  {
    code: "eu",
    name: "European Union",
    region: "Europe",
    authority: "National Competent Authorities / Ethics Committees",
    timeline: "Varies by member state",
    summary:
      "Cross-border assessment needs local interpretation layered on top of broader EU trial obligations.",
    rule:
      "Route through member-state logic and record the basis for each reporting decision.",
  },
  {
    code: "us",
    name: "United States",
    region: "North America",
    authority: "FDA / IRB",
    timeline: "Depends on event category",
    summary:
      "Distinguish deviation, noncompliance, and safety-linked issues before filing.",
    rule:
      "Capture study impact, subject impact, and whether the issue suggests systemic failure.",
  },
  {
    code: "au",
    name: "Australia",
    region: "APAC",
    authority: "TGA / HREC",
    timeline: "Check sponsor and ethics timelines",
    summary:
      "Map sponsor awareness and local site handling carefully to avoid inconsistent reporting.",
    rule:
      "Confirm whether the event triggers breach reporting, safety escalation, or local remediation only.",
  },
  {
    code: "sg",
    name: "Singapore",
    region: "APAC",
    authority: "HSA / IRB",
    timeline: "Timeline depends on event type",
    summary:
      "A strong early market for the MVP because obligations are meaningful but still manageable in scope.",
    rule:
      "Classify incident first, then align reportability with local authority and institutional requirements.",
  },
];

export const showcaseCases = [
  {
    id: "case-1042",
    title: "Unreported protocol deviation across two UK sites",
    incidentType: "Potential serious breach",
    jurisdiction: { name: "United Kingdom" },
    assessments: [
      {
        suggestedClassification: "Potential serious breach",
        isPotentiallyReportable: true,
        rationale:
          "Multi-site impact and possible effect on participant safety or scientific integrity justify urgent review.",
        nextSteps:
          "Confirm awareness date, assess site-level impact, and review local filing route.",
        deadlineSummary: "Urgent review required.",
      },
    ],
    evidence: [{ id: "e1", note: "Deviation discovered during internal QA reconciliation." }],
  },
  {
    id: "case-1038",
    title: "Consent form version mismatch in US oncology study",
    incidentType: "Protocol deviation",
    jurisdiction: { name: "United States" },
    assessments: [
      {
        suggestedClassification: "Protocol deviation requiring review",
        isPotentiallyReportable: true,
        rationale:
          "Subject rights may have been affected and the scope of impact should be documented immediately.",
        nextSteps:
          "Review participant impact, document remediation, and confirm whether IRB or sponsor reporting is required.",
        deadlineSummary: "Review internal escalation path today.",
      },
    ],
    evidence: [{ id: "e2", note: "Superseded consent form used before local site escalation." }],
  },
  {
    id: "case-1031",
    title: "Late reporting concern for AU device trial",
    incidentType: "Operational noncompliance",
    jurisdiction: { name: "Australia" },
    assessments: [
      {
        suggestedClassification: "Operational noncompliance with reporting implications",
        isPotentiallyReportable: false,
        rationale:
          "Likely requires documented remediation first, but local ethics and sponsor timelines must be checked.",
        nextSteps:
          "Verify local obligations and capture the reason for the reporting delay.",
        deadlineSummary: "Check local sponsor and ethics timelines.",
      },
    ],
    evidence: [{ id: "e3", note: "Delay identified during sponsor review of site communication logs." }],
  },
];
