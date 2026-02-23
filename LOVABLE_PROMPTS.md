# Prompty do Lovable - Poprawki Matrycy Kompetencji

Poniższe prompty należy wklejać do Lovable **po kolei, jeden na raz**.
Po każdym prompcie zweryfikuj zmiany w preview zanim przejdziesz do następnego.

---

## PROMPT 1: Krytyczne bugi - walidacja i odporność na błędy

```
Napraw następujące krytyczne bugi:

1. **Assessment.tsx - auto-save do sessionStorage**: Zapisuj stan `assessments` do sessionStorage przy każdej zmianie oceny (w handleRating), a przy montowaniu komponentu odczytuj zapisane oceny z sessionStorage. Użyj klucza `assessment-draft-{departmentId}-{positionId}-{level}`. Dzięki temu użytkownik nie straci danych przy odświeżeniu strony. Wyczyść draft po pomyślnym submit.

2. **Assessment.tsx - walidacja parametrów URL**: Dodaj walidację parametru `level` z URL - sprawdź czy jest jednym z: 'junior', 'mid', 'senior', 'lead', 'expert'. Jeśli nie, przekieruj na stronę główną z navigate('/'). Zrób to samo jeśli `department` jest null lub `position` nie istnieje - zamiast `return null` przekieruj na '/' z komunikatem toast (użyj istniejącego Sonner) "Nieprawidłowy link. Spróbuj ponownie."

3. **Results.tsx - bezpieczny JSON.parse**: Owiń JSON.parse w try/catch. Jeśli dane są uszkodzone, wyczyść sessionStorage, pokaż toast z komunikatem "Nie udało się odczytać wyników. Spróbuj ponownie." i przekieruj na '/'.

4. **Assessment.tsx - navigate(-1)**: Zmień `navigate(-1)` w przycisku "Powrót" na jawną ścieżkę `navigate(`/assessment/${departmentId}`)` żeby zawsze wrócić do wyboru stanowiska.
```

---

## PROMPT 2: Strona 404 i spójność językowa

```
Napraw stronę NotFound.tsx:

1. Zmień teksty na polskie:
   - "Oops! Page not found" → "Ups! Strona nie została znaleziona"
   - "Return to Home" → "Wróć do strony głównej"

2. Dodaj ikonę i ładniejszy design - użyj komponentu Button zamiast zwykłego <a> i dodaj ikonę Home z lucide-react, żeby było spójne z resztą aplikacji.

3. Usuń console.error z useEffect - to nie powinno być w produkcji.
```

---

## PROMPT 3: Niespójność kolorów i nieużywany kod CSS

```
W pliku src/index.css usuń nieużywane klasy CSS .competency-level-1 do .competency-level-5 (linie z @apply bg-orange-500 itd.) - te klasy nigdzie nie są importowane w komponentach. Aplikacja korzysta z competencyLevelConfig z types/competency.ts.

Również w types/competency.ts zmień kolory w competencyLevelConfig na bardziej wyraziste i rozróżnialne:
- level 1: zostaw 'bg-gray-500' (Początkujący)
- level 2: zmień 'bg-slate-600' na 'bg-amber-500' (Rozwijający się - ciepły kolor)
- level 3: zmień 'bg-blue-500' na 'bg-emerald-500' (Kompetentny - zieleń)
- level 4: zostaw 'bg-indigo-500' (Zaawansowany)
- level 5: zostaw 'bg-violet-500' (Ekspert)

Dzięki temu kolory będą łatwiej rozróżnialne na wykresach i w przyciskach ocen.
```

---

## PROMPT 4: Spójność brandingu (PL vs EN)

```
Napraw niespójność językową w brandingu:

1. W src/config/branding.ts zmień:
   - appName: 'Competency Matrix' → appName: 'Matryca Kompetencji'

2. W index.html zmień:
   - <title>Competency Matrix</title> → <title>Matryca Kompetencji</title>
   - og:title i twitter:title też zmień na "Matryca Kompetencji"

3. W index.html zamień OG image URL z lovable.dev na pusty string lub usuń te meta tagi całkowicie (obecny URL wskazuje na zewnętrzny serwis lovable.dev który może przestać działać).

4. W src/pages/Index.tsx linia 51 - usuń komentarz "Logowanie tymczasowo wyłączone" - to wewnętrzna notatka developerska.
```

---

## PROMPT 5: UX - potwierdzenie przed wysłaniem i lepsza nawigacja

```
Popraw UX formularza Assessment:

1. **Ekran potwierdzenia przed wysłaniem wyników**: Zamiast od razu nawigować do /results po kliknięciu "Zobacz wyniki", pokaż AlertDialog (z shadcn/ui) z podsumowaniem:
   - Tytuł: "Potwierdzenie samooceny"
   - Treść: "Czy na pewno chcesz zakończyć samoocenę? Oceniłeś/aś X kompetencji."
   - Przyciski: "Wróć do edycji" (variant outline) i "Zobacz wyniki" (variant default)
   - Dopiero kliknięcie "Zobacz wyniki" w dialogu powinno wywołać handleSubmit

2. **Przycisk "Popraw ocenę" na stronie Results**: Na stronie Results.tsx, obok przycisku "Wróć do strony głównej", dodaj przycisk "Popraw ocenę" z ikoną ArrowLeft, który nawiguje z powrotem do formularza assessment z zachowanymi danymi w sessionStorage. Użyj navigate(`/assessment/${assessment.departmentId}/${assessment.positionId}/${assessment.seniorityLevel}`).

3. **Responsywny tekst w PositionSelect**: Zmień tekst "Najpierw wybierz stanowisko z listy po lewej" na "Najpierw wybierz stanowisko z listy powyżej" gdy ekran jest mniejszy niż lg breakpoint. Możesz użyć dwóch <span> z klasami hidden/block lg:block/lg:hidden.
```

