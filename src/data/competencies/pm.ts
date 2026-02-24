import { Competency, PositionRequirement, SeniorityLevel } from '@/types/competency';

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
      { level: 3, name: 'Kompetentny', description: 'Samodzielnie prowadzi projekty w Scrum/Kanban. Facylituje wszystkie ceremonie.' },
      { level: 4, name: 'Zaawansowany', description: 'Wdraża i optymalizuje metodyki. Coaching zespołów. Hybrydy metodyk.' },
      { level: 5, name: 'Ekspert', description: 'Definiuje standardy PM dla organizacji. Certyfikowany trener. Transformacje Agile.' },
    ],
  },
  {
    id: 'pm-planning',
    name: 'Planowanie, estymacja i analiza ryzyka',
    description: 'Tworzenie planów projektowych, estymacja czasu, zasobów i analiza ryzyka',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Asystuje przy tworzeniu planów. Rozumie podstawy estymacji.' },
      { level: 2, name: 'Rozwijający się', description: 'Tworzy proste harmonogramy. Uczestniczy w sesjach estymacyjnych.' },
      { level: 3, name: 'Kompetentny', description: 'Kompleksowe planowanie projektów. Techniki estymacji. Zarządzanie buforem.' },
      { level: 4, name: 'Zaawansowany', description: 'Planowanie programów wieloprojektowych. Zaawansowana analiza ryzyka.' },
      { level: 5, name: 'Ekspert', description: 'Strategiczne planowanie portfela projektów. Modele predykcyjne.' },
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
      { level: 3, name: 'Kompetentny', description: 'Zaawansowana konfiguracja workflow. Automatyzacje. Integracje.' },
      { level: 4, name: 'Zaawansowany', description: 'Administracja narzędziami PM. Customowe dashboardy. Szkolenie zespołów.' },
      { level: 5, name: 'Ekspert', description: 'Projektowanie ekosystemu narzędzi PM. Migracje i transformacje.' },
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
      { level: 3, name: 'Kompetentny', description: 'Tworzy i zarządza budżetem projektu. Prognozowanie. Change requesty.' },
      { level: 4, name: 'Zaawansowany', description: 'Budżetowanie programów. Negocjacje z klientem. Value-based pricing.' },
      { level: 5, name: 'Ekspert', description: 'Strategia finansowa projektów. P&L odpowiedzialność. Business case.' },
    ],
  },
  {
    id: 'pm-evaluation',
    name: 'Ocena wyników projektu',
    description: 'Analiza wyników projektu, KPI i raportowanie postępów',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zbiera podstawowe metryki projektu. Raportuje postępy.' },
      { level: 2, name: 'Rozwijający się', description: 'Tworzy raporty statusowe. Śledzi KPI projektu.' },
      { level: 3, name: 'Kompetentny', description: 'Definiuje KPI. Analiza trendów. Retrospektywy z action items.' },
      { level: 4, name: 'Zaawansowany', description: 'Zaawansowane dashboardy. ROI analysis. Lessons learned.' },
      { level: 5, name: 'Ekspert', description: 'Strategiczna ocena portfela projektów. OKR framework.' },
    ],
  },
  {
    id: 'pm-resources',
    name: 'Zarządzanie zasobami projektu',
    description: 'Planowanie i alokacja zasobów ludzkich i technicznych w projekcie',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Rozumie strukturę zespołu. Zgłasza potrzeby zasobowe.' },
      { level: 2, name: 'Rozwijający się', description: 'Planuje alokację członków zespołu. Identyfikuje braki.' },
      { level: 3, name: 'Kompetentny', description: 'Zarządza zespołem cross-funkcyjnym. Capacity planning.' },
      { level: 4, name: 'Zaawansowany', description: 'Resource management wieloprojektowy. Rozwój kompetencji zespołu.' },
      { level: 5, name: 'Ekspert', description: 'Strategia zasobowa organizacji. Talent management.' },
    ],
  },
  {
    id: 'pm-ai',
    name: 'Wykorzystanie sztucznej inteligencji (AI) w codziennej pracy',
    description: 'Umiejętność efektywnego korzystania z narzędzi AI w zarządzaniu projektami',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zna podstawowe narzędzia AI. Używa ich do prostych zadań PM.' },
      { level: 2, name: 'Rozwijający się', description: 'Korzysta z AI do raportowania, notatek i analizy danych.' },
      { level: 3, name: 'Kompetentny', description: 'Efektywnie promptuje AI. Integruje AI w workflow PM.' },
      { level: 4, name: 'Zaawansowany', description: 'Buduje narzędzia AI do optymalizacji procesów PM.' },
      { level: 5, name: 'Ekspert', description: 'Definiuje strategię AI w zarządzaniu projektami.' },
    ],
  },
  // Kompetencje miękkie
  {
    id: 'pm-communication-soft',
    name: 'Komunikacja z innymi',
    description: 'Efektywna komunikacja z zespołem, klientem i stakeholderami',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Przygotowuje notatki ze spotkań. Komunikuje się jasno.' },
      { level: 2, name: 'Rozwijający się', description: 'Prowadzi spotkania zespołowe. Tworzy raporty statusowe.' },
      { level: 3, name: 'Kompetentny', description: 'Zarządza komunikacją w projekcie. Prezentacje dla klienta.' },
      { level: 4, name: 'Zaawansowany', description: 'Komunikacja strategiczna. Zarządzanie oczekiwaniami C-level.' },
      { level: 5, name: 'Ekspert', description: 'Executive presence. Reprezentowanie firmy. Thought leadership.' },
    ],
  },
  {
    id: 'pm-teamwork',
    name: 'Praca zespołowa',
    description: 'Budowanie i prowadzenie efektywnych zespołów projektowych',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Współpracuje efektywnie z zespołem.' },
      { level: 2, name: 'Rozwijający się', description: 'Koordynuje pracę małego zespołu. Rozwiązuje konflikty.' },
      { level: 3, name: 'Kompetentny', description: 'Buduje zaangażowanie zespołu. Delegowanie. Feedback.' },
      { level: 4, name: 'Zaawansowany', description: 'Servant leadership. Rozwój członków zespołu.' },
      { level: 5, name: 'Ekspert', description: 'Budowanie kultury organizacyjnej. Mentoring PM-ów.' },
    ],
  },
  {
    id: 'pm-independence',
    name: 'Samodzielność',
    description: 'Zdolność do samodzielnego podejmowania decyzji i realizacji zadań',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Realizuje zadania z pomocą mentora.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielnie prowadzi proste projekty.' },
      { level: 3, name: 'Kompetentny', description: 'Samodzielnie zarządza złożonymi projektami.' },
      { level: 4, name: 'Zaawansowany', description: 'Samodzielnie prowadzi programy wieloprojektowe.' },
      { level: 5, name: 'Ekspert', description: 'Pełna autonomia. Strategiczne decyzje.' },
    ],
  },
  {
    id: 'pm-work-organization',
    name: 'Organizacja pracy własnej',
    description: 'Planowanie, priorytetyzacja i efektywne zarządzanie czasem',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Realizuje przydzielone zadania w czasie.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielna priorytetyzacja. Dotrzymuje terminów.' },
      { level: 3, name: 'Kompetentny', description: 'Efektywne zarządzanie wieloma projektami jednocześnie.' },
      { level: 4, name: 'Zaawansowany', description: 'Optymalizacja procesów pracy. Delegowanie.' },
      { level: 5, name: 'Ekspert', description: 'Definiowanie procesów organizacyjnych.' },
    ],
  },
  {
    id: 'pm-experience',
    name: 'Doświadczenie / dojrzałość',
    description: 'Dojrzałość zawodowa i umiejętność podejmowania decyzji',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zaczyna karierę PM. Chętnie się uczy.' },
      { level: 2, name: 'Rozwijający się', description: 'Doświadczenie z kilkoma projektami.' },
      { level: 3, name: 'Kompetentny', description: 'Uczy się na błędach. Świadome decyzje projektowe.' },
      { level: 4, name: 'Zaawansowany', description: 'Bogate doświadczenie. Mentor dla innych PM.' },
      { level: 5, name: 'Ekspert', description: 'Ekspert PM. Strategiczne myślenie.' },
    ],
  },
  {
    id: 'pm-flexibility',
    name: 'Elastyczność / adaptacyjność',
    description: 'Zdolność do adaptacji w dynamicznym środowisku',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Akceptuje zmiany w projekcie.' },
      { level: 2, name: 'Rozwijający się', description: 'Adaptuje się do zmian priorytetów i scope.' },
      { level: 3, name: 'Kompetentny', description: 'Szybko adaptuje się do nowych metodyk i narzędzi.' },
      { level: 4, name: 'Zaawansowany', description: 'Prowadzi zespół przez zmiany organizacyjne.' },
      { level: 5, name: 'Ekspert', description: 'Change agent. Napędza transformacje.' },
    ],
  },
];

