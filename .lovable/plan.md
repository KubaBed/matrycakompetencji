

# Plan: Usunięcie dwóch kompetencji z Backend Developer

## Zmiana

W pliku `src/data/competencies/web.ts` usunąć 6 linii z wymagań Backend Developer:

- **Linie 245-247**: `web-ai` (AI w codziennej pracy) — Junior, Mid, Senior
- Backend Developer nie ma `web-frontend` w wymaganiach, więc ta kompetencja już nie istnieje w jego profilu. Nic do usuwania.

## Weryfikacja

Po sprawdzeniu kodu: Backend Developer **nie posiada** wymagań dla `web-frontend` — ta kompetencja jest przypisana tylko do Fullstack i Frontend Developer. Jedyna zmiana to usunięcie 3 linii `web-ai` (linie 245-247).

## Plik do edycji

| Plik | Zmiana |
|------|--------|
| `src/data/competencies/web.ts` | Usunięcie linii 245-247 (`req('backend-developer', *, 'web-ai', *)`) |

