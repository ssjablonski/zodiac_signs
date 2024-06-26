# zodiac_signs

## Sebastian Jabłoński

## Opis projektu

Projekt "zodiac_signs" to aplikacja webowa, która pozwala użytkownikom sprawdzić informacje na temat swojego znaku zodiaku. Aplikacja została zbudowana z wykorzystaniem technologii chmurowych, w szczególności Kubernetes, co zapewnia jej skalowalność i elastyczność w zarządzaniu zasobami. Struktura projektu obejmuje oddzielne katalogi dla klienta i serwera, co sugeruje architekturę opartą na mikrousługach. Klient, zaimplementowany w JavaScript z użyciem React, oferuje prosty interfejs użytkownika z nawigacją między stroną główną a opisami znaków zodiaku. Serwer, którego szczegóły nie są w pełni opisane, prawdopodobnie obsługuje logikę aplikacji, w tym dostęp do danych zodiakalnych. Projekt zawiera również definicje zasobów Kubernetes, co wskazuje na zamiar uruchomienia aplikacji w środowisku chmurowym. Dokumentacja projektu, zawarta w pliku main.tex, opisuje wymagania dotyczące architektury, zarządzania, skalowalności i infrastruktury sieciowej, co podkreśla kompleksowe podejście do projektowania i wdrażania aplikacji w chmurze.

## Jak odpalic aplikacje

Znajdując się w głównym folderze projektu wpisujemy

`kubectl apply -f k8s`

a następnie w przeglądarce aplikajca jest dostępna pod `localhost`
