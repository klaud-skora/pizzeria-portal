# Dashboard

- strona główna adres: `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login/` -> Login
  - pola na login i hasło
  - guzik do zalogowania (link do dashboard)

# Widok dostępności stolików

- `/tables` -> Tables
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - kaźda kolumna = 1 stolik
    - kaźdy wiersz = 30min
    - ma przypominać widok w kalendarzu Google, gdzie w kolumnach zamiast dni są róźne stoliki
    - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów
- `/tables/booking/:id` -> Table
  - wszystkie informacje dot. rezerwacji
  - umoźliwia edycję i zapisanie zmian
- `/tables/booking/new` -> NewTable
  - analogicznie do powyźej, bez początkowych informacji
- `/tables/events/:id` -> Event
  - analigocznie do powyźej, dla eventów
- `/tables/events/new` -> NewEvent
  - analogicznie do powyźej, dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter` -> Waiter
  - tabela
    - w wierszach stoliki
    - w kolumnach róźne rodzaje inf (status, czas od ostatniej zmiany aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new` -> NewOrder
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
- `/waiter/order/:id` -> Order
  - jak powyźsza

# Widok kuchni

- `/kitchen` -> Kitchen
  - wyświetla listę zamówień w kolejności ich złoźenia
  - lista musi zawierać nr stolika lub zamówienia zdalnego
  - pełne informacje dot. zamówionych dań
- na liście musi być moźliwość oznaczenia zamówienia jako zrealizowane
