import { Competency, PositionRequirement } from '@/types/competency';

export const pmCompetencies: Competency[] = [
  // Kompetencje twarde
  {
    id: 'pm-methodology',
    name: 'Metodyki zarządzania projektami',
    description: 'Znajomość i stosowanie Agile, Scrum, Kanban i innych metodyk',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zna podstawy Scrum i Agile. Uczestniczy w ceremoniach jako obserwator.' },
      { level: 2, name: 'Rozwijający się', description: 'Prowadzi daily standupy. Wspiera w planowaniu sprintów. Rozumie różnice między metodykami.' },
      { level: 3, name: 'Kompetentny', description: 'Samodzielnie prowadzi projekty w Scrum/Kanban. Facylituje wszystkie ceremonie. Dostosowuje procesy do potrzeb.' },
      { level: 4, name: 'Zaawansowany', description: 'Wdraża i optymalizuje metodyki. Coaching zespołów. Hybrydy metodyk dla złożonych projektów.' },
      { level: 5, name: 'Ekspert', description: 'Definiuje standardy PM dla organizacji. Certyfikowany trener. Transformacje Agile.' },
    ],
  },
  {
    id: 'pm-planning',
    name: 'Planowanie i estymacja',
    description: 'Tworzenie planów projektowych, estymacja czasu i zasobów',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Asystuje przy tworzeniu planów. Rozumie podstawy estymacji.' },
      { level: 2, name: 'Rozwijający się', description: 'Tworzy proste harmonogramy. Uczestniczy w sesjach estymacyjnych. Śledzi postęp.' },
      { level: 3, name: 'Kompetentny', description: 'Kompleksowe planowanie projektów. Techniki estymacji (Planning Poker, T-shirt sizing). Zarządzanie buforem.' },
      { level: 4, name: 'Zaawansowany', description: 'Planowanie programów wieloprojektowych. Zaawansowana analiza ryzyka. Optymalizacja zasobów.' },
      { level: 5, name: 'Ekspert', description: 'Strategiczne planowanie portfela projektów. Modele predykcyjne. Benchmarking organizacyjny.' },
    ],
  },
  {
    id: 'pm-tools',
    name: 'Narzędzia PM',
    description: 'Wykorzystanie Jira, Confluence, MS Project i innych narzędzi',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawowa obsługa Jira - tworzenie tasków, aktualizacja statusów.' },
      { level: 2, name: 'Rozwijający się', description: 'Konfiguracja boardów. Tworzenie raportów. Praca z backlogiem.' },
      { level: 3, name: 'Kompetentny', description: 'Zaawansowana konfiguracja workflow. Automatyzacje. Integracje między narzędziami.' },
      { level: 4, name: 'Zaawansowany', description: 'Administracja narzędziami PM. Customowe dashboardy dla stakeholderów. Szkolenie zespołów.' },
      { level: 5, name: 'Ekspert', description: 'Projektowanie ekosystemu narzędzi PM. Migracje i transformacje. Optymalizacja procesów.' },
    ],
  },
  {
    id: 'pm-budget',
    name: 'Zarządzanie budżetem',
    description: 'Planowanie, monitorowanie i kontrola budżetu projektu',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Rozumie strukturę budżetu projektu. Raportuje zużycie czasu.' },
      { level: 2, name: 'Rozwijający się', description: 'Śledzi burn rate. Przygotowuje proste raporty finansowe.' },
      { level: 3, name: 'Kompetentny', description: 'Tworzy i zarządza budżetem projektu. Prognozowanie. Zarządzanie change requestami.' },
      { level: 4, name: 'Zaawansowany', description: 'Budżetowanie programów. Negocjacje z klientem. Value-based pricing.' },
      { level: 5, name: 'Ekspert', description: 'Strategia finansowa projektów. P&L odpowiedzialność. Business case development.' },
    ],
  },
  // Kompetencje miękkie
  {
    id: 'pm-communication',
    name: 'Komunikacja i raportowanie',
    description: 'Efektywna komunikacja z zespołem, klientem i stakeholderami',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Przygotowuje notatki ze spotkań. Komunikuje się jasno z zespołem.' },
      { level: 2, name: 'Rozwijający się', description: 'Prowadzi spotkania zespołowe. Tworzy raporty statusowe. Eskaluje problemy.' },
      { level: 3, name: 'Kompetentny', description: 'Zarządza komunikacją w projekcie. Prezentacje dla klienta. Difficult conversations.' },
      { level: 4, name: 'Zaawansowany', description: 'Komunikacja strategiczna. Zarządzanie oczekiwaniami C-level. Crisis communication.' },
      { level: 5, name: 'Ekspert', description: 'Executive presence. Reprezentowanie firmy. Thought leadership.' },
    ],
  },
  {
    id: 'pm-leadership',
    name: 'Przywództwo zespołu',
    description: 'Budowanie i prowadzenie efektywnych zespołów projektowych',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Współpracuje efektywnie z zespołem. Szanuje różne perspektywy.' },
      { level: 2, name: 'Rozwijający się', description: 'Koordynuje pracę małego zespołu. Rozwiązuje proste konflikty.' },
      { level: 3, name: 'Kompetentny', description: 'Buduje zaangażowanie zespołu. Delegowanie. Feedback i coaching.' },
      { level: 4, name: 'Zaawansowany', description: 'Servant leadership. Rozwój członków zespołu. Zarządzanie zespołami rozproszonymi.' },
      { level: 5, name: 'Ekspert', description: 'Budowanie kultury organizacyjnej. Mentoring PM-ów. Transformacyjne przywództwo.' },
    ],
  },
  // Kompetencje specjalistyczne
  {
    id: 'pm-it-domain',
    name: 'Znajomość IT i software development',
    description: 'Rozumienie procesów wytwarzania oprogramowania i technologii',
    category: 'specialized',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Rozumie podstawowy cykl życia projektu IT. Zna główne role w zespole.' },
      { level: 2, name: 'Rozwijający się', description: 'Rozumie proces CI/CD. Zna podstawy architektury systemów. Komunikuje się z developerami.' },
      { level: 3, name: 'Kompetentny', description: 'Ocenia feasibility rozwiązań. Rozumie dług techniczny. Wspiera decyzje techniczne.' },
      { level: 4, name: 'Zaawansowany', description: 'Partner techniczny dla zespołu. Rozumie trade-offy architektoniczne. Tech due diligence.' },
      { level: 5, name: 'Ekspert', description: 'Strategiczne doradztwo technologiczne. Innowacje i R&D. Technology roadmapping.' },
    ],
  },
];

