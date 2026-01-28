import { Competency, PositionRequirement } from '@/types/competency';

// Mobile Development Competencies (placeholder - will be filled from Excel)
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
  // Soft Skills
  {
    id: 'communication',
    name: 'Komunikacja',
    description: 'Efektywna komunikacja z zespołem i interesariuszami',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Jasne raportowanie statusu pracy' },
      { level: 2, name: 'Rozwijający się', description: 'Aktywny udział w dyskusjach technicznych' },
      { level: 3, name: 'Kompetentny', description: 'Prezentacje techniczne, dokumentacja' },
      { level: 4, name: 'Zaawansowany', description: 'Facylitacja spotkań, komunikacja z klientem' },
      { level: 5, name: 'Ekspert', description: 'Reprezentowanie firmy, thought leadership' },
    ],
  },
  {
    id: 'teamwork',
    name: 'Praca zespołowa',
    description: 'Współpraca z innymi członkami zespołu',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Efektywna praca z pomocą mentora' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielna praca, code review' },
      { level: 3, name: 'Kompetentny', description: 'Mentoring, pair programming' },
      { level: 4, name: 'Zaawansowany', description: 'Koordynacja pracy zespołu' },
      { level: 5, name: 'Ekspert', description: 'Budowanie kultury zespołowej' },
    ],
  },
  {
    id: 'problem-solving',
    name: 'Rozwiązywanie problemów',
    description: 'Analiza i rozwiązywanie złożonych problemów technicznych',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Rozwiązywanie prostych bugów z pomocą' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielne debugowanie' },
      { level: 3, name: 'Kompetentny', description: 'Rozwiązywanie złożonych problemów' },
      { level: 4, name: 'Zaawansowany', description: 'Root cause analysis, proaktywne zapobieganie' },
      { level: 5, name: 'Ekspert', description: 'Rozwiązywanie problemów na poziomie organizacji' },
    ],
  },
  // Specialized Skills
  {
    id: 'platform-ios',
    name: 'iOS Platform',
    description: 'Znajomość specyfiki platformy iOS i ekosystemu Apple',
    category: 'specialized',
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
    category: 'specialized',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawy Kotlin, Compose' },
      { level: 2, name: 'Rozwijający się', description: 'Android SDK, Room DB' },
      { level: 3, name: 'Kompetentny', description: 'Pełne API Android, Play Store' },
      { level: 4, name: 'Zaawansowany', description: 'Widgets, Work Manager, Wear OS' },
      { level: 5, name: 'Ekspert', description: 'NDK, performance optimization' },
    ],
  },
];

