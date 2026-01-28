

# 🎯 Competency Matrix Pro - Plan Aplikacji dla Appchance

## Cel aplikacji
Interaktywna aplikacja webowa, która zamienia skomplikowane macierze kompetencji Excel w przystępne, wizualne narzędzie do:
- Przeglądania wymagań kompetencyjnych dla każdego działu i poziomu
- Przeprowadzania samooceny przez pracowników
- Generowania spersonalizowanych raportów PDF ze ścieżką rozwoju
- Przeglądania wyników zespołu przez HR i managerów

---

## 🎨 Design i branding

**Kolorystyka Appchance:**
- Główny kolor: Czerwony/Magenta (#E31E4A)
- Tło: Jasne, białe z subtelnymi szarościami
- Akcenty: Ciemny granat dla tekstu
- Styl: Nowoczesny, profesjonalny, przyjazny

**Ilustracje działów (Pixel Art):**
- Sales → Postać handlowca z telefonem/laptopem
- PM (Project Manager) → Postać z tablicą kanban
- Mobile Developer → Postać przy smartfonie z kodem
- Web Developer → Postać przy ekranie z przeglądarką
- QA → Postać z lupą i checklistą

---

## 📱 Struktura aplikacji

### Ekran 1: Strona powitalna
- Logo Appchance + nazwa "Competency Matrix"
- Hasło powitalne: "Odkryj swoją ścieżkę rozwoju"
- Dwie opcje:
  - **"Rozpocznij anonimowo"** → Pełna funkcjonalność, bez zapisu wyników
  - **"Zaloguj się"** → Email/hasło, wyniki zapisywane w systemie

### Ekran 2: Wybór działu
- Karty z pixel-artowymi ilustracjami dla każdego działu:
  - Sales
  - Project Management
  - Mobile Development
  - Web Development
  - Quality Assurance
- Po najechaniu: krótki opis zespołu

### Ekran 3: Wybór stanowiska i poziomu
- Lista stanowisk w wybranym dziale (np. dla Mobile: iOS Developer, Android Developer, Flutter Developer)
- Poziomy seniority: Junior → Mid → Senior → Lead/Expert
- Wizualizacja ścieżki kariery jako "drabina"

### Ekran 4: Przeglądanie kompetencji
- Zakładki z kategoriami kompetencji (Twarde, Miękkie, Specjalistyczne)
- Dla każdej kompetencji:
  - Nazwa i opis
  - Wymagany poziom dla aktualnego stanowiska
  - Co trzeba rozwinąć na następny poziom (wizualne porównanie)

### Ekran 5: Samoocena
- Interaktywny formularz dla każdej kompetencji
- Skala oceny: 1-5 (z opisem co oznacza każdy poziom)
- Pasek postępu pokazujący ile kompetencji oceniono
- Możliwość zapisania częściowego postępu (dla zalogowanych)

### Ekran 6: Wyniki i raport
- Wizualne podsumowanie wyników (wykres radarowy/pajęczyna)
- Porównanie: Twoja ocena vs wymagania na stanowisko
- Luki kompetencyjne podświetlone
- Rekomendacje rozwojowe z priorytetyzacją
- Przycisk: **"Pobierz PDF"**

---

## 📊 Dashboard HR/Manager

### Dostęp według roli:
- **HR** → widzi wszystkich pracowników i wszystkie działy
- **Manager** → widzi tylko swój dział/zespół

### Funkcjonalności:
- Lista pracowników z ostatnią datą samooceny
- Filtrowanie po dziale, stanowisku, poziomie
- Widok zbiorczy kompetencji zespołu (heatmapa)
- Eksport raportów do PDF/Excel
- Porównanie wyników pracownika w czasie

---

## 📄 Raport PDF (pełny)

Zawartość raportu:
1. **Strona tytułowa** - imię, stanowisko, data, logo Appchance
2. **Podsumowanie** - ocena ogólna, poziom dopasowania do stanowiska
3. **Wyniki szczegółowe** - każda kompetencja z oceną i wymaganiem
4. **Wykres radarowy** - wizualizacja profilu kompetencji
5. **Analiza luk** - gdzie są największe różnice
6. **Ścieżka rozwoju** - konkretne rekomendacje co rozwijać
7. **Porównanie z następnym poziomem** - co trzeba osiągnąć żeby awansować

---

## 🗂️ Dane kompetencji (statyczne)

Wszystkie macierze z Exceli zostaną przekonwertowane na strukturę TypeScript:
- Łatwe do edycji bezpośrednio w kodzie
- Organizacja: `/src/data/competencies/sales.ts`, `pm.ts`, `mobile.ts`, `web.ts`, `qa.ts`
- Typy TypeScript zapewniające spójność danych

---

## 🔐 System użytkowników

### Role:
- **Pracownik** - może robić samoocenę, przeglądać swoje wyniki
- **Manager** - widzi wyniki swojego zespołu
- **HR Admin** - widzi wszystko, może zarządzać użytkownikami

### Funkcje logowania:
- Email + hasło
- Opcja "Zapamiętaj mnie"
- Reset hasła przez email

---

## 🚀 Technologia (Lovable Cloud)

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Lovable Cloud (Supabase)
- **Baza danych**: PostgreSQL z tabelami users, profiles, user_roles, assessments
- **Autentykacja**: Supabase Auth
- **PDF**: Generowanie po stronie klienta (react-pdf lub jspdf)
- **Ilustracje**: Wygenerowane przez AI w stylu Pixel Art

---

## 📋 Etapy implementacji

1. **Konfiguracja projektu i design system** - kolory Appchance, komponenty bazowe
2. **Struktura danych** - konwersja Exceli do TypeScript, typy
3. **Strona powitalna i wybór działu** - z ilustracjami pixel art
4. **Przeglądanie kompetencji** - szczegółowy widok macierzy
5. **Moduł samooceny** - interaktywny formularz
6. **Wyniki i generowanie PDF** - wizualizacje, eksport
7. **System logowania** - Lovable Cloud, role użytkowników
8. **Dashboard HR/Manager** - widok zbiorczy, filtry
9. **Testy i polish** - responsywność, UX

---

## 🎯 Przygotowanie do White-Label

Struktura aplikacji będzie przygotowana pod przyszłe dostosowanie:
- Kolory i logo w jednym pliku konfiguracyjnym
- Dane kompetencji jako osobne moduły
- Łatwa zmiana brandingu bez przebudowy całej aplikacji

