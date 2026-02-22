import { Competency, PositionRequirement } from '@/types/competency';

export const webCompetencies: Competency[] = [
  // Kompetencje twarde
  {
    id: 'web-frontend',
    name: 'Frontend Development',
    description: 'Tworzenie interfejsów użytkownika z React, Vue lub Angular',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawy HTML, CSS, JavaScript. Proste komponenty React/Vue. Rozumie virtual DOM.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielne tworzenie stron. Hooks, state management podstawy. Responsywność.' },
      { level: 3, name: 'Kompetentny', description: 'Złożone aplikacje SPA. Redux/Zustand. TypeScript. Testy jednostkowe komponentów.' },
      { level: 4, name: 'Zaawansowany', description: 'Architektura frontend. Performance optimization. SSR/SSG. Design system implementation.' },
      { level: 5, name: 'Ekspert', description: 'Definiowanie standardów frontend. Mikrofrontendy. Własne narzędzia i biblioteki.' },
    ],
  },
  {
    id: 'web-backend',
    name: 'Backend Development',
    description: 'Tworzenie API i logiki serwerowej z Node.js, Python, Java lub .NET',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawy HTTP, REST API. Proste endpointy. Praca z bazą danych (CRUD).' },
      { level: 2, name: 'Rozwijający się', description: 'Autentykacja/autoryzacja. Walidacja. ORM/Query builder. Error handling.' },
      { level: 3, name: 'Kompetentny', description: 'Projektowanie API. Caching. Message queues. Background jobs. Bezpieczeństwo.' },
      { level: 4, name: 'Zaawansowany', description: 'Microservices. Event-driven architecture. Performance tuning. DevOps basics.' },
      { level: 5, name: 'Ekspert', description: 'Distributed systems. High availability. System design. Technical leadership.' },
    ],
  },
  {
    id: 'web-databases',
    name: 'Bazy danych',
    description: 'Projektowanie i optymalizacja baz danych SQL i NoSQL',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawy SQL. SELECT, INSERT, UPDATE, DELETE. Proste joiny.' },
      { level: 2, name: 'Rozwijający się', description: 'Projektowanie schematów. Indeksy. Transakcje. Podstawy NoSQL.' },
      { level: 3, name: 'Kompetentny', description: 'Zaawansowane query. Optymalizacja wydajności. Migracje. Backup/restore.' },
      { level: 4, name: 'Zaawansowany', description: 'Replikacja. Sharding. Database design patterns. Multi-database strategies.' },
      { level: 5, name: 'Ekspert', description: 'Database architecture. Distributed databases. Performance consulting.' },
    ],
  },
  {
    id: 'web-testing',
    name: 'Testowanie',
    description: 'Pisanie testów jednostkowych, integracyjnych i E2E',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Rozumie znaczenie testów. Pisze proste testy jednostkowe.' },
      { level: 2, name: 'Rozwijający się', description: 'Testy z mockami. Coverage > 60%. Podstawowe testy integracyjne.' },
      { level: 3, name: 'Kompetentny', description: 'TDD/BDD. Testy E2E (Playwright/Cypress). Strategie testowania. CI integration.' },
      { level: 4, name: 'Zaawansowany', description: 'Test architecture. Performance testing. Contract testing. Test automation.' },
      { level: 5, name: 'Ekspert', description: 'Quality engineering strategy. Testing infrastructure. Testing culture.' },
    ],
  },
  // Kompetencje miękkie
  {
    id: 'web-problemsolving',
    name: 'Rozwiązywanie problemów',
    description: 'Debugging, analiza i rozwiązywanie złożonych problemów',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Używa console.log do debugowania. Google/StackOverflow dla prostych problemów.' },
      { level: 2, name: 'Rozwijający się', description: 'Debugger. Czyta error messages. Systematyczne podejście do bugów.' },
      { level: 3, name: 'Kompetentny', description: 'Root cause analysis. Profiling. Rozwiązuje złożone problemy samodzielnie.' },
      { level: 4, name: 'Zaawansowany', description: 'Performance debugging. Production troubleshooting. Incident response.' },
      { level: 5, name: 'Ekspert', description: 'System-wide debugging. Postmortems. Preventive measures design.' },
    ],
  },
  {
    id: 'web-ai',
    name: 'Wykorzystanie sztucznej inteligencji (AI) w codziennej pracy',
    description: 'Umiejętność efektywnego korzystania z narzędzi AI w procesie developmentu',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zna podstawowe narzędzia AI (ChatGPT, Copilot). Używa ich do prostych zadań.' },
      { level: 2, name: 'Rozwijający się', description: 'Regularnie korzysta z AI do code review, generowania kodu i dokumentacji.' },
      { level: 3, name: 'Kompetentny', description: 'Efektywnie promptuje AI. Integruje narzędzia AI w codziennym workflow. Weryfikuje wyniki.' },
      { level: 4, name: 'Zaawansowany', description: 'Buduje własne narzędzia z AI. Optymalizuje procesy zespołu z użyciem AI. Mentoring w zakresie AI.' },
      { level: 5, name: 'Ekspert', description: 'Definiuje strategię AI dla zespołu. Ewaluuje nowe narzędzia. Thought leadership w obszarze AI.' },
    ],
  },
  {
    id: 'web-communication-soft',
    name: 'Komunikacja z innymi',
    description: 'Efektywna komunikacja z zespołem, klientem i interesariuszami',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Jasne raportowanie statusu pracy. Zadaje pytania gdy czegoś nie rozumie.' },
      { level: 2, name: 'Rozwijający się', description: 'Konstruktywne code review. Aktywny udział w dyskusjach technicznych.' },
      { level: 3, name: 'Kompetentny', description: 'Prowadzi dyskusje techniczne. Prezentacje dla zespołu. Dokumentacja.' },
      { level: 4, name: 'Zaawansowany', description: 'Prezentacje dla stakeholderów. Komunikacja cross-team. Mentoring.' },
      { level: 5, name: 'Ekspert', description: 'Thought leadership. Konferencje. Reprezentowanie firmy na zewnątrz.' },
    ],
  },
  {
    id: 'web-teamwork',
    name: 'Praca zespołowa',
    description: 'Współpraca z innymi członkami zespołu i organizacji',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Efektywna praca z pomocą mentora. Szanuje różne perspektywy.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielna praca w zespole. Aktywny udział w code review.' },
      { level: 3, name: 'Kompetentny', description: 'Pair programming. Dzielenie się wiedzą. Wsparcie kolegów z zespołu.' },
      { level: 4, name: 'Zaawansowany', description: 'Koordynacja pracy zespołu. Budowanie zaangażowania. Facylitacja.' },
      { level: 5, name: 'Ekspert', description: 'Budowanie kultury zespołowej. Mentoring wielu osób. Cross-team collaboration.' },
    ],
  },
  {
    id: 'web-independence',
    name: 'Samodzielność',
    description: 'Zdolność do samodzielnego podejmowania decyzji i realizacji zadań',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Realizuje zadania z pomocą mentora. Prosi o wsparcie gdy potrzebuje.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielnie realizuje proste zadania. Wie kiedy prosić o pomoc.' },
      { level: 3, name: 'Kompetentny', description: 'Samodzielnie realizuje złożone zadania. Podejmuje decyzje techniczne.' },
      { level: 4, name: 'Zaawansowany', description: 'Samodzielnie prowadzi projekty. Podejmuje decyzje architektoniczne.' },
      { level: 5, name: 'Ekspert', description: 'Pełna autonomia. Definiuje kierunki technologiczne. Strategiczne decyzje.' },
    ],
  },
  {
    id: 'web-work-organization',
    name: 'Organizacja pracy własnej',
    description: 'Planowanie, priorytetyzacja i efektywne zarządzanie czasem',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Realizuje przydzielone zadania w określonym czasie. Podstawowe planowanie dnia.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielna priorytetyzacja zadań. Dotrzymuje terminów. Estymacje czasu.' },
      { level: 3, name: 'Kompetentny', description: 'Efektywne zarządzanie wieloma zadaniami. Proaktywne planowanie. Eliminacja blokerów.' },
      { level: 4, name: 'Zaawansowany', description: 'Optymalizacja procesów pracy. Zarządzanie czasem zespołu. Delegowanie.' },
      { level: 5, name: 'Ekspert', description: 'Definiowanie procesów organizacyjnych. Coaching produktywności. Strategiczne planowanie.' },
    ],
  },
  {
    id: 'web-experience',
    name: 'Doświadczenie / dojrzałość',
    description: 'Dojrzałość zawodowa, umiejętność podejmowania decyzji w oparciu o doświadczenie',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zaczyna karierę. Chętnie się uczy. Przyjmuje feedback.' },
      { level: 2, name: 'Rozwijający się', description: 'Ma doświadczenie z kilkoma projektami. Rozpoznaje powtarzalne wzorce.' },
      { level: 3, name: 'Kompetentny', description: 'Uczy się na błędach. Podejmuje świadome decyzje. Dzieli się doświadczeniem.' },
      { level: 4, name: 'Zaawansowany', description: 'Bogate doświadczenie projektowe. Mentor dla innych. Rozwiązuje trudne sytuacje.' },
      { level: 5, name: 'Ekspert', description: 'Ekspert branżowy. Strategiczne myślenie. Budowanie kultury organizacyjnej.' },
    ],
  },
  {
    id: 'web-flexibility',
    name: 'Elastyczność / adaptacyjność',
    description: 'Zdolność do adaptacji w dynamicznym środowisku i otwartość na zmiany',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Akceptuje zmiany w projekcie. Uczy się nowych technologii z pomocą.' },
      { level: 2, name: 'Rozwijający się', description: 'Adaptuje się do zmian priorytetów. Samodzielnie uczy się nowych narzędzi.' },
      { level: 3, name: 'Kompetentny', description: 'Szybko adaptuje się do nowych technologii. Elastyczny w podejściu do rozwiązań.' },
      { level: 4, name: 'Zaawansowany', description: 'Prowadzi zespół przez zmiany. Proaktywnie identyfikuje potrzebę zmian.' },
      { level: 5, name: 'Ekspert', description: 'Change agent. Napędza innowacje. Buduje kulturę ciągłego doskonalenia.' },
    ],
  },
  // Kompetencje specjalistyczne
  {
    id: 'web-cloud',
    name: 'Cloud i DevOps',
    description: 'AWS, GCP, Azure, Docker, Kubernetes, CI/CD',
    category: 'specialized',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawy cloud (S3, EC2). Docker basics. Rozumie CI/CD pipeline.' },
      { level: 2, name: 'Rozwijający się', description: 'Deploy aplikacji. Konfiguracja prostych pipeline. Monitoring basics.' },
      { level: 3, name: 'Kompetentny', description: 'Infrastructure as Code. Kubernetes basics. Multi-environment setup.' },
      { level: 4, name: 'Zaawansowany', description: 'Cloud architecture. Cost optimization. Security hardening. SRE practices.' },
      { level: 5, name: 'Ekspert', description: 'Multi-cloud strategies. Platform engineering. Cloud-native architecture.' },
    ],
  },
  {
    id: 'web-security',
    name: 'Bezpieczeństwo aplikacji',
    description: 'OWASP, secure coding, autentykacja i autoryzacja',
    category: 'specialized',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Rozumie podstawowe zagrożenia (XSS, SQL injection). Bezpieczne hasła.' },
      { level: 2, name: 'Rozwijający się', description: 'Implementuje autentykację. Input validation. HTTPS.' },
      { level: 3, name: 'Kompetentny', description: 'OWASP Top 10. Security headers. JWT/OAuth. Secure by design.' },
      { level: 4, name: 'Zaawansowany', description: 'Security audits. Penetration testing basics. Compliance (GDPR, SOC2).' },
      { level: 5, name: 'Ekspert', description: 'Security architecture. Threat modeling. Security champion.' },
    ],
  },
];

