# The Division — Gear Set Tracker

Una app para rastrear el equipamiento confidencial recolectado en **Tom Clancy's The Division**.

## El contexto

En The Division los sets confidenciales (Gear Sets) son el endgame: cada set tiene 6 slots de equipamiento (pecho, máscara, rodilleras, mochila, guantes, pistolera) y completarlos desbloquea bonificaciones progresivas. El problema es que el juego no te muestra de forma clara cuántas piezas tenés de cada tipo dentro de cada confidencial — todo queda mezclado en tu inventario.

Jugando con amigos en desde antes del 2024, necesitábamos saber quién tenía más avanzado cada set para coordinar drops, intercambios y "competir" informalmente por completarlos. Sin esa info clara en el juego, la solución fue construirla.

## Qué hace

- Muestra los 14 sets confidenciales del juego con sus íconos originales
- Permite contar cuántas piezas de cada slot tenés por set (con botones +/−)
- Persiste el progreso en `localStorage` — al cerrar y reabrir la app, el conteo se mantiene
- Modo oscuro con preferencia persistida

## Stack

- React 18 + TypeScript + Vite
- Material UI v5
- Deploy en Vercel

## Demo

[https://the-division-project-navy.vercel.app/](https://the-division-project-navy.vercel.app/)

## Correr localmente

```bash
npm install
npm run dev
```
