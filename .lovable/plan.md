
# Plan: Aktualizacja danych Matrycy Kompetencji (ewaluacja 2026)

## Podsumowanie

Aktualizacja TYLKO plików z danymi - bez zmian w UI. Zmiany obejmuja nowe stanowiska, usunięcie starych kompetencji, dodanie 7 nowych kompetencji miękkich i powiązanie ich z odpowiednimi stanowiskami.

---

## 1. Aktualizacja stanowisk (`src/data/departments.ts`)

### WEB - zmiana listy pozycji
| Stare | Nowe |
|-------|------|
| Frontend Developer (j/m/s/lead) | Front-End Developer (j/m/s) |
| Backend Developer (j/m/s/lead) | Backend Developer (j/m/s) |
| Fullstack Developer (m/s/lead) | Fullstack Developer (j/m/s) |
| Web Architect (s/lead/expert) | Python Developer (j/m/s/lead) -- NOWE |

### MOBILE - redukcja do jednego stanowiska
| Stare | Nowe |
|-------|------|
| iOS Developer, Android Developer, Flutter Developer, Mobile Architect | Flutter Developer (j/m/s) |

### QA - redukcja do jednego stanowiska
| Stare | Nowe |
|-------|------|
| QA Engineer, QA Automation Engineer, QA Lead | Quality Assurance Specialist (j/m/s) |

### PM - redukcja do jednego stanowiska
| Stare | Nowe |
|-------|------|
| Project Coordinator, Project Manager, Program Manager | Project Manager (j/m/s/lead) |

### SALES - bez zmian w stanowiskach

---

## 2. Usunięcie kompetencji

| Dział | Kompetencja do usunięcia | ID |
|-------|--------------------------|-----|
| WEB | Komunikacja techniczna | `web-communication` |
| QA | Narzędzia QA | `qa-tools` |
| QA | Komunikacja i współpraca | `qa-communication` |
| QA | Myślenie analityczne | `qa-analytical` |
| PM | Komunikacja i raportowanie | `pm-communication` |
| PM | Przywództwo zespołu | `pm-leadership` |
| PM | Znajomość IT i software development | `pm-it-domain` |

Usunięte zostaną rowniez wszystkie `PositionRequirement` odwołujące się do tych ID.

---

## 3. Dodanie 7 nowych kompetencji (soft) do WSZYSTKICH działów

Każda kompetencja zostanie dodana do każdego z 5 działów z prefixem działu (np. `web-ai`, `qa-ai`, `pm-ai`, `mobile-ai`, `sales-ai`):

| Kompetencja | Kategoria |
|-------------|-----------|
| Wykorzystanie sztucznej inteligencji (AI) w codziennej pracy | soft |
| Komunikacja z innymi | soft |
| Praca zespołowa | soft |
| Samodzielność | soft |
| Organizacja pracy własnej | soft |
| Doświadczenie / dojrzałość | soft |
| Elastyczność / adaptacyjność | soft |

Każda kompetencja będzie miała 5 poziomów z opisami dopasowanymi do kontekstu danego działu.

---

## 4. Nowe wymagania (`PositionRequirement`)

Domyślne mapowanie `requiredLevel` dla nowych kompetencji:

| Seniority | requiredLevel |
|-----------|---------------|
| junior | 1 |
| mid | 2 |
| senior | 3 |
| lead | 4 |

Każde nowe stanowisko dostanie powiązania ze wszystkimi kompetencjami swojego działu (zarówno istniejące twarde/specjalistyczne, jak i nowe miękkie).

---

## 5. Pliki do edycji

| Plik | Zakres zmian |
|------|-------------|
| `src/data/departments.ts` | Aktualizacja listy `positions` dla web, mobile, qa, pm |
| `src/data/competencies/web.ts` | Usunięcie `web-communication`, dodanie 7 nowych soft, nowe requirements dla python-developer i zaktualizowane dla reszty |
| `src/data/competencies/mobile.ts` | Usunięcie starych pozycji z requirements, dodanie 7 nowych soft, requirements tylko dla flutter-developer j/m/s |
| `src/data/competencies/qa.ts` | Usunięcie `qa-tools`, `qa-communication`, `qa-analytical`, dodanie 7 nowych soft, requirements tylko dla qa-specialist j/m/s |
| `src/data/competencies/pm.ts` | Usunięcie `pm-communication`, `pm-leadership`, `pm-it-domain`, dodanie 7 nowych soft, requirements tylko dla project-manager j/m/s/lead |
| `src/data/competencies/sales.ts` | Dodanie 7 nowych soft, requirements zaktualizowane o nowe kompetencje |

Typ `SeniorityLevel` w `src/types/competency.ts` nie wymaga zmian - `lead` jest już zdefiniowany.
