import { DepartmentId, Competency, PositionRequirement } from '@/types/competency';
import { mobileCompetencies, mobileRequirements } from './mobile';
import { salesCompetencies, salesRequirements } from './sales';
import { pmCompetencies, pmRequirements } from './pm';
import { webCompetencies, webRequirements } from './web';
import { qaCompetencies, qaRequirements } from './qa';

// Centralized competency data access
export const competenciesByDepartment: Record<DepartmentId, Competency[]> = {
  sales: salesCompetencies,
  pm: pmCompetencies,
  mobile: mobileCompetencies,
  web: webCompetencies,
  qa: qaCompetencies,
};

export const requirementsByDepartment: Record<DepartmentId, PositionRequirement[]> = {
  sales: salesRequirements,
  pm: pmRequirements,
  mobile: mobileRequirements,
  web: webRequirements,
  qa: qaRequirements,
};

export const getCompetenciesForDepartment = (departmentId: DepartmentId): Competency[] => {
  return competenciesByDepartment[departmentId] || [];
};

export const getRequirementsForPosition = (
  departmentId: DepartmentId, 
  positionId: string, 
  seniorityLevel: string
): PositionRequirement[] => {
  const allRequirements = requirementsByDepartment[departmentId] || [];
  return allRequirements.filter(
    r => r.positionId === positionId && r.seniorityLevel === seniorityLevel
  );
};

// Re-export for convenience
export { mobileCompetencies, mobileRequirements } from './mobile';
export { salesCompetencies, salesRequirements } from './sales';
export { pmCompetencies, pmRequirements } from './pm';
export { webCompetencies, webRequirements } from './web';
export { qaCompetencies, qaRequirements } from './qa';
