# An application that calculates the best price for the customer
## Tech: React.js, TypeScript
## Run "npm run dev" to start json-server and dev server
## Goal: Create an application and design a database following the rules and the prices below

### Rules:
- Price lists: 2023, 2024, 2025
- Products: Internet, Telewizja, Abonament telefoniczny, Dekoder 4K
- Cannot select a "Dekoder 4K" if "Telewizja" is not selected
- Each product can only be included in one special offer
- The app must calculate the lowest price of selected products, taking into account special offers

### Prices:
- Products:
  - "Internet" costs PLN 39 in 2023, PLN 49 in 2024, PLN 59 in 2025
  - "Telewizja" costs PLN 49 in 2023, PLN 49 in 2024, PLN 59 in 2025
  - "Abonament telefoniczny" costs PLN 29
  - "Dekoder 4K" costs PLN 29 and is available for free in the "Internet + telewizja" special offer
- Special offers:
  - "Internet + Telewizja" costs PLN 79 in 2023, PLN 89 in 2024, PLN 99 in 2025
  - "Internet + Abonament telefoniczny" costs PLN 64
