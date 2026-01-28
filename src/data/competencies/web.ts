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
    id: 'web-communication',
    name: 'Komunikacja techniczna',
    description: 'Dokumentacja, code review i współpraca z zespołem',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Jasne komentarze w kodzie. Zadaje pytania gdy czegoś nie rozumie.' },
      { level: 2, name: 'Rozwijający się', description: 'Konstruktywne code review. Dokumentuje swój kod. Dzieli się wiedzą.' },
      { level: 3, name: 'Kompetentny', description: 'Prowadzi dyskusje techniczne. RFC/ADR. Tech talks dla zespołu.' },
      { level: 4, name: 'Zaawansowany', description: 'Prezentacje dla stakeholderów. Mentoring. Komunikacja cross-team.' },
      { level: 5, name: 'Ekspert', description: 'Thought leadership. Konferencje. Open source contributions. Tech blogging.' },
    ],
  },
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

export const webRequirements: PositionRequirement[] = [
  // Frontend Developer - Junior
  { positionId: 'frontend-developer', seniorityLevel: 'junior', competencyId: 'web-frontend', requiredLevel: 2 },
  { positionId: 'frontend-developer', seniorityLevel: 'junior', competencyId: 'web-backend', requiredLevel: 1 },
  { positionId: 'frontend-developer', seniorityLevel: 'junior', competencyId: 'web-databases', requiredLevel: 1 },
  { positionId: 'frontend-developer', seniorityLevel: 'junior', competencyId: 'web-testing', requiredLevel: 1 },
  { positionId: 'frontend-developer', seniorityLevel: 'junior', competencyId: 'web-communication', requiredLevel: 2 },
  { positionId: 'frontend-developer', seniorityLevel: 'junior', competencyId: 'web-problemsolving', requiredLevel: 1 },
  { positionId: 'frontend-developer', seniorityLevel: 'junior', competencyId: 'web-cloud', requiredLevel: 1 },
  { positionId: 'frontend-developer', seniorityLevel: 'junior', competencyId: 'web-security', requiredLevel: 1 },

  // Frontend Developer - Mid
  { positionId: 'frontend-developer', seniorityLevel: 'mid', competencyId: 'web-frontend', requiredLevel: 3 },
  { positionId: 'frontend-developer', seniorityLevel: 'mid', competencyId: 'web-backend', requiredLevel: 2 },
  { positionId: 'frontend-developer', seniorityLevel: 'mid', competencyId: 'web-databases', requiredLevel: 2 },
  { positionId: 'frontend-developer', seniorityLevel: 'mid', competencyId: 'web-testing', requiredLevel: 3 },
  { positionId: 'frontend-developer', seniorityLevel: 'mid', competencyId: 'web-communication', requiredLevel: 3 },
  { positionId: 'frontend-developer', seniorityLevel: 'mid', competencyId: 'web-problemsolving', requiredLevel: 3 },
  { positionId: 'frontend-developer', seniorityLevel: 'mid', competencyId: 'web-cloud', requiredLevel: 2 },
  { positionId: 'frontend-developer', seniorityLevel: 'mid', competencyId: 'web-security', requiredLevel: 2 },

  // Backend Developer - Junior
  { positionId: 'backend-developer', seniorityLevel: 'junior', competencyId: 'web-frontend', requiredLevel: 1 },
  { positionId: 'backend-developer', seniorityLevel: 'junior', competencyId: 'web-backend', requiredLevel: 2 },
  { positionId: 'backend-developer', seniorityLevel: 'junior', competencyId: 'web-databases', requiredLevel: 2 },
  { positionId: 'backend-developer', seniorityLevel: 'junior', competencyId: 'web-testing', requiredLevel: 1 },
  { positionId: 'backend-developer', seniorityLevel: 'junior', competencyId: 'web-communication', requiredLevel: 2 },
  { positionId: 'backend-developer', seniorityLevel: 'junior', competencyId: 'web-problemsolving', requiredLevel: 2 },
  { positionId: 'backend-developer', seniorityLevel: 'junior', competencyId: 'web-cloud', requiredLevel: 1 },
  { positionId: 'backend-developer', seniorityLevel: 'junior', competencyId: 'web-security', requiredLevel: 1 },

  // Backend Developer - Mid
  { positionId: 'backend-developer', seniorityLevel: 'mid', competencyId: 'web-frontend', requiredLevel: 2 },
  { positionId: 'backend-developer', seniorityLevel: 'mid', competencyId: 'web-backend', requiredLevel: 3 },
  { positionId: 'backend-developer', seniorityLevel: 'mid', competencyId: 'web-databases', requiredLevel: 3 },
  { positionId: 'backend-developer', seniorityLevel: 'mid', competencyId: 'web-testing', requiredLevel: 3 },
  { positionId: 'backend-developer', seniorityLevel: 'mid', competencyId: 'web-communication', requiredLevel: 3 },
  { positionId: 'backend-developer', seniorityLevel: 'mid', competencyId: 'web-problemsolving', requiredLevel: 3 },
  { positionId: 'backend-developer', seniorityLevel: 'mid', competencyId: 'web-cloud', requiredLevel: 2 },
  { positionId: 'backend-developer', seniorityLevel: 'mid', competencyId: 'web-security', requiredLevel: 3 },

  // Fullstack Developer - Mid
  { positionId: 'fullstack-developer', seniorityLevel: 'mid', competencyId: 'web-frontend', requiredLevel: 3 },
  { positionId: 'fullstack-developer', seniorityLevel: 'mid', competencyId: 'web-backend', requiredLevel: 3 },
  { positionId: 'fullstack-developer', seniorityLevel: 'mid', competencyId: 'web-databases', requiredLevel: 3 },
  { positionId: 'fullstack-developer', seniorityLevel: 'mid', competencyId: 'web-testing', requiredLevel: 3 },
  { positionId: 'fullstack-developer', seniorityLevel: 'mid', competencyId: 'web-communication', requiredLevel: 3 },
  { positionId: 'fullstack-developer', seniorityLevel: 'mid', competencyId: 'web-problemsolving', requiredLevel: 3 },
  { positionId: 'fullstack-developer', seniorityLevel: 'mid', competencyId: 'web-cloud', requiredLevel: 2 },
  { positionId: 'fullstack-developer', seniorityLevel: 'mid', competencyId: 'web-security', requiredLevel: 3 },

  // Web Architect - Senior
  { positionId: 'web-architect', seniorityLevel: 'senior', competencyId: 'web-frontend', requiredLevel: 4 },
  { positionId: 'web-architect', seniorityLevel: 'senior', competencyId: 'web-backend', requiredLevel: 5 },
  { positionId: 'web-architect', seniorityLevel: 'senior', competencyId: 'web-databases', requiredLevel: 4 },
  { positionId: 'web-architect', seniorityLevel: 'senior', competencyId: 'web-testing', requiredLevel: 4 },
  { positionId: 'web-architect', seniorityLevel: 'senior', competencyId: 'web-communication', requiredLevel: 5 },
  { positionId: 'web-architect', seniorityLevel: 'senior', competencyId: 'web-problemsolving', requiredLevel: 5 },
  { positionId: 'web-architect', seniorityLevel: 'senior', competencyId: 'web-cloud', requiredLevel: 4 },
  { positionId: 'web-architect', seniorityLevel: 'senior', competencyId: 'web-security', requiredLevel: 4 },
];
