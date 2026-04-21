type TriageInput = {
  incidentType: string;
  narrative: string;
  jurisdictionName: string;
};

export function getTriageSummary({ incidentType, narrative, jurisdictionName }: TriageInput) {
  const text = `${incidentType} ${narrative}`.toLowerCase();

  const potentiallyReportable =
    text.includes("serious") ||
    text.includes("safety") ||
    text.includes("consent") ||
    text.includes("rights") ||
    text.includes("integrity") ||
    text.includes("breach");

  const suggestedClassification = potentiallyReportable
    ? incidentType === "Potential serious breach"
      ? "Potential serious breach"
      : "Potentially reportable incident"
    : incidentType;

  const deadlineSummary = potentiallyReportable
    ? `Urgent review recommended for ${jurisdictionName}. Confirm local reporting timelines immediately.`
    : `Review local sponsor and ethics expectations for ${jurisdictionName} before closing the assessment.`;

  const nextSteps = potentiallyReportable
    ? "Confirm awareness date, verify participant and data integrity impact, and prepare jurisdiction-specific escalation notes."
    : "Document the rationale, assign an owner, and confirm whether remediation is sufficient without external reporting.";

  const rationale = potentiallyReportable
    ? "Keywords and incident context suggest possible impact on participant rights, safety, or scientific integrity."
    : "Initial information suggests a lower-risk operational issue, but the decision should still be recorded with local context.";

  return {
    suggestedClassification,
    isPotentiallyReportable: potentiallyReportable,
    deadlineSummary,
    nextSteps,
    rationale,
  };
}
