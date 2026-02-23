

# Plan: Aktualizacja kategorii kompetencji, usunięcie Sales i Python Developer, naprawa PDF

## 1. Zmiana kategorii "AI" na twarda + przeniesienie specjalistycznych do twardych

We wszystkich plikach kompetencji (web, mobile, qa, pm):
- Kompetencja "Wykorzystanie sztucznej inteligencji (AI)..." zmiana `category: 'soft'` na `category: 'hard'`
- Kompetencje z `category: 'specialized'` zmiana na `category: 'hard'`:
  - WEB: `web-cloud`, `web-security`
  - MOBILE: `platform-ios`, `platform-android`
  - QA: `qa-domain`, `qa-security`
  - PM: brak specjalistycznych - bez zmian

## 2. Usunięcie kategorii 'specialized' z systemu

- `src/types/competency.ts`: Zmiana `CompetencyCategory = 'hard' | 'soft' | 'specialized'` na `'hard' | 'soft'`
- Usunięcie wpisu `specialized` z `categoryConfig`
- `src/pages/Assessment.tsx`: Zmiana `grid-cols-3` na `grid-cols-2` w TabsList (bo teraz sa tylko 2 kategorie)

## 3. Usunięcie dzialu Sales

- `src/data/departments.ts`: Usunięcie wpisu Sales z tablicy `departments`, usunięcie importu `salesIcon`
- `src/types/competency.ts`: Zmiana `DepartmentId = 'sales' | 'pm' | 'mobile' | 'web' | 'qa'` na `'pm' | 'mobile' | 'web' | 'qa'`
- `src/data/competencies/index.ts`: Usunięcie importow i wpisow `sales` z `competenciesByDepartment` i `requirementsByDepartment`, usunięcie re-exportu
- Plik `src/data/competencies/sales.ts` moze zostac, ale nie bedzie nigdzie uzywany

## 4. Usunięcie Python Developer z dzialu Web

- `src/data/departments.ts`: Usunięcie wpisu `python-developer` z listy positions dla 'web'
- `src/data/competencies/web.ts`: Usunięcie requirements dla `python-developer` (linie 219-223), usunięcie 'lead' z typowania `genReqs` (bo zostaja tylko j/m/s)

## 5. Naprawa PDF - polskie znaki

Problem widoczny na screenach: jsPDF uzywa czcionki `helvetica` ktora nie wspiera polskich znakow (ogonki: ą, ę, ś, ć, ź, ż, ó, ł, ń). Tekst renderuje sie jako `&a&d&a...` zamiast poprawnych liter.

Rozwiazanie: Zamiana polskich znakow diakrytycznych na ich ASCII odpowiedniki w tekscie PDF. To podejscie jest prostsze niz osadzanie czcionki i juz czesciowo stosowane (np. `Podsumowanie wynikow` zamiast `wyników`).

Zmiany w `src/utils/pdfGenerator.ts`:
- Dodanie funkcji `removeDiacritics(text: string)` ktora zamienia polskie znaki na ASCII (ą->a, ę->e, ś->s, ć->c, ź->z, ż->z, ó->o, ł->l, ń->n)
- Uzycie tej funkcji we wszystkich miejscach gdzie tekst trafia do PDF: nazwy kompetencji, kategorie, opisy, nazwy w tabeli

## Pliki do edycji

| Plik | Zmiana |
|------|--------|
| `src/types/competency.ts` | Usunięcie 'sales' z DepartmentId, 'specialized' z CompetencyCategory i categoryConfig |
| `src/data/departments.ts` | Usunięcie Sales, usunięcie Python Developer |
| `src/data/competencies/index.ts` | Usunięcie importow i wpisow sales |
| `src/data/competencies/web.ts` | AI -> hard, specialized -> hard, usunięcie python-developer requirements |
| `src/data/competencies/mobile.ts` | AI -> hard, specialized -> hard |
| `src/data/competencies/qa.ts` | AI -> hard, specialized -> hard |
| `src/data/competencies/pm.ts` | AI -> hard |
| `src/pages/Assessment.tsx` | grid-cols-3 -> grid-cols-2 |
| `src/utils/pdfGenerator.ts` | Funkcja removeDiacritics + zastosowanie |