---

## PROMPT 6: Bezpieczeństwo i czyszczenie danych mock

```
Popraw kwestie bezpieczeństwa:

1. W src/pages/DashboardMockup.tsx zamień prawdziwe wzorce emaili na czysto fikcyjne:
   - 'anna.k@appchance.com' → 'anna.k@example.com'
   - 'piotr.n@appchance.com' → 'piotr.n@example.com'
   - 'maria.w@appchance.com' → 'maria.w@example.com'
   - 'tomasz.b@appchance.com' → 'tomasz.b@example.com'
   - 'kasia.l@appchance.com' → 'kasia.l@example.com'
   Zrób to dla wszystkich emaili w pliku.

2. Zamień link do Google Drive w Assessment.tsx:
   - Przenieś URL "https://drive.google.com/drive/folders/13Yq3cDAP0AR2lyrjOTKE2MPL_pd6KQ4_" do pliku branding.ts jako nowe pole `competencyMatrixUrl: string`
   - W Assessment.tsx importuj z branding i użyj branding.competencyMatrixUrl
   - Jeśli URL jest pusty string, nie wyświetlaj całego komponentu Alert z linkiem

3. W DashboardMockup.tsx: zamień losowe Math.random() na stałe wartości mock (np. hardcoded 78%, 85%, 92% itd.) żeby UI nie skakał przy re-renderach.
```

---

## PROMPT 7: PDF - polskie znaki (opcjonalne, złożone)

```
W src/utils/pdfGenerator.ts napraw obsługę polskich znaków w PDF:

Obecne rozwiązanie pomija polskie znaki diakrytyczne (ą, ę, ś, ć, ź, ż, ó, ł, ń) bo jsPDF z domyślnym fontem helvetica ich nie obsługuje.

Dodaj obsługę polskich znaków przez transliterację - stwórz funkcję pomocniczą `removeDiacritics(text: string): string` która zamieni:
- ą→a, ć→c, ę→e, ł→l, ń→n, ó→o, ś→s, ź→z, ż→z
- Ą→A, Ć→C, Ę→E, Ł→L, Ń→N, Ó→O, Ś→S, Ź→Z, Ż→Z

Użyj tej funkcji na WSZYSTKICH tekstach przed przekazaniem do doc.text() i w danych tabeli. Dzięki temu zamiast brakujących znaków będą czytelne odpowiedniki ASCII.

Zastosuj tę funkcję również w nazwie pliku PDF (doc.save).
```

---

## PROMPT 8: Zróżnicowane wymagania kompetencji (opcjonalne, duże)

```
Obecna funkcja genReqs() w plikach competency daje KAŻDEJ kompetencji ten sam requiredLevel na danym poziomie seniority. To jest nierealistyczne.

Zmień podejście w src/data/competencies/web.ts:

Zamiast genReqs('frontend-developer', 'junior', 1) dla wszystkich kompetencji, stwórz jawne tablice requirements z różnymi poziomami. Przykład dla Frontend Developer:

Junior: frontend=1, backend=1, databases=1, testing=1, problemsolving=1, ai=1, communication=1, teamwork=1, independence=1, work-org=1, experience=1, flexibility=1, cloud=1, security=1

Mid: frontend=3, backend=2, databases=2, testing=2, problemsolving=2, ai=2, communication=2, teamwork=2, independence=2, work-org=2, experience=2, flexibility=2, cloud=1, security=1

Senior: frontend=4, backend=3, databases=3, testing=3, problemsolving=3, ai=3, communication=3, teamwork=3, independence=3, work-org=3, experience=3, flexibility=3, cloud=2, security=2

Zachowaj helper function ale z mapą competencyId → level zamiast jednego poziomu dla wszystkich. Zrób to samo dla pozostałych pozycji w web.ts.

NIE zmieniaj jeszcze innych plików (mobile, sales, pm, qa) - zrobimy to w kolejnym kroku.
```

---

## Kolejność wdrażania

| Priorytet | Prompt | Opis |
|-----------|--------|------|
| **P0** | Prompt 1 | Krytyczne bugi |
| **P0** | Prompt 7 | PDF polskie znaki |
| **P1** | Prompt 2 | Strona 404 |
| **P1** | Prompt 3 | Kolory |
| **P1** | Prompt 4 | Branding PL |
| **P1** | Prompt 5 | UX potwierdzenie |
| **P2** | Prompt 6 | Bezpieczeństwo |
| **P3** | Prompt 8 | Zróżnicowane wymagania |

Prompty 1-6 są bezpieczne i niezależne od siebie.
Prompt 7 (PDF) jest prosty ale warto przetestować wygenerowany PDF.
Prompt 8 (wymagania) jest największą zmianą i wymaga manualnej weryfikacji danych.
