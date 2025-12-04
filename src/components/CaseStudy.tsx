import { CaseStudy1 } from './CaseStudy1';
import { CaseStudy2 } from './CaseStudy2';

interface CaseStudyProps {
  caseStudyId: number;
  onBack: () => void;
}

export function CaseStudy({ caseStudyId, onBack }: CaseStudyProps) {
  // Route to the appropriate case study component
  if (caseStudyId === 2) {
    return <CaseStudy2 onBack={onBack} />;
  }

  // Default to Case Study 1 (Mona)
  return <CaseStudy1 onBack={onBack} />;
}