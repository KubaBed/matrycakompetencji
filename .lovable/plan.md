
# Plan: Wyłączenie logowania + Poprawa PDF z logo

## Podsumowanie zmian

Wdrażamy 2 poprawki:
1. **Tymczasowe wyłączenie logowania** - ukrycie lub wyszarzenie przycisków logowania
2. **Poprawa PDF** - naprawienie formatowania czcionek i dodanie logo Appchance

---

## Zmiana 1: Wyłączenie funkcji logowania

### Problem
Aplikacja ma przyciski "Zaloguj się", które kierują do strony `/login`, która nie istnieje. Bez bazy danych ta funkcja nie działa.

### Rozwiązanie
Całkowite usunięcie opcji logowania z MVP. Zostawiam tylko tryb anonimowy.

### Zakres zmian
**Plik: `src/pages/Index.tsx`**

1. Usunięcie przycisku "Zaloguj się" z headera (linie 55-58)
2. Usunięcie sekcji "lub Zaloguj się, żeby zapisać wyniki" z przycisków akcji (linie 107-117)
3. Uproszczenie handleContinue - usunięcie logiki dla trybu 'login'

### Rezultat
Użytkownik widzi tylko przycisk "Rozpocznij anonimowo" bez rozpraszających opcji logowania.

---

## Zmiana 2: Poprawa PDF - formatowanie i logo

### Problemy z obecnym PDF
1. **Emoji** (💪, 📈) - mogą nie renderować się poprawnie w PDF
2. **Brak logo** - header zawiera tylko tekst, brakuje brandingu wizualnego
3. **Rozjeżdżające się czcionki** - potencjalnie związane z używaniem polskich znaków

### Rozwiązanie

#### 2a: Usunięcie emoji
Zamiana emoji na czytelne tekstowe nagłówki:
- `💪 Mocne strony` → `Mocne strony`
- `📈 Obszary do rozwoju` → `Obszary do rozwoju`

#### 2b: Dodanie logo Appchance
- Skopiowanie pliku SVG do `src/assets/appchance-logo.svg`
- Konwersja SVG na format Base64 dla jsPDF
- Dodanie logo obok tekstu "Appchance" w headerze PDF
- Logo będzie wyświetlane:
  - Na stronie tytułowej (duże, wycentrowane)
  - W nagłówkach kolejnych stron (małe, w lewym rogu)

#### 2c: Poprawa czytelności
- Zwiększenie odstępów między sekcjami
- Lepsze wyrównanie tekstu
- Upewnienie się, że wszystkie elementy mieszczą się w obszarze drukowania

### Zakres zmian

**Nowy plik: `src/assets/appchance-logo.svg`**
- Kopia logo z user-uploads

**Plik: `src/utils/pdfGenerator.ts`**

1. Import logo jako Base64 (lub osadzenie inline)
2. Dodanie funkcji do renderowania logo SVG w PDF
3. Modyfikacja strony tytułowej - logo nad nazwą firmy
4. Modyfikacja nagłówków stron - małe logo w rogu
5. Usunięcie emoji z nagłówków sekcji
6. Optymalizacja układu dla lepszej czytelności

---

## Szczegóły techniczne

### jsPDF i obrazy SVG

jsPDF nie obsługuje bezpośrednio SVG. Mamy dwie opcje:
1. **Konwersja SVG → PNG** (preferowane) - lepsza jakość i kompatybilność
2. **SVG jako ścieżki** - ręczne rysowanie kształtów

Użyjemy podejścia z osadzeniem logo jako Base64 PNG lub narysowaniem kształtu logo bezpośrednio używając jsPDF.

Ponieważ logo Appchance to prosty kształt, możemy narysować go bezpośrednio:
- Zewnętrzny wielokąt w kolorze #E41844
- Wewnętrzne koło z literą "a"

Alternatywnie: osadzenie logo jako data URI.

### Kolejność implementacji
1. Usunięcie przycisków logowania z Index.tsx
2. Skopiowanie logo do assets
3. Modyfikacja pdfGenerator.ts z logo i poprawkami formatowania
