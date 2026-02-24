import { Competency, PositionRequirement } from '@/types/competency';

export const qaCompetencies: Competency[] = [
  // Kompetencje twarde
  {
    id: 'qa-manual-testing',
    name: 'Testowanie manualne',
    description: 'Planowanie i wykonywanie testów manualnych',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Wykonuje testy wg scenariuszy. Raportuje bugi z podstawowymi informacjami.' },
      { level: 2, name: 'Rozwijający się', description: 'Tworzy przypadki testowe. Testowanie eksploracyjne. Szczegółowe bug reporty.' },
      { level: 3, name: 'Kompetentny', description: 'Planuje strategie testów. Risk-based testing. Testy regresji. Test coverage analysis.' },
      { level: 4, name: 'Zaawansowany', description: 'Test management. Definiuje procesy QA. Review przypadków testowych innych.' },
      { level: 5, name: 'Ekspert', description: 'Quality strategy. Test methodologies. Process improvement. QA consulting.' },
    ],
  },
  {
    id: 'qa-automation',
    name: 'Automatyzacja testów',
    description: 'Tworzenie i utrzymanie testów automatycznych',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawy programowania. Rozumie strukturę testów automatycznych.' },
      { level: 2, name: 'Rozwijający się', description: 'Pisze proste testy UI (Selenium/Cypress). Podstawy API testing.' },
      { level: 3, name: 'Kompetentny', description: 'Page Object Pattern. CI/CD integration. Stabilne testy. Reporting.' },
      { level: 4, name: 'Zaawansowany', description: 'Test framework architecture. Performance testing. Mobile automation.' },
      { level: 5, name: 'Ekspert', description: 'Custom framework development. Test infrastructure. Cross-platform strategies.' },
    ],
  },
  {
    id: 'qa-performance',
    name: 'Testowanie wydajności',
    description: 'Planowanie i wykonywanie testów wydajnościowych i obciążeniowych',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Rozumie podstawy testów wydajnościowych. Obserwacja czasu odpowiedzi.' },
      { level: 2, name: 'Rozwijający się', description: 'Proste testy obciążeniowe (JMeter/k6). Raportowanie wyników.' },
      { level: 3, name: 'Kompetentny', description: 'Planowanie testów wydajnościowych. Analiza bottlenecków. Stress testing.' },
      { level: 4, name: 'Zaawansowany', description: 'Zaawansowane scenariusze obciążeniowe. Capacity planning. Performance tuning.' },
      { level: 5, name: 'Ekspert', description: 'Performance engineering strategy. Architektura testów wydajnościowych.' },
    ],
  },
  {
    id: 'qa-api-testing',
    name: 'Testowanie API',
    description: 'Testowanie REST API, GraphQL i integracji',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Używa Postman do prostych request. Rozumie HTTP methods i status codes.' },
      { level: 2, name: 'Rozwijający się', description: 'Tworzy kolekcje testów w Postman. Walidacja response. Environment variables.' },
      { level: 3, name: 'Kompetentny', description: 'Automatyzacja API testów. Contract testing. Data-driven testing.' },
      { level: 4, name: 'Zaawansowany', description: 'Performance testing API. Security testing. Mock services. GraphQL testing.' },
      { level: 5, name: 'Ekspert', description: 'API test strategy. Integration test architecture. Service virtualization.' },
    ],
  },
  {
    id: 'qa-domain',
    name: 'Znajomość domeny technicznej',
    description: 'Rozumienie architektury aplikacji i technologii',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawowa wiedza o web/mobile. Rozumie client-server architecture.' },
      { level: 2, name: 'Rozwijający się', description: 'Czyta logi. Rozumie bazy danych. Podstawy API. Environment setup.' },
      { level: 3, name: 'Kompetentny', description: 'Debugging aplikacji. SQL queries. Rozumie microservices. Docker basics.' },
      { level: 4, name: 'Zaawansowany', description: 'System architecture understanding. Performance bottleneck identification.' },
      { level: 5, name: 'Ekspert', description: 'Technical consulting. Architecture review. Platform expertise.' },
    ],
  },
  {
    id: 'qa-security',
    name: 'Security testing',
    description: 'Testowanie bezpieczeństwa aplikacji',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Świadomość OWASP Top 10. Podstawowe testy autoryzacji.' },
      { level: 2, name: 'Rozwijający się', description: 'Testy injection. XSS detection. Session management testing.' },
      { level: 3, name: 'Kompetentny', description: 'Security test planning. SAST/DAST tools. Vulnerability assessment.' },
      { level: 4, name: 'Zaawansowany', description: 'Penetration testing. Security audit. Compliance testing.' },
      { level: 5, name: 'Ekspert', description: 'Security strategy. Threat modeling. Security architecture review.' },
    ],
  },
  {
    id: 'qa-databases',
    name: 'Zarządzanie bazami danych',
    description: 'Umiejętność pracy z bazami danych w kontekście testowania',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawowe zapytania SQL. Rozumie strukturę tabel.' },
      { level: 2, name: 'Rozwijający się', description: 'Złożone zapytania. Weryfikacja danych testowych. Przygotowanie test data.' },
      { level: 3, name: 'Kompetentny', description: 'Optymalizacja zapytań. Migracje danych. Testowanie integralności.' },
      { level: 4, name: 'Zaawansowany', description: 'Database performance testing. Data-driven test automation.' },
      { level: 5, name: 'Ekspert', description: 'Database test strategy. Data quality engineering.' },
    ],
  },
  {
    id: 'qa-mobile-testing',
    name: 'Testowanie aplikacji mobilnych',
    description: 'Testowanie manualne i automatyczne aplikacji mobilnych',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawowe testy na urządzeniach mobilnych. Rozumie różnice iOS/Android.' },
      { level: 2, name: 'Rozwijający się', description: 'Testy na emulatorach. Testowanie gestów i notyfikacji. Bug reporting mobilny.' },
      { level: 3, name: 'Kompetentny', description: 'Strategie testowania mobilnego. Device matrix. Testy offline/connectivity.' },
      { level: 4, name: 'Zaawansowany', description: 'Mobile automation (Appium). Performance testing mobilny. CI/CD mobile.' },
      { level: 5, name: 'Ekspert', description: 'Mobile test architecture. Cross-platform test strategy. Device farm management.' },
    ],
  },
  {
    id: 'qa-mobile-platforms',
    name: 'Znajomość systemów Android i iOS',
    description: 'Znajomość specyfiki platform mobilnych i ich ekosystemów',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawowa obsługa iOS i Android. Rozumie App Store/Play Store.' },
      { level: 2, name: 'Rozwijający się', description: 'Znajomość wytycznych platform. Testowanie uprawnień. Logcat/Console.' },
      { level: 3, name: 'Kompetentny', description: 'Zaawansowana diagnostyka. Testowanie wersji OS. Provisioning profiles.' },
      { level: 4, name: 'Zaawansowany', description: 'Deep linking. Push notifications testing. Platform-specific features.' },
      { level: 5, name: 'Ekspert', description: 'Platform expert. Beta distribution. Release management mobilny.' },
    ],
  },
  {
    id: 'qa-ai',
    name: 'Wykorzystanie sztucznej inteligencji (AI) w codziennej pracy',
    description: 'Umiejętność efektywnego korzystania z narzędzi AI w procesie QA',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zna podstawowe narzędzia AI. Używa ich do prostych zadań testowych.' },
      { level: 2, name: 'Rozwijający się', description: 'Korzysta z AI do generowania test case\'ów i analizy logów.' },
      { level: 3, name: 'Kompetentny', description: 'Efektywnie promptuje AI. Integruje AI w workflow testowy.' },
      { level: 4, name: 'Zaawansowany', description: 'Buduje narzędzia AI do automatyzacji QA. Optymalizuje procesy.' },
      { level: 5, name: 'Ekspert', description: 'Definiuje strategię AI w QA. Thought leadership.' },
    ],
  },
  // Kompetencje miękkie
  {
    id: 'qa-communication-soft',
    name: 'Komunikacja z innymi',
    description: 'Efektywna komunikacja z developerami i stakeholderami',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Jasne bug reporty. Komunikuje status testów.' },
      { level: 2, name: 'Rozwijający się', description: 'Konstruktywna współpraca z dev. Dzieli się wiedzą.' },
      { level: 3, name: 'Kompetentny', description: 'Quality advocate. Prezentacje statusowe. Negocjowanie release quality.' },
      { level: 4, name: 'Zaawansowany', description: 'Cross-team collaboration. Stakeholder management.' },
      { level: 5, name: 'Ekspert', description: 'Quality culture champion. Executive reporting.' },
    ],
  },
  {
    id: 'qa-teamwork',
    name: 'Praca zespołowa',
    description: 'Współpraca z innymi członkami zespołu',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Efektywna praca z pomocą mentora.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielna praca w zespole. Współpraca z devami.' },
      { level: 3, name: 'Kompetentny', description: 'Pair testing. Dzielenie się wiedzą o jakości.' },
      { level: 4, name: 'Zaawansowany', description: 'Koordynacja pracy QA w zespole.' },
      { level: 5, name: 'Ekspert', description: 'Budowanie kultury jakości w organizacji.' },
    ],
  },
  {
    id: 'qa-independence',
    name: 'Samodzielność',
    description: 'Zdolność do samodzielnego podejmowania decyzji i realizacji zadań',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Realizuje zadania z pomocą mentora.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielnie realizuje proste testy.' },
      { level: 3, name: 'Kompetentny', description: 'Samodzielnie planuje i realizuje złożone testy.' },
      { level: 4, name: 'Zaawansowany', description: 'Samodzielnie definiuje strategię testów.' },
      { level: 5, name: 'Ekspert', description: 'Pełna autonomia. Definiuje kierunki jakości.' },
    ],
  },
  {
    id: 'qa-work-organization',
    name: 'Organizacja pracy własnej',
    description: 'Planowanie, priorytetyzacja i efektywne zarządzanie czasem',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Realizuje przydzielone testy w czasie.' },
      { level: 2, name: 'Rozwijający się', description: 'Priorytetyzacja testów. Dotrzymuje terminów.' },
      { level: 3, name: 'Kompetentny', description: 'Efektywne zarządzanie wieloma projektami testowymi.' },
      { level: 4, name: 'Zaawansowany', description: 'Optymalizacja procesów QA.' },
      { level: 5, name: 'Ekspert', description: 'Definiowanie procesów QA organizacji.' },
    ],
  },
  {
    id: 'qa-experience',
    name: 'Doświadczenie / dojrzałość',
    description: 'Dojrzałość zawodowa i umiejętność podejmowania decyzji',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zaczyna karierę w QA. Chętnie się uczy.' },
      { level: 2, name: 'Rozwijający się', description: 'Doświadczenie z kilkoma projektami.' },
      { level: 3, name: 'Kompetentny', description: 'Uczy się na błędach. Świadome decyzje testowe.' },
      { level: 4, name: 'Zaawansowany', description: 'Bogate doświadczenie. Mentor QA.' },
      { level: 5, name: 'Ekspert', description: 'Ekspert QA. Strategiczne myślenie o jakości.' },
    ],
  },
  {
    id: 'qa-flexibility',
    name: 'Elastyczność / adaptacyjność',
    description: 'Zdolność do adaptacji w dynamicznym środowisku',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Akceptuje zmiany. Uczy się nowych narzędzi.' },
      { level: 2, name: 'Rozwijający się', description: 'Adaptuje się do zmian priorytetów testowych.' },
      { level: 3, name: 'Kompetentny', description: 'Szybko adaptuje się do nowych technologii i narzędzi QA.' },
      { level: 4, name: 'Zaawansowany', description: 'Prowadzi zespół QA przez zmiany.' },
      { level: 5, name: 'Ekspert', description: 'Change agent w obszarze jakości.' },
    ],
  },
];

