

# Plan: 6 etapow poprawek z audytu kodu

Prace podzielone na 6 niezaleznych etapow, kazdy odpowiadajacy jednemu promptowi.

---

## Etap 1: Krytyczne bugi - walidacja i odpornosc na bledy

### 1a. Auto-save do sessionStorage (Assessment.tsx)
- W `handleRating` zapisuj `assessments` do sessionStorage z kluczem `assessment-draft-{departmentId}-{positionId}-{level}`
- Przy montowaniu komponentu (`useEffect`) odczytuj draft z sessionStorage i ustaw jako stan poczatkowy
- W `handleSubmit` usun draft z sessionStorage po zapisie finalnych danych

### 1b. Walidacja parametrow URL (Assessment.tsx)
- Sprawdzenie czy `level` jest jednym z `junior | mid | senior | lead | expert`
- Jesli `department` jest null lub `position` nie istnieje - zamiast `return null` (linia 97-99) przekieruj na `/` z toast "Nieprawidlowy link. Sprobuj ponownie."
- Import `toast` z sonner

### 1c. Bezpieczny JSON.parse (Results.tsx)
- Owinienie `JSON.parse(stored)` (linia 38) w try/catch
- W catch: `sessionStorage.removeItem('assessment')`, toast z bledem, `navigate('/')`

### 1d. Jawna sciezka powrotu (Assessment.tsx)
- Zmiana `navigate(-1)` (linia 111) na `navigate(`/assessment/${departmentId}`)`

---

## Etap 2: Strona 404 i spojnosc jezykowa

### Zmiany w NotFound.tsx:
- Polskie teksty: "Ups! Strona nie zostala znaleziona" i "Wroc do strony glownej"
- Uzycie `Button` z `lucide-react Home` zamiast zwyklego `<a>`
- Usunecie `console.error` z `useEffect` (mozna usunac caly useEffect)

---

## Etap 3: Kolory i czyszczenie CSS

### 3a. Usuniecie nieuzywanych klas CSS (index.css)
- Usuniecie `.competency-level-1` do `.competency-level-5` (linie 126-144)

### 3b. Aktualizacja kolorow w competencyLevelConfig (types/competency.ts)
- Level 1: `bg-gray-500` (bez zmian)
- Level 2: `bg-slate-600` -> `bg-amber-500`
- Level 3: `bg-blue-500` -> `bg-emerald-500`
- Level 4: `bg-indigo-500` (bez zmian)
- Level 5: `bg-violet-500` (bez zmian)

---

## Etap 4: Spojnosc brandingu (PL vs EN)

### 4a. branding.ts
- `appName: 'Competency Matrix'` -> `appName: 'Matryca Kompetencji'`

### 4b. index.html
- `<title>Matryca Kompetencji</title>`
- og:title i twitter:title -> "Matryca Kompetencji"
- Usuniecie/wyczyszczenie OG image URL z lovable.dev (usuniecie meta tagow og:image i twitter:image)

### 4c. Index.tsx
- Usuniecie komentarza `{/* Logowanie tymczasowo wylaczone */}` (linia 51)

---

## Etap 5: UX - potwierdzenie i nawigacja

### 5a. AlertDialog przed wyslaniem (Assessment.tsx)
- Import AlertDialog z shadcn/ui
- Stan `showConfirmDialog`
- Przycisk "Zobacz wyniki" otwiera dialog zamiast od razu `handleSubmit`
- Dialog: tytul "Potwierdzenie samooceny", tresc z liczba ocenionych kompetencji, przyciski "Wroc do edycji" / "Zobacz wyniki"

### 5b. Przycisk "Popraw ocene" (Results.tsx)
- Obok przycisku "Start" dodac "Popraw ocene" z ikona ArrowLeft
- Nawigacja do `/assessment/${assessment.departmentId}/${assessment.positionId}/${assessment.seniorityLevel}`

### 5c. Responsywny tekst (PositionSelect.tsx)
- Linia 170: zamiana "z listy po lewej" na dwa span-y:
  - `<span className="hidden lg:inline">z listy po lewej</span>`
  - `<span className="lg:hidden">z listy powyzej</span>`

---

## Etap 6: Bezpieczenstwo i dane mock

### 6a. Fikcyjne emaile (DashboardMockup.tsx)
- Zamiana wszystkich `@appchance.com` na `@example.com` (linie 36-43 + linia 151)

### 6b. URL Google Drive do branding.ts
- Dodanie pola `competencyMatrixUrl` do `branding.ts`
- W Assessment.tsx: import z branding, warunkowe renderowanie Alert (jesli URL pusty - nie wyswietlaj)

### 6c. Stale wartosci mock (DashboardMockup.tsx)
- Zamiana `Math.floor(Math.random() * 20 + 70)` i `Math.floor(Math.random() * 30 + 65)` (linie 236-239) na stale wartosci per dzial (np. 82%, 88%, 75%, 91%, 79%)

---

## Pliki do edycji (podsumowanie)

| Etap | Pliki |
|------|-------|
| 1 | `src/pages/Assessment.tsx`, `src/pages/Results.tsx` |
| 2 | `src/pages/NotFound.tsx` |
| 3 | `src/index.css`, `src/types/competency.ts` |
| 4 | `src/config/branding.ts`, `index.html`, `src/pages/Index.tsx` |
| 5 | `src/pages/Assessment.tsx`, `src/pages/Results.tsx`, `src/pages/PositionSelect.tsx` |
| 6 | `src/pages/DashboardMockup.tsx`, `src/config/branding.ts`, `src/pages/Assessment.tsx` |

