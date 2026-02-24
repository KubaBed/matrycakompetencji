import { Competency, PositionRequirement } from '@/types/competency';

export const mobileCompetencies: Competency[] = [
  // Hard Skills
  {
    id: 'mobile-programming',
    name: 'Programowanie mobilne',
    description: 'Znajomość języków i frameworków do tworzenia aplikacji mobilnych',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawowa znajomość składni i prostych komponentów' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielne tworzenie prostych ekranów i funkcji' },
      { level: 3, name: 'Kompetentny', description: 'Pełna implementacja złożonych funkcjonalności' },
      { level: 4, name: 'Zaawansowany', description: 'Optymalizacja, architektura, mentoring juniorów' },
      { level: 5, name: 'Ekspert', description: 'Definiowanie standardów, rozwiązywanie najtrudniejszych problemów' },
    ],
  },
  {
    id: 'mobile-architecture',
    name: 'Architektura aplikacji',
    description: 'Projektowanie struktury i wzorców architektonicznych aplikacji mobilnych',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Rozumienie podstawowych wzorców (MVC)' },
      { level: 2, name: 'Rozwijający się', description: 'Stosowanie MVVM, podstawowa modularyzacja' },
      { level: 3, name: 'Kompetentny', description: 'Clean Architecture, dependency injection' },
      { level: 4, name: 'Zaawansowany', description: 'Projektowanie skalowalnych rozwiązań' },
      { level: 5, name: 'Ekspert', description: 'Definiowanie architektury dla całych zespołów' },
    ],
  },
  {
    id: 'mobile-ui',
    name: 'UI/UX Implementation',
    description: 'Implementacja interfejsów użytkownika zgodnie z wytycznymi projektowymi',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawowe komponenty UI' },
      { level: 2, name: 'Rozwijający się', description: 'Responsywne layouty, animacje podstawowe' },
      { level: 3, name: 'Kompetentny', description: 'Pixel-perfect implementation, custom components' },
      { level: 4, name: 'Zaawansowany', description: 'Zaawansowane animacje, accessibility' },
      { level: 5, name: 'Ekspert', description: 'Design system, performance optimization' },
    ],
  },
  {
    id: 'mobile-testing',
    name: 'Testowanie',
    description: 'Pisanie i utrzymanie testów jednostkowych, integracyjnych i UI',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawowe testy jednostkowe' },
      { level: 2, name: 'Rozwijający się', description: 'Testy z mockami, coverage > 50%' },
      { level: 3, name: 'Kompetentny', description: 'Testy integracyjne, UI testy' },
      { level: 4, name: 'Zaawansowany', description: 'TDD, strategie testowania' },
      { level: 5, name: 'Ekspert', description: 'Automatyzacja CI/CD, test infrastructure' },
    ],
  },
  {
    id: 'platform-ios',
    name: 'iOS Platform',
    description: 'Znajomość specyfiki platformy iOS i ekosystemu Apple',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawy Swift/SwiftUI' },
      { level: 2, name: 'Rozwijający się', description: 'UIKit, Core Data podstawy' },
      { level: 3, name: 'Kompetentny', description: 'Pełne API iOS, App Store submission' },
      { level: 4, name: 'Zaawansowany', description: 'Widgets, Extensions, WatchOS' },
      { level: 5, name: 'Ekspert', description: 'Low-level APIs, performance tuning' },
    ],
  },
  {
    id: 'platform-android',
    name: 'Android Platform',
    description: 'Znajomość specyfiki platformy Android i ekosystemu Google',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawy Kotlin, Compose' },
      { level: 2, name: 'Rozwijający się', description: 'Android SDK, Room DB' },
      { level: 3, name: 'Kompetentny', description: 'Pełne API Android, Play Store' },
      { level: 4, name: 'Zaawansowany', description: 'Widgets, Work Manager, Wear OS' },
      { level: 5, name: 'Ekspert', description: 'NDK, performance optimization' },
    ],
  },
  {
    id: 'mobile-automation',
    name: 'Automatyzacja pracy',
    description: 'Automatyzacja procesów budowania, testowania i wdrażania aplikacji',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawowa obsługa CI/CD. Rozumie pipeline.' },
      { level: 2, name: 'Rozwijający się', description: 'Konfiguracja prostych pipeline. Automatyczne buildy.' },
      { level: 3, name: 'Kompetentny', description: 'Zaawansowane pipeline CI/CD. Fastlane. Automatyczne testy.' },
      { level: 4, name: 'Zaawansowany', description: 'Projektowanie infrastruktury CI/CD. Code signing automation.' },
      { level: 5, name: 'Ekspert', description: 'DevOps strategy dla mobile. Platform engineering.' },
    ],
  },
  {
    id: 'mobile-dart',
    name: 'Programowanie w języku Dart',
    description: 'Znajomość języka Dart i jego ekosystemu',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawy składni Dart. Typy danych, funkcje.' },
      { level: 2, name: 'Rozwijający się', description: 'Async/await, Streams. OOP w Dart. Null safety.' },
      { level: 3, name: 'Kompetentny', description: 'Generics, Extensions, Mixins. Zaawansowane wzorce.' },
      { level: 4, name: 'Zaawansowany', description: 'Isolates, FFI. Performance optimization. Code generation.' },
      { level: 5, name: 'Ekspert', description: 'Deep Dart internals. Własne pakiety. Compiler-level understanding.' },
    ],
  },
  {
    id: 'mobile-flutter-env',
    name: 'Znajomość środowiska Flutter',
    description: 'Znajomość frameworka Flutter, jego narzędzi i ekosystemu',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawowe widgety. Hot reload. Flutter CLI basics.' },
      { level: 2, name: 'Rozwijający się', description: 'State management (Provider/Riverpod). Nawigacja. Pakiety.' },
      { level: 3, name: 'Kompetentny', description: 'Custom widgets. Platform channels. Flutter DevTools.' },
      { level: 4, name: 'Zaawansowany', description: 'Flutter internals. Rendering pipeline. Performance profiling.' },
      { level: 5, name: 'Ekspert', description: 'Flutter engine. Custom renderers. Framework contributions.' },
    ],
  },
  {
    id: 'mobile-ai',
    name: 'Wykorzystanie sztucznej inteligencji (AI) w codziennej pracy',
    description: 'Umiejętność efektywnego korzystania z narzędzi AI w developmencie mobilnym',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zna podstawowe narzędzia AI. Używa ich do prostych zadań.' },
      { level: 2, name: 'Rozwijający się', description: 'Regularnie korzysta z AI do code review i generowania kodu.' },
      { level: 3, name: 'Kompetentny', description: 'Efektywnie promptuje AI. Integruje narzędzia AI w workflow.' },
      { level: 4, name: 'Zaawansowany', description: 'Buduje własne narzędzia z AI. Optymalizuje procesy zespołu.' },
      { level: 5, name: 'Ekspert', description: 'Definiuje strategię AI dla zespołu. Thought leadership.' },
    ],
  },
  // Soft Skills
  {
    id: 'mobile-communication-soft',
    name: 'Komunikacja z innymi',
    description: 'Efektywna komunikacja z zespołem i interesariuszami',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Jasne raportowanie statusu pracy. Zadaje pytania.' },
      { level: 2, name: 'Rozwijający się', description: 'Aktywny udział w dyskusjach technicznych. Code review.' },
      { level: 3, name: 'Kompetentny', description: 'Prezentacje techniczne. Dokumentacja. Prowadzenie dyskusji.' },
      { level: 4, name: 'Zaawansowany', description: 'Komunikacja z klientem. Cross-team collaboration.' },
      { level: 5, name: 'Ekspert', description: 'Reprezentowanie firmy. Thought leadership.' },
    ],
  },
  {
    id: 'mobile-teamwork',
    name: 'Praca zespołowa',
    description: 'Współpraca z innymi członkami zespołu',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Efektywna praca z pomocą mentora.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielna praca w zespole. Code review.' },
      { level: 3, name: 'Kompetentny', description: 'Pair programming. Dzielenie się wiedzą.' },
      { level: 4, name: 'Zaawansowany', description: 'Koordynacja pracy zespołu.' },
      { level: 5, name: 'Ekspert', description: 'Budowanie kultury zespołowej.' },
    ],
  },
  {
    id: 'mobile-independence',
    name: 'Samodzielność',
    description: 'Zdolność do samodzielnego podejmowania decyzji i realizacji zadań',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Realizuje zadania z pomocą mentora.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielnie realizuje proste zadania.' },
      { level: 3, name: 'Kompetentny', description: 'Samodzielnie realizuje złożone zadania.' },
      { level: 4, name: 'Zaawansowany', description: 'Samodzielnie prowadzi projekty.' },
      { level: 5, name: 'Ekspert', description: 'Pełna autonomia. Definiuje kierunki technologiczne.' },
    ],
  },
  {
    id: 'mobile-work-organization',
    name: 'Organizacja pracy własnej',
    description: 'Planowanie, priorytetyzacja i efektywne zarządzanie czasem',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Realizuje przydzielone zadania w czasie.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielna priorytetyzacja. Dotrzymuje terminów.' },
      { level: 3, name: 'Kompetentny', description: 'Efektywne zarządzanie wieloma zadaniami.' },
      { level: 4, name: 'Zaawansowany', description: 'Optymalizacja procesów pracy zespołu.' },
      { level: 5, name: 'Ekspert', description: 'Definiowanie procesów organizacyjnych.' },
    ],
  },
  {
    id: 'mobile-experience',
    name: 'Doświadczenie / dojrzałość',
    description: 'Dojrzałość zawodowa i umiejętność podejmowania decyzji',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zaczyna karierę. Chętnie się uczy.' },
      { level: 2, name: 'Rozwijający się', description: 'Doświadczenie z kilkoma projektami.' },
      { level: 3, name: 'Kompetentny', description: 'Uczy się na błędach. Świadome decyzje.' },
      { level: 4, name: 'Zaawansowany', description: 'Bogate doświadczenie. Mentor dla innych.' },
      { level: 5, name: 'Ekspert', description: 'Ekspert branżowy. Strategiczne myślenie.' },
    ],
  },
  {
    id: 'mobile-flexibility',
    name: 'Elastyczność / adaptacyjność',
    description: 'Zdolność do adaptacji w dynamicznym środowisku',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Akceptuje zmiany. Uczy się nowych technologii z pomocą.' },
      { level: 2, name: 'Rozwijający się', description: 'Adaptuje się do zmian priorytetów.' },
      { level: 3, name: 'Kompetentny', description: 'Szybko adaptuje się do nowych technologii.' },
      { level: 4, name: 'Zaawansowany', description: 'Prowadzi zespół przez zmiany.' },
      { level: 5, name: 'Ekspert', description: 'Change agent. Napędza innowacje.' },
    ],
  },
];

