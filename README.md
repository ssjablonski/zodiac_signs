# zodiac_signs

## Sebastian Jabłoński

## Opis projektu

Projekt "Zodiac Signs" to aplikacja webowa umożliwiająca użytkownikom sprawdzenie swojego znaku zodiaku na podstawie daty urodzenia. Został zrealizowany z wykorzystaniem technologii chmurowych, głównie Kubernetes, co zapewnia skalowalność i elastyczność w zarządzaniu zasobami. Aplikacja opiera się na architekturze mikroserwisowej, z oddzielnymi katalogami dla klienta i serwera. Frontend, zaimplementowany w JavaScript z użyciem React, oferuje prosty interfejs użytkownika. Backend, zrealizowany jako serwer Node.js, odpowiada za przetwarzanie logiki biznesowej i obsługę zapytań. Projekt wykorzystuje również bazy danych Redis i PostgreSQL do przechowywania danych. Architektura sieciowa opiera się na klastrze Kubernetes, integrującym różne komponenty aplikacji i zarządzającym komunikacją między nimi za pomocą Serwisów ClusterIP oraz Ingress Controller, co zapewnia skalowalną i bezpieczną infrastrukturę. Projekt został szczegółowo opisany w dokumentacji main.tex, zawierającej informacje o architekturze, zarządzaniu, skalowalności i infrastrukturze sieciowej.

## Jak odpalic aplikacje

Znajdując się w głównym folderze projektu wpisujemy

`kubectl apply -f k8s`

a następnie w przeglądarce aplikajca jest dostępna pod `localhost`