// Soft skill IDs — level 3 for Jun/Mid/Sen, level 4 for TL (lead)
const pmSoftSkillIds = [
  'pm-communication-soft', 'pm-teamwork', 'pm-independence',
  'pm-work-organization', 'pm-experience', 'pm-flexibility',
];

function softReqs(): PositionRequirement[] {
  const standardLevels: Array<'junior' | 'mid' | 'senior'> = ['junior', 'mid', 'senior'];
  return [
    ...standardLevels.flatMap(seniority =>
      pmSoftSkillIds.map(competencyId => ({
        positionId: 'project-manager',
        seniorityLevel: seniority as SeniorityLevel,
        competencyId,
        requiredLevel: 3,
      }))
    ),
    ...pmSoftSkillIds.map(competencyId => ({
      positionId: 'project-manager',
      seniorityLevel: 'lead' as SeniorityLevel,
      competencyId,
      requiredLevel: 4,
    })),
  ];
}

function req(seniorityLevel: SeniorityLevel, competencyId: string, requiredLevel: number): PositionRequirement {
  return { positionId: 'project-manager', seniorityLevel, competencyId, requiredLevel };
}

export const pmRequirements: PositionRequirement[] = [
  // Metodyki zarządzania projektami
  req('junior', 'pm-methodology', 2),
  req('mid',    'pm-methodology', 2),
  req('senior', 'pm-methodology', 3),
  req('lead',   'pm-methodology', 5),
  // Planowanie, estymacja i analiza ryzyka
  req('junior', 'pm-planning', 3),
  req('mid',    'pm-planning', 4),
  req('senior', 'pm-planning', 4),
  req('lead',   'pm-planning', 5),
  // Narzędzia PM
  req('junior', 'pm-tools', 2),
  req('mid',    'pm-tools', 3),
  req('senior', 'pm-tools', 4),
  req('lead',   'pm-tools', 4),
  // Zarządzanie budżetem
  req('junior', 'pm-budget', 2),
  req('mid',    'pm-budget', 3),
  req('senior', 'pm-budget', 4),
  req('lead',   'pm-budget', 5),
  // Ocena wyników projektu
  req('junior', 'pm-evaluation', 3),
  req('mid',    'pm-evaluation', 4),
  req('senior', 'pm-evaluation', 4),
  req('lead',   'pm-evaluation', 5),
  // Zarządzanie zasobami projektu
  req('junior', 'pm-resources', 2),
  req('mid',    'pm-resources', 3),
  req('senior', 'pm-resources', 4),
  req('lead',   'pm-resources', 5),
  // AI w codziennej pracy
  req('junior', 'pm-ai', 3),
  req('mid',    'pm-ai', 4),
  req('senior', 'pm-ai', 4),
  req('lead',   'pm-ai', 4),
  // Soft skills
  ...softReqs(),
];