// Soft skill IDs — universal level 3 for Jun/Mid/Sen
const qaSoftSkillIds = [
  'qa-communication-soft', 'qa-teamwork', 'qa-independence',
  'qa-work-organization', 'qa-experience', 'qa-flexibility',
];

function softReqs(positionId: string): PositionRequirement[] {
  const levels: Array<'junior' | 'mid' | 'senior'> = ['junior', 'mid', 'senior'];
  return levels.flatMap(seniority =>
    qaSoftSkillIds.map(competencyId => ({
      positionId,
      seniorityLevel: seniority,
      competencyId,
      requiredLevel: 3,
    }))
  );
}

function req(positionId: string, seniorityLevel: 'junior' | 'mid' | 'senior', competencyId: string, requiredLevel: number): PositionRequirement {
  return { positionId, seniorityLevel, competencyId, requiredLevel };
}

export const qaRequirements: PositionRequirement[] = [
  req('qa-specialist', 'junior', 'qa-manual-testing', 2),
  req('qa-specialist', 'mid',    'qa-manual-testing', 3),
  req('qa-specialist', 'senior', 'qa-manual-testing', 5),
  req('qa-specialist', 'junior', 'qa-automation', 1),
  req('qa-specialist', 'mid',    'qa-automation', 2),
  req('qa-specialist', 'senior', 'qa-automation', 4),
  req('qa-specialist', 'junior', 'qa-performance', 1),
  req('qa-specialist', 'mid',    'qa-performance', 2),
  req('qa-specialist', 'senior', 'qa-performance', 4),
  req('qa-specialist', 'junior', 'qa-api-testing', 2),
  req('qa-specialist', 'mid',    'qa-api-testing', 3),
  req('qa-specialist', 'senior', 'qa-api-testing', 4),
  req('qa-specialist', 'junior', 'qa-domain', 2),
  req('qa-specialist', 'mid',    'qa-domain', 3),
  req('qa-specialist', 'senior', 'qa-domain', 4),
  req('qa-specialist', 'junior', 'qa-security', 1),
  req('qa-specialist', 'mid',    'qa-security', 2),
  req('qa-specialist', 'senior', 'qa-security', 4),
  req('qa-specialist', 'junior', 'qa-databases', 2),
  req('qa-specialist', 'mid',    'qa-databases', 3),
  req('qa-specialist', 'senior', 'qa-databases', 4),
  req('qa-specialist', 'junior', 'qa-mobile-testing', 2),
  req('qa-specialist', 'mid',    'qa-mobile-testing', 3),
  req('qa-specialist', 'senior', 'qa-mobile-testing', 5),
  req('qa-specialist', 'junior', 'qa-mobile-platforms', 2),
  req('qa-specialist', 'mid',    'qa-mobile-platforms', 3),
  req('qa-specialist', 'senior', 'qa-mobile-platforms', 4),
  req('qa-specialist', 'junior', 'qa-ai', 2),
  req('qa-specialist', 'mid',    'qa-ai', 3),
  req('qa-specialist', 'senior', 'qa-ai', 4),
  ...softReqs('qa-specialist'),
];
