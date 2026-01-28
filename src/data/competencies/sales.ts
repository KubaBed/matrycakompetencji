import { Competency, PositionRequirement } from '@/types/competency';

export const salesCompetencies: Competency[] = [
  // Kompetencje twarde
  {
    id: 'sales-process',
    name: 'Proces sprzedażowy',
    description: 'Znajomość i stosowanie metodologii sprzedaży B2B',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zna podstawowe etapy procesu sprzedażowego. Uczestniczy w spotkaniach jako obserwator.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielnie prowadzi proste rozmowy z klientami. Przygotowuje podstawowe oferty pod nadzorem.' },
      { level: 3, name: 'Kompetentny', description: 'Samodzielnie prowadzi pełny cykl sprzedażowy. Negocjuje warunki umów. Buduje długoterminowe relacje.' },
      { level: 4, name: 'Zaawansowany', description: 'Zarządza złożonymi procesami sprzedażowymi. Prowadzi negocjacje strategiczne. Mentoruje juniorów.' },
      { level: 5, name: 'Ekspert', description: 'Definiuje i optymalizuje procesy sprzedażowe dla całej organizacji. Prowadzi największe deale.' },
    ],
  },
  {
    id: 'sales-crm',
    name: 'CRM i narzędzia sprzedażowe',
    description: 'Efektywne wykorzystanie systemów CRM i narzędzi wspierających sprzedaż',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Wprowadza podstawowe dane do CRM. Zna interfejs systemu.' },
      { level: 2, name: 'Rozwijający się', description: 'Regularnie aktualizuje pipeline. Generuje podstawowe raporty.' },
      { level: 3, name: 'Kompetentny', description: 'Pełne wykorzystanie funkcji CRM. Automatyzuje powtarzalne zadania. Analizuje dane sprzedażowe.' },
      { level: 4, name: 'Zaawansowany', description: 'Konfiguruje zaawansowane workflow. Tworzy dashboardy i raporty dla zespołu.' },
      { level: 5, name: 'Ekspert', description: 'Projektuje procesy CRM dla organizacji. Integruje narzędzia. Szkoli innych.' },
    ],
  },
  {
    id: 'sales-presentation',
    name: 'Prezentacje i demo',
    description: 'Prowadzenie prezentacji produktowych i demonstracji rozwiązań',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Prezentuje przygotowane materiały. Odpowiada na proste pytania.' },
      { level: 2, name: 'Rozwijający się', description: 'Dostosowuje prezentacje do odbiorcy. Prowadzi podstawowe demo produktu.' },
      { level: 3, name: 'Kompetentny', description: 'Tworzy angażujące prezentacje. Prowadzi zaawansowane demo. Radzi sobie z trudnymi pytaniami.' },
      { level: 4, name: 'Zaawansowany', description: 'Prezentacje dla C-level. Storytelling sprzedażowy. Prowadzenie warsztatów.' },
      { level: 5, name: 'Ekspert', description: 'Reprezentuje firmę na konferencjach. Tworzy standardy prezentacji. Keynote speaker.' },
    ],
  },
  {
    id: 'sales-negotiation',
    name: 'Negocjacje',
    description: 'Prowadzenie negocjacji handlowych i finalizacja umów',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Obserwuje negocjacje. Przygotowuje materiały wspierające.' },
      { level: 2, name: 'Rozwijający się', description: 'Prowadzi proste negocjacje cenowe. Zna podstawowe techniki.' },
      { level: 3, name: 'Kompetentny', description: 'Samodzielne negocjacje warunków umów. Win-win approach. Zamykanie deali.' },
      { level: 4, name: 'Zaawansowany', description: 'Negocjacje strategiczne. Złożone struktury cenowe. Eskalacja i deeskalacja.' },
      { level: 5, name: 'Ekspert', description: 'Negocjacje na poziomie zarządu. Umowy ramowe. Partnerstwa strategiczne.' },
    ],
  },
  // Kompetencje miękkie
  {
    id: 'sales-communication',
    name: 'Komunikacja z klientem',
    description: 'Budowanie relacji i efektywna komunikacja z klientami',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Profesjonalna komunikacja mailowa i telefoniczna. Aktywne słuchanie.' },
      { level: 2, name: 'Rozwijający się', description: 'Buduje rapport z klientami. Dostosowuje styl komunikacji do rozmówcy.' },
      { level: 3, name: 'Kompetentny', description: 'Trusted advisor dla klientów. Proaktywna komunikacja. Rozwiązywanie konfliktów.' },
      { level: 4, name: 'Zaawansowany', description: 'Komunikacja z C-level. Influence bez autorytetu. Budowanie długoterminowych partnerstw.' },
      { level: 5, name: 'Ekspert', description: 'Ambasador firmy. Thought leadership. Kreowanie wizerunku eksperta branżowego.' },
    ],
  },
  {
    id: 'sales-resilience',
    name: 'Odporność i motywacja',
    description: 'Radzenie sobie z odmowami i utrzymanie wysokiej motywacji',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Akceptuje feedback. Uczy się na błędach. Potrzebuje wsparcia przy odmowach.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielnie radzi sobie z odmowami. Utrzymuje pozytywne nastawienie.' },
      { level: 3, name: 'Kompetentny', description: 'Przekuwa odmowy w lekcje. Konsekwentnie realizuje cele. Samodyscyplina.' },
      { level: 4, name: 'Zaawansowany', description: 'Motywuje innych w zespole. Zarządza stresem. Prowadzi przez trudne okresy.' },
      { level: 5, name: 'Ekspert', description: 'Buduje kulturę odporności w zespole. Role model. Mentor dla innych.' },
    ],
  },
  // Kompetencje specjalistyczne
  {
    id: 'sales-industry',
    name: 'Znajomość branży IT',
    description: 'Rozumienie rynku IT, trendów technologicznych i potrzeb klientów',
    category: 'specialized',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawowa znajomość oferty firmy. Rozumie główne usługi.' },
      { level: 2, name: 'Rozwijający się', description: 'Zna konkurencję. Rozumie podstawowe technologie. Śledzi trendy.' },
      { level: 3, name: 'Kompetentny', description: 'Ekspert od oferty firmy. Rozumie potrzeby techniczne klientów. Doradza rozwiązania.' },
      { level: 4, name: 'Zaawansowany', description: 'Głęboka znajomość rynku. Identyfikuje nowe możliwości. Strategic selling.' },
      { level: 5, name: 'Ekspert', description: 'Thought leader w branży. Kształtuje ofertę firmy. Rozpoznawalność w branży.' },
    ],
  },
];

