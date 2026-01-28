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
    id: 'qa-tools',
    name: 'Narzędzia QA',
    description: 'Znajomość narzędzi do testowania i zarządzania jakością',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Jira - raportowanie bugów. TestRail/Zephyr basics. DevTools podstawy.' },
      { level: 2, name: 'Rozwijający się', description: 'Test management tools. Browser DevTools. Performance tools basics.' },
      { level: 3, name: 'Kompetentny', description: 'Zaawansowane DevTools. Charles/Fiddler. JMeter/k6. Accessibility tools.' },
      { level: 4, name: 'Zaawansowany', description: 'Tool selection i wdrożenie. Custom reporting. Tool integration.' },
      { level: 5, name: 'Ekspert', description: 'Tool stack design. Vendor evaluation. Tool development/customization.' },
    ],
  },
  // Kompetencje miękkie
  {
    id: 'qa-communication',
    name: 'Komunikacja i współpraca',
    description: 'Efektywna współpraca z developerami i stakeholderami',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Jasne bug reporty. Komunikuje status testów. Pyta gdy czegoś nie rozumie.' },
      { level: 2, name: 'Rozwijający się', description: 'Konstruktywna współpraca z dev. Uczestniczy w refinement. Dzieli się wiedzą.' },
      { level: 3, name: 'Kompetentny', description: 'Quality advocate. Prezentacje statusowe. Negocjowanie release quality.' },
      { level: 4, name: 'Zaawansowany', description: 'Cross-team collaboration. Stakeholder management. Quality metrics prezentacje.' },
      { level: 5, name: 'Ekspert', description: 'Quality culture champion. Executive reporting. External representation.' },
    ],
  },
  {
    id: 'qa-analytical',
    name: 'Myślenie analityczne',
    description: 'Analiza wymagań, ryzyka i root cause analysis',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Czyta i rozumie wymagania. Identyfikuje oczywiste przypadki brzegowe.' },
      { level: 2, name: 'Rozwijający się', description: 'Analiza wymagań pod kątem testowalności. Identyfikuje luki w specyfikacji.' },
      { level: 3, name: 'Kompetentny', description: 'Risk assessment. Root cause analysis. Test estimation. Impact analysis.' },
      { level: 4, name: 'Zaawansowany', description: 'Quality metrics analysis. Trend analysis. Predictive quality assessment.' },
      { level: 5, name: 'Ekspert', description: 'Strategic risk management. Quality forecasting. Data-driven decisions.' },
    ],
  },
  // Kompetencje specjalistyczne
  {
    id: 'qa-domain',
    name: 'Znajomość domeny technicznej',
    description: 'Rozumienie architektury aplikacji i technologii',
    category: 'specialized',
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
    category: 'specialized',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Świadomość OWASP Top 10. Podstawowe testy autoryzacji.' },
      { level: 2, name: 'Rozwijający się', description: 'Testy injection. XSS detection. Session management testing.' },
      { level: 3, name: 'Kompetentny', description: 'Security test planning. SAST/DAST tools. Vulnerability assessment.' },
      { level: 4, name: 'Zaawansowany', description: 'Penetration testing. Security audit. Compliance testing.' },
      { level: 5, name: 'Ekspert', description: 'Security strategy. Threat modeling. Security architecture review.' },
    ],
  },
];

