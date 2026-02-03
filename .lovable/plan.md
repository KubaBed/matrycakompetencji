
# Plan: Wdrożenie feedbacku UX - eliminacja bias i ulepszone wyniki

## Podsumowanie zmian

Wdrażamy 4 zmiany zgłoszone w feedbacku:
- **2a**: Ukrycie wymaganych poziomów podczas samooceny
- **2b**: Zmiana kolorów z zielono-czerwonych na neutralne
- **4**: Dodanie drugiego wykresu radarowego (porównanie z kolejnym poziomem)
- **5**: Link do szczegółowej macierzy na Google Drive

---

## Zmiana 2a: Ukrycie wskaźnika "Wymagane"

### Problem
Podczas samooceny użytkownik widzi wymagany poziom przy każdej kompetencji. To może wpływać na jego ocenę - świadomie lub nieświadomie dostosowuje odpowiedzi do oczekiwań.

### Rozwiązanie
Usunięcie bloku "Wymagane: X" z widoku karty kompetencji w formularzu samooceny. Użytkownik zobaczy wymagane poziomy dopiero na stronie wyników.

### Zakres zmian
- **Plik**: `src/pages/Assessment.tsx`
- Usunięcie sekcji wyświetlającej "Wymagane" (linie 201-212)

---

## Zmiana 2b: Neutralna kolorystyka poziomów

### Problem
Obecna kolorystyka (pomarańczowy → żółty → zielony → niebieski → fioletowy) sugeruje, że niższe poziomy są "gorsze", a wyższe "lepsze". To może wpływać na uczciwe odpowiedzi użytkowników.

### Rozwiązanie
Zmiana na neutralną paletę kolorów (odcienie niebieskiego i szarości), która nie wartościuje poziomów.

### Nowa paleta kolorów
| Poziom | Obecnie | Po zmianie |
|--------|---------|------------|
| 1 | pomarańczowy | szary |
| 2 | żółty | slate (ciemny szary) |
| 3 | zielony | niebieski |
| 4 | niebieski | indygo |
| 5 | fioletowy | fioletowy (neutralny) |

### Zakres zmian
- **Plik**: `src/types/competency.ts`
- Aktualizacja `competencyLevelConfig` z nowymi neutralnymi kolorami

---

## Zmiana 4: Drugi wykres radarowy - porównanie z kolejnym poziomem

### Problem
Obecnie na stronie wyników jest tylko jeden wykres radarowy porównujący samoocenę z wymaganiami obecnej roli. Brakuje perspektywy rozwojowej - co potrzebuję, żeby awansować?

### Rozwiązanie
Dodanie drugiego wykresu radarowego pokazującego:
- Samoocenę użytkownika
- Wymagania następnego poziomu seniorności (jeśli istnieje)

### Logika "następnego poziomu"
```text
junior → mid → senior → lead → expert
```

System sprawdzi, czy dla danego stanowiska istnieje następny poziom seniorności:
- Jeśli tak: wyświetli drugi wykres z porównaniem
- Jeśli nie (np. użytkownik jest już na poziomie "lead" lub "expert" dla danej roli): wyświetli komunikat informacyjny

### Zakres zmian
- **Plik**: `src/pages/Results.tsx`
- Dodanie logiki pobierania wymagań dla następnego poziomu
- Dodanie drugiego komponentu RadarChart
- Sekcja "Ścieżka rozwoju" z wykresem i opisem

---

## Zmiana 5: Link do szczegółowej macierzy Google Drive

### Problem
Użytkownicy mogą potrzebować bardziej szczegółowych opisów kompetencji, żeby podjąć decyzję o swoim poziomie.

### Rozwiązanie
Dodanie widocznego linku/przycisku na początku formularza samooceny, który kieruje do dokumentu Google Drive z pełną macierzą kompetencji.

### Zakres zmian
- **Plik**: `src/pages/Assessment.tsx`
- Dodanie komponentu Alert lub Card z linkiem
- Link: `https://drive.google.com/drive/folders/13Yq3cDAP0AR2lyrjOTKE2MPL_pd6KQ4_`

---

## Szczegóły techniczne

### Nowe zależności
Brak - wykorzystujemy istniejące komponenty (Alert, Card, lucide-react icons).

### Zmiany w plikach

**1. `src/types/competency.ts`**
- Zmiana wartości `color` w `competencyLevelConfig`

**2. `src/pages/Assessment.tsx`**
- Usunięcie bloku wyświetlającego "Wymagane: X"
- Dodanie sekcji z linkiem do Google Drive (przed zakładkami kategorii)

**3. `src/pages/Results.tsx`**
- Nowy hook `useMemo` do obliczenia następnego poziomu seniorności
- Nowy hook `useMemo` do pobrania wymagań następnego poziomu
- Dodanie drugiego `RadarChart` w nowej sekcji "Ścieżka rozwoju"
- Warunkowe renderowanie (tylko gdy następny poziom istnieje)

### Kolejność implementacji
1. Zmiana kolorów (2b) - najprostsza zmiana
2. Usunięcie wskaźnika wymagań (2a)
3. Dodanie linku do macierzy (5)
4. Dodanie drugiego wykresu radarowego (4) - najbardziej złożona zmiana

