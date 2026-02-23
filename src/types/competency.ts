// Competency Matrix Types for Appchance

export type DepartmentId = 'pm' | 'mobile' | 'web' | 'qa';

export type SeniorityLevel = 'junior' | 'mid' | 'senior' | 'lead' | 'expert';

export type CompetencyCategory = 'hard' | 'soft';

export interface Department {
  id: DepartmentId;
  name: string;
  description: string;
  icon: string; // Path to pixel art image
  positions: Position[];
}

export interface Position {
  id: string;
  name: string;
  departmentId: DepartmentId;
  levels: SeniorityLevel[];
}

export interface CompetencyLevel {
  level: number; // 1-5
  name: string;
  description: string;
}

export interface Competency {
  id: string;
  name: string;
  description: string;
  category: CompetencyCategory;
  levels: CompetencyLevel[];
}

export interface PositionRequirement {
  positionId: string;
  seniorityLevel: SeniorityLevel;
  competencyId: string;
  requiredLevel: number; // 1-5
}

export interface CompetencyMatrix {
  department: Department;
  competencies: Competency[];
  requirements: PositionRequirement[];
}

// Assessment Types
export interface SelfAssessment {
  id?: string;
  userId?: string;
  departmentId: DepartmentId;
  positionId: string;
  seniorityLevel: SeniorityLevel;
  assessments: CompetencyAssessment[];
  createdAt: Date;
  completedAt?: Date;
}

export interface CompetencyAssessment {
  competencyId: string;
  selfRating: number; // 1-5
  notes?: string;
}

// Results Types
export interface AssessmentResult {
  competencyId: string;
  competencyName: string;
  category: CompetencyCategory;
  selfRating: number;
  requiredLevel: number;
  gap: number; // difference between required and self-rating
}

export interface AssessmentSummary {
  assessment: SelfAssessment;
  results: AssessmentResult[];
  overallScore: number;
  matchPercentage: number;
  topStrengths: AssessmentResult[];
  developmentAreas: AssessmentResult[];
  nextLevelRequirements?: AssessmentResult[];
}

// User Roles
export type UserRole = 'employee' | 'manager' | 'hr_admin';

export interface UserProfile {
  id: string;
  email: string;
  fullName?: string;
  departmentId?: DepartmentId;
  role: UserRole;
  managerId?: string;
}

// Seniority level display config
export const seniorityLevelConfig: Record<SeniorityLevel, { name: string; order: number }> = {
  junior: { name: 'Junior', order: 1 },
  mid: { name: 'Mid', order: 2 },
  senior: { name: 'Senior', order: 3 },
  lead: { name: 'Lead', order: 4 },
  expert: { name: 'Expert', order: 5 },
};

// Competency level display config
export const competencyLevelConfig: Record<number, { name: string; color: string }> = {
  1: { name: 'Początkujący', color: 'bg-gray-500' },
  2: { name: 'Rozwijający się', color: 'bg-amber-500' },
  3: { name: 'Kompetentny', color: 'bg-emerald-500' },
  4: { name: 'Zaawansowany', color: 'bg-indigo-500' },
  5: { name: 'Ekspert', color: 'bg-violet-500' },
};

// Category display config
export const categoryConfig: Record<CompetencyCategory, { name: string; description: string }> = {
  hard: { name: 'Kompetencje Twarde', description: 'Umiejętności techniczne i specjalistyczne' },
  soft: { name: 'Kompetencje Miękkie', description: 'Umiejętności interpersonalne i komunikacyjne' },
};