export const salesRequirements: PositionRequirement[] = [
  // Sales Representative - Junior
  { positionId: 'sales-rep', seniorityLevel: 'junior', competencyId: 'sales-process', requiredLevel: 2 },
  { positionId: 'sales-rep', seniorityLevel: 'junior', competencyId: 'sales-crm', requiredLevel: 2 },
  { positionId: 'sales-rep', seniorityLevel: 'junior', competencyId: 'sales-presentation', requiredLevel: 1 },
  { positionId: 'sales-rep', seniorityLevel: 'junior', competencyId: 'sales-negotiation', requiredLevel: 1 },
  { positionId: 'sales-rep', seniorityLevel: 'junior', competencyId: 'sales-communication', requiredLevel: 2 },
  { positionId: 'sales-rep', seniorityLevel: 'junior', competencyId: 'sales-resilience', requiredLevel: 2 },
  { positionId: 'sales-rep', seniorityLevel: 'junior', competencyId: 'sales-industry', requiredLevel: 1 },

  // Sales Representative - Mid
  { positionId: 'sales-rep', seniorityLevel: 'mid', competencyId: 'sales-process', requiredLevel: 3 },
  { positionId: 'sales-rep', seniorityLevel: 'mid', competencyId: 'sales-crm', requiredLevel: 3 },
  { positionId: 'sales-rep', seniorityLevel: 'mid', competencyId: 'sales-presentation', requiredLevel: 3 },
  { positionId: 'sales-rep', seniorityLevel: 'mid', competencyId: 'sales-negotiation', requiredLevel: 2 },
  { positionId: 'sales-rep', seniorityLevel: 'mid', competencyId: 'sales-communication', requiredLevel: 3 },
  { positionId: 'sales-rep', seniorityLevel: 'mid', competencyId: 'sales-resilience', requiredLevel: 3 },
  { positionId: 'sales-rep', seniorityLevel: 'mid', competencyId: 'sales-industry', requiredLevel: 2 },

  // Account Manager - Mid
  { positionId: 'account-manager', seniorityLevel: 'mid', competencyId: 'sales-process', requiredLevel: 3 },
  { positionId: 'account-manager', seniorityLevel: 'mid', competencyId: 'sales-crm', requiredLevel: 3 },
  { positionId: 'account-manager', seniorityLevel: 'mid', competencyId: 'sales-presentation', requiredLevel: 3 },
  { positionId: 'account-manager', seniorityLevel: 'mid', competencyId: 'sales-negotiation', requiredLevel: 3 },
  { positionId: 'account-manager', seniorityLevel: 'mid', competencyId: 'sales-communication', requiredLevel: 4 },
  { positionId: 'account-manager', seniorityLevel: 'mid', competencyId: 'sales-resilience', requiredLevel: 3 },
  { positionId: 'account-manager', seniorityLevel: 'mid', competencyId: 'sales-industry', requiredLevel: 3 },

  // Account Manager - Senior
  { positionId: 'account-manager', seniorityLevel: 'senior', competencyId: 'sales-process', requiredLevel: 4 },
  { positionId: 'account-manager', seniorityLevel: 'senior', competencyId: 'sales-crm', requiredLevel: 4 },
  { positionId: 'account-manager', seniorityLevel: 'senior', competencyId: 'sales-presentation', requiredLevel: 4 },
  { positionId: 'account-manager', seniorityLevel: 'senior', competencyId: 'sales-negotiation', requiredLevel: 4 },
  { positionId: 'account-manager', seniorityLevel: 'senior', competencyId: 'sales-communication', requiredLevel: 4 },
  { positionId: 'account-manager', seniorityLevel: 'senior', competencyId: 'sales-resilience', requiredLevel: 4 },
  { positionId: 'account-manager', seniorityLevel: 'senior', competencyId: 'sales-industry', requiredLevel: 4 },

  // Sales Director - Lead
  { positionId: 'sales-director', seniorityLevel: 'lead', competencyId: 'sales-process', requiredLevel: 5 },
  { positionId: 'sales-director', seniorityLevel: 'lead', competencyId: 'sales-crm', requiredLevel: 4 },
  { positionId: 'sales-director', seniorityLevel: 'lead', competencyId: 'sales-presentation', requiredLevel: 5 },
  { positionId: 'sales-director', seniorityLevel: 'lead', competencyId: 'sales-negotiation', requiredLevel: 5 },
  { positionId: 'sales-director', seniorityLevel: 'lead', competencyId: 'sales-communication', requiredLevel: 5 },
  { positionId: 'sales-director', seniorityLevel: 'lead', competencyId: 'sales-resilience', requiredLevel: 5 },
  { positionId: 'sales-director', seniorityLevel: 'lead', competencyId: 'sales-industry', requiredLevel: 5 },
];
