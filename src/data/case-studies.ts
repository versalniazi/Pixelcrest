export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  services: string[];
  challenge: string;
  approach: string;
  outcome: string;
};

/**
 * Publish real case studies only, with the client's written permission and verifiable outcomes.
 * While this list is empty, the portfolio page explains how work is documented instead of showing examples.
 */
export const caseStudies: CaseStudy[] = [];
