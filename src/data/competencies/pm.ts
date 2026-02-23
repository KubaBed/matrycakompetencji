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
      { level: 3, name: 'Kompetentny', description: 'Samodzielnie prowadzi projekty w Scrum/Kanban. Facylituje wszystkie ceremonie.' },
      { level: 4, name: 'Zaawansowany', description: 'Wdraża i optymalizuje metodyki. Coaching zespołów. Hybrydy metodyk.' },
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
  // Kompetencje miękkie
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

const pmCompetencyIds = pmCompetencies.map(c => c.id);

function genReqs(positionId: string, seniorityLevel: 'junior' | 'mid' | 'senior' | 'lead', level: number): PositionRequirement[] {
  return pmCompetencyIds.map(competencyId => ({
    positionId,
    seniorityLevel,
    competencyId,
    requiredLevel: level,
  }));
}

export const pmRequirements: PositionRequirement[] = [
  ...genReqs('project-manager', 'junior', 1),
  ...genReqs('project-manager', 'mid', 2),
  ...genReqs('project-manager', 'senior', 3),
  ...genReqs('project-manager', 'lead', 4),
];