export const qaRequirements: PositionRequirement[] = [
  // QA Engineer - Junior
  { positionId: 'qa-engineer', seniorityLevel: 'junior', competencyId: 'qa-manual-testing', requiredLevel: 2 },
  { positionId: 'qa-engineer', seniorityLevel: 'junior', competencyId: 'qa-automation', requiredLevel: 1 },
  { positionId: 'qa-engineer', seniorityLevel: 'junior', competencyId: 'qa-api-testing', requiredLevel: 1 },
  { positionId: 'qa-engineer', seniorityLevel: 'junior', competencyId: 'qa-tools', requiredLevel: 2 },
  { positionId: 'qa-engineer', seniorityLevel: 'junior', competencyId: 'qa-communication', requiredLevel: 2 },
  { positionId: 'qa-engineer', seniorityLevel: 'junior', competencyId: 'qa-analytical', requiredLevel: 1 },
  { positionId: 'qa-engineer', seniorityLevel: 'junior', competencyId: 'qa-domain', requiredLevel: 1 },
  { positionId: 'qa-engineer', seniorityLevel: 'junior', competencyId: 'qa-security', requiredLevel: 1 },

  // QA Engineer - Mid
  { positionId: 'qa-engineer', seniorityLevel: 'mid', competencyId: 'qa-manual-testing', requiredLevel: 3 },
  { positionId: 'qa-engineer', seniorityLevel: 'mid', competencyId: 'qa-automation', requiredLevel: 2 },
  { positionId: 'qa-engineer', seniorityLevel: 'mid', competencyId: 'qa-api-testing', requiredLevel: 3 },
  { positionId: 'qa-engineer', seniorityLevel: 'mid', competencyId: 'qa-tools', requiredLevel: 3 },
  { positionId: 'qa-engineer', seniorityLevel: 'mid', competencyId: 'qa-communication', requiredLevel: 3 },
  { positionId: 'qa-engineer', seniorityLevel: 'mid', competencyId: 'qa-analytical', requiredLevel: 3 },
  { positionId: 'qa-engineer', seniorityLevel: 'mid', competencyId: 'qa-domain', requiredLevel: 2 },
  { positionId: 'qa-engineer', seniorityLevel: 'mid', competencyId: 'qa-security', requiredLevel: 2 },

  // QA Automation Engineer - Mid
  { positionId: 'qa-automation', seniorityLevel: 'mid', competencyId: 'qa-manual-testing', requiredLevel: 2 },
  { positionId: 'qa-automation', seniorityLevel: 'mid', competencyId: 'qa-automation', requiredLevel: 3 },
  { positionId: 'qa-automation', seniorityLevel: 'mid', competencyId: 'qa-api-testing', requiredLevel: 3 },
  { positionId: 'qa-automation', seniorityLevel: 'mid', competencyId: 'qa-tools', requiredLevel: 3 },
  { positionId: 'qa-automation', seniorityLevel: 'mid', competencyId: 'qa-communication', requiredLevel: 3 },
  { positionId: 'qa-automation', seniorityLevel: 'mid', competencyId: 'qa-analytical', requiredLevel: 3 },
  { positionId: 'qa-automation', seniorityLevel: 'mid', competencyId: 'qa-domain', requiredLevel: 3 },
  { positionId: 'qa-automation', seniorityLevel: 'mid', competencyId: 'qa-security', requiredLevel: 2 },

  // QA Automation Engineer - Senior
  { positionId: 'qa-automation', seniorityLevel: 'senior', competencyId: 'qa-manual-testing', requiredLevel: 3 },
  { positionId: 'qa-automation', seniorityLevel: 'senior', competencyId: 'qa-automation', requiredLevel: 4 },
  { positionId: 'qa-automation', seniorityLevel: 'senior', competencyId: 'qa-api-testing', requiredLevel: 4 },
  { positionId: 'qa-automation', seniorityLevel: 'senior', competencyId: 'qa-tools', requiredLevel: 4 },
  { positionId: 'qa-automation', seniorityLevel: 'senior', competencyId: 'qa-communication', requiredLevel: 4 },
  { positionId: 'qa-automation', seniorityLevel: 'senior', competencyId: 'qa-analytical', requiredLevel: 4 },
  { positionId: 'qa-automation', seniorityLevel: 'senior', competencyId: 'qa-domain', requiredLevel: 4 },
  { positionId: 'qa-automation', seniorityLevel: 'senior', competencyId: 'qa-security', requiredLevel: 3 },

  // QA Lead - Lead
  { positionId: 'qa-lead', seniorityLevel: 'lead', competencyId: 'qa-manual-testing', requiredLevel: 5 },
  { positionId: 'qa-lead', seniorityLevel: 'lead', competencyId: 'qa-automation', requiredLevel: 4 },
  { positionId: 'qa-lead', seniorityLevel: 'lead', competencyId: 'qa-api-testing', requiredLevel: 4 },
  { positionId: 'qa-lead', seniorityLevel: 'lead', competencyId: 'qa-tools', requiredLevel: 5 },
  { positionId: 'qa-lead', seniorityLevel: 'lead', competencyId: 'qa-communication', requiredLevel: 5 },
  { positionId: 'qa-lead', seniorityLevel: 'lead', competencyId: 'qa-analytical', requiredLevel: 5 },
  { positionId: 'qa-lead', seniorityLevel: 'lead', competencyId: 'qa-domain', requiredLevel: 4 },
  { positionId: 'qa-lead', seniorityLevel: 'lead', competencyId: 'qa-security', requiredLevel: 4 },
];
