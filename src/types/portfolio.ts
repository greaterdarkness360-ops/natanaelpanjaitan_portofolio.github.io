export type ProjectCategory = 'ALL' | 'TECH' | 'HUMAN_OPS';

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'TECH' | 'HUMAN_OPS';
  imagePlaceholder: string;
  sociologicalContext: string;
  solutionExecution: string;
  stackOrSkills: string[];
  highlightMetric?: string;
}