export const pmRequirements: PositionRequirement[] = [
  // Project Coordinator - Junior
  { positionId: 'project-coordinator', seniorityLevel: 'junior', competencyId: 'pm-methodology', requiredLevel: 1 },
  { positionId: 'project-coordinator', seniorityLevel: 'junior', competencyId: 'pm-planning', requiredLevel: 1 },
  { positionId: 'project-coordinator', seniorityLevel: 'junior', competencyId: 'pm-tools', requiredLevel: 2 },
  { positionId: 'project-coordinator', seniorityLevel: 'junior', competencyId: 'pm-budget', requiredLevel: 1 },
  { positionId: 'project-coordinator', seniorityLevel: 'junior', competencyId: 'pm-communication', requiredLevel: 2 },
  { positionId: 'project-coordinator', seniorityLevel: 'junior', competencyId: 'pm-leadership', requiredLevel: 1 },
  { positionId: 'project-coordinator', seniorityLevel: 'junior', competencyId: 'pm-it-domain', requiredLevel: 1 },

  // Project Coordinator - Mid
  { positionId: 'project-coordinator', seniorityLevel: 'mid', competencyId: 'pm-methodology', requiredLevel: 2 },
  { positionId: 'project-coordinator', seniorityLevel: 'mid', competencyId: 'pm-planning', requiredLevel: 2 },
  { positionId: 'project-coordinator', seniorityLevel: 'mid', competencyId: 'pm-tools', requiredLevel: 3 },
  { positionId: 'project-coordinator', seniorityLevel: 'mid', competencyId: 'pm-budget', requiredLevel: 2 },
  { positionId: 'project-coordinator', seniorityLevel: 'mid', competencyId: 'pm-communication', requiredLevel: 3 },
  { positionId: 'project-coordinator', seniorityLevel: 'mid', competencyId: 'pm-leadership', requiredLevel: 2 },
  { positionId: 'project-coordinator', seniorityLevel: 'mid', competencyId: 'pm-it-domain', requiredLevel: 2 },

  // Project Manager - Mid
  { positionId: 'project-manager', seniorityLevel: 'mid', competencyId: 'pm-methodology', requiredLevel: 3 },
  { positionId: 'project-manager', seniorityLevel: 'mid', competencyId: 'pm-planning', requiredLevel: 3 },
  { positionId: 'project-manager', seniorityLevel: 'mid', competencyId: 'pm-tools', requiredLevel: 3 },
  { positionId: 'project-manager', seniorityLevel: 'mid', competencyId: 'pm-budget', requiredLevel: 3 },
  { positionId: 'project-manager', seniorityLevel: 'mid', competencyId: 'pm-communication', requiredLevel: 3 },
  { positionId: 'project-manager', seniorityLevel: 'mid', competencyId: 'pm-leadership', requiredLevel: 3 },
  { positionId: 'project-manager', seniorityLevel: 'mid', competencyId: 'pm-it-domain', requiredLevel: 3 },

  // Project Manager - Senior
  { positionId: 'project-manager', seniorityLevel: 'senior', competencyId: 'pm-methodology', requiredLevel: 4 },
  { positionId: 'project-manager', seniorityLevel: 'senior', competencyId: 'pm-planning', requiredLevel: 4 },
  { positionId: 'project-manager', seniorityLevel: 'senior', competencyId: 'pm-tools', requiredLevel: 4 },
  { positionId: 'project-manager', seniorityLevel: 'senior', competencyId: 'pm-budget', requiredLevel: 4 },
  { positionId: 'project-manager', seniorityLevel: 'senior', competencyId: 'pm-communication', requiredLevel: 4 },
  { positionId: 'project-manager', seniorityLevel: 'senior', competencyId: 'pm-leadership', requiredLevel: 4 },
  { positionId: 'project-manager', seniorityLevel: 'senior', competencyId: 'pm-it-domain', requiredLevel: 4 },

  // Program Manager - Lead
  { positionId: 'program-manager', seniorityLevel: 'lead', competencyId: 'pm-methodology', requiredLevel: 5 },
  { positionId: 'program-manager', seniorityLevel: 'lead', competencyId: 'pm-planning', requiredLevel: 5 },
  { positionId: 'program-manager', seniorityLevel: 'lead', competencyId: 'pm-tools', requiredLevel: 4 },
  { positionId: 'program-manager', seniorityLevel: 'lead', competencyId: 'pm-budget', requiredLevel: 5 },
  { positionId: 'program-manager', seniorityLevel: 'lead', competencyId: 'pm-communication', requiredLevel: 5 },
  { positionId: 'program-manager', seniorityLevel: 'lead', competencyId: 'pm-leadership', requiredLevel: 5 },
  { positionId: 'program-manager', seniorityLevel: 'lead', competencyId: 'pm-it-domain', requiredLevel: 4 },
];