// Soft skill IDs — universal level 3 for Jun/Mid/Sen
const mobileSoftSkillIds = [
  'mobile-communication-soft', 'mobile-teamwork', 'mobile-independence',
  'mobile-work-organization', 'mobile-experience', 'mobile-flexibility',
];

function softReqs(positionId: string): PositionRequirement[] {
  const levels: Array<'junior' | 'mid' | 'senior'> = ['junior', 'mid', 'senior'];
  return levels.flatMap(seniority =>
    mobileSoftSkillIds.map(competencyId => ({
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

export const mobileRequirements: PositionRequirement[] = [
  req('flutter-developer', 'junior', 'mobile-programming', 2),
  req('flutter-developer', 'mid',    'mobile-programming', 3),
  req('flutter-developer', 'senior', 'mobile-programming', 4),
  req('flutter-developer', 'junior', 'mobile-architecture', 2),
  req('flutter-developer', 'mid',    'mobile-architecture', 3),
  req('flutter-developer', 'senior', 'mobile-architecture', 4),
  req('flutter-developer', 'junior', 'mobile-ui', 2),
  req('flutter-developer', 'mid',    'mobile-ui', 3),
  req('flutter-developer', 'senior', 'mobile-ui', 4),
  req('flutter-developer', 'junior', 'mobile-testing', 2),
  req('flutter-developer', 'mid',    'mobile-testing', 3),
  req('flutter-developer', 'senior', 'mobile-testing', 4),
  req('flutter-developer', 'junior', 'platform-ios', 1),
  req('flutter-developer', 'mid',    'platform-ios', 2),
  req('flutter-developer', 'senior', 'platform-ios', 3),
  req('flutter-developer', 'junior', 'platform-android', 1),
  req('flutter-developer', 'mid',    'platform-android', 2),
  req('flutter-developer', 'senior', 'platform-android', 3),
  req('flutter-developer', 'junior', 'mobile-automation', 2),
  req('flutter-developer', 'mid',    'mobile-automation', 3),
  req('flutter-developer', 'senior', 'mobile-automation', 4),
  req('flutter-developer', 'junior', 'mobile-dart', 2),
  req('flutter-developer', 'mid',    'mobile-dart', 3),
  req('flutter-developer', 'senior', 'mobile-dart', 5),
  req('flutter-developer', 'junior', 'mobile-flutter-env', 2),
  req('flutter-developer', 'mid',    'mobile-flutter-env', 3),
  req('flutter-developer', 'senior', 'mobile-flutter-env', 5),
  req('flutter-developer', 'junior', 'mobile-ai', 2),
  req('flutter-developer', 'mid',    'mobile-ai', 3),
  req('flutter-developer', 'senior', 'mobile-ai', 4),
  ...softReqs('flutter-developer'),
];
