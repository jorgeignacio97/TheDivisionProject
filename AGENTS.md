# AGENTS.md

## Stack (actual)
- React 18 · Vite · TypeScript (strict)
- UI: Material UI (MUI) v5 + Emotion
- Estado: useState + localStorage (persistencia manual)
- Deploy: Vercel · Dominio: https://the-division-project-navy.vercel.app/

## Comandos
- install: npm install
- dev: npm run dev
- build: npm run build
- lint: npm run lint

## Estructura
- src/components/ — componentes de UI
- src/assets/icons/ — íconos SVG de cada set y slot de equipamiento

## Componentes
- App.tsx — raíz, tema MUI (dark/light), toggle modo oscuro, persiste preferencia en localStorage
- EquipamientoLista.tsx — lista estática de los 14 sets confidenciales, renderiza una grilla de EquipamientoSet
- EquipamientoSet.tsx — card de un set; maneja contadores por slot (chest, mask, kneePads, backpack, gloves, holster); persiste en localStorage con el nombre del set como clave
- EquipamientoItem.tsx — fila de un slot individual con botones +/−

## Reglas del proyecto
- `type` sobre `interface`
- `Record<K, V>` en vez de `{ [key: string]: V }`
- No anotar tipos que TypeScript puede inferir (ej: callbacks de setState)
- Temas MUI dentro de `useMemo` cuando dependen de estado
- Sin dependencias nuevas sin justificación — el proyecto es intencionalmente simple