const webCompetencyIds = webCompetencies.map(c => c.id);

// Helper to generate requirements for a position across all competencies
function genReqs(positionId: string, seniorityLevel: 'junior' | 'mid' | 'senior' | 'lead', level: number): PositionRequirement[] {
  return webCompetencyIds.map(competencyId => ({
    positionId,
    seniorityLevel,
    competencyId,
    requiredLevel: level,
  }));
}

export const webRequirements: PositionRequirement[] = [
  // Front-End Developer
  ...genReqs('frontend-developer', 'junior', 1),
  ...genReqs('frontend-developer', 'mid', 2),
  ...genReqs('frontend-developer', 'senior', 3),

  // Backend Developer
  ...genReqs('backend-developer', 'junior', 1),
  ...genReqs('backend-developer', 'mid', 2),
  ...genReqs('backend-developer', 'senior', 3),

  // Fullstack Developer
  ...genReqs('fullstack-developer', 'junior', 1),
  ...genReqs('fullstack-developer', 'mid', 2),
  ...genReqs('fullstack-developer', 'senior', 3),

  // Python Developer
  ...genReqs('python-developer', 'junior', 1),
  ...genReqs('python-developer', 'mid', 2),
  ...genReqs('python-developer', 'senior', 3),
  ...genReqs('python-developer', 'lead', 4),
];
