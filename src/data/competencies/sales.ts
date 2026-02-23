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
  {
    id: 'sales-ai',
    name: 'Wykorzystanie sztucznej inteligencji (AI) w codziennej pracy',
    description: 'Umiejętność efektywnego korzystania z narzędzi AI w procesie sprzedaży',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zna podstawowe narzędzia AI. Używa ich do prostych zadań sprzedażowych.' },
      { level: 2, name: 'Rozwijający się', description: 'Korzysta z AI do przygotowywania ofert, maili i analiz.' },
      { level: 3, name: 'Kompetentny', description: 'Efektywnie promptuje AI. Integruje AI w workflow sprzedażowy.' },
      { level: 4, name: 'Zaawansowany', description: 'Buduje narzędzia AI do optymalizacji sprzedaży. Automatyzacja procesów.' },
      { level: 5, name: 'Ekspert', description: 'Definiuje strategię AI w sprzedaży. Thought leadership.' },
    ],
  },
  {
    id: 'sales-communication-soft',
    name: 'Komunikacja z innymi',
    description: 'Efektywna komunikacja wewnętrzna z zespołem i organizacją',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Jasne raportowanie statusu. Zadaje pytania.' },
      { level: 2, name: 'Rozwijający się', description: 'Aktywny udział w spotkaniach zespołu. Dzieli się wiedzą.' },
      { level: 3, name: 'Kompetentny', description: 'Prowadzi spotkania. Prezentacje wewnętrzne. Mentoring.' },
      { level: 4, name: 'Zaawansowany', description: 'Komunikacja cross-team. Współpraca z innymi działami.' },
      { level: 5, name: 'Ekspert', description: 'Reprezentowanie firmy. Executive communication.' },
    ],
  },
  {
    id: 'sales-teamwork',
    name: 'Praca zespołowa',
    description: 'Współpraca z innymi członkami zespołu sprzedażowego',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Efektywna praca z pomocą mentora.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielna praca w zespole. Współpraca z innymi.' },
      { level: 3, name: 'Kompetentny', description: 'Dzielenie się leadami i wiedzą. Wsparcie kolegów.' },
      { level: 4, name: 'Zaawansowany', description: 'Koordynacja pracy zespołu sprzedażowego.' },
      { level: 5, name: 'Ekspert', description: 'Budowanie kultury zespołowej. Mentoring.' },
    ],
  },
  {
    id: 'sales-independence',
    name: 'Samodzielność',
    description: 'Zdolność do samodzielnego podejmowania decyzji sprzedażowych',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Realizuje zadania z pomocą mentora.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielnie prowadzi proste procesy sprzedażowe.' },
      { level: 3, name: 'Kompetentny', description: 'Samodzielnie zarządza pipeline i klientami.' },
      { level: 4, name: 'Zaawansowany', description: 'Samodzielnie prowadzi strategiczne konta.' },
      { level: 5, name: 'Ekspert', description: 'Pełna autonomia. Strategiczne decyzje sprzedażowe.' },
    ],
  },
  {
    id: 'sales-work-organization',
    name: 'Organizacja pracy własnej',
    description: 'Planowanie, priorytetyzacja i efektywne zarządzanie czasem',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Realizuje przydzielone zadania w czasie.' },
      { level: 2, name: 'Rozwijający się', description: 'Samodzielna priorytetyzacja. Dotrzymuje terminów.' },
      { level: 3, name: 'Kompetentny', description: 'Efektywne zarządzanie wieloma klientami i dealami.' },
      { level: 4, name: 'Zaawansowany', description: 'Optymalizacja procesów sprzedażowych.' },
      { level: 5, name: 'Ekspert', description: 'Definiowanie procesów organizacyjnych sprzedaży.' },
    ],
  },
  {
    id: 'sales-experience',
    name: 'Doświadczenie / dojrzałość',
    description: 'Dojrzałość zawodowa i umiejętność podejmowania decyzji',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Zaczyna karierę w sprzedaży. Chętnie się uczy.' },
      { level: 2, name: 'Rozwijający się', description: 'Doświadczenie z kilkoma klientami i dealami.' },
      { level: 3, name: 'Kompetentny', description: 'Uczy się na błędach. Świadome decyzje sprzedażowe.' },
      { level: 4, name: 'Zaawansowany', description: 'Bogate doświadczenie. Mentor dla innych.' },
      { level: 5, name: 'Ekspert', description: 'Ekspert sprzedażowy. Strategiczne myślenie.' },
    ],
  },
  {
    id: 'sales-flexibility',
    name: 'Elastyczność / adaptacyjność',
    description: 'Zdolność do adaptacji w dynamicznym środowisku sprzedażowym',
    category: 'soft',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Akceptuje zmiany w strategii sprzedaży.' },
      { level: 2, name: 'Rozwijający się', description: 'Adaptuje się do zmian rynkowych i priorytetów.' },
      { level: 3, name: 'Kompetentny', description: 'Szybko adaptuje się do nowych produktów i rynków.' },
      { level: 4, name: 'Zaawansowany', description: 'Prowadzi zespół przez zmiany strategii.' },
      { level: 5, name: 'Ekspert', description: 'Change agent. Napędza innowacje w sprzedaży.' },
    ],
  },
  // Kompetencje specjalistyczne
  {
    id: 'sales-industry',
    name: 'Znajomość branży IT',
    description: 'Rozumienie rynku IT, trendów technologicznych i potrzeb klientów',
    category: 'hard',
    levels: [
      { level: 1, name: 'Początkujący', description: 'Podstawowa znajomość oferty firmy. Rozumie główne usługi.' },
      { level: 2, name: 'Rozwijający się', description: 'Zna konkurencję. Rozumie podstawowe technologie. Śledzi trendy.' },
      { level: 3, name: 'Kompetentny', description: 'Ekspert od oferty firmy. Rozumie potrzeby techniczne klientów. Doradza rozwiązania.' },
      { level: 4, name: 'Zaawansowany', description: 'Głęboka znajomość rynku. Identyfikuje nowe możliwości. Strategic selling.' },
      { level: 5, name: 'Ekspert', description: 'Thought leader w branży. Kształtuje ofertę firmy. Rozpoznawalność w branży.' },
    ],
  },
];

const salesCompetencyIds = salesCompetencies.map(c => c.id);

function genReqs(positionId: string, seniorityLevel: 'junior' | 'mid' | 'senior' | 'lead' | 'expert', level: number): PositionRequirement[] {
  return salesCompetencyIds.map(competencyId => ({
    positionId,
    seniorityLevel,
    competencyId,
    requiredLevel: level,
  }));
}

export const salesRequirements: PositionRequirement[] = [
  // Sales Representative
  ...genReqs('sales-rep', 'junior', 1),
  ...genReqs('sales-rep', 'mid', 2),
  ...genReqs('sales-rep', 'senior', 3),

  // Account Manager
  ...genReqs('account-manager', 'mid', 2),
  ...genReqs('account-manager', 'senior', 3),
  ...genReqs('account-manager', 'lead', 4),

  // Sales Director
  ...genReqs('sales-director', 'senior', 3),
  ...genReqs('sales-director', 'lead', 4),
  ...genReqs('sales-director', 'expert', 5),
];
