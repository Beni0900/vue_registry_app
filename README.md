# Vue 3 Projekt - Projektkezelő alkalmazás

Ez a projekt egy egyszerű, mégis funkcionalitásában átfogó Vue 3 alkalmazás projektkezeléshez.  
Tartalmaz projekt hozzáadást, szerkesztést, törlést, validációt és szűrést.

---

## Projekt struktúra

src/  
├─ assets/ # Stílusok, képek, statikus fájlok  
├─ components/ # Újrafelhasználható Vue komponensek (pl. TextInput.vue, ProjectTable.vue)  
├─ composables/ # Újrafelhasználható logikai egységek (pl. useProject.js, useValidation.js, useFilters.js)  
├─ model/ # Model osztályok (pl. Project.js)  
├─ utils/ # Segédfüggvények (pl. dátum és valuta formázás)  
├─ views/ # Oldalakat megjelenítő komponensek  
├─ App.vue # Fő komponens  
└─ main.js # Alkalmazás belépési pontja

---

## Főbb funkciók

- Projekt létrehozása, szerkesztése, törlése
- Űrlap validáció hibakezeléssel
- Projektek szűrése kereső alapján
- Állapotkezelés Pinia store segítségével
- Külön komponensekre bontva, könnyen karbantartható

---

## Telepítés és indítás

Függőségek telepítése:

- npm install

Fejlesztői szerver indítása:

- npm run dev

Projekt buildelése (production):

- npm run build

Build szerver indítása (pl. statikus szerver):

- npm run serve

---

## Használt technológiák

- Vue.js 3 (Composition API)
- Vue Router 4
- Pinia (állapotkezelés)
- Vite (fejlesztői környezet)
- TailwindCSS és egyéni CSS

---