// Requirements by position and seniority
export const mobileRequirements: PositionRequirement[] = [
  // iOS Developer - Junior
  { positionId: 'ios-developer', seniorityLevel: 'junior', competencyId: 'mobile-programming', requiredLevel: 2 },
  { positionId: 'ios-developer', seniorityLevel: 'junior', competencyId: 'mobile-architecture', requiredLevel: 1 },
  { positionId: 'ios-developer', seniorityLevel: 'junior', competencyId: 'mobile-ui', requiredLevel: 2 },
  { positionId: 'ios-developer', seniorityLevel: 'junior', competencyId: 'mobile-testing', requiredLevel: 1 },
  { positionId: 'ios-developer', seniorityLevel: 'junior', competencyId: 'communication', requiredLevel: 2 },
  { positionId: 'ios-developer', seniorityLevel: 'junior', competencyId: 'teamwork', requiredLevel: 2 },
  { positionId: 'ios-developer', seniorityLevel: 'junior', competencyId: 'problem-solving', requiredLevel: 1 },
  { positionId: 'ios-developer', seniorityLevel: 'junior', competencyId: 'platform-ios', requiredLevel: 2 },

  // iOS Developer - Mid
  { positionId: 'ios-developer', seniorityLevel: 'mid', competencyId: 'mobile-programming', requiredLevel: 3 },
  { positionId: 'ios-developer', seniorityLevel: 'mid', competencyId: 'mobile-architecture', requiredLevel: 2 },
  { positionId: 'ios-developer', seniorityLevel: 'mid', competencyId: 'mobile-ui', requiredLevel: 3 },
  { positionId: 'ios-developer', seniorityLevel: 'mid', competencyId: 'mobile-testing', requiredLevel: 2 },
  { positionId: 'ios-developer', seniorityLevel: 'mid', competencyId: 'communication', requiredLevel: 3 },
  { positionId: 'ios-developer', seniorityLevel: 'mid', competencyId: 'teamwork', requiredLevel: 3 },
  { positionId: 'ios-developer', seniorityLevel: 'mid', competencyId: 'problem-solving', requiredLevel: 2 },
  { positionId: 'ios-developer', seniorityLevel: 'mid', competencyId: 'platform-ios', requiredLevel: 3 },

  // iOS Developer - Senior
  { positionId: 'ios-developer', seniorityLevel: 'senior', competencyId: 'mobile-programming', requiredLevel: 4 },
  { positionId: 'ios-developer', seniorityLevel: 'senior', competencyId: 'mobile-architecture', requiredLevel: 4 },
  { positionId: 'ios-developer', seniorityLevel: 'senior', competencyId: 'mobile-ui', requiredLevel: 4 },
  { positionId: 'ios-developer', seniorityLevel: 'senior', competencyId: 'mobile-testing', requiredLevel: 3 },
  { positionId: 'ios-developer', seniorityLevel: 'senior', competencyId: 'communication', requiredLevel: 4 },
  { positionId: 'ios-developer', seniorityLevel: 'senior', competencyId: 'teamwork', requiredLevel: 4 },
  { positionId: 'ios-developer', seniorityLevel: 'senior', competencyId: 'problem-solving', requiredLevel: 4 },
  { positionId: 'ios-developer', seniorityLevel: 'senior', competencyId: 'platform-ios', requiredLevel: 4 },

  // Android Developer - Junior
  { positionId: 'android-developer', seniorityLevel: 'junior', competencyId: 'mobile-programming', requiredLevel: 2 },
  { positionId: 'android-developer', seniorityLevel: 'junior', competencyId: 'mobile-architecture', requiredLevel: 1 },
  { positionId: 'android-developer', seniorityLevel: 'junior', competencyId: 'mobile-ui', requiredLevel: 2 },
  { positionId: 'android-developer', seniorityLevel: 'junior', competencyId: 'mobile-testing', requiredLevel: 1 },
  { positionId: 'android-developer', seniorityLevel: 'junior', competencyId: 'communication', requiredLevel: 2 },
  { positionId: 'android-developer', seniorityLevel: 'junior', competencyId: 'teamwork', requiredLevel: 2 },
  { positionId: 'android-developer', seniorityLevel: 'junior', competencyId: 'problem-solving', requiredLevel: 1 },
  { positionId: 'android-developer', seniorityLevel: 'junior', competencyId: 'platform-android', requiredLevel: 2 },

  // Flutter Developer - Mid
  { positionId: 'flutter-developer', seniorityLevel: 'mid', competencyId: 'mobile-programming', requiredLevel: 3 },
  { positionId: 'flutter-developer', seniorityLevel: 'mid', competencyId: 'mobile-architecture', requiredLevel: 3 },
  { positionId: 'flutter-developer', seniorityLevel: 'mid', competencyId: 'mobile-ui', requiredLevel: 3 },
  { positionId: 'flutter-developer', seniorityLevel: 'mid', competencyId: 'mobile-testing', requiredLevel: 2 },
  { positionId: 'flutter-developer', seniorityLevel: 'mid', competencyId: 'communication', requiredLevel: 3 },
  { positionId: 'flutter-developer', seniorityLevel: 'mid', competencyId: 'teamwork', requiredLevel: 3 },
  { positionId: 'flutter-developer', seniorityLevel: 'mid', competencyId: 'problem-solving', requiredLevel: 3 },
];
